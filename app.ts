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
    injectMarloweContract: (c: MarloweContract) => void
    sampleMarloweContract: (w: Window) => void
    plotMarloweContract?: (sample: SampledRow[], where: HTMLDivElement) => void
}

interface NotebookState {
    isMarloweContractGenerated: boolean
    isMarloweContractSampled: boolean
    sample?: SampledRow[]
}

declare global {
    interface Window { 
        darkifier: any
        marloweWindow?: () => Promise<Window>
        api: ContractApi
        monaco: any
    }
}



darkify(window.document)

if (window.marloweWindow != undefined) {
    window.marloweWindow().then(mw => {
        window.api = {
            state: {
                isMarloweContractGenerated: false,
                isMarloweContractSampled: false
            },
            injectMarloweContract: async (c: MarloweContract) => {
                let marloweHome = mw.document.querySelector(".h-10") as HTMLElement
                marloweHome?.click()
                let dontSave = mw.document.querySelector(".mr-medium") as HTMLElement
                dontSave?.click()
                let raw = await (await fetch(window.location.origin + `/marlowe-wolfram-webdoc/contracts/${c.template}.marlowe`)).text()
                let toInject = processTemplate(c.template, c.terms, raw)
                let goToEditor = mw.document.querySelector('.mr-4') as HTMLElement
                goToEditor?.click()
                for (let i in mw.monaco.editor.getModels()) {
                    mw.monaco.editor.getModels()[i].applyEdits([{range: {startLineNumber:0, startColumn: 0, endColumn: 1000, endLineNumber: 1000}, text: toInject}])
                }

                let menuBar = mw.document.querySelector(".menu-bar") as HTMLElement
                menuBar?.setAttribute('style', "display: none")

                let meta = mw.document.querySelector(".text-secondary") as HTMLElement
                meta?.setAttribute('style', "display: none")

                let staticAnalysis = mw.document.querySelector(".text-gray-darkest") as HTMLElement
                staticAnalysis?.setAttribute('style', "display: none")

                let goToBlocks = mw.document.querySelector('.group')?.querySelector('.btn') as HTMLElement
                goToBlocks?.click()
                window.api.state.isMarloweContractGenerated = true
            },
            sampleMarloweContract: () => {
                window.api.state.sample = []
                window.api.state.isMarloweContractSampled = true

            }
        }

    })
    
}
