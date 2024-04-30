// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BLUE_SHIELD, BODY_SHIELD, RED_SHIELD, COMMANDER, KNIGHT, KNIGHT_LIEUTENANT, KNIGHT_CAPTAIN, KNIGHT_COMMANDER, CIVILLIAN } from './IconConstant'

const headersGlosarium = [
  {
    text: 'Kata'
  },
  {
    text: 'Keterangan'
  }
]

const itemGlosarium = [
  {
    value: 'Knight',
    description: 'User Treasury yang sudah menyelesaikan proses registrasi dengan menggunakan referral code yang diberikan oleh Treasury Army yang sudah terdaftar dan melakukan transaksi sebesar minimal Rp500.000,- dalam Kurun Waktu yang ditentukan setelah proses registrasi'
  },
  {
    value: 'Mission',
    description: 'Challenge yang perlu diselesaikan oleh Treasury Army untuk Level Up dan naik pangkat'
  },
  {
    value: 'Level Up',
    description: 'Untuk setiap Treasury Army yang sudah menyelesaikan Mission pada level tertentu akan secara otomatis mendapatkan pangkat baru dan masuk ke level berikutnya'
  },
  {
    value: 'Treasure',
    description: 'Total transaksi yang layak untuk dikonversi menjadi poin dalam perjalanan kamu menyelesaikan Mission dimana poin tersebut nantinya bisa kamu tukarkan dengan rewards.'
  },
  {
    value: 'Maintenance',
    description: 'Syarat yang dibutuhkan agar Treasury Army tidak turun level dan tetap memiliki pangkat yang sekarang.'
  },
  {
    value: 'Kurun Waktu',
    description: 'Waktu yang disediakan untuk memenuhi Syarat dan Ketentuan yang berlaku'
  }
]

const itemTroops = [
  {
    text: 'Swordsman',
    value: 'swordsman'
  },
  {
    text: 'Pikesman',
    value: 'pikesman'
  },
  {
    text: 'Archer',
    value: 'archer'
  }
]

const itemLevel = [
  {
    text: 'Knight',
    value: 'knight',
    icon: BODY_SHIELD
  },
  {
    text: 'Knight Lieutenant',
    value: 'lieutenant',
    icon: BLUE_SHIELD
  },
  {
    text: 'Knight Captain',
    value: 'captain',
    icon: RED_SHIELD
  },
  {
    text: 'Knight Commander',
    value: 'commander',
    icon: COMMANDER
  }
]

const itemEmblem = [
  {
    tier: '',
    icon: BODY_SHIELD
  },
  {
    tier: 'Lieutenant',
    icon: BLUE_SHIELD
  },
  {
    tier: 'Captain',
    icon: RED_SHIELD
  },
  {
    tier: 'Commander',
    icon: COMMANDER
  }
]

export const newItemEmblem = [
  {
    title: 'Civillian',
    tier: '',
    icon: CIVILLIAN
  },
  {
    title: 'Knight',
    tier: '',
    icon: KNIGHT
  },
  {
    title: 'Knight',
    tier: 'Lieutenant',
    icon: KNIGHT_LIEUTENANT
  },
  {
    title: 'Knight',
    tier: 'Captain',
    icon: KNIGHT_CAPTAIN
  },
  {
    title: 'Knight',
    tier: 'Commander',
    icon: KNIGHT_COMMANDER
  }
]

const aboutUs = [
  {
    id: 1,
    text: 'Tentang Treasury Army',
    path: '/about-treasury/apa-itu'
  },
  {
    id: 2,
    text: 'Glosarium',
    path: '/about-treasury/glosarium'
  },
  {
    id: 3,
    text: 'Frequently Asked Questions',
    path: '/about-treasury/faq'
  },
  {
    id: 4,
    text: 'Syarat & Ketentuan',
    path: '/about-treasury/syarat-dan-ketentuan'
  }
]

export const itemAvatarHome = [
  {
    id: 1,
    name: 'John',
    avatar: '/images/person-default.png',
    level: 0,
    status: 'Knight'
  },
  {
    id: 2,
    name: 'Mayer',
    avatar: '/images/person-default.png',
    level: 1,
    status: 'Lieutenant'
  },
  {
    id: 3,
    name: 'Lucas',
    avatar: '/images/person-default.png',
    level: 2,
    status: 'Captain'
  },
  {
    id: 4,
    name: 'Mike',
    avatar: '/images/person-default.png',
    level: 3,
    status: 'Commander'
  },
  {
    id: 5,
    name: 'Eko',
    avatar: '/images/person-default.png',
    level: 0,
    status: 'Knight'
  },
  {
    id: 6,
    name: 'Iman',
    avatar: '/images/person-default.png',
    level: 1,
    status: 'Lieutenant'
  },
  {
    id: 7,
    name: 'Jarwo',
    avatar: '/images/person-default.png',
    level: 2,
    status: 'Captain'
  },
  {
    id: 6,
    name: 'Iman',
    avatar: '/images/person-default.png',
    level: 1,
    status: 'Lieutenant'
  },
  {
    id: 6,
    name: 'Iman',
    avatar: '/images/person-default.png',
    level: 1,
    status: 'Lieutenant'
  },
  {
    id: 6,
    name: 'Iman',
    avatar: '/images/person-default.png',
    level: 1,
    status: 'Lieutenant'
  }
]

