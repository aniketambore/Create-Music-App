/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Pad1-Sounds/DJ_Dick1.wav","0d423329a90837a103a57023e7867b67"],["Pad1-Sounds/DJ_Dick10.wav","9184257ed39d237e553fd90e3d48fb75"],["Pad1-Sounds/DJ_Dick2.wav","0551a17c3d140f5bab0ad72ca3051023"],["Pad1-Sounds/DJ_Dick3.wav","4b335929bb12e6131a33a430ce25068a"],["Pad1-Sounds/DJ_Dick4.wav","7095695b7a356580e28997e25e3e20e2"],["Pad1-Sounds/DJ_Dick5.wav","656b0909f83ef7e2576bc5a144b4bc16"],["Pad1-Sounds/DJ_Dick6.wav","66c04cc98ae7756a8571019a7e17b931"],["Pad1-Sounds/DJ_Dick7.wav","524547bc2199f23a2bcf5399e3b91126"],["Pad1-Sounds/DJ_Dick8.wav","974504fe79cf48cced47e348e0abb2e1"],["Pad1-Sounds/DJ_Dick9.wav","dcc4ce492cd310209d640a96fb626a66"],["Pad1.html","1c24dd1cec5924503b51bf33c659e542"],["Pad2-Sounds/DJ_Mick10.wav","cc38ff19a69b9be1d577a9657259d2e6"],["Pad2-Sounds/DJ_Mick5.wav","06f569950c0f32fca497dfe9a8fd9009"],["Pad2-Sounds/DJ_Mick9.wav","bf227ae88b1740aa602326278d9f8ec6"],["Pad2.html","db49429a3cabac7a659b1a596a12b959"],["Pad3-Sounds/DJ_Nick10.wav","492de65cc4c588693444f34ef4f40a13"],["Pad3-Sounds/DJ_Nick3.wav","5fdd680f25f14271d268d47291d328a5"],["Pad3-Sounds/DJ_Nick9.wav","0bf9a3e6983d6bcc56dbe78c7ab1b84a"],["Pad3.html","8f87187ca6ecb87d4101ac713cddc5b5"],["Pad4-sounds/DJ_Rick1.wav","9ff027008006e92724ff8769410d96b1"],["Pad4-sounds/DJ_Rick10.wav","44d3ab5eea36a2997cc972820106613f"],["Pad4-sounds/DJ_Rick2.wav","f24b3831316a2223e77c08290fe21e35"],["Pad4-sounds/DJ_Rick3.wav","e9cc85e074f7670bd37d3313fbefd70b"],["Pad4-sounds/DJ_Rick4.wav","6358863f511ba75549e38b0b111d079e"],["Pad4-sounds/DJ_Rick5.wav","60c21413e711f4e58e55cd9cc8f1336c"],["Pad4-sounds/DJ_Rick7.wav","183e23abe2684dd594bf1b6064c8ad4b"],["Pad4-sounds/DJ_Rick8.wav","467e87f98065e2465bb9b1e264c868d6"],["Pad4-sounds/DJ_Rick9.wav","39bdd69005423bcb0ca7b7ef66d0fab4"],["Pad4.html","d2b4388e111e2c95c8f6341d3ce2b062"],["Pad5-Sounds/DJ_Vic10.wav","e95719fe8bb3dba8010267fc45fb3808"],["Pad5-Sounds/DJ_Vic2.wav","f3ccc2b67e9d7f99e8fa2ab68fd2885f"],["Pad5-Sounds/DJ_Vic3.wav","dcfa0a77ee51f7b1ae414baaa57fa234"],["Pad5-Sounds/DJ_Vic4.wav","fc9ba4f00307e72a9eb037efccea2cf1"],["Pad5-Sounds/DJ_Vic5.wav","72028caeb1abe246dacd8309a700333c"],["Pad5-Sounds/DJ_Vic7.wav","2119d0f0e09892d1d818df801b52c7a3"],["Pad5-Sounds/DJ_Vic9.wav","bc19666f76d988c021349ec6e7dfbfd7"],["Pad5.html","a0c857fef897ddc78c759ec3070eb4df"],["Style.css","6d4aecb11c33cee2966caaff8f20bff1"],["adventure.html","b0cce596da0bc57d871a0ae71d429f45"],["favicon.ico","6f260b96e78aac2c12ee7e4ffc21f6cd"],["game.js","b5c5cea0e1223ffee96654e9ad77cb89"],["images/17725_eightbit.jpg","96c5667d295f1d8a0b90b67ee3d975b4"],["images/17725_eightbit0.jpg","96c5667d295f1d8a0b90b67ee3d975b4"],["images/17730_eightbit.jpg","a21229382d02a41f434f08fdccd2201f"],["images/17730_eightbit0.jpg","a21229382d02a41f434f08fdccd2201f"],["images/17731_eightbit.jpg","d03063e0208f0cb66bcb14220e2aea1a"],["images/17731_eightbit0.jpg","d03063e0208f0cb66bcb14220e2aea1a"],["images/17734_eightbit.jpg","13785e50daa662ca06c0429ec10e004a"],["images/17736_eightbit.jpg","35b63d44906b02dab862372fb11237cb"],["images/17737_eightbit.png","ae7d126afaec96d58f4d47b3e8bb9662"],["images/eightbit.jpg","7d9c8aeb211c50bdc1c5caeb32da4aba"],["images/preload/DJ_Dick.jpg","767e3d05593776fd5ddf3c0fda860ea6"],["images/preload/DJ_Mick.jpg","7b25babf1fbb71a3ecfc5076c76ff059"],["images/preload/DJ_Nick.jpg","db478d208eb2c99a2f9c3a1e002da1bc"],["images/preload/DJ_Rick.jpg","1e75ad1cf05491ed8313499ee1e582e0"],["images/preload/DJ_Vic.jpg","18792229f000604bae0188ac1e0f6832"],["images/preload/Tape.jpg","2d45e9b1b8827395005637e75a36a0b9"],["images/preload0/DJ_Dick.jpg","767e3d05593776fd5ddf3c0fda860ea6"],["images/preload0/DJ_Mick.jpg","7b25babf1fbb71a3ecfc5076c76ff059"],["images/preload0/DJ_Nick.jpg","db478d208eb2c99a2f9c3a1e002da1bc"],["images/preload0/DJ_Rick.jpg","1e75ad1cf05491ed8313499ee1e582e0"],["images/preload0/DJ_Vic.jpg","18792229f000604bae0188ac1e0f6832"],["images/preload0/Tape.jpg","2d45e9b1b8827395005637e75a36a0b9"],["index.html","866772438cde81741fbe4eb2bf286d3b"],["logo192.png","fbb4d90d8a9cb1b357f9d2168c631e37"],["logo512.png","f60da80e99002e05cb464b56a58c533c"],["manifest.json","eb7471c31dd09533ecb2ab2d35adab72"],["script.js","1a7b521db403e37d1bfe7032a4fa7733"],["serviceWorker.js","7a46f42106a4c4fd1a03c4afd48f65e9"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







