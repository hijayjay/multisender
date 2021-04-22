importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23d0c54b796ae98009b1.js",
    "revision": "8b19ee3aea08cbb692096236c62fdfcf"
  },
  {
    "url": "/_nuxt/467d66693bdba2086c30.js",
    "revision": "5bc6b6dda89645c53d76b93cd0d8910a"
  },
  {
    "url": "/_nuxt/4a195841ecdf7d28f2c1.js",
    "revision": "2f4f11582d1072ba7dcf13486b4b748d"
  },
  {
    "url": "/_nuxt/5a126a4f703c9b666094.js",
    "revision": "65e7f96b06d9ff69f4860fae01a8b3f3"
  },
  {
    "url": "/_nuxt/673622a575221e1f78b0.js",
    "revision": "51a2b28ef39e9f6123043e399c26a371"
  },
  {
    "url": "/_nuxt/6d5f8bc99a5ab0ce2430.js",
    "revision": "538ec819c84155db9e2a196d2498e92d"
  },
  {
    "url": "/_nuxt/6f19469468e7112d6365.js",
    "revision": "b18664dfc388b4a2f84d0d7a62985269"
  },
  {
    "url": "/_nuxt/716b77c4bbac13f758ed.js",
    "revision": "3ece34dcfae155c3f28d7ead53db53a0"
  },
  {
    "url": "/_nuxt/7bf851415c8c52d017d8.js",
    "revision": "dd3673bfcc3e8d09ba5f9bb9b8bab434"
  },
  {
    "url": "/_nuxt/822dc22c01f625c3ee3a.js",
    "revision": "5722ba4394ffe800aa5603f1e090cefc"
  },
  {
    "url": "/_nuxt/a4d71c7dd2fc62924992.js",
    "revision": "1d07fe883526cc601ba91438be410e9d"
  },
  {
    "url": "/_nuxt/a54e794e59ceb1908f12.js",
    "revision": "f29b56caa44ef31ea5a4a53d361c7492"
  },
  {
    "url": "/_nuxt/e0314a9475478f87a35c.js",
    "revision": "775e907ee1c6c55882f47c357d58a212"
  },
  {
    "url": "/_nuxt/e299726d37d0ea24ca2c.js",
    "revision": "b9699b56798b63666ccafb5c0144efb7"
  },
  {
    "url": "/_nuxt/e407f883218352274f62.js",
    "revision": "0810353b55d2aeb10f7f64e9c16e7a99"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
