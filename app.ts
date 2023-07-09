import { darkify } from "./util/dr";

declare global {
    interface Window { 
        darkifier: any
    }
}

darkify(window.document)