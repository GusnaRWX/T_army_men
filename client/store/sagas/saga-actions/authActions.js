import { post, postPassword } from '@/utils/interceptors'

/**
 *
 * Action Login
 *
 * @param {*} payload
 * @returns
 */

export const login = (payload) => {
  return post('/login', payload)
}

export const postForgetPassword = (payload) => {
  return postPassword(`/password`, payload)
}
