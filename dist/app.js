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
          container.insertAdjacentHTML('beforeend', "\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_media, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                    <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                    <div class=\"details-button-wrapper\">\n                                        <a href=\"").concat(post.link, "\" class=\"details-button\">Details -></a>\n                                    </div>\n                                </div>\n                            </div>\n                        "));
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
      fetch(custom_script_vars.rest_url + '?per_page=4&page=' + page).then(function (response) {
        return response.json();
      }).then(function (posts) {
        if (posts.length > 0) {
          posts.forEach(function (post) {
            container.insertAdjacentHTML('beforeend', "\n                                <div class=\"card\">\n                                    <div class=\"card-header\">\n                                        ".concat(post.featured_media ? "<img class=\"card-img\" src=\"".concat(post.featured_media, "\" alt=\"").concat(post.title.rendered, "\">") : '', "\n                                        <div class=\"card-title\">").concat(post.title.rendered, "</div>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <div class=\"card-description\">").concat(post.excerpt.rendered, "</div>\n                                        <div class=\"details-button-wrapper\">\n                                            <a href=\"").concat(post.link, "\" class=\"details-button\">Details -></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            "));
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n19 │ @import 'scss/header';\r\n   │         ^^^^^^^^^^^^^\n   ╵\n  src\\app.scss 19:9  root stylesheet\n    at processResult (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\webpack\\lib\\NormalModule.js:841:19)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\webpack\\lib\\NormalModule.js:966:5\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:118070:16)\n    at render_closure1.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:101490:12)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:37660:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36176:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36491:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:5127:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36342:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35958:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4914:17)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:27170:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4939:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35977:12)\n    at _awaitOnObject_closure0.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35971:25)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:37660:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36176:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36491:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:5127:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36342:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35958:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4914:17)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:19843:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4939:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35977:12)\n    at _awaitOnObject_closure0.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35971:25)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:37660:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36176:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36491:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:5127:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36342:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35958:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4914:17)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:19887:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4939:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35977:12)\n    at _awaitOnObject_closure0.call$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35971:25)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:37660:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36176:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36491:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:5127:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:36342:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:35958:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4914:17)\n    at C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:81295:24\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\sidn-theme-test-01\\wp-content\\themes\\sidntheme\\node_modules\\sass\\sass.dart.js:4939:15)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"]();
/******/ 	
/******/ })()
;