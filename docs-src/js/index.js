
console.log('hello')



const getMarloweWindow = () => {
    document.getElementById('marlowe-frame').contentWindow
    .document.querySelector('body').style+=";background-color: grey"

    return document.getElementById('marlowe-frame').contentWindow
    .document.querySelector('replay-web-page').shadowRoot.querySelector('iframe').contentWindow
    .document.querySelector('replay-app-main').shadowRoot.querySelector('wr-coll')
    .shadowRoot.querySelector('wr-coll-replay').shadowRoot.querySelector('iframe').contentWindow
}

window.marloweWindow = async () => {
    try {
        if (getMarloweWindow() == undefined) {
            throw new Error('undefined')
        }
        return getMarloweWindow()
    } catch {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return window.marloweWindow()
    }
}



const attachDarkReader = () => {
    window.marloweWindow().then(async inst => {
        console.log('helloooo!!!!!!!!!')
        var script = await (await fetch(window.location.origin + '/marlowe-wolfram-webdoc/js/bundle.js')).text()
        inst.eval(script)
        console.log('helloooo!!!!!!!!!!!!!!')
    })
}

attachDarkReader()

