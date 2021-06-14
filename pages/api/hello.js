// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {
    id: "pointblank",
    info: "Minimal pembelian adalah Rp1.000.000",
    info_diskon: ["Diskon 12% jika minimum pembelian sebesar Rp50.000.000"],
    info_harga: "Harga voucher dapat berubah sewaktu-waktu",
    img_src: "/images/pointblank.png",
    game: "Point Blank",
    voucher_name: "Point Blank (PB)",
    description: "Diskon Hingga 12%",
    diskon: 11,
    mulai_dari: 8900,
    type: "voucher",
    grosir: true,
    variants: [
      {
        name: "PB Cash 1200",
        price: 10000,
      },
      {
        name: "PB Cash 2400",
        price: 20000,
      },
      {
        name: "PB Cash 6000",
        price: 50000,
      },
      {
        name: "PB Cash 12000",
        price: 100000,
      },
    ],
  },
  {
    id: "garena",
    info: "Minimal pembelian adalah Rp1.000.000",
    info_diskon: [],
    info_harga: "Harga voucher dapat berubah sewaktu-waktu",
    img_src: "/images/garenashell.png",
    game: "Garena",
    voucher_name: "Garena Shell",
    description: "Diskon Hingga 9%",
    diskon: 9,
    mulai_dari: 9100,
    type: "voucher",
    grosir: true,
    variants: [
      {
        name: "Garena Shell 33",
        price: 10000,
      },
      {
        name: "Garena Shell 66",
        price: 20000,
      },
      {
        name: "Garena Shell 165",
        price: 50000,
      },
      {
        name: "Garena Shell 330",
        price: 100000,
      },
    ],
  },
  {
    id: "playstation",
    info: "Tanpa minimal pembelian",
    info_diskon: [
      "Diskon 14% jika minimum pembelian sebesar Rp500.000",
      "Diskon 15% jika minimum pembelian sebesar Rp1.000.000",
      "Diskon 16% jika minimum pembelian sebesar Rp10.000.000",
    ],
    info_harga: "Harga voucher dapat berubah sewaktu-waktu",
    img_src: "/images/playstation.png",
    game: "Playstation Network",
    voucher_name: "Playstation Network (PSN)",
    description: "Diskon Hingga 16%",
    diskon: 11,
    mulai_dari: 106800,
    type: "voucher",
    grosir: false,
    variants: [
      {
        name: "IDR 100,000",
        price: 120000,
      },
    ],
  },
  {
    id: "battlenet",
    info: "Tanpa minimal pembelian",
    info_diskon: [
      "Diskon 8% jika minimum pembelian sebesar Rp100.000",
      "Diskon 11% jika minimum pembelian sebesar Rp500.000",
    ],
    info_harga: "Harga voucher dapat berubah sewaktu-waktu",
    img_src: "/images/battlenet.png",
    game: "Battlenet",
    voucher_name: "Blizzard Battlenet",
    description: "Diskon Hingga 11%",
    diskon: 8,
    mulai_dari: 73600,
    type: "voucher",
    grosir: false,
    variants: [
      {
        name: "Battle.net $5",
        price: 80000,
      },
      {
        name: "Battle.net $10",
        price: 160000,
      },
      {
        name: "Battle.net $20",
        price: 320000,
      },
    ],
  },
  {
    id: "freefire",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/freefire.png",
    game: "Garena Free Fire",
    voucher_name: "Garena Free Fire",
    description: "Top up Diamonds Free Fire Instan",
    diskon: 0,
    mulai_dari: 1000,
    type: "topup",
    grosir: false,
    server: false,
    variants: [
      {
        name: "5 Diamonds",
        price: 1000,
      },
      {
        name: "12 Diamonds",
        price: 2000,
      },
      {
        name: "50 Diamonds",
        price: 8000,
      },
      {
        name: "70 Diamonds",
        price: 10000,
      },
      {
        name: "140 Diamonds",
        price: 20000,
      },
      {
        name: "355 Diamonds",
        price: 50000,
      },
      {
        name: "720 Diamonds",
        price: 100000,
      },
      {
        name: "1450 Diamonds",
        price: 200000,
      },
      {
        name: "2180 Diamonds",
        price: 300000,
      },
      {
        name: "3640 Diamonds",
        price: 500000,
      },
      {
        name: "7290 Diamonds",
        price: 1000000,
      },
      {
        name: "36500 Diamonds",
        price: 5000000,
      },
      {
        name: "73100 Diamonds",
        price: 10000000,
      },
    ],
  },
  {
    id: "mobilelegends",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/mobilelegends.png",
    game: "Mobile Legends",
    voucher_name: "Mobile Legends",
    description: "Top up Diamonds, Starlight Member, dan Twilight Pass Instan",
    diskon: 0,
    mulai_dari: 1500,
    type: "topup",
    grosir: false,
    server: true,
    variants: [
      {
        name: "5 Diamonds",
        price: 1500,
      },
      {
        name: "10 Diamonds",
        price: 3000,
      },
      {
        name: "14 Diamonds",
        price: 4000,
      },
      {
        name: "18 Diamonds",
        price: 5000,
      },
      {
        name: "36 Diamonds",
        price: 10000,
      },
      {
        name: "74 Diamonds",
        price: 20000,
      },
      {
        name: "222 Diamonds",
        price: 60000,
      },
      {
        name: "277 Diamonds",
        price: 75000,
      },
      {
        name: "370 Diamonds",
        price: 100000,
      },
      {
        name: "Starlight Member",
        price: 149000,
      },
      {
        name: "568 Diamonds",
        price: 150000,
      },
      {
        name: "Twilight Pass",
        price: 150000,
      },
      {
        name: "966 Diamonds",
        price: 250000,
      },
      {
        name: "Starlight Member + 390 Diamonds",
        price: 250000,
      },
      {
        name: "2010 Diamonds",
        price: 500000,
      },
      {
        name: "4804 Diamonds",
        price: 1200000,
      },
    ],
  },
  {
    id: "wildrift",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/wildrift.png",
    game: "LoL - Wild Rift",
    voucher_name: "LoL - Wild Rift",
    description: "Top up Wild Cores LoL Wild Rift Instan",
    diskon: 0,
    mulai_dari: 50000,
    type: "topup",
    grosir: false,
    server: false,
    variants: [
      {
        name: "420 Wild Cores",
        price: 50000,
      },
      {
        name: "700 Wild Cores",
        price: 80000,
      },
      {
        name: "1375 Wild Cores",
        price: 150000,
      },
      {
        name: "2400 Wild Cores",
        price: 250000,
      },
      {
        name: "4000 Wild Cores",
        price: 400000,
      },
      {
        name: "8150 Wild Cores",
        price: 800000,
      },
    ],
  },
  {
    id: "valorant",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/valorant.png",
    game: "Valorant",
    voucher_name: "Valorant",
    description: "Top up Points Valorant Instan",
    diskon: 0,
    mulai_dari: 50000,
    type: "topup",
    grosir: false,
    server: false,
    variants: [
      {
        name: "420 Points",
        price: 50000,
      },
      {
        name: "700 Points",
        price: 80000,
      },
      {
        name: "1375 Points",
        price: 150000,
      },
      {
        name: "2400 Points",
        price: 250000,
      },
      {
        name: "4000 Points",
        price: 400000,
      },
      {
        name: "8150 Points",
        price: 800000,
      },
    ],
  },
  {
    id: "aov",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/aov.png",
    game: "Arena Of Valor",
    voucher_name: "Arena Of Valor",
    description: "Top up AOV Instan",
    diskon: 0,
    mulai_dari: 10000,
    type: "topup",
    grosir: false,
    server: false,
    variants: [
      {
        name: "40 Vouchers",
        price: 10000,
      },
      {
        name: "90 Vouchers",
        price: 20000,
      },
      {
        name: "230 Vouchers",
        price: 50000,
      },
      {
        name: "470 Vouchers",
        price: 100000,
      },
      {
        name: "950 Vouchers",
        price: 200000,
      },
      {
        name: "1430 Vouchers",
        price: 300000,
      },
      {
        name: "2390 Vouchers",
        price: 500000,
      },
      {
        name: "4800 Vouchers",
        price: 1000000,
      },
      {
        name: "24050 Vouchers",
        price: 5000000,
      },
      {
        name: "48200 Vouchers",
        price: 10000000,
      },
    ],
  },
  {
    id: "callofduty",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/callofduty.png",
    game: "Call of Duty Mobile",
    voucher_name: "Call of Duty Mobile",
    description: "Top up CoDM Instan",
    diskon: 0,
    mulai_dari: 5000,
    type: "topup",
    grosir: false,
    server: false,
    variants: [
      {
        name: "31 CP",
        price: 5000,
      },
      {
        name: "62 CP",
        price: 10000,
      },
      {
        name: "127 CP",
        price: 20000,
      },
      {
        name: "317 CP",
        price: 50000,
      },
      {
        name: "634 CP",
        price: 100000,
      },
      {
        name: "1373 CP",
        price: 200000,
      },
      {
        name: "2059 CP",
        price: 300000,
      },
      {
        name: "3564 CP",
        price: 500000,
      },
      {
        name: "7656 CP",
        price: 1000000,
      },
      {
        name: "15312 CP",
        price: 2000000,
      },
      {
        name: "38280 CP",
        price: 5000000,
      },
      {
        name: "76560 CP",
        price: 10000000,
      },
    ],
  },
  {
    id: "lifeafter",
    info: "",
    info_diskon: [],
    info_harga: "",
    img_src: "/images/lifeafter.png",
    game: "LifeAfter",
    voucher_name: "LifeAfter",
    description: "Top up Credits Life After",
    diskon: 0,
    mulai_dari: 14000,
    type: "topup",
    grosir: false,
    server: true,
    variants: [
      {
        name: "65 Credits",
        price: 14000,
      },
      {
        name: "330 Credits",
        price: 71000,
      },
      {
        name: "558 Credits",
        price: 113000,
      },
      {
        name: "1108 Credits",
        price: 212000,
      },
      {
        name: "2268 Credits",
        price: 424000,
      },
      {
        name: "3468 Credits",
        price: 664000,
      },
      {
        name: "5768 Credits",
        price: 1059000,
      },
      {
        name: "7768 Credits",
        price: 1412000,
      },
    ],
  },
];

export default (req, res) => {
  res.status(200).json(data);
};
