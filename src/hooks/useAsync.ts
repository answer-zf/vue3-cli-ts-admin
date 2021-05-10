import { onMounted, ref } from 'vue'

export const useAsync = (func: () => Promise<any>) => {
  const loading = ref(false)

  onMounted(async () => {
    try {
      loading.value = true
      await func()
      // eslint-disable-next-line
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  })

  return loading
}
