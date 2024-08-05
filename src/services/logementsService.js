import logements from '../data/logements.json'

export const getLogements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(logements)
    }, 500)
  })
}
