import axios from 'axios'

const baseService = axios.create({
  baseURL: 'https://opentdb.com/api.php'
})

export const get = (amount = 10, difficulty = 'hard', type = 'boolean') => {
  return baseService.get('/', {
    params: { amount, difficulty, type }
  })
}