export const itemListArmySwordsman = [
  {
    image: '/images/person-default.png',
    name: 'Steven Doe',
    status: 'Knight Commander',
    level: 'commander'
  },
  {
    image: '/images/person-default.png',
    name: 'Eko Widianto',
    status: 'Knight Lieutenant',
    level: 'lieutenant'
  },
  {
    image: '/images/person-default.png',
    name: 'William Smart',
    status: 'Knight Captain',
    level: 'captain'
  },
  {
    image: '/images/person-default.png',
    name: 'Roberto Honggo',
    status: 'Knight',
    level: 'knight'
  }
]

export const itemListArmyPikesman = [
  {
    image: '/images/person-default.png',
    name: 'Steven Doe',
    status: 'Knight Commander',
    level: 'commander'
  },
  {
    image: '/images/person-default.png',
    name: 'Eko Widianto',
    status: 'Knight Lieutenant',
    level: 'lieutenant'
  },
  {
    image: '/images/person-default.png',
    name: 'William Smart',
    status: 'Knight Captain',
    level: 'captain'
  },
  {
    image: '/images/person-default.png',
    name: 'Roberto Honggo',
    status: 'Knight',
    level: 'knight'
  }
]

export const itemListArmyArcher = [
  {
    image: '/images/person-default.png',
    name: 'Steven Doe',
    status: 'Knight Commander',
    level: 'commander'
  },
  {
    image: '/images/person-default.png',
    name: 'Eko Widianto',
    status: 'Knight Lieutenant',
    level: 'lieutenant'
  },
  {
    image: '/images/person-default.png',
    name: 'William Smart',
    status: 'Knight Captain',
    level: 'captain'
  },
  {
    image: '/images/person-default.png',
    name: 'Roberto Honggo',
    status: 'Knight',
    level: 'knight'
  }
]

// export { headersGlosarium, itemGlosarium, itemTroops, itemLevel, itemEmblem, aboutUs }
const headerSkemaRewards = [
  {
    text: 'Troops'
  },
  {
    text: 'Rewards'
  },
  {
    text: 'Keterangan'
  }
]

const itemSkemaRewards = [
  {
    troops: 'Swords Man',
    rewards: 20000,
    description: 'Setiap Kamu mengajak 1 Knight secara langsung menggunakan kode referal pribadi kamu, Kamu akan mendapat IDR 20K dan mereka akan menjadi bagian dari Swordsman Troops kamu.'
  },
  {
    troops: 'Pikeman',
    rewards: 10000,
    description: 'Jika Swordsman Troops Kamu mengajak 1 Knight menggunakan kode referal pribadi mereka, maka dia akan mendapat IDR 20K dan Kamu akan mendapat IDR 15K. '
  },
  {
    troops: 'Archer',
    rewards: 5000,
    description: 'Jika Pikeman Troops Kamu mengajak 1 Knight menggunakan kode referal pribadi mereka, maka dia akan mendapat IDR 20K, Swordsman Troops-nya akan mendapat IDR 15K dan Kamu juga akan mendapatkan IDR 10K '
  }
]

export const termsJoinTreasury = [
  {
    text: 'KYC Terverfikasi'
  },
  {
    text: 'Tidak tergabung di program referral lainnya'
  },
  {
    text: 'Melakukan transaksi sebesar Rp 500.000 (atau lebih) dalam 60 hari terakhir'
  }
]

export const listHistoryRewards = [
  {
    title: 'Swordsman',
    subTitle: 'Total Rewards',
    point: 10.000
  },
  {
    title: 'Pikeman',
    subTitle: 'Total Rewards',
    point: 10.000
  },
  {
    title: 'Archer',
    subTitle: 'Total Rewards',
    point: 10.000
  }
]

const itemDetailTotalTier = [
  {
    title: 'Knight',
    icon: BODY_SHIELD,
    totalArmy: 5
  },
  {
    title: 'Knight Lieutenant',
    icon: BLUE_SHIELD,
    totalArmy: 3
  },
  {
    title: 'Knight Captain',
    icon: RED_SHIELD,
    totalArmy: 10
  },
  {
    title: 'Knight Commader',
    icon: COMMANDER,
    totalArmy: 5
  }
]

