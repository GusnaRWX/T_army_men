import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SnackbarStyled } from './snackbarStyled'
import { removeTagHtml } from '@/utils/helpers'
function Snackbar ({
  text,
  type = 'regular'
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const tempText = removeTagHtml(text)
  useEffect(() => {
    function watchSnackbar () {
      if (!mounted) {
        setOpen(true)
        setTimeout(() => {
          setOpen(false)
          setMounted(true)
        }, 3000)
      }
    }
    watchSnackbar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <>
      {
        type === 'regular'
          ? (
            <SnackbarStyled className={open ? 'open' : ''}>
              {text}

            </SnackbarStyled>
          )
          : (
            <SnackbarStyled className={open ? 'open' : ''}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p>{tempText[0] || ''}</p>
                <p>{tempText[1] || ''}</p>
              </div>
            </SnackbarStyled>
          )
      }

    </>
  )
}

Snackbar.propTypes = {
  text: PropTypes.any,
  type: PropTypes.any
}

export default Snackbar
