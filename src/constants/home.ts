const FIRST_BANNER_IMAGE_LINKS = [
  'https://s3-alpha-sig.figma.com/img/b50e/04a0/4c586072f4cf4137c79f072cbed2d0cb?Expires=1701648000&Signature=Wvo5Kj69HfRptw5-tuRe7L9QmlM4eFaC4ss966BP44-QFyoM4o4PNyCO7IKjbSJNO2Yq7sQJRaHAnOtT7w0ZliUGLsnjNJL2Xy7CRADxi-e1wPoCyf0WGn94ng9lC7pj8GJBw71Dx5VD0cezm9Xzy4klsA2DcfWyxkgG~pas-LWpyC8I6TC9ATOKEmbDlAQZvzMi0RpTL72WcZR6-zXdK6i9PhYwnFJX2~weZoCQwYPy47LQHdvGpeNeV00vNUVwvJDpCq476GCl-D9Yl2W7YXj-Fd74Ik1INwoLaHuq4mipl0h9VRpsRdR9AZFtXqm74nYKDo0zQoa1Lfl3H-UHIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/46ce/542a/2db2d2c840e1f60e053439d92807a2b8?Expires=1702252800&Signature=AoACwKvSt5uuvi2xnJx1ewkvTMX-TL4pi8TBVyrSDwtlXD2AVc-kirYzu0O3QoNvrV2UL-5M6t0CLSoRocwKrkr2oXEP9qV6a6Lptd8Z9ZX57J5jyj2uldBrXXngMk6Tw4Bg1BD0doWaCE8~IQxPeSSLHoDMq-Id19wZjh9mix9YrwsOXoljpbmuW3L6roRbk~8SbRkl1kCK0yoBUfNW5G9WZa-AIuYYdD4f0vVSbhJ0zEp6MaL9fQ1iHkP4TjpcDWXKNFNPHsqeW78IMPPnfQ3Uve58QLQMtcZZJ71OsS76LE-KgcrAv96UlgK3Tu-SNHRt~UM8mjR~mh5zPCh38w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/75cf/3350/d04b09348594743533ab1bd7e90a6b3a?Expires=1702252800&Signature=MeSv~-Jx77l~77zafI6WusmFAvBUcOtLP0auLQU~RCiBbjoT4Ee9MdjUJYH5EDHoQZNtBSNXP1DOoIQY-2ABKRMo~5tFQZsm3Zdsj~b2G9SJTJAuAypeBt71S47F~QR2f01dMMgAFGWHx~msTJk1ga7nX60WakPSz6t~MCUtSvWC3aE9-ScY4qPCnjFovRyOVTiaZCTkrYqpjRMBYBiQ98meKA-yHs1eXSDMPOVjFeLmgcGvPa2GhVxwbaloW1XV1GIEwGm-tcupffhZfNABAz~5GIoDnP5RL2qaWTkRpou~Wm1Ty5EzTDQChlDXLWSbXK93l0u8wSVCl6VBd2YlPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

const HOT_BOOK_IMAGE_LINKS = [
  'https://s3-alpha-sig.figma.com/img/b50e/04a0/4c586072f4cf4137c79f072cbed2d0cb?Expires=1701648000&Signature=Wvo5Kj69HfRptw5-tuRe7L9QmlM4eFaC4ss966BP44-QFyoM4o4PNyCO7IKjbSJNO2Yq7sQJRaHAnOtT7w0ZliUGLsnjNJL2Xy7CRADxi-e1wPoCyf0WGn94ng9lC7pj8GJBw71Dx5VD0cezm9Xzy4klsA2DcfWyxkgG~pas-LWpyC8I6TC9ATOKEmbDlAQZvzMi0RpTL72WcZR6-zXdK6i9PhYwnFJX2~weZoCQwYPy47LQHdvGpeNeV00vNUVwvJDpCq476GCl-D9Yl2W7YXj-Fd74Ik1INwoLaHuq4mipl0h9VRpsRdR9AZFtXqm74nYKDo0zQoa1Lfl3H-UHIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/46ce/542a/2db2d2c840e1f60e053439d92807a2b8?Expires=1702252800&Signature=AoACwKvSt5uuvi2xnJx1ewkvTMX-TL4pi8TBVyrSDwtlXD2AVc-kirYzu0O3QoNvrV2UL-5M6t0CLSoRocwKrkr2oXEP9qV6a6Lptd8Z9ZX57J5jyj2uldBrXXngMk6Tw4Bg1BD0doWaCE8~IQxPeSSLHoDMq-Id19wZjh9mix9YrwsOXoljpbmuW3L6roRbk~8SbRkl1kCK0yoBUfNW5G9WZa-AIuYYdD4f0vVSbhJ0zEp6MaL9fQ1iHkP4TjpcDWXKNFNPHsqeW78IMPPnfQ3Uve58QLQMtcZZJ71OsS76LE-KgcrAv96UlgK3Tu-SNHRt~UM8mjR~mh5zPCh38w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/75cf/3350/d04b09348594743533ab1bd7e90a6b3a?Expires=1702252800&Signature=MeSv~-Jx77l~77zafI6WusmFAvBUcOtLP0auLQU~RCiBbjoT4Ee9MdjUJYH5EDHoQZNtBSNXP1DOoIQY-2ABKRMo~5tFQZsm3Zdsj~b2G9SJTJAuAypeBt71S47F~QR2f01dMMgAFGWHx~msTJk1ga7nX60WakPSz6t~MCUtSvWC3aE9-ScY4qPCnjFovRyOVTiaZCTkrYqpjRMBYBiQ98meKA-yHs1eXSDMPOVjFeLmgcGvPa2GhVxwbaloW1XV1GIEwGm-tcupffhZfNABAz~5GIoDnP5RL2qaWTkRpou~Wm1Ty5EzTDQChlDXLWSbXK93l0u8wSVCl6VBd2YlPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

const GIFT_IMAGE_LINKS = [
  'https://s3-alpha-sig.figma.com/img/8c91/6357/2f82663e7e5e8dad506064f167da31c2?Expires=1702252800&Signature=VJ0sFMmeSKsILrhgDhpuZJtOLYKQJorWLAA3-1-SZkgmlRYrQ3DMSgXFymXZhB7oazpmYm2l~tu1bMpE8~5RGaOpg~wiHZTr1z80-A2hSDjYi6g4cepDmBwDQwPTSQeby9oFzlJqgplFXpHGKCAK9ZYMXSAiv-j4zR4Bxheq6A4EheZetAW6nUaM2LhBAvIhYbLHmaC3RojHVXCxresGP~RBrQwAo5uxu-TpgWHlzfvqlkmxbmCQ5zLBZ1LxFOV-9D-9UK9Q4z9rPLvFl~O4jvumTlY2VnsAZTq5ybMSW1OdoF6QzYzWGZEI7iQlV0QRbVm2Eyxr52wFFeHbFwc5ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/8c91/6357/2f82663e7e5e8dad506064f167da31c2?Expires=1702252800&Signature=VJ0sFMmeSKsILrhgDhpuZJtOLYKQJorWLAA3-1-SZkgmlRYrQ3DMSgXFymXZhB7oazpmYm2l~tu1bMpE8~5RGaOpg~wiHZTr1z80-A2hSDjYi6g4cepDmBwDQwPTSQeby9oFzlJqgplFXpHGKCAK9ZYMXSAiv-j4zR4Bxheq6A4EheZetAW6nUaM2LhBAvIhYbLHmaC3RojHVXCxresGP~RBrQwAo5uxu-TpgWHlzfvqlkmxbmCQ5zLBZ1LxFOV-9D-9UK9Q4z9rPLvFl~O4jvumTlY2VnsAZTq5ybMSW1OdoF6QzYzWGZEI7iQlV0QRbVm2Eyxr52wFFeHbFwc5ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/8c91/6357/2f82663e7e5e8dad506064f167da31c2?Expires=1702252800&Signature=VJ0sFMmeSKsILrhgDhpuZJtOLYKQJorWLAA3-1-SZkgmlRYrQ3DMSgXFymXZhB7oazpmYm2l~tu1bMpE8~5RGaOpg~wiHZTr1z80-A2hSDjYi6g4cepDmBwDQwPTSQeby9oFzlJqgplFXpHGKCAK9ZYMXSAiv-j4zR4Bxheq6A4EheZetAW6nUaM2LhBAvIhYbLHmaC3RojHVXCxresGP~RBrQwAo5uxu-TpgWHlzfvqlkmxbmCQ5zLBZ1LxFOV-9D-9UK9Q4z9rPLvFl~O4jvumTlY2VnsAZTq5ybMSW1OdoF6QzYzWGZEI7iQlV0QRbVm2Eyxr52wFFeHbFwc5ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

const MIDDLE_BANNER_IMAGE_LINK =
  'https://s3-alpha-sig.figma.com/img/ef11/d058/412be2d01c68875c3285be20db729bc3?Expires=1702252800&Signature=X0TVH~fK1MVn~KFt~BrIa0QawjeCyZU55jaS9vKHjYTmDIsscCcX1EVwNDrif6NdiH~MJ4b6j8UKyLx8dTJc5k0c1ooeIqM1DFC2Rns1x-Y6HHaR3Y70pCuL6Zu3xS9qMrlwjbOYSAvsTXTGxY6m3rJNq-4gwluiggLO0A4Q2dl~2v-n8w88dkNyJfPceJywt~WZnhkgQY35NBR3JLaRNQ~ltd830kn3vSYzTJMtJ7jxuTeqTCQt~tNj4lH2Vkg7AfwGwax-rE733cyN1jirZjyaE63P6BTAQP7jI9eNGwxq~RYP4rMAhKdOvYzz5JPN2aV-QIwJv0kDDp7TNFn5pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

const CONCENTRATE_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/4965/6167/2956c94c6b8578302a8a78ef21ee4b9a?Expires=1702252800&Signature=oCCrwxUhRE8AAx2Qp-tY6XONHGJyVhKWpcRXqOgVimK~DCbuN9Ix1df5sPx9zZYJ0OrgSyZCt~Ftf~paNUV6~lpcWuz4oiUwFDffAaRo2G2tnp6AOUK2d6tYo9cDjLH7W6lnclALZX0ADwSzZm1GXbTGhvGSpHFdrIwysem2NGa8d5hB9SfNLQSzUF4EmmK0aUG50MBJCN6HkrrGW7nO5gD-x57-iFqrc2zGRNUdv6-pJxhQeI9BEbz3lnDZJjxjruwA8I1YG~rBrC-gALeh1F8vrDi1wJVfDi0lasW5vQWCV5jD2U88AR6PU41beXMMBCTTv01YqTLd0~ybH-kBEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '66일 자존감 대화법',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/4965/6167/2956c94c6b8578302a8a78ef21ee4b9a?Expires=1702252800&Signature=oCCrwxUhRE8AAx2Qp-tY6XONHGJyVhKWpcRXqOgVimK~DCbuN9Ix1df5sPx9zZYJ0OrgSyZCt~Ftf~paNUV6~lpcWuz4oiUwFDffAaRo2G2tnp6AOUK2d6tYo9cDjLH7W6lnclALZX0ADwSzZm1GXbTGhvGSpHFdrIwysem2NGa8d5hB9SfNLQSzUF4EmmK0aUG50MBJCN6HkrrGW7nO5gD-x57-iFqrc2zGRNUdv6-pJxhQeI9BEbz3lnDZJjxjruwA8I1YG~rBrC-gALeh1F8vrDi1wJVfDi0lasW5vQWCV5jD2U88AR6PU41beXMMBCTTv01YqTLd0~ybH-kBEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '66일 자존감 대화법',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/4965/6167/2956c94c6b8578302a8a78ef21ee4b9a?Expires=1702252800&Signature=oCCrwxUhRE8AAx2Qp-tY6XONHGJyVhKWpcRXqOgVimK~DCbuN9Ix1df5sPx9zZYJ0OrgSyZCt~Ftf~paNUV6~lpcWuz4oiUwFDffAaRo2G2tnp6AOUK2d6tYo9cDjLH7W6lnclALZX0ADwSzZm1GXbTGhvGSpHFdrIwysem2NGa8d5hB9SfNLQSzUF4EmmK0aUG50MBJCN6HkrrGW7nO5gD-x57-iFqrc2zGRNUdv6-pJxhQeI9BEbz3lnDZJjxjruwA8I1YG~rBrC-gALeh1F8vrDi1wJVfDi0lasW5vQWCV5jD2U88AR6PU41beXMMBCTTv01YqTLd0~ybH-kBEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '66일 자존감 대화법',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/4965/6167/2956c94c6b8578302a8a78ef21ee4b9a?Expires=1702252800&Signature=oCCrwxUhRE8AAx2Qp-tY6XONHGJyVhKWpcRXqOgVimK~DCbuN9Ix1df5sPx9zZYJ0OrgSyZCt~Ftf~paNUV6~lpcWuz4oiUwFDffAaRo2G2tnp6AOUK2d6tYo9cDjLH7W6lnclALZX0ADwSzZm1GXbTGhvGSpHFdrIwysem2NGa8d5hB9SfNLQSzUF4EmmK0aUG50MBJCN6HkrrGW7nO5gD-x57-iFqrc2zGRNUdv6-pJxhQeI9BEbz3lnDZJjxjruwA8I1YG~rBrC-gALeh1F8vrDi1wJVfDi0lasW5vQWCV5jD2U88AR6PU41beXMMBCTTv01YqTLd0~ybH-kBEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '66일 자존감 대화법',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/4965/6167/2956c94c6b8578302a8a78ef21ee4b9a?Expires=1702252800&Signature=oCCrwxUhRE8AAx2Qp-tY6XONHGJyVhKWpcRXqOgVimK~DCbuN9Ix1df5sPx9zZYJ0OrgSyZCt~Ftf~paNUV6~lpcWuz4oiUwFDffAaRo2G2tnp6AOUK2d6tYo9cDjLH7W6lnclALZX0ADwSzZm1GXbTGhvGSpHFdrIwysem2NGa8d5hB9SfNLQSzUF4EmmK0aUG50MBJCN6HkrrGW7nO5gD-x57-iFqrc2zGRNUdv6-pJxhQeI9BEbz3lnDZJjxjruwA8I1YG~rBrC-gALeh1F8vrDi1wJVfDi0lasW5vQWCV5jD2U88AR6PU41beXMMBCTTv01YqTLd0~ybH-kBEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '66일 자존감 대화법',
  },
];

const DISCOUNT_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/67e6/7b61/4b9d062806dcf07ff42b17a8b8ed3823?Expires=1702252800&Signature=JT7CQMTopZd7pLuPEfsHLs3NSAC8GsMw9SwXafHG5k6etCww~6yJeFKsG~PbVKrZ2QWme1E9gSOWm3ufIEp~vjaJ6vx1tfChVwUfO8BW9tOkCGGdp2TxT5Wr7eD2jwJMmukmpZ2J6narmWAgGnbLRDKPewAuLWwbYs~awKAkk3svcb6JHuNqXGnLmmIK37ireIV9P4oG9~wyElhOTkcxfSRKo65d3xTH0ImsYc1YC5B1UnPSbzWMsuCGpKou6UKowvFm8jd9lkZn-PhHSqsgUddCX1w4jz79YPg~QtV10d63EpYzP3eG~5jLEwQYJLTwKEEZOy~0RnWDtW-V2acf-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '북유럽 스타일 벙어리 장갑 손뜨개',
    original_price: '11,800원',
    discount_price: '3,240원',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/67e6/7b61/4b9d062806dcf07ff42b17a8b8ed3823?Expires=1702252800&Signature=JT7CQMTopZd7pLuPEfsHLs3NSAC8GsMw9SwXafHG5k6etCww~6yJeFKsG~PbVKrZ2QWme1E9gSOWm3ufIEp~vjaJ6vx1tfChVwUfO8BW9tOkCGGdp2TxT5Wr7eD2jwJMmukmpZ2J6narmWAgGnbLRDKPewAuLWwbYs~awKAkk3svcb6JHuNqXGnLmmIK37ireIV9P4oG9~wyElhOTkcxfSRKo65d3xTH0ImsYc1YC5B1UnPSbzWMsuCGpKou6UKowvFm8jd9lkZn-PhHSqsgUddCX1w4jz79YPg~QtV10d63EpYzP3eG~5jLEwQYJLTwKEEZOy~0RnWDtW-V2acf-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '북유럽 스타일 벙어리 장갑 손뜨개',
    original_price: '11,800원',
    discount_price: '3,240원',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/67e6/7b61/4b9d062806dcf07ff42b17a8b8ed3823?Expires=1702252800&Signature=JT7CQMTopZd7pLuPEfsHLs3NSAC8GsMw9SwXafHG5k6etCww~6yJeFKsG~PbVKrZ2QWme1E9gSOWm3ufIEp~vjaJ6vx1tfChVwUfO8BW9tOkCGGdp2TxT5Wr7eD2jwJMmukmpZ2J6narmWAgGnbLRDKPewAuLWwbYs~awKAkk3svcb6JHuNqXGnLmmIK37ireIV9P4oG9~wyElhOTkcxfSRKo65d3xTH0ImsYc1YC5B1UnPSbzWMsuCGpKou6UKowvFm8jd9lkZn-PhHSqsgUddCX1w4jz79YPg~QtV10d63EpYzP3eG~5jLEwQYJLTwKEEZOy~0RnWDtW-V2acf-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '북유럽 스타일 벙어리 장갑 손뜨개',
    original_price: '11,800원',
    discount_price: '3,240원',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/67e6/7b61/4b9d062806dcf07ff42b17a8b8ed3823?Expires=1702252800&Signature=JT7CQMTopZd7pLuPEfsHLs3NSAC8GsMw9SwXafHG5k6etCww~6yJeFKsG~PbVKrZ2QWme1E9gSOWm3ufIEp~vjaJ6vx1tfChVwUfO8BW9tOkCGGdp2TxT5Wr7eD2jwJMmukmpZ2J6narmWAgGnbLRDKPewAuLWwbYs~awKAkk3svcb6JHuNqXGnLmmIK37ireIV9P4oG9~wyElhOTkcxfSRKo65d3xTH0ImsYc1YC5B1UnPSbzWMsuCGpKou6UKowvFm8jd9lkZn-PhHSqsgUddCX1w4jz79YPg~QtV10d63EpYzP3eG~5jLEwQYJLTwKEEZOy~0RnWDtW-V2acf-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '북유럽 스타일 벙어리 장갑 손뜨개',
    original_price: '11,800원',
    discount_price: '3,240원',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/67e6/7b61/4b9d062806dcf07ff42b17a8b8ed3823?Expires=1702252800&Signature=JT7CQMTopZd7pLuPEfsHLs3NSAC8GsMw9SwXafHG5k6etCww~6yJeFKsG~PbVKrZ2QWme1E9gSOWm3ufIEp~vjaJ6vx1tfChVwUfO8BW9tOkCGGdp2TxT5Wr7eD2jwJMmukmpZ2J6narmWAgGnbLRDKPewAuLWwbYs~awKAkk3svcb6JHuNqXGnLmmIK37ireIV9P4oG9~wyElhOTkcxfSRKo65d3xTH0ImsYc1YC5B1UnPSbzWMsuCGpKou6UKowvFm8jd9lkZn-PhHSqsgUddCX1w4jz79YPg~QtV10d63EpYzP3eG~5jLEwQYJLTwKEEZOy~0RnWDtW-V2acf-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '북유럽 스타일 벙어리 장갑 손뜨개',
    original_price: '11,800원',
    discount_price: '3,240원',
  },
];

