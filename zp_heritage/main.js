(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 10:
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

var searchFieldToggleHandler = function searchFieldToggleHandler(e) {
  var panel = document.querySelector(".searchPanel__field--open");
  var target = e.target.closest(".js-searchPanel__buttonOpener");
  var form = target ? target.closest(".js-searchPanel") : false;

  if (panel && !e.target.closest(".js-searchPanel")) {
    panel.classList.remove("searchPanel__field--open");
  }

  if (!target) {
    return;
  }

  if (form && !form.classList.contains("searchPanel__field--open")) {
    e.preventDefault();
    form.classList.add("searchPanel__field--open");
  }
};

addEventListener("click", searchFieldToggleHandler);

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

var prevent = function prevent(e) {
  e.preventDefault();
  return false;
};

var searchFieldToggleHandler = function searchFieldToggleHandler(e) {
  var panel = document.querySelector(".js-burgerMenuWrapper"); // const target = e.target.closest(".js-headerBurger");

  if (panel) {
    var backdrop = window.document.body.dataset.backdrop;
    backdrop = backdrop ? +backdrop : 0;

    if (panel.classList.contains("burgerMenuWrapper--opened")) {
      if (!e.target.closest(".js-burgerMenuWrapper") || e.target.closest(".js-burgerMenuButton__close")) {
        window.document.body.dataset.backdrop = backdrop - 1;
        panel.classList.remove("burgerMenuWrapper--opened");
        return prevent(e);
      }
    } else {
      if (e.target.closest(".js-headerBurger")) {
        window.document.body.dataset.backdrop = backdrop + 1;
        panel.classList.add("burgerMenuWrapper--opened");
        return prevent(e);
      }
    }
  }
};

addEventListener("click", searchFieldToggleHandler);

/***/ }),

/***/ 33:
/***/ (function(module, exports) {



/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/fonts/index.less
var fonts = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/select2/dist/js/select2.js
var select2 = __webpack_require__(9);

// EXTERNAL MODULE: ./src/components/select/pluginForSelect2.js
var pluginForSelect2 = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/dropzone/dist/dropzone.js
var dropzone = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/inputmask/index.js
var inputmask = __webpack_require__(3);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);

// EXTERNAL MODULE: ./src/styles.less
var styles = __webpack_require__(14);

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
/* harmony default export */ var arrowBackIcon = (__webpack_require__.p + "svg/arrowBackIcon.svg?hash=c21ebcfa7f326c3b06e70dba59eb13d3");
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
// CONCATENATED MODULE: ./src/images/svg/arrowDownOutline.svg
/* harmony default export */ var arrowDownOutline = (__webpack_require__.p + "svg/arrowDownOutline.svg?hash=97728ced9351e3f946df1db945f0468b");
// CONCATENATED MODULE: ./src/images/svg/zoomOpen.svg
/* harmony default export */ var zoomOpen = (__webpack_require__.p + "svg/zoomOpen.svg?hash=bdcebdaa6e58a879142450480a918956");
// CONCATENATED MODULE: ./src/images/svg/arrowDropdownCircle.svg
/* harmony default export */ var arrowDropdownCircle = (__webpack_require__.p + "svg/arrowDropdownCircle.svg?hash=2f3daa04099f024efe3fb463c0887be9");
// CONCATENATED MODULE: ./src/images/svg/ok.svg
/* harmony default export */ var ok = (__webpack_require__.p + "svg/ok.svg?hash=cb439f70df4ca1b91fb3af9dc87c5a34");
// CONCATENATED MODULE: ./src/images/svg/index.js





























// CONCATENATED MODULE: ./src/images/jpg/photo.jpg
/* harmony default export */ var photo = (__webpack_require__.p + "jpg/photo.jpg?hash=fe6ac03d4d1ecdfc2ed7bdd5673ceaed");
// CONCATENATED MODULE: ./src/images/jpg/bannerBG.jpg
/* harmony default export */ var bannerBG = (__webpack_require__.p + "jpg/bannerBG.jpg?hash=15fe2364bd6036a1c473d842930155dd");
// CONCATENATED MODULE: ./src/images/jpg/letter.jpg
/* harmony default export */ var letter = (__webpack_require__.p + "jpg/letter.jpg?hash=8b9234d932500921dd521db1cff04c27");
// CONCATENATED MODULE: ./src/images/jpg/document.jpg
/* harmony default export */ var jpg_document = (__webpack_require__.p + "jpg/document.jpg?hash=ee9dd0ad1aff3d971338e5b1804eea23");
// CONCATENATED MODULE: ./src/images/jpg/searchResultPreview.jpg
/* harmony default export */ var searchResultPreview = (__webpack_require__.p + "jpg/searchResultPreview.jpg?hash=19126b86f874e3d4978169a30b00a944");
// CONCATENATED MODULE: ./src/images/jpg/index.js





// CONCATENATED MODULE: ./src/images/index.js


// EXTERNAL MODULE: ./src/components/search/scripts.js
var scripts = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/tiny-slider.js + 41 modules
var tiny_slider = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(1);
var size_default = /*#__PURE__*/__webpack_require__.n(size);

// CONCATENATED MODULE: ./src/components/sliders/homeSlider/scripts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var scripts_homeSlider = function homeSlider(settings) {
  var collection = document.querySelector(settings.container);

  if (!collection) {
    return false;
  }

  var collectionSize = size_default()(collection.children);

  return Object(tiny_slider["a" /* tns */])(_objectSpread({
    items: 1,
    center: true,
    mouseDrag: true,
    nav: false,
    controls: collectionSize > 1,
    responsive: {
      960: {
        items: 2,
        controls: collectionSize > 2
      },
      1400: {
        items: 3,
        controls: collectionSize > 3
      }
    }
  }, settings));
};
var collectionsSlider = scripts_homeSlider({
  container: ".homeSliderWrapper--collections .js-homeSlider__homeSlider",
  prevButton: ".homeSliderWrapper--collections .homeSliderItem__arrow--prev",
  nextButton: ".homeSliderWrapper--collections .homeSliderItem__arrow--next"
});
var recentReceiptsSlider = scripts_homeSlider({
  container: ".homeSliderWrapper--recent-receipts .js-homeSlider__homeSlider",
  prevButton: ".homeSliderWrapper--recent-receipts .homeSliderItem__arrow--prev",
  nextButton: ".homeSliderWrapper--recent-receipts .homeSliderItem__arrow--next"
});
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./src/components/select/scripts.js

