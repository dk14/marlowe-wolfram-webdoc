---
title: Home
navOrder: second nested
---

# Welcome

Welcome to our interactive webdoc!

# marlowe-wolfram-webdoc


Run locally:
```
git clone https://github.com/dk14/marlowe-wolfram-webdoc/
cd marlowe-wolfram-webdoc
npm run docs-dev
```

You can also trivially serve ./docs folder as a website, just make sure that your path is $domain/marlowe-wolfram-webdoc/ and that wasm files mime type is "application/wasm" (modern http servers treat it properly)


It is also served as Github Pages:
https://dk14.github.io/marlowe-wolfram-webdoc/eurocall

If you see deceptive website warning: press details -> proceed. 
Check security manually: https://sitecheck.sucuri.net/results/https/dk14.github.io/marlowe-wolfram-webdoc/eurocall

Website is using snapshotted webarchived version of Marlowe Playground (thus deceptive website warning appears for some users), so use it ONLY FOR EDUCATIONAL purposes, and rely on https://play.marlowe.iohk.io/#/ for actual contract development. Ideally, Marlowe team should expose Playground as a an npm library in the future.

Website is using bitcoinjs-lib and experimental cryptography, so use cryptographic tooling for EDUCATIONAL purposes only and rely on audited implementations of Schnorr adaptor points instead.

There is a poor-man's unit test for cryptography: `npm run test`.

Docs development: Patched version of `@gi60s/markdown-docs` npm package is used, see `dk14/markdown-docs#patch-1` in `package.json`. It only needed for `npm run docs-dev` command to serve wasm files properly: https://github.com/Gi60s/markdown-docs/pull/17. Documentation: https://gi60s.github.io/markdown-docs/. Currently ui in the docs relies on poor-man's react, aka http://vanilla-js.com/.

Note for Wolfram: CORS-proxy won't be needed if served from wolfram.com domain or any other in wolfram's Allow-Origin policy. App-id likely won't be needed either. Webarchive library is served from jsdelivr cdn (can edit it in docs/marlowe.html, docs-src/marlowe.html), everything else is webpack. Google site verification can be removed: `docs(-src)/google1c5d94484b8c9f98.html`.

Ideally, `docs/markdown-docs.js` should be edited to replace `dk14.github.io` domain with your own and `npm run docs-build` to regenerate `docs` folder. Also, `docs/js/index.js` hardcodes `/marlowe-wolfram-webdoc/js/bundle.js` path, but it is only used to add darkified css to embedded marlowe playground snapshot.

Browser support tested. Desktop: Chrome yes, Safari yes; mobile: Safari yes, Chrome no