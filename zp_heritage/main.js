(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {(function ($) {
  var Defaults = $.fn.select2.amd.require("select2/defaults");

  $.extend(Defaults.defaults, {
    searchInputPlaceholder: ""
  });

  var SearchDropdown = $.fn.select2.amd.require("select2/dropdown/search");

  var _renderSearchDropdown = SearchDropdown.prototype.render;

  SearchDropdown.prototype.render = function (decorated) {
    // invoke parent method
    var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

    this.$search.attr("placeholder", this.options.get("searchInputPlaceholder"));
    return $rendered;
  };
})(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/fonts/index.less
var fonts = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/owl.carousel/dist/owl.carousel.js
var owl_carousel = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.js
var slick = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/select2/dist/js/select2.js
var select2 = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/select/pluginForSelect2.js
var pluginForSelect2 = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/jquery-custom-select/jquery.custom-select.js
var jquery_custom_select = __webpack_require__(6);

// EXTERNAL MODULE: ./src/styles.less
var styles = __webpack_require__(7);

// CONCATENATED MODULE: ./src/images/svg/logo.svg
/* harmony default export */ var logo = (__webpack_require__.p + "svg/logo.svg?hash=c88df60977c15548fef84a88291bbf67");
// CONCATENATED MODULE: ./src/images/svg/delimeter.svg
/* harmony default export */ var delimeter = (__webpack_require__.p + "svg/delimeter.svg?hash=6c5cc81c03eb8c10e9cb04dc9878ea67");
// CONCATENATED MODULE: ./src/images/svg/play.svg
/* harmony default export */ var play = (__webpack_require__.p + "svg/play.svg?hash=4b857be22bb756ccef8d7cc39c7342a4");
// CONCATENATED MODULE: ./src/images/svg/prev.svg
/* harmony default export */ var prev = (__webpack_require__.p + "svg/prev.svg?hash=ee06720eded5f158fe9ea6b7be942ac8");
// CONCATENATED MODULE: ./src/images/svg/next.svg
/* harmony default export */ var next = (__webpack_require__.p + "svg/next.svg?hash=8216e6d48c266282179850d02da3fcd8");
// CONCATENATED MODULE: ./src/images/svg/searchIcon.svg
/* harmony default export */ var searchIcon = (__webpack_require__.p + "svg/searchIcon.svg?hash=24ab41e2f6946bee60e8796b179b3537");
// CONCATENATED MODULE: ./src/images/svg/clearIcon.svg
/* harmony default export */ var clearIcon = (__webpack_require__.p + "svg/clearIcon.svg?hash=6480c789b022ba9b43ed347c80b51c77");
// CONCATENATED MODULE: ./src/images/svg/clearIconRed.svg
/* harmony default export */ var clearIconRed = (__webpack_require__.p + "svg/clearIconRed.svg?hash=a22ec87486e1dedbf9ab35c0bc85cdd9");
// CONCATENATED MODULE: ./src/images/svg/arrowBackIcon.svg
/* harmony default export */ var arrowBackIcon = (__webpack_require__.p + "svg/arrowBackIcon.svg?hash=4b0691f203c10ce7408ec89d56233615");
// CONCATENATED MODULE: ./src/images/svg/arrowBackOutlined.svg
/* harmony default export */ var arrowBackOutlined = (__webpack_require__.p + "svg/arrowBackOutlined.svg?hash=1aba85e05bebce0feaf3889326813527");
// CONCATENATED MODULE: ./src/images/svg/arrowForwardOutlined.svg
/* harmony default export */ var arrowForwardOutlined = (__webpack_require__.p + "svg/arrowForwardOutlined.svg?hash=0eec363cc9b52a38cc3b2db942194d0f");
// CONCATENATED MODULE: ./src/images/svg/downloadBtn.svg
/* harmony default export */ var downloadBtn = (__webpack_require__.p + "svg/downloadBtn.svg?hash=d1475a6f0bc42aaebb82a10a664ff1b5");
// CONCATENATED MODULE: ./src/images/svg/ideaIcon.svg
/* harmony default export */ var ideaIcon = (__webpack_require__.p + "svg/ideaIcon.svg?hash=85481a5aa400aed50c61e95362be42e1");
// CONCATENATED MODULE: ./src/images/svg/documents.svg
/* harmony default export */ var documents = (__webpack_require__.p + "svg/documents.svg?hash=4955d1f742ef7c51f3b6497efcb59fa6");
// CONCATENATED MODULE: ./src/images/svg/graphics.svg
/* harmony default export */ var graphics = (__webpack_require__.p + "svg/graphics.svg?hash=47237d20b032c4b3843c3c0e629ce0e3");
// CONCATENATED MODULE: ./src/images/svg/library.svg
/* harmony default export */ var library = (__webpack_require__.p + "svg/library.svg?hash=a94090c00f8902bd2f2e705cf1398319");
// CONCATENATED MODULE: ./src/images/svg/mapsAndPlans.svg
/* harmony default export */ var mapsAndPlans = (__webpack_require__.p + "svg/mapsAndPlans.svg?hash=dac0955da0675a4c264b1ed117edfb65");
// CONCATENATED MODULE: ./src/images/svg/monuments.svg
/* harmony default export */ var monuments = (__webpack_require__.p + "svg/monuments.svg?hash=9797fe80889544b0f67726890ee455d5");
// CONCATENATED MODULE: ./src/images/svg/newspapers.svg
/* harmony default export */ var newspapers = (__webpack_require__.p + "svg/newspapers.svg?hash=07a333bf393f493290df9ed5dff77a38");
// CONCATENATED MODULE: ./src/images/svg/photos.svg
/* harmony default export */ var photos = (__webpack_require__.p + "svg/photos.svg?hash=9ab3d2768419691d07b71456bdc54fee");
// CONCATENATED MODULE: ./src/images/svg/burger.svg
/* harmony default export */ var burger = (__webpack_require__.p + "svg/burger.svg?hash=ad640e4bea24d06175c25196a13df5b6");
// CONCATENATED MODULE: ./src/images/svg/logoIcon.svg
/* harmony default export */ var logoIcon = (__webpack_require__.p + "svg/logoIcon.svg?hash=7c6711d60c94b8675093c1729f01cdbb");
// CONCATENATED MODULE: ./src/images/svg/facebook.svg
/* harmony default export */ var facebook = (__webpack_require__.p + "svg/facebook.svg?hash=b67feade0d2267b8784e564fde265134");
// CONCATENATED MODULE: ./src/images/svg/instagram.svg
/* harmony default export */ var instagram = (__webpack_require__.p + "svg/instagram.svg?hash=2e2fbf31ecd683171703bac0788504e9");
// CONCATENATED MODULE: ./src/images/svg/youtube.svg
/* harmony default export */ var youtube = (__webpack_require__.p + "svg/youtube.svg?hash=630b28229c6799b13d2293de8f7a0e4f");
// CONCATENATED MODULE: ./src/images/svg/index.js

























// CONCATENATED MODULE: ./src/images/jpg/photo.jpg
/* harmony default export */ var photo = (__webpack_require__.p + "jpg/photo.jpg?hash=fe6ac03d4d1ecdfc2ed7bdd5673ceaed");
// CONCATENATED MODULE: ./src/images/jpg/bannerBG.jpg
/* harmony default export */ var bannerBG = (__webpack_require__.p + "jpg/bannerBG.jpg?hash=15fe2364bd6036a1c473d842930155dd");
// CONCATENATED MODULE: ./src/images/jpg/index.js


// CONCATENATED MODULE: ./src/images/index.js


// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./src/components/sliders/homeSlider/scripts.js

jquery_default()(document).ready(function () {
  jquery_default()(".js-slider__slider").slick({
    slidesToShow: 3,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev sliderItem__arrow sliderItem__arrow--prev"><img src="svg/prev.svg" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-prev sliderItem__arrow sliderItem__arrow--next"><img src="svg/next.svg" alt="Next"></button>'
  });
});
// CONCATENATED MODULE: ./src/components/select/scripts.js

jquery_default()(document).ready(function () {
  jquery_default()(".select2Simple").select2({
    placeholder: "Плейсхолдер",
    allowClear: true,
    minimumResultsForSearch: -1
  });
  jquery_default()(".select2Search").select2({
    placeholder: "Выбрать автора",
    allowClear: true,
    searchInputPlaceholder: "Начните ввод"
  });
  jquery_default()(".custom-dropdown").not(".custom-dropdown2").customSelect({
    search: false,
    placeholder: "Плейсхолдер",
    transition: 200
  });
  jquery_default()(".custom-dropdown2").customSelect({
    search: true,
    placeholder: "Выбрать автора",
    transition: 200
  });
  jquery_default()(".custom-dropdown2").siblings(".custom-select").find("input").attr("placeholder", "Начните вводить");
});
// CONCATENATED MODULE: ./src/pages/home/sourcesTypes.js

jquery_default()(document).ready(function () {// const
  // $(".sourcesTypesInner").slick({
  //   slidesToShow: 7,
  //   centerMode: true,
  //   variableWidth: true,
  //   initialSlide: 4,
  //   centerPadding: "50%",
  //   responsive: [
  //     // {
  //     //   breakpoint: 1024,
  //     //   settings: {
  //     //     slidesToShow: 3,
  //     //     slidesToScroll: 3,
  //     //     infinite: true,
  //     //     dots: true
  //     //   }
  //     // },
  //     // {
  //     //   breakpoint: 600,
  //     //   settings: {
  //     //     slidesToShow: 2,
  //     //     slidesToScroll: 2
  //     //   }
  //     // },
  //     // {
  //     //   breakpoint: 480,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1
  //     //   }
  //     // }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ],
  // });
});
// CONCATENATED MODULE: ./src/pages/home/index.pug
/* harmony default export */ var home = (__webpack_require__.p + "index.html");
// CONCATENATED MODULE: ./src/pages/ui.pug
/* harmony default export */ var ui = (__webpack_require__.p + "ui.html");
// CONCATENATED MODULE: ./src/index.js














/***/ })
],[[8,1,2]]]);