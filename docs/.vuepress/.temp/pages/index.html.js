import comp from "C:/Users/TeshanJayakody/Projects/vuepress-poc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/INET Logo.png\",\"heroImageStyle\":{\"maxWidth\":\"320px\",\"width\":\"10%\",\"display\":\"block\",\"margin\":\"0 auto\"},\"actions\":[{\"text\":\"Get Started\",\"link\":\"/login.html\",\"type\":\"primary\"},{\"text\":\"Tutorials\",\"link\":\"https://www.youtube.com/@industrialnetworks2876\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Who Are We?\",\"details\":\"Industrial Networks is at the forefront of revolutionizing railyard automation and data acquisition systems across North America.\"},{\"title\":\"Automating Rail Processes\",\"details\":\"At Industrial Networks, we provide a comprehensive range of solutions tailored to the entire rail industry.\"},{\"title\":\"Our Services\",\"details\":\"From expert consulting services to help you find the perfect system to seamless commissioning.\"}],\"footer\":\"© 2025 by Industrial Networks.\"},\"headers\":[],\"git\":{\"updatedTime\":1772731951000,\"contributors\":[{\"name\":\"Teshan Jayakody\",\"username\":\"\",\"email\":\"igw545@inetlp.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"12fcec0a37a552e0fcff3fbef59af5c68395c4c5\",\"time\":1772731951000,\"email\":\"igw545@inetlp.com\",\"author\":\"Teshan Jayakody\",\"message\":\"Index, Login and the CRBill sections\"},{\"hash\":\"b3a8316dec76323e1137d167209ec4b214f18a7a\",\"time\":1772725229000,\"email\":\"igw545@inetlp.com\",\"author\":\"Teshan Jayakody\",\"message\":\"Project Setup\"}]},\"filePathRelative\":\"README.md\"}")
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