const ONE_SENTENCE_LINK =
  'https://s3-alpha-sig.figma.com/img/42d9/8454/d4182faf7b5c095448c17ed9d50c41a4?Expires=1702252800&Signature=S3gfDYvljkdpaY3SjpBYO5XsYJJZy6lQCBlATsHYhjpJ-UlGZjtROii-OIzPxg0zQB-PYvDknOcN83FcvE5GpCiEL~ut4fSh0Xsf4HazDRQqvEwuSpx6bqEl94w6449~VDrBEoL0TeJrquL5DF9GZCwiS~Dvb-MK3wt59ENIG68p3cDLwV6JgimP9-LsDHxwhOmbuPaUV3ETKd7w6qk6kQWNxlZr7Un48Bv15TJ0PIFAdzRvUjsXK~ac8aEbNq0Yv4EjmNsRLODCGeMIr0L1pTTqdI11GLBR9UbsHhI~Osmql-Hu5alHixKAIYeGDyIAq5joDBMT5c8mz~wWlKcoUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

const ANOTHER_COVER_LINK =
  'https://s3-alpha-sig.figma.com/img/0566/df73/f9c4e5c00cabc3ec47057c7f6c1e4eb4?Expires=1702252800&Signature=SbxYHNuhTb1DOaJs-01hADbh482Wg4V0KbrqHxKv5tKcWa~NWkegUqeqx2~RDt7ITum5TtAGFt7qSbZtQC7nN2Xv4t37xbcNF5hdedFRADeBPicMF5pGRVzOG~LCfFl10nq2Uz1W4PSFGH62adlOkWhV8VGq~~i7kgpF4nvlKPtGFKGHl0SccahHb5K-IdxjyHSF0rQfmmw~ORAQZx8qII6t1Y~AC45ljC98l9VPeVt4P2zNdEobQanxhKtUOqy52pwqfDyYj9gIvTmAu8ET1K7LemxEhN3nZUAAYRcd0QcIkQijmjXyCKYjmR5x64Io8HBkPJ6VAkwSCgDr9yiOCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

