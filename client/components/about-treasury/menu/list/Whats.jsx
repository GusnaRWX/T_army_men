import React from 'react'
import {
  AboutWrapperMenu,
  AboutWhatContent
} from '../../AboutTreasuryStyled'
import Emblem from '@/components/_shared/Emblem'
import { newItemEmblem } from '@/utils/siteSetting'

function Whats() {
  return (
    <AboutWrapperMenu>
      <p style={{
        fontSize: '16px',
        fontWeight: '700',
        margin: '24px 0'
      }}>
        Apa itu Treasury Army?
      </p>
      <AboutWhatContent>
        <p>
          Ikuti challenge dari Treasury
          dan selesaikan mission untuk
          mendapatkan penghasilan tambahan
          bersama Treasury Army! Mari gerakan
          pasukan Treasury Army kamu kapanpun,
          dimanapun dan sesuka hatimu
        </p>
        <p>
          Kamu akan diberikan rewards dalam
          bentuk emas fisik digital agar kamu
          bisa menabung serta berinventasi
          secara aman di saat yang bersamaan!
        </p>
        <p>
          Jadi tunggu apalagi, mari kumpulkan
          dan gerakan pasukan Treasury Army kamu!
        </p>
        <p>
          Maksimalkan potensi dan selesaikan
          mission untuk mendapatkan keuntungan
          melimpah bersama Treasury Army. Semakin
          kuat pasukan mu, maka rewards Kamu juga
          akan semakin banyak.
        </p>
        <p>
          SIAP GERAK! Challenge Kamu adalah
          mengumpulkan Treasure dan menyelesaikan
          mission pada setiap level terlebih dahulu
          untuk Level Up dan mendapatkan pangkat baru!
        </p>
      </AboutWhatContent>
      <div
        style={{
          overflowX: 'scroll'
        }}
      >
        <Emblem
          items={newItemEmblem}
        />
      </div>
    </AboutWrapperMenu>
  )
}

export default Whats
