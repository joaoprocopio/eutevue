export const env = {
  get DEV() {
    return import.meta.env.MODE === 'development'
  },
}
