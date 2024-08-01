import logements from '../data/logements.json'

export const fetchLogements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(logements)
    }, 500)
  })
}
