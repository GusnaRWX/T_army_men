import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { css, Global } from '@emotion/react'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <Global
          styles={
            css`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

            @font-face {
                font-family: Modern Era;
                font-weight: 300;
                src: url('/font/ModernEra-Light.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 200;
                src: url('/font/ModernEra-Light.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 300;
                src: url('/font/ModernEra-Light.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 400;
                src: url('/font/ModernEra-Regular.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 500;
                src: url('/font/ModernEra-Medium.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 600;
                src: url('/font/ModernEra-Bold.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 700;
                src: url('/font/ModernEra-Bold.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 800;
                src: url('/font/ModernEra-ExtraBold.ttf') format("truetype");
              }

              @font-face {
                font-family: Modern Era;
                font-weight: 900;
                src: url('/font/ModernEra-Black.ttf') format("truetype");
              }

              body {
                min-height: 100vh;
                background: rgb(199, 199, 199);
                font-family: 'Modern Era', san-serif;
                margin: 0;
                padding: 0;
              }

              h1, h2, h3, h4, h5, h6, p, span {
                margin: 0;
                font-family: 'Modern Era', san-serif;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              * {
                box-sizing: border-box;
                -ms-overflow-style: none;
                scrollbar-color: transparent transparent;
              }

              *::-webkit-scrollbar {
                display: none;
              }

              .card-container {
                margin: 0;
                padding: 2rem 2rem;
              }

              .text-left {
                text-align: left;
              }

              .text-right {
                text-align: right;
              }

              .text-center {
                text-align: center;
              }

              .fluid {
                width: 100%;
              }

              .ma {
                &-1 {
                    margin: 1rem;
                }
                &-2 {
                    margin: 2rem;
                }
                &-3 {
                    margin: 3rem;
                }
                &-4 {
                    margin: 4rem;
                }
                &-5 {
                    margin: 5rem;
                }
              }

              .mt {
                &-1 {
                    margin-top: 1rem;
                }
                &-2 {
                    margin-top: 2rem;
                }
                &-3 {
                    margin-top: 3rem;
                }
                &-4 {
                    margin-top: 4rem;
                }
                &-5 {
                    margin-top: 5rem;
                }
              }

              .mb {
                &-1 {
                    margin-bottom: 1rem;
                }
                &-2 {
                    margin-bottom: 2rem;
                }
                &-3 {
                    margin-bottom: 3rem;
                }
                &-4 {
                    margin-bottom: 4rem;
                }
                &-5 {
                    margin-bottom: 5rem;
                }
              }

              .mr {
                &-1 {
                    margin-right: 1rem;
                }
                &-2 {
                    margin-right: 2rem;
                }
                &-3 {
                    margin-right: 3rem;
                }
                &-4 {
                    margin-right: 4rem;
                }
                &-5 {
                    margin-right: 5rem;
                }
              }

              .ml {
                &-1 {
                    margin-left: 1rem;
                }
                &-2 {
                    margin-left: 2rem;
                }
                &-3 {
                    margin-left: 3rem;
                }
                &-4 {
                    margin-left: 4rem;
                }
                &-5 {
                    margin-left: 5rem;
                }
              }

              .pa {
                &-1 {
                    padding: 1rem;
                }
                &-2 {
                    padding: 2rem;
                }
                &-3 {
                    padding: 3rem;
                }
                &-4 {
                    padding: 4rem;
                }
                &-5 {
                    padding: 5rem;
                }
              }

              .pl {
                &-1 {
                    padding-left: 1rem;
                }
                &-2 {
                    padding-left: 2rem;
                }
                &-3 {
                    padding-left: 3rem;
                }
                &-4 {
                    padding-left: 4rem;
                }
                &-5 {
                    padding-left: 5rem;
                }
              }

              .pr {
                &-1 {
                    padding-right: 1rem;
                }
                &-2 {
                    padding-right: 2rem;
                }
                &-3 {
                    padding-right: 3rem;
                }
                &-4 {
                    padding-right: 4rem;
                }
                &-5 {
                    padding-right: 5rem;
                }
              }

              .pt {
                &-1 {
                    padding-top: 1rem;
                }
                &-2 {
                    padding-top: 2rem;
                }
                &-3 {
                    padding-top: 3rem;
                }
                &-4 {
                    padding-top: 4rem;
                }
                &-5 {
                    padding-top: 5rem;
                }
              }

              .pb {
                &-1 {
                    padding-bottom: 1rem;
                }
                &-2 {
                    padding-bottom: 2rem;
                }
                &-3 {
                    padding-bottom: 3rem;
                }
                &-4 {
                    padding-bottom: 4rem;
                }
                &-5 {
                    padding-bottom: 5rem;
                }
              }

              .fs {
                &-12 {
                  font-size: 12px;

                  &.bold {
                    font-weight: bold;
                  }

                  &.grey {
                    color: #606060;
                  }

                  &.blue {
                    color: #4E3B95;
                  }

                  &.primary {
                    color: #D3B533;
                  }
                }
                &-14 {
                  font-size: 14px;

                  &.bold {
                    font-weight: bold;
                  }

                  &.grey {
                    color: #606060;
                  }

                  &.blue {
                    color: #4E3B95;
                  }

                  &.primary {
                    color: #D3B533;
                  }
                }
                &-16 {
                  font-size: 16px;

                  &.bold {
                    font-weight: bold;
                  }

                  &.grey {
                    color: #606060;
                  }

                  &.blue {
                    color: #4E3B95;
                  }

                  &.primary {
                    color: #D3B533;
                  }
                }
                &-20 {
                  font-size: 20px;

                  &.bold {
                    font-weight: bold;
                  }

                  &.grey {
                    color: #606060;
                  }

                  &.blue {
                    color: #4E3B95;
                  }

                  &.primary {
                    color: #D3B533;
                  }
                }
              }

              .loading {
                background-image: url('/icons/loader.svg');
                width: 50px;
                height: 50px;
                background-size: cover;
                animation: rotation 2s infinite linear;
              }

              @keyframes rotation {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(359deg);
                }
              }

              table {
                border-collapse: collapse;
                padding: 1rem;
                border-spacing: 0;
              }

              th, td {
                padding: 1rem;
                border: 1px solid #DDDDDD;
              }

              :root {
                --rsbs-handle-bg: #4b4b4b;
                --rsbs-ml: env(safe-area-inset-left);
                --rsbs-mr: env(safe-area-inset-right);
                --rsbs-antigap-scale-y: 0;
                --rsbs-backdrop-bg: rgb(0, 0, 0, 0);
                --rsbs-bg: #FFFFFF;
                --rsbs-backdrop-opacity: 1;
                --rsbs-content-opacity: 1;
                --rsbs-overlay-h: 0px;
                --rsbs-overlay-rounded: 16px;
                --rsbs-overlay-translate-y: 0px;
              }

              [data-rsbs-overlay] {
                border-top-left-radius: var(--rsbs-overlay-rounded, 16px);
                border-top-right-radius: var(--rsbs-overlay-rounded, 16px);
                display: flex;
                background: var(--rsbs-bg, #fff);
                width: 100%;
                max-width: 450px;
                margin: auto;
                border: 2px solid #DDDDDD;
                height: 100%;
                left: 0;
                padding: .5rem;
                right: 0;
                flex-direction: column;
                height: var(--rsbs-overlay-h, 0px);
                transform: translate3d(0, var(--rsbs-overlay-translate-y, 0px), 0);
                will-change: height;
              }

              @media only screen and (min-width: 450px) and (max-width: 1536px){
                [data-rsbs-overlay] {
                  width: 450px !important;
                  height: var(--rsbs-overlay-h, 10px);
                }
              }

              @media only screen and (min-device-width: 450px) and (max-device-width: 1536px){
                [data-rsbs-overlay] {
                  width: 450px !important;
                  height: var(--rsbs-overlay-h, 10px);
                }
              }

              [data-rsbs-overlay]:focus {
                outline: none;
              }

              [data-rsbs-overlay],
              [data-rsbs-root]:after {
                max-width: var(--rsbs-max-w, auto);
                margin-left: var(--rsbs-ml, env(safe-area-inset-left));
                margin-right: var(--rsbs-mr, env(safe-area-inset-right));
              }

              [data-rsbs-backdrop] {
                top: 0;
                bottom: 0;
                background-color: var(--rsbs-backdrop-bg);
                will-change: opacity;
                cursor: pointer;
                opacity: 1;
              }

              [data-rsbs-overlay],
              [data-rsbs-backdrop],
              [data-rsbs-root]:after {
                z-index: 3;
                -ms-scroll-chaining: none;
                overscroll-behavior: none;
                touch-action: none;
                position: fixed;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
              }



              [data-rsbs-is-dismissable="false"] [data-rsbs-backdrop] {
                cursor: ns-resize;
              }

              [data-rsbs-root]:after {
                content: "";
                pointer-events: none;
                background: var(--rsbs-bg, #fff);
                height: 1px;
                transform-origin: bottom;
                transform: scale3d(1, var(--rsbs-antigap-scale-y, 0), 1);
                will-change: transform;
              }

              [data-rsbs-footer],
              [data-rsbs-header] {
                flex-shrink: 0;
                cursor: ns-resize;
              }

              [data-rsbs-header] {
                text-align: center;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                box-shadow: 0 1px 0 rgba(46, 59, 66, 0.125);
                z-index: 1;
                padding-top: calc(20px + env(safe-area-inset-top));
                padding-bottom: 8px;
              }
              [data-rsbs-header]:before {
                position: absolute;
                content: "";
                display: block;
                width: 36px;
                height: 4px;
                top: calc(8px + env(safe-area-inset-top));
                left: 50%;
                transform: translateX(-50%);
                border-radius: 2px;
                background-color: var(--rsbs-handle-bg, hsla(0, 0%, 0%, 0.14));
              }

              @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
                [data-rsbs-header]:before {
                  transform: translateX(-50%) scaleY(0.75);
                }
              }
              [data-rsbs-has-header="false"] [data-rsbs-header] {
                box-shadow: none;
                padding-top: calc(12px + env(safe-area-inset-top));
              }

              [data-rsbs-scroll] {
                flex-shrink: 1;
                flex-grow: 1;
                -webkit-tap-highlight-color: revert;
                -webkit-touch-callout: revert;
                -webkit-user-select: auto;
                -ms-user-select: auto;
                -moz-user-select: auto;
                user-select: auto;
                overflow: auto;
                -ms-scroll-chaining: none;
                overscroll-behavior: contain;
                -webkit-overflow-scrolling: touch;
              }

              [data-rsbs-scroll]:focus {
                outline: none;
              }

              [data-rsbs-has-footer="false"] [data-rsbs-content] {
                padding-bottom: env(safe-area-inset-bottom);
              }

              [data-rsbs-content] {
                /* The overflow hidden is to ensure any margin on child nodes are included when the resize observer is measuring the height */
                overflow-y: auto;
              }

              [data-rsbs-footer] {
                box-shadow: 0 -1px 0 rgba(46, 59, 66, 0.125), 0 2px 0 var(--rsbs-bg, #fff);
                overflow: hidden;
                z-index: 1;
              }

              [data-rsbs-is-dismissable='true'],
              [data-rsbs-is-dismissable='false']:matches([data-rsbs-state='opening'], [data-rsbs-state='closing']) {
                & :matches([data-rsbs-header], [data-rsbs-scroll], [data-rsbs-footer]) > * {
                  opacity: var(--rsbs-content-opacity);
                }
                & [data-rsbs-backdrop] {
                  opacity: var(--rsbs-backdrop-opacity);
                }
              }

              [data-rsbs-state='closed'],
              [data-rsbs-state='closing'] {
                /* Allows interactions on the rest of the page before the close transition is finished */
                pointer-events: none;
              }

              @keyframes snackbarin {
                from {
                  top: 0;
                  opacity: 0;
                }

                to {
                  top: 30px;
                  opacity: 1;
                }
              }

              @-webkit-keyframes snackbarin {
                from {
                  top: 0;
                  opacity: 0;
                }

                to {
                  top: 30px;
                  opacity: 1;
                }
              }

              @keyframes snackbarout {
                from {
                  top: 30px;
                  opacity: 1;
                }

                to {
                  top: 0;
                  opacity: 0;
                }
              }

              @-webkit-keyframes snackbarout {
                from {
                  top: 30px;
                  opacity: 1;
                }

                to {
                  top: 0;
                  opacity: 0;
                }
              }

            `
          }
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
