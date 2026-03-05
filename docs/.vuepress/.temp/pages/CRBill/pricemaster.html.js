import comp from "C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/pricemaster.html.vue"
const data = JSON.parse("{\"path\":\"/CRBill/pricemaster.html\",\"title\":\"Price Master\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"CRBill/pricemaster.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
