import Vue from 'vue'

const globalComponents = {
  AppColorSwitcher: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppColorSwitcher.vue' /* webpackChunkName: "components_global/app/AppColorSwitcher" */).then(c => c.default || c),
  AppCopyButton: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppCopyButton.vue' /* webpackChunkName: "components_global/app/AppCopyButton" */).then(c => c.default || c),
  AppDropdown: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppDropdown.vue' /* webpackChunkName: "components_global/app/AppDropdown" */).then(c => c.default || c),
  AppFooter: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppFooter.vue' /* webpackChunkName: "components_global/app/AppFooter" */).then(c => c.default || c),
  AppGithubLink: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppGithubLink.vue' /* webpackChunkName: "components_global/app/AppGithubLink" */).then(c => c.default || c),
  AppHeader: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppHeader.vue' /* webpackChunkName: "components_global/app/AppHeader" */).then(c => c.default || c),
  AppLangSwitcher: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppLangSwitcher.vue' /* webpackChunkName: "components_global/app/AppLangSwitcher" */).then(c => c.default || c),
  AppPrevNext: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppPrevNext.vue' /* webpackChunkName: "components_global/app/AppPrevNext" */).then(c => c.default || c),
  AppSearch: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppSearch.vue' /* webpackChunkName: "components_global/app/AppSearch" */).then(c => c.default || c),
  AppToc: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppToc.vue' /* webpackChunkName: "components_global/app/AppToc" */).then(c => c.default || c),
  Alert: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\Alert.vue' /* webpackChunkName: "components_global/base/Alert" */).then(c => c.default || c),
  CodeBlock: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeBlock.vue' /* webpackChunkName: "components_global/base/CodeBlock" */).then(c => c.default || c),
  CodeGroup: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeGroup.vue' /* webpackChunkName: "components_global/base/CodeGroup" */).then(c => c.default || c),
  CodeSandbox: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeSandbox.vue' /* webpackChunkName: "components_global/base/CodeSandbox" */).then(c => c.default || c),
  List: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\List.vue' /* webpackChunkName: "components_global/base/List" */).then(c => c.default || c),
  ExampleMultiselect: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\examples\\ExampleMultiselect.vue' /* webpackChunkName: "components_global/examples/ExampleMultiselect" */).then(c => c.default || c),
  BuiltWithNuxtDark: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\BuiltWithNuxtDark.vue' /* webpackChunkName: "components_global/icons/BuiltWithNuxtDark" */).then(c => c.default || c),
  BuiltWithNuxtLight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\BuiltWithNuxtLight.vue' /* webpackChunkName: "components_global/icons/BuiltWithNuxtLight" */).then(c => c.default || c),
  IconArrowLeft: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconArrowLeft.vue' /* webpackChunkName: "components_global/icons/IconArrowLeft" */).then(c => c.default || c),
  IconArrowRight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconArrowRight.vue' /* webpackChunkName: "components_global/icons/IconArrowRight" */).then(c => c.default || c),
  IconBadgeCheck: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconBadgeCheck.vue' /* webpackChunkName: "components_global/icons/IconBadgeCheck" */).then(c => c.default || c),
  IconChevronRight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconChevronRight.vue' /* webpackChunkName: "components_global/icons/IconChevronRight" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconClipboardCheck.vue' /* webpackChunkName: "components_global/icons/IconClipboardCheck" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconClipboardCopy.vue' /* webpackChunkName: "components_global/icons/IconClipboardCopy" */).then(c => c.default || c),
  IconExclamation: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconExclamation.vue' /* webpackChunkName: "components_global/icons/IconExclamation" */).then(c => c.default || c),
  IconExternalLink: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconExternalLink.vue' /* webpackChunkName: "components_global/icons/IconExternalLink" */).then(c => c.default || c),
  IconGithub: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconGithub.vue' /* webpackChunkName: "components_global/icons/IconGithub" */).then(c => c.default || c),
  IconInformationCircle: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconInformationCircle.vue' /* webpackChunkName: "components_global/icons/IconInformationCircle" */).then(c => c.default || c),
  IconMenu: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconMenu.vue' /* webpackChunkName: "components_global/icons/IconMenu" */).then(c => c.default || c),
  IconMoon: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconMoon.vue' /* webpackChunkName: "components_global/icons/IconMoon" */).then(c => c.default || c),
  IconSearch: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconSearch.vue' /* webpackChunkName: "components_global/icons/IconSearch" */).then(c => c.default || c),
  IconSun: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconSun.vue' /* webpackChunkName: "components_global/icons/IconSun" */).then(c => c.default || c),
  IconTranslate: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconTranslate.vue' /* webpackChunkName: "components_global/icons/IconTranslate" */).then(c => c.default || c),
  IconTwitter: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconTwitter.vue' /* webpackChunkName: "components_global/icons/IconTwitter" */).then(c => c.default || c),
  IconX: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconX.vue' /* webpackChunkName: "components_global/icons/IconX" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
