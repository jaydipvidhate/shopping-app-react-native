export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Mi1.png'),
      require('../database/images/products/Mi2.png'),
      require('../database/images/products/Mi3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: require('../database/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/boat1.png'),
      require('../database/images/products/boat2.png'),
      require('../database/images/products/boat3.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatairpods1.png'),
      require('../database/images/accessories/boatairpods2.png'),
      require('../database/images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: require('../database/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatbassheads1.png'),
      require('../database/images/accessories/boatbassheads2.png'),
      require('../database/images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../database/images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/boatrockerz1.png'),
      require('../database/images/accessories/boatrockerz2.png'),
      require('../database/images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boultairbass1.png'),
      require('../database/images/accessories/boultairbass2.png'),
      require('../database/images/accessories/boultairbass3.png'),
    ],
  },
];
