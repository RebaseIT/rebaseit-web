export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path && process.client) {
    const scrollableBody = document.getElementsByClassName('scrollable-body')
    if (scrollableBody.length !== 0) {
      scrollableBody[0].scrollTop = 0
    }
  }
})