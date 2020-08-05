exports.ids = [3,11,12];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowLeft.vue?vue&type=template&id=bf7736fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"currentColor","viewBox":"0 0 20 20"}},[_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z\" clip-rule=\"evenodd\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowLeft.vue?vue&type=template&id=bf7736fc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowLeft.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "161ec5e6"
  
)

/* harmony default export */ var IconArrowLeft = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowRight.vue?vue&type=template&id=5c757068&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"currentColor","viewBox":"0 0 20 20"}},[_vm._ssrNode("<path fill-rule=\"evenodd\" d=\"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowRight.vue?vue&type=template&id=5c757068&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowRight.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a01de66"
  
)

/* harmony default export */ var IconArrowRight = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue?vue&type=template&id=034a7bd5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.prev || _vm.next)?_c('div',{staticClass:"flex justify-between items-center lg:px-8 pt-4 border-t dark:border-gray-800"},[(_vm.prev)?_c('NuxtLink',{staticClass:"text-primary-500 font-bold hover:underline flex items-center p-2 pl-0",attrs:{"to":_vm.toLink(_vm.prev.slug)}},[_c('IconArrowLeft',{staticClass:"w-4 h-4 mr-1"}),_vm._v("\n    "+_vm._s(_vm.prev.title)+"\n  ")],1):_c('span',[_vm._v(" ")]),_vm._ssrNode(" "),(_vm.next)?_c('NuxtLink',{staticClass:"text-primary-500 font-bold hover:underline flex items-center p-2 pr-0",attrs:{"to":_vm.toLink(_vm.next.slug)}},[_vm._v("\n    "+_vm._s(_vm.next.title)+"\n    "),_c('IconArrowRight',{staticClass:"w-4 h-4 ml-1"})],1):_c('span',[_vm._v(" ")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue?vue&type=template&id=034a7bd5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppPrevNextvue_type_script_lang_js_ = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return this.localePath('slug');
      }

      return this.localePath({
        name: 'slug',
        params: {
          slug
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppPrevNextvue_type_script_lang_js_ = (AppPrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppPrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14e7de86"
  
)

/* harmony default export */ var AppPrevNext = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconArrowLeft: __webpack_require__(60).default,IconArrowRight: __webpack_require__(61).default})


/***/ })

};;
//# sourceMappingURL=AppPrevNext.js.map