import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const Styled = styled.div`
  display: flex;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #fff;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: 1.2px; left: .5px;
      font-size: 18px;
      padding: 0 1px 0 2px;
      color: #fff;
      background: #D3B533;
      border-radius: 3px;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

function Checkbox({
  checked = false,
  onChange = () => { }
}) {
  const router = useRouter()
  return (
    <Styled
      onClick={onChange}
    >
      <input
        type='checkbox'
        checked={checked}
      />
      <label>Saya menyetujui <span
        style={{ color: '#D3B533', textDecoration: 'underline' }}
        onClick={() => { router.push('/about-treasury/syarat-dan-ketentuan') }}
      >Syarat dan Ketentuan</span> yang telah ditentukan oleh Treasury</label>

    </Styled>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox
