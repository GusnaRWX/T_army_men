import { getStorage } from '@/utils/storage'
import Router from 'next/router'
import { store } from '@/store/index'
import { setResponserMessage } from '@/store/reducers/slice/responserSlice'

export const redirectFromServer = (res, location) => {
  res.writeHead(302, {
    Location: `${location}?expired=true`,
    'Content-Type': 'text/html; charset=utf-8'
  })
  res.end()
}

export async function authProps (ctx) {
  const token = await getStorage('_treasury_army_token')
  const army = await getStorage('_is_army')

  if (typeof token !== 'undefined' && token !== null) {
    if (army === 'false') {
      const props = {
        isAuth: true,
        isArmy: false
      }
      Router.push('/onboarding')
      return { props }
    } else if (army === 'true') {
      const props = {
        isAuth: true,
        isArmy: true
      }
      return { props }
    }
  } else {
    const props = {
      isAuth: false,
      isArmy: false
    }
    store.dispatch(setResponserMessage({
      code: 401,
      message: 'Anda belum login!'
    }))
    setTimeout(() => {
      store.dispatch(setResponserMessage({
        code: 0,
        message: null
      }))
      Router.push('/auth/login')
    }, 3000)
    return { props }
  }
}