const monthName = [
  {
    id: 1,
    text: 'Januari'
  },
  {
    id: 2,
    text: 'Februari'
  },
  {
    id: 3,
    text: 'Maret'
  },
  {
    id: 4,
    text: 'April'
  },
  {
    id: 5,
    text: 'Mei'
  },
  {
    id: 6,
    text: 'Juni'
  },
  {
    id: 7,
    text: 'Juli'
  },
  {
    id: 8,
    text: 'Agustus'
  },
  {
    id: 9,
    text: 'September'
  },
  {
    id: 10,
    text: 'Oktober'
  },
  {
    id: 11,
    text: 'November'
  },
  {
    id: 12,
    text: 'Desember'
  }
]

const itemTier = [
  {
    id: 1,
    icon: CIVILLIAN
  },
  {
    id: 2,
    icon: KNIGHT
  },
  {
    id: 3,
    icon: KNIGHT_LIEUTENANT
  },
  {
    id: 4,
    icon: KNIGHT_CAPTAIN
  },
  {
    id: 5,
    icon: KNIGHT_COMMANDER
  }
]

export {
  headersGlosarium,
  itemGlosarium,
  itemTroops,
  itemLevel,
  itemEmblem,
  aboutUs,
  headerSkemaRewards,
  itemSkemaRewards,
  itemDetailTotalTier,
  monthName,
  itemTier
}

export const allHeaderOnboarding = [
  {
    text: 'Troops'
  },
  {
    text: 'Rewards'
  },
  {
    text: 'Keterangan'
  }
]

export const schemeRewardBuyGold = [
  {
    troops: 'Swords Man',
    rewards: '0.45%',
    description: 'Setiap Swordsman Troops kamu melakukan transaksi beli emas, Kamu akan mendapat 0.45% dari nilai transaksi beli emas'
  },
  {
    troops: 'Pikeman',
    rewards: '0.35%',
    description: 'Setiap Pikeman Troops kamu melakukan transaksi beli emas, Swordsman Troops kamu akan mendapatkan 0.45% dan Kamu akan mendapat 0.35% dari nilai transaksi beli emas'
  },
  {
    troops: 'Archer',
    rewards: '0.25%',
    description: 'Setiap Archer Troops kamu melakukan transaksi beli emas, Pikeman Troops kamu mendapatkan 0.45%, Swordsman Troops kamu mendapatkan 0.35% dan Kamu mendapat 0.25% dari nilai transaksi beli emas'
  }
]

export const schemeRewardPanenEmas = [
  {
    troops: 'Swords Man',
    rewards: '0.75%',
    description: 'Setiap Swordsman Troops kamu melakukan transaksi panen emas, Kamu mendapat 0.75% dari nilai transaksi panen emas.'
  },
  {
    troops: 'Pikeman',
    rewards: '0.60%',
    description: 'Setiap Pikeman Troops kamu melakukan transaksi panen emas, Swordsman Troops mendapatkan 0.75% dan Kamu mendapat 0.6% dari nilai transaksi panen emas'
  },
  {
    troops: 'Archer',
    rewards: '0.40%',
    description: 'Setiap Archer Troops kamu melakukan transaksi panen emas, Pikeman Troops mendapatkan 0.75%, Swordsman Troops mendapatkan 0.6% dan Kamu mendapat 0.4% dari nilai transaksi panen emas'
  }
]

export const schemeRewardsTitipEmas = [
  {
    troops: 'Swords Man',
    rewards: '1.25%',
    description: 'Setiap Swordsman Troops kamu melakukan transaksi titip emas, Kamu mendapat 1.25% dari nilai transaksi titip emas.'
  },
  {
    troops: 'Pikeman',
    rewards: '0.75%',
    description: 'Setiap Pikeman Troops kamu melakukan transaksi titip emas, Swordsman Troops mendapatkan 1.25% dan Kamu mendapat 0.75% dari nilai transaksi titip emas'
  },
  {
    troops: 'Archer',
    rewards: '0.50%',
    description: 'Setiap Archer Troops kamu melakukan transaksi titip emas, Pikeman Troops mendapatkan 1.25%, Swordsman Troops mendapatkan 0.75% dan Kamu mendapat 0.50% dari nilai transaksi beli emas'
  }
]

export const schemeRewardsJamimas = [
  {
    troops: 'Swords Man',
    rewards: '4%',
    description: 'Setiap Swordsman Troops kamu melakukan transaksi gadai emas, Kamu mendapat 4% dari bunga gadai emas.'
  },
  {
    troops: 'Pikeman',
    rewards: '2.75%',
    description: 'Setiap Pikeman Troops kamu melakukan transaksi gadai emas, Swordsman Troops mendapatkan 4% dan Kamu mendapat 2.75% dari bunga gadai emas'
  },
  {
    troops: 'Archer',
    rewards: '1.25%',
    description: 'Setiap Archer Troops kamu melakukan transaksi gadai emas, Pikeman Troops mendapatkan 4%, Swordsman Troops mendapatkan 2.75% dan Kamu mendapat 1.25% dari bunga gadai emas'
  }
]
