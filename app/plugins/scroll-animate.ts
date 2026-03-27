export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('aos', {
    // SSR: no-op, CSS handles initial state via [data-aos] selector
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      const delay = el.dataset.aosDelay ? parseInt(el.dataset.aosDelay) : 0

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.classList.add('aos-animate')
              }, delay)
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(el)
    }
  })
})
