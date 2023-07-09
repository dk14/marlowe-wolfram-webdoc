import {
    enable as enableDarkMode,
    exportGeneratedCSS as collectCSS,
    setFetchMethod as setFetchMethod
} from 'darkreader';

function addStyle(doc, styleString) {
    const style = doc.createElement('style');
    style.textContent = styleString;
    doc.head.append(style);
}

export const darkify = async (doc) => {
    setFetchMethod(window.fetch)

    enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
    });
    
    const CSS = await collectCSS();
    addStyle(doc, CSS)

}

console.log(window.location.href)