const PURE_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/ef53/3af0/75169305d420ed6fd956c678fe899e70?Expires=1702252800&Signature=I4dXDpingv1iOVOSedNgJRb3NuxRJOcpPZWtm2H84WXKATRUWkkdgY-njQ-071Tlg4ynD5altIww-yMv-JOcrUK6dOyAMcjIEyUnz1sp23xQF0JGqXgs0cBLyvm0io1Fi2myEiFXuDaRwCzyw~hRD9F-tSpN0eQoI7le4xgPMneQv3qthGTeZUwUuw2b-H7eyOGlgORiX7aH5K-~UMkPY46w6Afy~UQOyAYAYKNlNHeGQbrLum07Wto00B893nhRso4rF4X6fB51lLvcScfBp42mLPBtizj~kvcI~LT3rf2btgK1FXZL299msrTetXGl0PEz~kjOasAcI8k4ZSf4vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '방금 떠나온 세계 (2주년 기념 리커버)',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/ef53/3af0/75169305d420ed6fd956c678fe899e70?Expires=1702252800&Signature=I4dXDpingv1iOVOSedNgJRb3NuxRJOcpPZWtm2H84WXKATRUWkkdgY-njQ-071Tlg4ynD5altIww-yMv-JOcrUK6dOyAMcjIEyUnz1sp23xQF0JGqXgs0cBLyvm0io1Fi2myEiFXuDaRwCzyw~hRD9F-tSpN0eQoI7le4xgPMneQv3qthGTeZUwUuw2b-H7eyOGlgORiX7aH5K-~UMkPY46w6Afy~UQOyAYAYKNlNHeGQbrLum07Wto00B893nhRso4rF4X6fB51lLvcScfBp42mLPBtizj~kvcI~LT3rf2btgK1FXZL299msrTetXGl0PEz~kjOasAcI8k4ZSf4vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '방금 떠나온 세계 (2주년 기념 리커버)',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/ef53/3af0/75169305d420ed6fd956c678fe899e70?Expires=1702252800&Signature=I4dXDpingv1iOVOSedNgJRb3NuxRJOcpPZWtm2H84WXKATRUWkkdgY-njQ-071Tlg4ynD5altIww-yMv-JOcrUK6dOyAMcjIEyUnz1sp23xQF0JGqXgs0cBLyvm0io1Fi2myEiFXuDaRwCzyw~hRD9F-tSpN0eQoI7le4xgPMneQv3qthGTeZUwUuw2b-H7eyOGlgORiX7aH5K-~UMkPY46w6Afy~UQOyAYAYKNlNHeGQbrLum07Wto00B893nhRso4rF4X6fB51lLvcScfBp42mLPBtizj~kvcI~LT3rf2btgK1FXZL299msrTetXGl0PEz~kjOasAcI8k4ZSf4vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '방금 떠나온 세계 (2주년 기념 리커버)',
  },
];

