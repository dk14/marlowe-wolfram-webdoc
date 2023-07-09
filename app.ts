import { darkify } from "./util/dr";
import { processTemplate } from "./util/templates";


interface MarloweContract {
    template: string
    terms: {[key: string]: number}
}

interface SampledRow {
    oracleValue: number,
    alicePayout: number,
    bobPayout: number
}

interface ContractApi {
    state: NotebookState
    injectMarloweContract: (c: MarloweContract, update: boolean) => Promise<void>
    sampleMarloweContract: () => void
    plotMarloweContract?: (sample: SampledRow[], where: HTMLDivElement) => void
}

interface NotebookState {
    isMarloweContractGenerated: boolean
    isMarloweContractSampled: boolean
    samplingInProgress: boolean
    sample?: SampledRow[]
    contract?: MarloweContract
    template?: string
}

declare global {
    interface Window { 
        darkifier: any
        marloweWindow?: () => Promise<Window>
        api: ContractApi
        monaco: any
        tick: number
        activeTicker: number
    }
}



darkify(window.document)

if (window.marloweWindow != undefined) {
    window.marloweWindow().then(mw => {
        
                
        window.api = {
            state: {
                isMarloweContractGenerated: false,
                isMarloweContractSampled: false,
                samplingInProgress: false
            },
            injectMarloweContract: async (c: MarloweContract, updateState = true) => {
                if (updateState) {
                    window.api.state.contract = c
                }
                let marloweHome = mw.document.querySelector(".h-10") as HTMLElement
                marloweHome?.click()
                
                let dontSave = mw.document.querySelector(".mr-medium") as HTMLElement
                dontSave?.click()

                let raw
                if (window.api.state.template == undefined) {
                    raw = await (await fetch(window.location.origin + `/marlowe-wolfram-webdoc/contracts/${c.template}.marlowe`)).text()
                    window.api.state.template = raw

                } else {
                    raw = window.api.state.template

                }

                let goToEditor = mw.document.querySelector('.mr-4') as HTMLElement
                goToEditor?.click()


                let menuBar = mw.document.querySelector(".menu-bar") as HTMLElement
                menuBar?.setAttribute('style', "display: none")

                let meta = mw.document.querySelector(".text-secondary") as HTMLElement
                meta?.setAttribute('style', "display: none")

                let staticAnalysis = mw.document.querySelector(".text-gray-darkest") as HTMLElement
                staticAnalysis?.setAttribute('style', "display: none")
                
                let toInject = processTemplate(c.template, c.terms, raw)

                try {
                    await mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 2].dispose()
                } catch {

                }

                
                await mw.monaco.editor.getModels()[mw.monaco.editor.getModels().length - 1].setValue(toInject)
                
                

                let goToBlocks = mw.document.querySelector('.group')?.querySelector('.btn') as HTMLElement
                goToBlocks?.click()

                let cancel = mw.document.querySelector(".uppercase") as HTMLElement
                cancel?.click()

                window.api.state.isMarloweContractGenerated = true
                window.dispatchEvent(new Event("state"))
            },
            sampleMarloweContract: async () => {
    
                window.api.state.samplingInProgress = true
                window.api.state.sample = []
                for (let i = window.api.state.contract!.terms.minValue; i <= window.api.state.contract!.terms.maxValue; i+=100) {
                    let c = { ...window.api.state.contract!, terms: {...window.api.state.contract!.terms}, }

                    c.terms.minValue = i
                    c.terms.maxValue = i

                    await window.api.injectMarloweContract(c, false)
                    console.log(i)
                    let sendToSimulator = mw.document.querySelectorAll('button')[1] as HTMLElement
                    
                    while(sendToSimulator['disabled']) {
                        console.log("AWAIT")
                        await new Promise(r => setTimeout(r, 100));
                    }
                    //await new Promise(r => setTimeout(r, 3000));
                    sendToSimulator.click()
                    

                    let startSimulation = mw.document.querySelectorAll('button')[2] as HTMLElement
                    startSimulation.click()

                    let aliceDeposit = mw.document.querySelector('.plus-btn') as HTMLElement
                    aliceDeposit?.click()

                    let bobDeposit = mw.document.querySelector('.plus-btn') as HTMLElement
                    bobDeposit?.click()

                    let skipToExercise = mw.document.querySelectorAll('.plus-btn')[2] as HTMLElement
                    skipToExercise?.click()

                    let confirm = mw.document.querySelector('.plus-btn') as HTMLElement
                    confirm?.click()

                    let log = mw.document.querySelector('.grid-cols-description-location') as HTMLElement
                    let extractBobPayoffOpt = /The contract pays ₳ (\d+) from account of Bob to Bob wallet/.exec(log.innerText)?.[1]
                    let extractAlicePayoffOpt = /The contract pays ₳ (\d+) from account of Alice to Alice wallet/.exec(log.innerText)?.[1]
                    let bobPayoff = extractBobPayoffOpt == null || Number.isNaN(parseInt(extractBobPayoffOpt)) ? 0 : parseInt(extractBobPayoffOpt)
                    let alicePayoff = extractAlicePayoffOpt == null || Number.isNaN(parseInt(extractAlicePayoffOpt)) ? 0 : parseInt(extractAlicePayoffOpt)

                    //console.log(window.api.state.sample)
                    window.api.state.sample.push({oracleValue: i, alicePayout: alicePayoff, bobPayout: bobPayoff})
                    let endSimulation = mw.document.querySelectorAll('button')[0] as HTMLElement
                    endSimulation.click()

                }
                
                console.log(window.api.state.sample)
                window.api.state.samplingInProgress = false
                
                window.api.state.isMarloweContractSampled = true
                window.dispatchEvent(new Event("state"))
                //window.api.injectMarloweContract(window.api.state.contract!, false)


            }
        }
        let poll = async () => {
            const original = 'https://api.wolframalpha.com/v1/result?appid=6WU6JX-46EP5U9AGX&i=1%20btc%20to%20usd%20number'
            const url = 'https://corsproxy.io/?' + encodeURIComponent(original)
    
            let response = fetch(url)
            let raw = (await (await response).text())
            let rx = /\d+/g;
            let res = rx.exec(raw)
            if (res != null) window.tick = parseInt(res[0]);

            
            
            window.dispatchEvent(new Event("tick"))
            
        }
        poll()
        setInterval(poll, 10000)

    })


    
}

