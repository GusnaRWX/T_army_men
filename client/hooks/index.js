import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 *
 * Hook Form
 *
 * @param {*} initialValues
 * @param {Boolean} validateOnChange
 * @param {*} validate
 */
export const useForm = (
  initialValues,
  validateOnChange = false,
  validate
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const { name, value } = e.target
    // * Set Dynamic Value from Form
    setValues({
      ...values,
      [name]: value
    })

    // * Validate When On Change
    if (validateOnChange) {
      validate({ [name]: value })
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  const resetField = (name, value) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    resetField
  }
}

export const useAuth = () => {
  return useContext()
}

export const useAppDispatch = useDispatch
export const useAppSelectors = useSelector

export function useClickAwayListener (ref, callback, active) {
  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target) && active) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}

export function useDetectVirtualKeyboard () {
  const [onDetect, setOnDetect] = useState(false)
  if (typeof window !== 'undefined') {
    const VIEWPORT_VS_CLIENT_HEIGHT_RATIO = 0.75
    window.visualViewport.addEventListener('resize', function (event) {
      if (
        (event.target.height * event.target.scale) / window.screen.height <
        VIEWPORT_VS_CLIENT_HEIGHT_RATIO
      )
        setOnDetect(true)
      else
        setOnDetect(false)
    })
  }
  return onDetect
}
