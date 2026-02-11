export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  function initObserver() {
    if (import.meta.server) return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )
  }

  function observe(el: Element | null) {
    if (el && observer.value) {
      observer.value.observe(el)
    }
  }

  function observeAll(selector: string = '.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .stagger-children') {
    if (import.meta.server) return

    nextTick(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => observe(el))
    })
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return {
    observe,
    observeAll,
  }
}
