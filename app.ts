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
                let raw = await (await fetch(window.location.origin + `/marlowe-wolfram-webdoc/contracts/${c.template}.marlowe`)).text()
                let toInject = processTemplate(c.template, c.terms, raw)
                let goToEditor = mw.document.querySelector('.mr-4') as HTMLElement
                goToEditor?.click()
                mw.monaco.editor.getModels()[0]
                .applyEdits([{range: {startLineNumber:0, startColumn: 0, endColumn: 1000, endLineNumber: 1000}, text: toInject}])
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
