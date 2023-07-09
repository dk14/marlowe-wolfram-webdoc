
console.log('hello')



const getMarloweWindow = () => document.getElementById('marlowe-frame').contentWindow.document.querySelector('replay-web-page').shadowRoot.querySelector('iframe').contentWindow.document.querySelector('replay-app-main').shadowRoot.querySelector('wr-coll').shadowRoot.querySelector('wr-coll-replay').shadowRoot.querySelector('iframe').contentWindow

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


window.marloweWindowInstance().then(async inst => {
    console.log('helloooo!!!!!!!!!')
    var script = await (await fetch(window.location.origin + '/marlowe-wolfram-webdocjs/bundle.js')).text()
    console.log(script)
    inst.eval(script)
    console.log('helloooo!!!!!!!!!!!!!!')
})