const BOOKFUND_BOOK_LINK =
  'https://s3-alpha-sig.figma.com/img/3476/9d9c/a4be90e70043510ac22c6bef2a63aac5?Expires=1702252800&Signature=LaF53LsTSMRHH9ydtT9skXk~BgNPAieLUcO47MwkU-skYk~FHB5lhWdeHyKhFlwn38nWiCXTAju2PSFzo4PmTgHnKJFkFvqjxVJZwe6k2oVbvqQcC1yanUVt7kCxpFXOwVJGUZaOqA-vY2Q~rpI7DeuespHpoCq1KujzdPvow4Zj8Ont-mE8Pzd7gCIqWu4A52KgzEjU0MtTFJgDqyz22J1BuYxWNhk5QMNDXWeuU1dtxOSmxEeydTVLXu1bGSPD4xrpifUTdbUh4JJVWyH4v-pwZSFeMBo5wKrPPgeXhg-0Hcl59RSYFhGLajWCQFQ1BB98xaMKuUjZN9htpS0Sbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

export {
  FIRST_BANNER_IMAGE_LINKS,
  HOT_BOOK_IMAGE_LINKS,
  GIFT_IMAGE_LINKS,
  MIDDLE_BANNER_IMAGE_LINK,
  CONCENTRATE_BOOKS,
  DISCOUNT_BOOKS,
  ONE_SENTENCE_LINK,
  ANOTHER_COVER_LINK,
  PURE_BOOKS,
  BOOKFUND_BOOK_LINK,
};
