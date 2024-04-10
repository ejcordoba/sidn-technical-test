/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var page = 1;
  var canLoad = true;
  var container = document.querySelector('.posts-container');
  var loadMoreButton = document.getElementById('load-more-posts');
  function loadInitialPosts() {
    fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page).then(function (response) {
      return response.json();
    }).then(function (posts) {
      if (posts.length > 0) {
        posts.forEach(function (post) {
          container.insertAdjacentHTML('beforeend', "\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_image_src, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                    <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                    <div class=\"details-button-wrapper\">\n                                        <a href=\"").concat(post.link, "\" class=\"details-button\">Details <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"7\" viewBox=\"0 0 17 7\" fill=\"none\">\n                                        <path d=\"M16.6112 3.78436L11.6112 0.897611V6.67111L16.6112 3.78436ZM0.5 4.28436H12.1112V3.28436H0.5V4.28436Z\" fill=\"white\"/>\n                                      </svg></a>\n                                    </div>\n                                </div>\n                            </div>\n                        "));
        });
        canLoad = true;
      } else {
        loadMoreButton.style.display = 'none';
      }
    })["catch"](function (error) {
      return console.error('Error fetching posts:', error);
    });
  }
  loadInitialPosts();
  loadMoreButton.addEventListener('click', function () {
    if (canLoad) {
      canLoad = false;
      page++;
      fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page).then(function (response) {
        return response.json();
      }).then(function (posts) {
        if (posts.length > 0) {
          posts.forEach(function (post) {
            container.insertAdjacentHTML('beforeend', "\n                                <div class=\"card\">\n                                    <div class=\"card-header\">\n                                        ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_image_src, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                        <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                        <div class=\"details-button-wrapper\">\n                                            <a href=\"").concat(post.link, "\" class=\"details-button\">Details -></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            "));
          });
          canLoad = true;
        } else {
          loadMoreButton.style.display = 'none';
        }
      })["catch"](function (error) {
        return console.error('Error fetching posts:', error);
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var page = 1;
  var canLoad = true;
  var container = document.querySelector('.posts-container-mobile');
  var loadMoreButton = document.getElementById('load-more-posts');
  function loadInitialPosts() {
    fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page).then(function (response) {
      return response.json();
    }).then(function (posts) {
      if (posts.length > 0) {
        posts.forEach(function (post) {
          container.insertAdjacentHTML('beforeend', "\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_image_src, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                    <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                    <div class=\"details-button-wrapper\">\n                                        <a href=\"").concat(post.link, "\" class=\"details-button\">Details <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"7\" viewBox=\"0 0 17 7\" fill=\"none\">\n                                        <path d=\"M16.6112 3.78436L11.6112 0.897611V6.67111L16.6112 3.78436ZM0.5 4.28436H12.1112V3.28436H0.5V4.28436Z\" fill=\"white\"/>\n                                      </svg></a>\n                                    </div>\n                                </div>\n                            </div>\n                        "));
        });
        canLoad = true;
      } else {
        loadMoreButton.style.display = 'none';
      }
    })["catch"](function (error) {
      return console.error('Error fetching posts:', error);
    });
  }
  loadInitialPosts();
  loadMoreButton.addEventListener('click', function () {
    if (canLoad) {
      canLoad = false;
      page++;
      fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page).then(function (response) {
        return response.json();
      }).then(function (posts) {
        if (posts.length > 0) {
          posts.forEach(function (post) {
            container.insertAdjacentHTML('beforeend', "\n                                <div class=\"card\">\n                                    <div class=\"card-header\">\n                                        ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_image_src, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                        <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                        <div class=\"details-button-wrapper\">\n                                            <a href=\"").concat(post.link, "\" class=\"details-button\">Details -></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            "));
          });
          canLoad = true;
        } else {
          loadMoreButton.style.display = 'none';
        }
      })["catch"](function (error) {
        return console.error('Error fetching posts:', error);
      });
    }
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksidntheme"] = self["webpackChunksidntheme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;