'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e2f882bcd84b593cc702bd09cb18f181",
".git/config": "ed9383d3e9fea48e8f0e056036c22023",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ae6e93eecfb7eafdb3d31811da5e8215",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8734c0276c3f804fddf9ec7e9c1acc45",
".git/logs/refs/heads/main": "d12ffcb2085bef4691834804fa213290",
".git/logs/refs/remotes/origin/main": "11a9fe41b06748868c1fcc93d9266a37",
".git/objects/02/f1b04f3ac07e194e145c2399839de43b574ec2": "ba2f5a9ee7cd37ab285117e8ed5aa1b1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/0a47e82246863267cd15c72ffb5fd839f64548": "b863b8a0794a7a9b1723502e4def0e54",
".git/objects/18/8a128a7c66410760b5b6215e579e71ed5c34c9": "795079bf8d3fa2350ca1eb84c06f1391",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/b76a894d6cae67c6f138fe85bbc892dbc275ff": "a06f1b06f7dc91c3369e8b202a480552",
".git/objects/23/8e2a28a3ce6d6a5904de74f75ecd699d043570": "e067d91276367e2378c39782f48adc44",
".git/objects/25/13248546b6deb8fcfd4cc6596a2afa14996818": "863615a700dcf3af7a152e604a38c0a6",
".git/objects/3a/11e14f1256b1dfe46f3cdf64f11913df4326d7": "f8f0ac09d294d653e6bc7541ffd3d3aa",
".git/objects/3c/6a77a2a1210d58fdcc4861d0220543ea15aa91": "9ec1da0e32efe4ecb55395cd8bab92c7",
".git/objects/3c/724cec21a9e07ed1423028ae1bf490668596d2": "dce9ed8de915bd1c30e941fd954e4f1f",
".git/objects/3c/db713be6e578e0e12dd676b38ce32192cc4d4a": "bf3b1e174703f9ec281c67d2d7051b7c",
".git/objects/43/8ad7aca9ed7357b3b8604a5406283d8e558680": "150f0e449519674651bf7cd7a46ff6e7",
".git/objects/45/6500b7a53aa990360160693a2b0c50167c833b": "a82df0621c476cc2d7b81fbfc3fd2f14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b98d14f9777fb88dba1b14cde8a516d8ce257c": "215f9bc2f28a23b28fbe5c1af67d0e2b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/c2bfab250b009224c1ce953b5b8f98c8c57004": "4e853246f7546285805325a98c77cc76",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/3f22862351600df0a2970237b0f48ad8ad31c2": "f7fa5173ef413c0fba3d247a91b9df48",
".git/objects/5c/4deeca25f82b0d5f6c444a399300941ba5ab03": "11018457771bfb29ec4a121bc01f0bf7",
".git/objects/5d/05fd78660cfe667e8b703a0b72e262c47ae480": "c6cef6dbaeb2a17d3ee28e04e1d911e9",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6e/545f2f394a2c094af934a0bcd96bf928427688": "46a4458cdc576693c6851226d8432f62",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/3fae0bf42beacc7538f431cab12e43592da013": "d5ba3edaa1241b478593dc1b0987fee6",
".git/objects/7f/55b0531892bcece9708b67327e5e500edb2fb0": "17f67a0a98f5d40041736b0735638738",
".git/objects/80/0ec195cec15962eaebd8a53aa7b9c87a3190e0": "50b80801a3733b43a5fb334642150715",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cc2dca93f12caae704a0aaf7db9273fa7b1acd": "5dab1f14b24747991c9ed6b5ceaec7cb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/dc3729adb84478f342a48a275214952b44d46d": "10094358b96d84b882bc75ef66ae0760",
".git/objects/9e/c492627953a22ac2418810b7c6873306ca8680": "dc9f6dae9e0d3b57bddaf1f5a9d68917",
".git/objects/a1/2551e0389428b97ed0e04d51f075835e71e63b": "10547d19b22b413d610ef3f7144eb857",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a9/ddb206f9a4e40e73d49a10be1b6be5d8706afb": "d1967ef7ae80175b1b0ed79a8ec3f96d",
".git/objects/ab/8ad6d970a17ea4eb2a1ea5a8a794a9e4a59041": "13a4474f356d6236a8b392bdeeae9618",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c6d1241cf34110b8dee39b4ce26ffd4aec503e": "d04cb66efb9b347071b38518a5de8ebe",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/ad02b82ea750afb13d1a0d0881eae97a5992ed": "0842c66e99d3c025789a18f844726f54",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/1a3bc47c7136431210e9d33e3f1fb53fdf5784": "95de27b1e2e11f523ccece6249ffd7a8",
".git/objects/cb/db2d168b3a1c47238c1bcb3b0f4806df4d225d": "fcfee744d661a0894ea420b34de551a5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c7cc9f78572715cce8b4c5e1f470b2574f611e": "4082bbbbe7e94b99351d090eb669950a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/622b02de2640167dd37ced5889dc81c74fe9f2": "8277aa6b38982e3b37f554c04defee42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/b9f83b1d648728416c4b01deed8d2583080bae": "38863c596d3cefb98e0f76a385ef9990",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "131fe3addbb83fbb986f319b530388dc",
".git/refs/remotes/origin/main": "131fe3addbb83fbb986f319b530388dc",
"assets/AssetManifest.bin": "ffb74441b9da119fbc772a0199be863b",
"assets/AssetManifest.bin.json": "184cc4f8245f452dcd6fce8feb2724e0",
"assets/AssetManifest.json": "da3abc98d24e828ce1ccb7d952aa541b",
"assets/assets/icons/google-icon.png": "eed815d0e15564f76c3aa4bcc8e50ea8",
"assets/assets/icons/vAR.png": "424e41fc60dfff24096eeaad3410ab59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "610fbf4578c6ad37945886a08a9c11d2",
"assets/NOTICES": "919a77315a5e65b59806d4a65343767a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c424713980eb59bcf9ded5996281908f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "337eeb35fdf1f545e79ff7663db9490e",
"/": "337eeb35fdf1f545e79ff7663db9490e",
"main.dart.js": "212df7335cd054c38598d6e25819e26e",
"manifest.json": "01c987237eec19db81a0e9f638dd76d1",
"version.json": "23e7062757278bb053ac9b2958e156ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
