export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/login.html", { loader: () => import(/* webpackChunkName: "login.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/login.html.js"), meta: {"title":"Login"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/CRBill/auditrules.html", { loader: () => import(/* webpackChunkName: "CRBill_auditrules.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/auditrules.html.js"), meta: {"title":"Audit Rules"} }],
  ["/CRBill/brc.html", { loader: () => import(/* webpackChunkName: "CRBill_brc.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/brc.html.js"), meta: {"title":"BRC"} }],
  ["/CRBill/carmaster.html", { loader: () => import(/* webpackChunkName: "CRBill_carmaster.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/carmaster.html.js"), meta: {"title":"Car Master"} }],
  ["/CRBill/customer.html", { loader: () => import(/* webpackChunkName: "CRBill_customer.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/customer.html.js"), meta: {"title":"Customer"} }],
  ["/CRBill/overview.html", { loader: () => import(/* webpackChunkName: "CRBill_overview.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/overview.html.js"), meta: {"title":"Overview"} }],
  ["/CRBill/parts.html", { loader: () => import(/* webpackChunkName: "CRBill_parts.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/parts.html.js"), meta: {"title":"Parts"} }],
  ["/CRBill/pricemaster.html", { loader: () => import(/* webpackChunkName: "CRBill_pricemaster.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/pricemaster.html.js"), meta: {"title":"Price Master"} }],
  ["/CRBill/templates.html", { loader: () => import(/* webpackChunkName: "CRBill_templates.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/templates.html.js"), meta: {"title":"Templates"} }],
  ["/CRBill/vendor.html", { loader: () => import(/* webpackChunkName: "CRBill_vendor.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/vendor.html.js"), meta: {"title":"Vendor"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
