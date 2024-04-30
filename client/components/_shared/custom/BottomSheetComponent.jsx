import React from 'react'
import PropTypes from 'prop-types'
import { BottomSheet } from 'react-spring-bottom-sheet'
// import dynamic from 'next/dynamic'
// import { ClassNames } from '@emotion/react'

// const BottomSheetContainer = dynamic(() => import('../Portal'), {
//   ssr: false,
//   loading: () => <div>...</div>
// })

function BottomSheetComponent ({
  sheetOpen,
  onDismiss,
  children,
  dynamic = false,
  snapHeight = 0.6,
  inHeight = 2,
  ...otherProps
}) {
  // if (!sheetOpen)
  //   return null
  return (
    <>
      {
        !dynamic && (
          <BottomSheet
            open={sheetOpen}
            onDismiss={onDismiss}
            snapPoints={({ maxHeight }) => [maxHeight / 1.2, maxHeight * 10]}
          >
            {children}
          </BottomSheet>
        )
      }{
        dynamic && (
          <BottomSheet
            open={sheetOpen}
            onDismiss={onDismiss}
            defaultSnap={({ maxHeight }) => maxHeight / 2}
            snapPoints={({ maxHeight }) => [
              maxHeight - maxHeight / 10,
              maxHeight / inHeight,
              maxHeight * snapHeight
            ]}
            {...otherProps}
          >
            {children}
          </BottomSheet>
        )
      }
    </>

  )
}

BottomSheetComponent.propTypes = {
  sheetOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  children: PropTypes.node,
  dynamic: PropTypes.bool,
  snapHeight: PropTypes.number,
  inHeight: PropTypes.number
}

export default BottomSheetComponent
