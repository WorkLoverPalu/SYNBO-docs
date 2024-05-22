export const blogPostData = JSON.parse("[]");
export const extraBlogData = JSON.parse("{\"tagsColorsPreset\":[[\"#6aa1b7\",\"#5086a1\",\"rgba(131, 208, 218, 0.314)\"],[\"#299764\",\"#18794e\",\"rgba(16, 185, 129, 0.14)\"],[\"#946300\",\"#915930\",\"rgba(234, 179, 8, 0.14)\"],[\"#d5393e\",\"#b8272c\",\"rgba(244, 63, 94, 0.14)\"],[\"#7e4cc9\",\"#6f42c1\",\"rgba(159, 122, 234, 0.14)\"],[\"#3a5ccc\",\"#3451b2\",\"rgba(100, 108, 255, 0.14)\"],[\"#fab10f\",\"#f39c12\",\"rgba(255, 213, 0, 0.14)\"],[\"#cc6699\",\"#c75191\",\"rgba(255, 153, 204, 0.14)\"]],\"tagsColors\":{}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogData) {
    __VUE_HMR_RUNTIME__.updateBlogData(blogPostData)
  }
  if (__VUE_HMR_RUNTIME__.updateExtraBlogData) {
    __VUE_HMR_RUNTIME__.updateExtraBlogData(extraBlogData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData, extraBlogData }) => {
    __VUE_HMR_RUNTIME__.updateBlogData(blogPostData)
    __VUE_HMR_RUNTIME__.updateExtraBlogData(extraBlogData)
  })
}