jquery_default()(document).ready(function () {
  jquery_default()(".select2Simple").select2({
    // placeholder: "Плейсхолдер",
    // allowClear: true,
    minimumResultsForSearch: -1
  });
  jquery_default()(".select2Search").select2({
    // placeholder: "Обрати автора",
    // allowClear: true,
    searchInputPlaceholder: "Почніть вводити автора"
  });
  jquery_default()('.select2-selection__arrow b[role="presentation"]').hide();
  jquery_default()(".select2-selection__arrow").append('<img class="dropdownArrow" src="svg/arrowDownOutline.svg" alt="drop" />'); // Dropdown from search panel

  (function () {
    var wrapper = jquery_default()(".searchSource");
    var select = wrapper.find("select");
    var options = select.find("option");
    var DIVselected = document.createElement("DIV");
    var DIVdropdown = document.createElement("DIV");
    var arrow = '<img class="searchSourceDropdownArrow" src="svg/arrowDropdownCircle.svg" alt="drop" />';
    select.hide();
    jquery_default()(DIVselected).attr("class", "searchSourceSelected");
    jquery_default()(DIVdropdown).attr("class", "select-items select-hide");
    options.map(function (i, o) {
      var optionText = jquery_default()(o).html();
      select.after(DIVselected);
      jquery_default()(DIVselected); // set default option

      if (i === 0) {
        jquery_default()(DIVselected).html("<span>".concat(optionText, "</span>").concat(arrow));
      } // skip default option for drop


      if (i > 0) {
        jquery_default()(DIVselected).after(DIVdropdown);
        var el = "<div class='select-item' data-val=\"".concat(jquery_default()(o).val(), "\">").concat(optionText, "</div>");
        jquery_default()(DIVdropdown).append(el);
      }
    }); // hide drop by click anywhere

    jquery_default()("body").on("click", function (e) {
      if (!jquery_default()(e.target).hasClass("searchSourceSelected") && !jquery_default()(e.target).hasClass("searchBurger")) {
        if (!jquery_default()(DIVdropdown).hasClass("select-hide")) {
          //dropdown
          jquery_default()(DIVdropdown).addClass("select-hide"); //selected value

          jquery_default()(DIVselected).removeClass("select-open");
        }
      } else {
        //selected value
        jquery_default()(DIVselected).toggleClass("select-open"); //dropdown

        jquery_default()(DIVdropdown).toggleClass("select-hide");
      }
    }); // add active class and set selected

    jquery_default()("body").on("click", ".select-item", function () {
      jquery_default()(".select-item").removeClass("same-as-selected");
      jquery_default()(this).addClass("same-as-selected");
      jquery_default()(DIVselected).find("span").text(jquery_default()(this).html());
      select.val(+jquery_default()(this).attr("data-val"));
      jquery_default()(DIVdropdown).toggleClass("select-hide");
    });
  })(jquery_default.a); // $(".custom-dropdown").not(".custom-dropdown2").customSelect({
  //   search: false,
  //   placeholder: "Плейсхолдер",
  //   transition: 200,
  // });
  //
  // $(".custom-dropdown2").customSelect({
  //   search: true,
  //   placeholder: "Выбрать автора",
  //   transition: 200,
  // });
  //
  // $(".custom-dropdown2")
  //   .siblings(".custom-select")
  //   .find("input")
  //   .attr("placeholder", "Начните вводить");

});
// EXTERNAL MODULE: ./node_modules/nouislider/distribute/nouislider.js
var nouislider = __webpack_require__(7);
var nouislider_default = /*#__PURE__*/__webpack_require__.n(nouislider);

