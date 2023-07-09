import { darkify } from "./util/dr";
import { processTemplate } from "./util/templates";


interface MarloweContract {
    template: string
    contract: {[key: string]: number}
}

interface SampledRow {
    oracleValue: number,
    alicePayout: number,
    bobPayout: number
}

interface ContractApi {
    injectMarloweContract: (c: MarloweContract) => void
    sampleMarloweContract: (w: Window) => SampledRow[]
    plotMarloweContract?: (sample: SampledRow[], where: HTMLDivElement) => void
}

declare global {
    interface Window { 
        darkifier: any
        marloweWindow?: () => Promise<Window>
        api?: ContractApi
        monaco: any
    }
}



darkify(window.document)

if (window.marloweWindow != undefined) {
    let mw = await window.marloweWindow()
    window.api = {
        injectMarloweContract: async (c: MarloweContract) => {
            let raw = await (await fetch(window.location.origin + `/marlowe-wolfram-webdoc/contracts/${c.template}.marlowe`)).text()
            let toInject = processTemplate(c.template, c.contract, raw)
            let goToEditor = mw.document.querySelector('.mr-4') as HTMLElement
            goToEditor?.click()
            window.monaco.editor.getModels()[0]
            .applyEdits([{range: {startLineNumber:0, startColumn: 0, endColumn: 1000, endLineNumber: 1000}, text: toInject}])

        },
        sampleMarloweContract: (w: Window) => {
            return []
        }
    }
}
