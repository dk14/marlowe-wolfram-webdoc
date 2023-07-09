
console.log('hello')



const marloweWindow = () => document.getElementById('marlowe-frame').contentWindow.document.querySelector('replay-web-page').shadowRoot.querySelector('iframe').contentWindow.document.querySelector('replay-app-main').shadowRoot.querySelector('wr-coll').shadowRoot.querySelector('wr-coll-replay').shadowRoot.querySelector('iframe').contentWindow

window.marloweWindowInstance = async () => {
    try {
        if (marloweWindow() == undefined) {
            throw new Error('undefined')
        }
        return marloweWindow()
    } catch {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return window.marloweWindowInstance()
    }
}


var getFavicon = function(){
    var favicon = undefined;
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
        {
            favicon = nodeList[i].getAttribute("href");
        }
    }
    return favicon;        
}

window.marloweWindowInstance().then(async inst => {
    console.log('helloooo!!!!!!!!!')
    var script = await (await fetch(window.location.origin + '/marlowe-wolfram-webdocjs/bundle.js')).text()
    console.log(script)
    inst.eval(script)
    console.log('helloooo!!!!!!!!!!!!!!')
})