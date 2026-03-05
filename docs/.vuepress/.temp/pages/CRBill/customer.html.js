import comp from "C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/CRBill/customer.html.vue"
const data = JSON.parse("{\"path\":\"/CRBill/customer.html\",\"title\":\"Customer\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1772731951000,\"contributors\":[{\"name\":\"Teshan Jayakody\",\"username\":\"\",\"email\":\"igw545@inetlp.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"12fcec0a37a552e0fcff3fbef59af5c68395c4c5\",\"time\":1772731951000,\"email\":\"igw545@inetlp.com\",\"author\":\"Teshan Jayakody\",\"message\":\"Index, Login and the CRBill sections\"}]},\"filePathRelative\":\"CRBill/customer.md\"}")
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
