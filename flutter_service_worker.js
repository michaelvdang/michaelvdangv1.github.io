'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b3a5017aaf780b1deded952ab1d1498e",
"index.html": "8e853161172c4ac764fd7458255aa9ab",
"/": "8e853161172c4ac764fd7458255aa9ab",
"main.dart.js": "21a06307987de18341d628f1c515a7a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9db03f449477fe936f9f601a4031bd9b",
".git/config": "c437e2014c1fbe38a9788549e44a4a31",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/0c/9153f4ab3725467a77b5d5131acfb69dd90b78": "4182d9c5db3c95c69fe8db27ee3867ad",
".git/objects/3e/b2295dee39945bc62dd664361f2ec0842632e4": "13cd2a5983093528cc22429eaac45949",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/31593b783ba685e7eef43097084830892ac638": "8d96f8d6ca5bde0f4aa7b29fbc721fd9",
".git/objects/0e/27f71cdfabdddcac7378f61c876599682e505b": "5cf154e0328b0f7afc4c30f48818e474",
".git/objects/5f/e72799eb004f80a82ee149d8b17b7de34085e4": "bad1d6957181b2c7f92fa3bce38ea737",
".git/objects/05/50d417c664df84800e21544e6c3225a05fc086": "b75488637589822cdab83ca276a02962",
".git/objects/a4/40a96cdb39b502a51a4f10002633c285f1f119": "0564e5ba6111d50701a3a0d7fe97105d",
".git/objects/a3/3a62311c177fa17ead08467ec125bf7f805807": "538940ee31766f553a1a57ca0827cb7e",
".git/objects/b2/8e7af45ca1026b07202a392129f6193521d3d6": "ff1f3737d3e8677fef621c469f22d2a1",
".git/objects/d9/a9d720019c15d01da38aed191ac5668537f5e7": "5f90693c806013e2215316e4f7a3fc8c",
".git/objects/ad/90494f2cbe2be0c15fc50f6e58bfc7b4ceb72f": "5899a39a9d0bab3e764d312e18104e42",
".git/objects/b3/a64cf28d7700dfb5bf93aa2c971416015036c5": "3410ce5a4decd878c55cef6576ba5a5e",
".git/objects/a2/d902fe669d1abaa6399083b7efce28c9ebe851": "ca98ec6eb0eb7f55ddf299bd676ed020",
".git/objects/d6/a52fe1b5888369dbff7d606facd6aeb7677675": "1f64ea6c84c37ffbcbf3033df95188ea",
".git/objects/d6/9fc7096e7069583914b6cdc913f12ab2dd5608": "83826a9febac9ece42de08f6f306b8f2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3b5e7d34f642d37c34e7596d766d6b9bb3f9b8": "8e7a60aa82cd2d7db437af1d7fff9d85",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/ba88fedfce5d0344e7cafb2ade18dc27584cb8": "1f26566865dc9637487891dad69dd11b",
".git/objects/f4/b81b6d9cca13f4f88d294c6d34aaf0673d00b1": "2cb5f3f32a2080d39a0b51462552799c",
".git/objects/c9/c2ce81b0a1fa12c1600cf8b5de228073c53e0c": "fb3342d2626a56af9ad6cd599d21445b",
".git/objects/fd/b2ad2e6a93b702690ad12519bbb23add2d8858": "54ba6f87e9b3c044cf814495056d8ceb",
".git/objects/f2/9c682276f40ff5f090021fd62d46c0fc03a53d": "b848a07dc80cf0843419968d9347875d",
".git/objects/c6/fa03d6a70de4c4db7b469d0e9b5c4af854be09": "fc23f0fe8db32e944b00f934b34a9abe",
".git/objects/ec/1e4d55ac72b9fc8bb66b2abc5429bfe9c4b1ab": "9b0e5674cd9a331607787ef8f0b41879",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/f28750483e44b57b66c19f60f45aea9c726c7d": "dbb600df35d160ca0fa64acaddcc5b8e",
".git/objects/29/bad6e9818f5ef71dc4660688602545d94463f4": "4be7e815f1883663a04d64629f67eef3",
".git/objects/16/ce9daba875064c97a0a097bb4bec18998219e7": "c79462fbb0c08b0e458fddb57c7d7fc4",
".git/objects/89/909a84607467b4482aa3dc6bd6065ebac77654": "adb619fbdf6c0408515d6adba4a6521b",
".git/objects/89/6a02c222d269bdc70d9ed592c97c6b39de85f2": "6bfa741e163c629677cef34f0cd313ba",
".git/objects/89/8eba304aff8c857992dfd390ac04958347f3a2": "c2b2b849b63c973020179b3ce633b04e",
".git/objects/1f/e644dc389a7c43600da3de807930718d8b75aa": "4fc7c3018a92b1ec776cdb83a607492a",
".git/objects/74/9272c55df607ba2ea37bb7af3814681f9a8ffe": "380f6b2eefaad4c8aa5428e28bfa12f8",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8f/cabaf984a1ec1a7db508e8584973bc0e4cda37": "b13547e7c5a16d05fb226a32f6606366",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/12040e7aae1c0d0555f6838d905e6679fc7b16": "4813b3978f8b11cc772f9806332cc320",
".git/objects/81/ca8d9617dba08dfc18cc19145982af70d1ed1f": "bab9503286faa4f7dbbd31cc5bee1d74",
".git/objects/43/e758c8a3586cccb6d75886783a1b446092b98a": "471bc6cb70df5df5c9464f0603195543",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/d430a1b8c297a494bee19b21b64366f73152b5": "47cd8e7207e0933c31c5e9adb6d25ff9",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/09/5d71ae54a2d63aad405e8d8ddad180f961101f": "85d224a1e879c48f51c3faed5af5139a",
".git/objects/5d/b9e58526edd9c6f3efc3b0ec1e363e11d6670a": "f088a2653522fea3a6e23b2cb14517b6",
".git/objects/91/e1a54e71e8ab002827459c9eaba605f2d2ac23": "0262b25d12abbb3f1f72ba0f8dadc969",
".git/objects/62/a6d1abc507388b37c7c57629ce86e978b71bfa": "444824b6efed4242b7997b3cace1c48c",
".git/objects/96/c473ac6962900d173e1778ba1e87af00fd9154": "fedab12e878d543311a7ea37e97edcb4",
".git/objects/96/ff9c6ec5a7379e491c1a7e1fe96437872281c9": "36ed33a1f6897657eb81053952950913",
".git/objects/30/9c99a70e5d3d794a98758c4c0d14a3e863195e": "3f419fdaa5dcd8e2aa7d107b5dffeafd",
".git/objects/37/8326df76fc1cba1b5a9114312cf4731bad8ac6": "ae085033d5d2d43f66b9aca77e253d5c",
".git/objects/01/36a6b2b32d73e9987cae3bcf799d8186039f6b": "0df050aad257d0f39bf92caa05ce3c73",
".git/objects/90/0e8057e5312f3bf0b90f761aa8045b94152a04": "a3548e7702b4798fbdb38157bb71286d",
".git/objects/ba/30a6e976d433752275b1881eabfbf7a12c8399": "c36a7fbf2f3b7865ebf60581ee5c47eb",
".git/objects/b1/e3573bd9347567f2397692f0a162be217cd505": "b4ff95bbd95d5dc9a4ab21a04e3f7a67",
".git/objects/b6/3759a469cf35339caf5e6e9bf2ce45a69eb2da": "d11294c3b055b35398d062e8e9505f01",
".git/objects/b7/88bcf1c2b7b0d8e61e156b0bbe38b6968241d9": "59e11de3a86de3509e3ae1e8b963bbce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9930d80f98263acace2714a744e74cc3487fd7": "8cdb50c8a43ad8fee0e49a1b5d7174f6",
".git/objects/db/6fddd1d22e886a0b8e8a762c60a2f9028506de": "da3f25407b07877ae7280f4927438028",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/4863e49c46c8aa1bd966be388b5d0cdb4dc50c": "32dded4615b4ffbd811d56fb844c2e1e",
".git/objects/b0/ad5a22a0b10133ece3827e5a774f2899355ec6": "c8fdaf576d7866ed6fe3458bc88014a5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/2f9852e3e27394aac5314296fe9c87a5e68b68": "abd711e55809160fcb5d11f8201ff6f7",
".git/objects/cd/0814bd5726c2138801a4af0acd95c47739c50a": "1cff6e469a09e75faa63c1f07f87af94",
".git/objects/f9/1e1edc6e30d533f7b6d66457db05eaf2033aaa": "4d8b1340e8f6208ae9ccefc1b73e307e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/265ed1fcec0aedf8bc89996c8f787bd429499b": "0674afc43f9c09e265eee48962f1ac9d",
".git/objects/2c/c079c07af87f4b534614cdcf7fe4552a9c103e": "000e7b02dfa080b6eac2ff7f91956f93",
".git/objects/2c/d135475f38e5cb1dcd0662a982a04b4f699d27": "6cd8625efe99c90e31e5a6cc3d622067",
".git/objects/79/cee127eba27c3dc3e2e8a91905c420a42b2824": "35e6bdf70975a6a74e7d8c4a94f27926",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/437273a219714cbab107facff9080ad77cc663": "28cbb4eb449036d80e6c87d17d5f3faa",
".git/objects/48/f1cf314a87913dea3ca0192145d6a26635fbba": "efabbe05ef1921af9bb92fbcd54e425b",
".git/objects/84/9e3104eae0d0e9403884c3f54e6e22a3c3384c": "3fcddb35c78348ef8858f42363521004",
".git/objects/84/cc44ff314246f90fae4216b4dbef99c9d2ee3d": "55056d10ca97d2dc872742b05fa1c617",
".git/objects/7f/58cd6105afe2542f4fd3a37efc49a384e53930": "1256750bbce367bbbc8f2b2dcfc3cee1",
".git/objects/7f/26dbb3f3ca87905b5dc9c5607b43725e476f80": "212cdb347c38fd3afb675314a6c51164",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "2ba807022828e716dd1e7a4bea2344cf",
".git/logs/refs/heads/master": "2ba807022828e716dd1e7a4bea2344cf",
".git/logs/refs/remotes/origin/master": "939291b5371458b327441a923c52839f",
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
".git/refs/heads/master": "712fac031c3aba4d2ca947605136154f",
".git/refs/remotes/origin/master": "712fac031c3aba4d2ca947605136154f",
".git/index": "3ceb6edacd7d3ecd9e061c9abacd21cb",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "b5076b7b79d443837739506ddc508ea1",
".git/FETCH_HEAD": "0cb9310862ac930ec350dbd70170a010",
"assets/AssetManifest.json": "19cf3a47bb6fe4525662906a1401d2cc",
"assets/NOTICES": "b021300418468bfca2f52c1444ad0c17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/chart.png": "5746e267192a09303b543c6540bcea1e",
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
