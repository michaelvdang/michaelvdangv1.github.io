'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b3a5017aaf780b1deded952ab1d1498e",
"index.html": "bfd494df4375e33b9e21fd6b38336147",
"/": "bfd494df4375e33b9e21fd6b38336147",
"main.dart.js": "18fc1bb3dba241a9a4adb49d47e20706",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9db03f449477fe936f9f601a4031bd9b",
".git/config": "5bcad0c0bf24d9ae8d3c08cf2336417f",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/0c/9153f4ab3725467a77b5d5131acfb69dd90b78": "4182d9c5db3c95c69fe8db27ee3867ad",
".git/objects/3e/b2295dee39945bc62dd664361f2ec0842632e4": "13cd2a5983093528cc22429eaac45949",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5f/e72799eb004f80a82ee149d8b17b7de34085e4": "bad1d6957181b2c7f92fa3bce38ea737",
".git/objects/b3/a64cf28d7700dfb5bf93aa2c971416015036c5": "3410ce5a4decd878c55cef6576ba5a5e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/b2ad2e6a93b702690ad12519bbb23add2d8858": "54ba6f87e9b3c044cf814495056d8ceb",
".git/objects/f2/9c682276f40ff5f090021fd62d46c0fc03a53d": "b848a07dc80cf0843419968d9347875d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/bad6e9818f5ef71dc4660688602545d94463f4": "4be7e815f1883663a04d64629f67eef3",
".git/objects/89/909a84607467b4482aa3dc6bd6065ebac77654": "adb619fbdf6c0408515d6adba4a6521b",
".git/objects/89/6a02c222d269bdc70d9ed592c97c6b39de85f2": "6bfa741e163c629677cef34f0cd313ba",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/ca8d9617dba08dfc18cc19145982af70d1ed1f": "bab9503286faa4f7dbbd31cc5bee1d74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/d430a1b8c297a494bee19b21b64366f73152b5": "47cd8e7207e0933c31c5e9adb6d25ff9",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/09/5d71ae54a2d63aad405e8d8ddad180f961101f": "85d224a1e879c48f51c3faed5af5139a",
".git/objects/96/c473ac6962900d173e1778ba1e87af00fd9154": "fedab12e878d543311a7ea37e97edcb4",
".git/objects/96/ff9c6ec5a7379e491c1a7e1fe96437872281c9": "36ed33a1f6897657eb81053952950913",
".git/objects/90/0e8057e5312f3bf0b90f761aa8045b94152a04": "a3548e7702b4798fbdb38157bb71286d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/ad5a22a0b10133ece3827e5a774f2899355ec6": "c8fdaf576d7866ed6fe3458bc88014a5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/0814bd5726c2138801a4af0acd95c47739c50a": "1cff6e469a09e75faa63c1f07f87af94",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/9e3104eae0d0e9403884c3f54e6e22a3c3384c": "3fcddb35c78348ef8858f42363521004",
".git/objects/7f/26dbb3f3ca87905b5dc9c5607b43725e476f80": "212cdb347c38fd3afb675314a6c51164",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b85a54ce28e06d14eb2b05fbbcc38215",
".git/logs/refs/heads/master": "b85a54ce28e06d14eb2b05fbbcc38215",
".git/logs/refs/remotes/origin/master": "d5a11151473be90b10e083c514c71a57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2829aed51acb16cfc6e0ac79602ab5e5",
".git/refs/remotes/origin/master": "2829aed51acb16cfc6e0ac79602ab5e5",
".git/index": "6c198d110bd83213c9bce65d9f82f107",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "847aea37bd472c1fd04593f604809f5b",
".git/FETCH_HEAD": "6450111b57029217362f4e01ebbb2a1e",
"assets/AssetManifest.json": "e046a98cd6df72626842524eaa93396c",
"assets/NOTICES": "b021300418468bfca2f52c1444ad0c17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/home_view/chart.png": "5746e267192a09303b543c6540bcea1e",
"assets/assets/logo.png": "4f42bd2861de234c184e1245dd566997",
"assets/assets/budget_project/img5.png": "021ea1f1512fac4b3d0d1ae8f6dde258",
"assets/assets/budget_project/img4.png": "777e8bf5d0cb6904f653f56fb9d884e4",
"assets/assets/budget_project/img6.png": "859b4507e0997092825de718af134202",
"assets/assets/budget_project/img3.png": "306be7a0194f1e70d66fdcf812122354",
"assets/assets/budget_project/img2.png": "b90dcfad25b4828a8ba32e87a2292bfb",
"assets/assets/budget_project/img1.png": "588e540827e2ac0f3814248af7ac4e8d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
