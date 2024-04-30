/* eslint-disable no-unused-expressions */
import { store } from '@/store/index'
import { setResponserMessage } from '@/store/reducers/slice/responserSlice'
import { monthName } from './siteSetting'

export const copy = (value, messageText) => {
  navigator.clipboard.writeText(value)
  store.dispatch(setResponserMessage({
    code: 200,
    message: messageText
  }))
  setTimeout(() => {
    store.dispatch(setResponserMessage({
      code: 0,
      message: null
    }))
  }, 3000)
}

export const formatDate = (date) => {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }
  if (day.length < 2) { day = '0' + day }
  const dateFormated = [year, month, day].join('-')
  return dateFormated
}

export const getMonth = (date) => {
  const d = new Date(date)
  const month = d.getMonth()

  return monthName[month]
}

export const formatMonthNumber = (month, year) => {
  const found = monthName.find((el) => el.text === month)
  let tempMonth = '' + found.id

  if (tempMonth.length < 2)
    tempMonth = '0' + tempMonth

  return [tempMonth, year].join('-')
}

export const getYear = (date) => {
  const d = new Date(date)
  const year = d.getFullYear()

  return year
}

/**
 * Remove tag html
 *
 * @param {String} response
 * @returns
 */
export const removeTagHtml = (response) => {
  return response ? response?.split('<br>') : ''
  // const split = response.split('<br>')
  // // const pattern = /(<([^>]+)>)/ig
  // // return response.replace(pattern, ' ')
  // return [split[0], split[1]].join('\n')
}

/**
 * Regex White Space or space or anything space
 * 
 * @param {string} value 
 * @returns
 */
export const removeWhiteSpace = (value) => {
  const regex = /\s/g
  return regex.test(value)
}

/**
 * Download File
 * 
 * @param {*} name 
 * @param {*} data 
 */

export const downloadFile = (name, data) => {
  // eslint-disable-next-line no-undef
  const date = formatDate(new Date())
  const filename = name + '-' + date
  // eslint-disable-next-line no-undef
  const url = window.URL.createObjectURL(data)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename + '.xlsx') // or any other extension
  document.body.appendChild(link)
  link.click()
}
