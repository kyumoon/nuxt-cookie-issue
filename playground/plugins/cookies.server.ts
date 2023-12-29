export default defineNuxtPlugin(() => {
  const cookie = useCookie('temp')
  if (!cookie.value) {
    cookie.value = 'it\'s inserted on server'
  }
  console.log('plugin:', cookie.value)
})
