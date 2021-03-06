export default {
  install(Vue, options = {
    time: 1000
  }) {
    Vue.directive('longpress', {
      bind: function (el, binding, vNode) {
        checkBinding(el, binding, vNode)
        let pressTimer = null
        let longPress = false
        const start = (e) => {
          e.preventDefault()
          if (e.type === 'click') {
            return
          }
          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              handler(e)
              longPress = true
            }, options.time)
          }
        }
        const cancel = () => {
          if (pressTimer !== null) {
            clearTimeout(pressTimer)
            pressTimer = null
            longPress = false
          }
        }
        const handler = (e) => {
          binding.value(e, el)
        }
        const bindEvents = (el) => {
          el.addEventListener('touchstart', start)
          el.addEventListener('touchend', (e) => {
            if (pressTimer !== null && longPress === false) {
              el.click()
            }
            cancel(e)
          })
          el.addEventListener('touchcancel',cancel)
          el.addEventListener('touchmove',cancel)
        }
        bindEvents(el)
      }
    })
  }
}

const checkBinding = (el, binding, vNode) => {
  if (typeof binding.value !== 'function') {
    const compName = vNode.context.name
    let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `;
    if (compName) {
      warn += `Found in component '${compName}' `
    }
    console.warn(warn);
  }
}