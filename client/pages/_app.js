
import React, { Fragment } from 'react'
import Head from 'next/head'
import '../components/_shared/custom/customStyle.css'
import { wrapper } from '../store'
import PropTypes from 'prop-types'
import Snackbar from '@/components/_shared/Snackbar'
import { useAppSelectors } from '@/hooks/index'
import { clearStorage } from '@/utils/storage'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'

const clientSideEmotionCache = createEmotionCache()

function MyApp ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) {
  const responser = useAppSelectors(state => state.responser)
  if (responser?.code === 401) {
    clearStorage(['_treasury_army_token', '_is_army'])
  }
  return (
    <Fragment>
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel='shortcut icon' href='/treasuryIcon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Treasury Army</title>
        </Head>
        {
          [200, 201].includes(responser.code) && responser?.message !== null && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Snackbar text={responser.message} />
            </div>
          )
        }
        {
          ![200, 201].includes(responser.code) && responser?.message !== null && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Snackbar text={responser.message} type='non-regular' />
            </div>
          )
        }
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
  emotionCache: PropTypes.any
}

export default wrapper.withRedux(MyApp)