// EXTERNAL MODULE: ./node_modules/wnumb/wNumb.js
var wNumb = __webpack_require__(4);
var wNumb_default = /*#__PURE__*/__webpack_require__.n(wNumb);

// CONCATENATED MODULE: ./src/components/rangeSlider/slider.js



jquery_default()(document).ready(function () {
  var slider = document.querySelector(".slider");

  if (!slider) {
    return;
  }

  nouislider_default.a.create(slider, {
    start: [1208, 2010],
    tooltips: [wNumb_default()({
      decimals: 0
    }), wNumb_default()({
      decimals: 0
    })],
    range: {
      min: 0,
      max: 2000
    }
  });
});
// CONCATENATED MODULE: ./src/components/dropzone/index.js

jquery_default()(document).ready(function () {
  jquery_default()(".dropzoneContainer").dropzone({
    url: "/file/post"
  });
});
// EXTERNAL MODULE: ./src/components/header/index.js
var header = __webpack_require__(32);

// CONCATENATED MODULE: ./src/pages/home/sourcesTypes.js
function sourcesTypes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sourcesTypes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sourcesTypes_ownKeys(Object(source), true).forEach(function (key) { sourcesTypes_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sourcesTypes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sourcesTypes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var sourcesTypes_sourcesTypesSlider = function sourcesTypesSlider(settings) {
  var collection = document.querySelector(settings.container);

  if (!collection) {
    return false;
  }

  var collectionSize = size_default()(collection.children);

  return Object(tiny_slider["a" /* tns */])(sourcesTypes_objectSpread({
    items: 1,
    startIndex: 7,
    center: false,
    mouseDrag: true,
    nav: false,
    controls: collectionSize > 1,
    loop: false,
    responsive: {
      540: {
        items: 2,
        controls: collectionSize > 2
      },
      640: {
        items: 3,
        controls: collectionSize > 3
      },
      768: {
        items: 4,
        controls: collectionSize > 4
      },
      1048: {
        items: 5,
        controls: collectionSize > 5
      },
      1280: {
        items: 6,
        controls: collectionSize > 6
      },
      1366: {
        items: 7,
        disable: collectionSize <= 7
      }
    }
  }, settings));
};
var sourcesTypes_recentReceiptsSlider = sourcesTypes_sourcesTypesSlider({
  container: ".sourcesTypesWrapper .sourcesTypesInner",
  prevButton: ".sourcesTypesWrapper .homeSliderItem__arrow--prev",
  nextButton: ".sourcesTypesWrapper .homeSliderItem__arrow--next"
});
// EXTERNAL MODULE: ./src/pages/document/slider.js
var document_slider = __webpack_require__(33);

// CONCATENATED MODULE: ./src/pages/home/playerControl.js

var videoPlayerWrap = jquery_default()(".topBannerVideo");
var videoPlayer = jquery_default()(".topBannerVideo__video");
var playBtn = jquery_default()(".topBannerVideo__play");
var pauseBtn = jquery_default()(".topBannerVideo__pause");
playBtn.on("click", function () {
  videoPlayer[0].play();
  videoPlayerWrap.addClass("isPlayed");
  playBtn.addClass("isHidden");
  pauseBtn.removeClass("isHidden");
});
pauseBtn.on("click", function () {
  videoPlayer[0].pause();
  videoPlayerWrap.removeClass("isPlayed");
  playBtn.removeClass("isHidden");
  pauseBtn.addClass("isHidden");
});
// CONCATENATED MODULE: ./src/pages/signUp/index.js

inputmask_default()({
  mask: "+38 999 999 99 99"
}).mask(".js-phoneField");
// CONCATENATED MODULE: ./src/pages/home/index.pug
/* harmony default export */ var home = (__webpack_require__.p + "index.html");
// CONCATENATED MODULE: ./src/pages/search/search.pug
/* harmony default export */ var search = (__webpack_require__.p + "search.html");
// CONCATENATED MODULE: ./src/pages/document/document.pug
/* harmony default export */ var document_document = (__webpack_require__.p + "document.html");
// CONCATENATED MODULE: ./src/pages/document/zoomed-page-document.pug
/* harmony default export */ var zoomed_page_document = (__webpack_require__.p + "zoomed-page-document.html");
// CONCATENATED MODULE: ./src/pages/ui.pug
/* harmony default export */ var ui = (__webpack_require__.p + "ui.html");
// CONCATENATED MODULE: ./src/pages/collection/collection.pug
/* harmony default export */ var collection_collection = (__webpack_require__.p + "collection.html");
// CONCATENATED MODULE: ./src/pages/collection/collection-no-comments.pug
/* harmony default export */ var collection_no_comments = (__webpack_require__.p + "collection-no-comments.html");
// CONCATENATED MODULE: ./src/pages/collection/collection-entered.pug
/* harmony default export */ var collection_entered = (__webpack_require__.p + "collection-entered.html");
// CONCATENATED MODULE: ./src/pages/collection/collection-entered-admin.pug
/* harmony default export */ var collection_entered_admin = (__webpack_require__.p + "collection-entered-admin.html");
// CONCATENATED MODULE: ./src/pages/detaledSearch/detaledSearch.pug
/* harmony default export */ var detaledSearch = (__webpack_require__.p + "detaledSearch.html");
// CONCATENATED MODULE: ./src/pages/cabinet/cabinet.pug
/* harmony default export */ var cabinet = (__webpack_require__.p + "cabinet.html");
// CONCATENATED MODULE: ./src/pages/cabinet/cabinet-with-doc.pug
/* harmony default export */ var cabinet_with_doc = (__webpack_require__.p + "cabinet-with-doc.html");
// CONCATENATED MODULE: ./src/pages/cabinet/profile/profile.pug
/* harmony default export */ var profile = (__webpack_require__.p + "profile.html");
// CONCATENATED MODULE: ./src/pages/cabinet/downloadDoc/downloadDoc.pug
/* harmony default export */ var downloadDoc = (__webpack_require__.p + "downloadDoc.html");
// CONCATENATED MODULE: ./src/pages/signIn/signin.pug
/* harmony default export */ var signin = (__webpack_require__.p + "signin.html");
// CONCATENATED MODULE: ./src/pages/signUp/signup.pug
/* harmony default export */ var signup = (__webpack_require__.p + "signup.html");
// CONCATENATED MODULE: ./src/pages.pug
/* harmony default export */ var pages = (__webpack_require__.p + "pages.html");
// CONCATENATED MODULE: ./src/index.js
 // import "owl.carousel";
// import "slick-carousel";




































/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[34,1,2]]]);