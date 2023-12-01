const FIRST_BANNER_IMAGE_LINKS = [
  'https://s3-alpha-sig.figma.com/img/b50e/04a0/4c586072f4cf4137c79f072cbed2d0cb?Expires=1701648000&Signature=Wvo5Kj69HfRptw5-tuRe7L9QmlM4eFaC4ss966BP44-QFyoM4o4PNyCO7IKjbSJNO2Yq7sQJRaHAnOtT7w0ZliUGLsnjNJL2Xy7CRADxi-e1wPoCyf0WGn94ng9lC7pj8GJBw71Dx5VD0cezm9Xzy4klsA2DcfWyxkgG~pas-LWpyC8I6TC9ATOKEmbDlAQZvzMi0RpTL72WcZR6-zXdK6i9PhYwnFJX2~weZoCQwYPy47LQHdvGpeNeV00vNUVwvJDpCq476GCl-D9Yl2W7YXj-Fd74Ik1INwoLaHuq4mipl0h9VRpsRdR9AZFtXqm74nYKDo0zQoa1Lfl3H-UHIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/46ce/542a/2db2d2c840e1f60e053439d92807a2b8?Expires=1702252800&Signature=AoACwKvSt5uuvi2xnJx1ewkvTMX-TL4pi8TBVyrSDwtlXD2AVc-kirYzu0O3QoNvrV2UL-5M6t0CLSoRocwKrkr2oXEP9qV6a6Lptd8Z9ZX57J5jyj2uldBrXXngMk6Tw4Bg1BD0doWaCE8~IQxPeSSLHoDMq-Id19wZjh9mix9YrwsOXoljpbmuW3L6roRbk~8SbRkl1kCK0yoBUfNW5G9WZa-AIuYYdD4f0vVSbhJ0zEp6MaL9fQ1iHkP4TjpcDWXKNFNPHsqeW78IMPPnfQ3Uve58QLQMtcZZJ71OsS76LE-KgcrAv96UlgK3Tu-SNHRt~UM8mjR~mh5zPCh38w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/75cf/3350/d04b09348594743533ab1bd7e90a6b3a?Expires=1702252800&Signature=MeSv~-Jx77l~77zafI6WusmFAvBUcOtLP0auLQU~RCiBbjoT4Ee9MdjUJYH5EDHoQZNtBSNXP1DOoIQY-2ABKRMo~5tFQZsm3Zdsj~b2G9SJTJAuAypeBt71S47F~QR2f01dMMgAFGWHx~msTJk1ga7nX60WakPSz6t~MCUtSvWC3aE9-ScY4qPCnjFovRyOVTiaZCTkrYqpjRMBYBiQ98meKA-yHs1eXSDMPOVjFeLmgcGvPa2GhVxwbaloW1XV1GIEwGm-tcupffhZfNABAz~5GIoDnP5RL2qaWTkRpou~Wm1Ty5EzTDQChlDXLWSbXK93l0u8wSVCl6VBd2YlPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

const TOP_TEN_BOOK_LINK =
  'https://image.aladin.co.kr/Tobe/Note/62S4ES/4433X7/638338480211363098_0.png?RS=195x175&CS=196x175&RT=1&AR=0';

const TOP_TEN_TAG_TEXT_LIST = ['스킵과로퍼', '정세랑', '한동일', '고양이깜냥'];

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

const TO_BE_CONTINUED_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/5748/2ffc/2e7f0bfd5a1de64199c130a6d3654ba1?Expires=1702252800&Signature=Ad8kX0eJjw9T2qq7uBdLwtru6lh-W3cSVqwKsgDFVuhGDQEv~vf8nUF~AiIGX0gPCCoM-idejXoo~q3sHf4ITi8NykRvadGZynHi2kJ1~Zd1IXaOjKmci-jWrTbV2REqKEETR4HGTE7hnuCpN55MZpX1TAdH2JHB9Vi2051FArm4dioWgADELiUqCQxom5UfjSP1TBzZhiQqKihiwMTjllH5ntKUajgpCxAav4LxQFiEYp2VCNcnCy4sUrTRwbXELXXYTQ8wVCqir-I4jDdcLavg3q1EPCcpVxleQ577HkYiLRjI6E3X1J5Zoi2OGZNoV0W1rViNuCO37PQQLuHlBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '여름, 비',
    author: '냥냥수염',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/5748/2ffc/2e7f0bfd5a1de64199c130a6d3654ba1?Expires=1702252800&Signature=Ad8kX0eJjw9T2qq7uBdLwtru6lh-W3cSVqwKsgDFVuhGDQEv~vf8nUF~AiIGX0gPCCoM-idejXoo~q3sHf4ITi8NykRvadGZynHi2kJ1~Zd1IXaOjKmci-jWrTbV2REqKEETR4HGTE7hnuCpN55MZpX1TAdH2JHB9Vi2051FArm4dioWgADELiUqCQxom5UfjSP1TBzZhiQqKihiwMTjllH5ntKUajgpCxAav4LxQFiEYp2VCNcnCy4sUrTRwbXELXXYTQ8wVCqir-I4jDdcLavg3q1EPCcpVxleQ577HkYiLRjI6E3X1J5Zoi2OGZNoV0W1rViNuCO37PQQLuHlBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '여름, 비',
    author: '냥냥수염',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/5748/2ffc/2e7f0bfd5a1de64199c130a6d3654ba1?Expires=1702252800&Signature=Ad8kX0eJjw9T2qq7uBdLwtru6lh-W3cSVqwKsgDFVuhGDQEv~vf8nUF~AiIGX0gPCCoM-idejXoo~q3sHf4ITi8NykRvadGZynHi2kJ1~Zd1IXaOjKmci-jWrTbV2REqKEETR4HGTE7hnuCpN55MZpX1TAdH2JHB9Vi2051FArm4dioWgADELiUqCQxom5UfjSP1TBzZhiQqKihiwMTjllH5ntKUajgpCxAav4LxQFiEYp2VCNcnCy4sUrTRwbXELXXYTQ8wVCqir-I4jDdcLavg3q1EPCcpVxleQ577HkYiLRjI6E3X1J5Zoi2OGZNoV0W1rViNuCO37PQQLuHlBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '여름, 비',
    author: '냥냥수염',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/5748/2ffc/2e7f0bfd5a1de64199c130a6d3654ba1?Expires=1702252800&Signature=Ad8kX0eJjw9T2qq7uBdLwtru6lh-W3cSVqwKsgDFVuhGDQEv~vf8nUF~AiIGX0gPCCoM-idejXoo~q3sHf4ITi8NykRvadGZynHi2kJ1~Zd1IXaOjKmci-jWrTbV2REqKEETR4HGTE7hnuCpN55MZpX1TAdH2JHB9Vi2051FArm4dioWgADELiUqCQxom5UfjSP1TBzZhiQqKihiwMTjllH5ntKUajgpCxAav4LxQFiEYp2VCNcnCy4sUrTRwbXELXXYTQ8wVCqir-I4jDdcLavg3q1EPCcpVxleQ577HkYiLRjI6E3X1J5Zoi2OGZNoV0W1rViNuCO37PQQLuHlBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '여름, 비',
    author: '냥냥수염',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/5748/2ffc/2e7f0bfd5a1de64199c130a6d3654ba1?Expires=1702252800&Signature=Ad8kX0eJjw9T2qq7uBdLwtru6lh-W3cSVqwKsgDFVuhGDQEv~vf8nUF~AiIGX0gPCCoM-idejXoo~q3sHf4ITi8NykRvadGZynHi2kJ1~Zd1IXaOjKmci-jWrTbV2REqKEETR4HGTE7hnuCpN55MZpX1TAdH2JHB9Vi2051FArm4dioWgADELiUqCQxom5UfjSP1TBzZhiQqKihiwMTjllH5ntKUajgpCxAav4LxQFiEYp2VCNcnCy4sUrTRwbXELXXYTQ8wVCqir-I4jDdcLavg3q1EPCcpVxleQ577HkYiLRjI6E3X1J5Zoi2OGZNoV0W1rViNuCO37PQQLuHlBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '여름, 비',
    author: '냥냥수염',
  },
];

const BEST_CLIP_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/0b69/b1aa/239cc223c407a284d69b0e84b0aea486?Expires=1702252800&Signature=k5aP-cQ4ljgW4Sr288swJ7Wk64HWlxvqMPzezSFdqyCBYetkOdWbsuRHw8JJKsn8x1-VUUkdEDu9X8B9V6jbX-Uxu0Aw-nPLhN7tRm9B4eVm4gVwmYaJZhAbwdcyCbVDfAi0ZVOIoxnypCahPDroWvLFqCnKm9YsNy20M4MT4tKbsDYaKq0CUZ~xmbT3pbTLYU0EROYJ51cpdtIf0qo6f2lPAWSqbmhy~WONm3rDTljo8sNRnnToKGemVpN~CBgWTvL~8AntYzbjumhTc5pv62Cnx7YS8i8Uh1uTJ8me9DJR~vzMzzv56tyJSrhDROcoTe1LdZ9zDgV4tZYY3Xxl7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '역사 컬렉터, 탐정이 되다',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/0b69/b1aa/239cc223c407a284d69b0e84b0aea486?Expires=1702252800&Signature=k5aP-cQ4ljgW4Sr288swJ7Wk64HWlxvqMPzezSFdqyCBYetkOdWbsuRHw8JJKsn8x1-VUUkdEDu9X8B9V6jbX-Uxu0Aw-nPLhN7tRm9B4eVm4gVwmYaJZhAbwdcyCbVDfAi0ZVOIoxnypCahPDroWvLFqCnKm9YsNy20M4MT4tKbsDYaKq0CUZ~xmbT3pbTLYU0EROYJ51cpdtIf0qo6f2lPAWSqbmhy~WONm3rDTljo8sNRnnToKGemVpN~CBgWTvL~8AntYzbjumhTc5pv62Cnx7YS8i8Uh1uTJ8me9DJR~vzMzzv56tyJSrhDROcoTe1LdZ9zDgV4tZYY3Xxl7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '역사 컬렉터, 탐정이 되다',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/0b69/b1aa/239cc223c407a284d69b0e84b0aea486?Expires=1702252800&Signature=k5aP-cQ4ljgW4Sr288swJ7Wk64HWlxvqMPzezSFdqyCBYetkOdWbsuRHw8JJKsn8x1-VUUkdEDu9X8B9V6jbX-Uxu0Aw-nPLhN7tRm9B4eVm4gVwmYaJZhAbwdcyCbVDfAi0ZVOIoxnypCahPDroWvLFqCnKm9YsNy20M4MT4tKbsDYaKq0CUZ~xmbT3pbTLYU0EROYJ51cpdtIf0qo6f2lPAWSqbmhy~WONm3rDTljo8sNRnnToKGemVpN~CBgWTvL~8AntYzbjumhTc5pv62Cnx7YS8i8Uh1uTJ8me9DJR~vzMzzv56tyJSrhDROcoTe1LdZ9zDgV4tZYY3Xxl7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '역사 컬렉터, 탐정이 되다',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/0b69/b1aa/239cc223c407a284d69b0e84b0aea486?Expires=1702252800&Signature=k5aP-cQ4ljgW4Sr288swJ7Wk64HWlxvqMPzezSFdqyCBYetkOdWbsuRHw8JJKsn8x1-VUUkdEDu9X8B9V6jbX-Uxu0Aw-nPLhN7tRm9B4eVm4gVwmYaJZhAbwdcyCbVDfAi0ZVOIoxnypCahPDroWvLFqCnKm9YsNy20M4MT4tKbsDYaKq0CUZ~xmbT3pbTLYU0EROYJ51cpdtIf0qo6f2lPAWSqbmhy~WONm3rDTljo8sNRnnToKGemVpN~CBgWTvL~8AntYzbjumhTc5pv62Cnx7YS8i8Uh1uTJ8me9DJR~vzMzzv56tyJSrhDROcoTe1LdZ9zDgV4tZYY3Xxl7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '역사 컬렉터, 탐정이 되다',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/0b69/b1aa/239cc223c407a284d69b0e84b0aea486?Expires=1702252800&Signature=k5aP-cQ4ljgW4Sr288swJ7Wk64HWlxvqMPzezSFdqyCBYetkOdWbsuRHw8JJKsn8x1-VUUkdEDu9X8B9V6jbX-Uxu0Aw-nPLhN7tRm9B4eVm4gVwmYaJZhAbwdcyCbVDfAi0ZVOIoxnypCahPDroWvLFqCnKm9YsNy20M4MT4tKbsDYaKq0CUZ~xmbT3pbTLYU0EROYJ51cpdtIf0qo6f2lPAWSqbmhy~WONm3rDTljo8sNRnnToKGemVpN~CBgWTvL~8AntYzbjumhTc5pv62Cnx7YS8i8Uh1uTJ8me9DJR~vzMzzv56tyJSrhDROcoTe1LdZ9zDgV4tZYY3Xxl7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '역사 컬렉터, 탐정이 되다',
  },
];

const ALADIN_AUDIO_BOOKS = [
  {
    img: 'https://i.ibb.co/6txrKMY/Group-271-3x.png',
    title: '나의 하루는 세 번 시작된다',
  },
  {
    img: 'https://i.ibb.co/6txrKMY/Group-271-3x.png',
    title: '나의 하루는 세 번 시작된다',
  },
  {
    img: 'https://i.ibb.co/6txrKMY/Group-271-3x.png',
    title: '나의 하루는 세 번 시작된다',
  },
  {
    img: 'https://i.ibb.co/6txrKMY/Group-271-3x.png',
    title: '나의 하루는 세 번 시작된다',
  },
  {
    img: 'https://i.ibb.co/6txrKMY/Group-271-3x.png',
    title: '나의 하루는 세 번 시작된다',
  },
];

const CARD_REVIEW_BOOKS = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/6d57/8b82/9e2527bc3925669a82841bcc10ad55c2?Expires=1702252800&Signature=dzR-GmKXh74QtKB7WFs4WMCOr~Sh0AC66Nn1TdKXYvkQ3iI7~rH0mR-XGiTLTBF-bIy2WhD5mA~2GR0ar97zJDwDBYm9eCgmDpEWMVrn7zEDZV1M2eCnTnGrqCZeSo9gCfNRLmjUzTlBvkP-~JwVlzYJf~SwINdLO1uGaQNGfxAUpD2aYgpBHBPHms8WrHTJgv6micoQhpr6px6teyqcBOXTxGgjc6nyfV~CB075RFGdMCNFlr62xPv1yZVtBqLZF7O5cdpeZjKGgrENtmX~DaJiJszg40Ow81ALXJVQlCaIlIi1BUclhlNwey8v8GA5kl9Rt4qYA1V3-mIvm-Yf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: '세스 고딘이 제시하는 일과 일터의 새로운 돌파구',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/6d57/8b82/9e2527bc3925669a82841bcc10ad55c2?Expires=1702252800&Signature=dzR-GmKXh74QtKB7WFs4WMCOr~Sh0AC66Nn1TdKXYvkQ3iI7~rH0mR-XGiTLTBF-bIy2WhD5mA~2GR0ar97zJDwDBYm9eCgmDpEWMVrn7zEDZV1M2eCnTnGrqCZeSo9gCfNRLmjUzTlBvkP-~JwVlzYJf~SwINdLO1uGaQNGfxAUpD2aYgpBHBPHms8WrHTJgv6micoQhpr6px6teyqcBOXTxGgjc6nyfV~CB075RFGdMCNFlr62xPv1yZVtBqLZF7O5cdpeZjKGgrENtmX~DaJiJszg40Ow81ALXJVQlCaIlIi1BUclhlNwey8v8GA5kl9Rt4qYA1V3-mIvm-Yf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: '세스 고딘이 제시하는 일과 일터의 새로운 돌파구',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/6d57/8b82/9e2527bc3925669a82841bcc10ad55c2?Expires=1702252800&Signature=dzR-GmKXh74QtKB7WFs4WMCOr~Sh0AC66Nn1TdKXYvkQ3iI7~rH0mR-XGiTLTBF-bIy2WhD5mA~2GR0ar97zJDwDBYm9eCgmDpEWMVrn7zEDZV1M2eCnTnGrqCZeSo9gCfNRLmjUzTlBvkP-~JwVlzYJf~SwINdLO1uGaQNGfxAUpD2aYgpBHBPHms8WrHTJgv6micoQhpr6px6teyqcBOXTxGgjc6nyfV~CB075RFGdMCNFlr62xPv1yZVtBqLZF7O5cdpeZjKGgrENtmX~DaJiJszg40Ow81ALXJVQlCaIlIi1BUclhlNwey8v8GA5kl9Rt4qYA1V3-mIvm-Yf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: '세스 고딘이 제시하는 일과 일터의 새로운 돌파구',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/6d57/8b82/9e2527bc3925669a82841bcc10ad55c2?Expires=1702252800&Signature=dzR-GmKXh74QtKB7WFs4WMCOr~Sh0AC66Nn1TdKXYvkQ3iI7~rH0mR-XGiTLTBF-bIy2WhD5mA~2GR0ar97zJDwDBYm9eCgmDpEWMVrn7zEDZV1M2eCnTnGrqCZeSo9gCfNRLmjUzTlBvkP-~JwVlzYJf~SwINdLO1uGaQNGfxAUpD2aYgpBHBPHms8WrHTJgv6micoQhpr6px6teyqcBOXTxGgjc6nyfV~CB075RFGdMCNFlr62xPv1yZVtBqLZF7O5cdpeZjKGgrENtmX~DaJiJszg40Ow81ALXJVQlCaIlIi1BUclhlNwey8v8GA5kl9Rt4qYA1V3-mIvm-Yf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: '세스 고딘이 제시하는 일과 일터의 새로운 돌파구',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/6d57/8b82/9e2527bc3925669a82841bcc10ad55c2?Expires=1702252800&Signature=dzR-GmKXh74QtKB7WFs4WMCOr~Sh0AC66Nn1TdKXYvkQ3iI7~rH0mR-XGiTLTBF-bIy2WhD5mA~2GR0ar97zJDwDBYm9eCgmDpEWMVrn7zEDZV1M2eCnTnGrqCZeSo9gCfNRLmjUzTlBvkP-~JwVlzYJf~SwINdLO1uGaQNGfxAUpD2aYgpBHBPHms8WrHTJgv6micoQhpr6px6teyqcBOXTxGgjc6nyfV~CB075RFGdMCNFlr62xPv1yZVtBqLZF7O5cdpeZjKGgrENtmX~DaJiJszg40Ow81ALXJVQlCaIlIi1BUclhlNwey8v8GA5kl9Rt4qYA1V3-mIvm-Yf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: '세스 고딘이 제시하는 일과 일터의 새로운 돌파구',
  },
];

const ALADINER_TV_LIST = [
  {
    img: 'https://s3-alpha-sig.figma.com/img/8819/7973/0d2786a74cd7d6e8b581cc8eda5fa737?Expires=1702252800&Signature=Dq8o7f5VrdBPpMY9okxevL9jVwfME2cML0k8iSm25TSguH4CkrGUt6L-XCVTYSDmwp2F7SbbwbzVmgvR-vrxZyTFvoSVNWCgoxjI~wYGWhoNtPLSZ6DXHRwxinQU-oTDKC-2Of4LuZ1lLo~WVcBTrDjO1~i8bL-FT-idP6nBQw5dIVwsPjg059ZCuDO~PXkif0nxrjuYLl22MjMsNuz-lTzQW-OXOKObg5JveaEk03YL44SlDAp9JF5By3Bv7Mxei9QApl~rWi-7f0LOHDXfv9eFNEfEfOlO1V6oqXP3V~3BCaijdIhEOVASitZWkd0g4G-16AIsIECNeK5lqto3Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '책의 시작, 모험의 시작 ‘반지의 제왕 일러스...',
    tag: '#책의시작',
    watch: '39,920',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/8819/7973/0d2786a74cd7d6e8b581cc8eda5fa737?Expires=1702252800&Signature=Dq8o7f5VrdBPpMY9okxevL9jVwfME2cML0k8iSm25TSguH4CkrGUt6L-XCVTYSDmwp2F7SbbwbzVmgvR-vrxZyTFvoSVNWCgoxjI~wYGWhoNtPLSZ6DXHRwxinQU-oTDKC-2Of4LuZ1lLo~WVcBTrDjO1~i8bL-FT-idP6nBQw5dIVwsPjg059ZCuDO~PXkif0nxrjuYLl22MjMsNuz-lTzQW-OXOKObg5JveaEk03YL44SlDAp9JF5By3Bv7Mxei9QApl~rWi-7f0LOHDXfv9eFNEfEfOlO1V6oqXP3V~3BCaijdIhEOVASitZWkd0g4G-16AIsIECNeK5lqto3Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '책의 시작, 모험의 시작 ‘반지의 제왕 일러스...',
    tag: '#책의시작',
    watch: '39,920',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/8819/7973/0d2786a74cd7d6e8b581cc8eda5fa737?Expires=1702252800&Signature=Dq8o7f5VrdBPpMY9okxevL9jVwfME2cML0k8iSm25TSguH4CkrGUt6L-XCVTYSDmwp2F7SbbwbzVmgvR-vrxZyTFvoSVNWCgoxjI~wYGWhoNtPLSZ6DXHRwxinQU-oTDKC-2Of4LuZ1lLo~WVcBTrDjO1~i8bL-FT-idP6nBQw5dIVwsPjg059ZCuDO~PXkif0nxrjuYLl22MjMsNuz-lTzQW-OXOKObg5JveaEk03YL44SlDAp9JF5By3Bv7Mxei9QApl~rWi-7f0LOHDXfv9eFNEfEfOlO1V6oqXP3V~3BCaijdIhEOVASitZWkd0g4G-16AIsIECNeK5lqto3Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '책의 시작, 모험의 시작 ‘반지의 제왕 일러스...',
    tag: '#책의시작',
    watch: '39,920',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/8819/7973/0d2786a74cd7d6e8b581cc8eda5fa737?Expires=1702252800&Signature=Dq8o7f5VrdBPpMY9okxevL9jVwfME2cML0k8iSm25TSguH4CkrGUt6L-XCVTYSDmwp2F7SbbwbzVmgvR-vrxZyTFvoSVNWCgoxjI~wYGWhoNtPLSZ6DXHRwxinQU-oTDKC-2Of4LuZ1lLo~WVcBTrDjO1~i8bL-FT-idP6nBQw5dIVwsPjg059ZCuDO~PXkif0nxrjuYLl22MjMsNuz-lTzQW-OXOKObg5JveaEk03YL44SlDAp9JF5By3Bv7Mxei9QApl~rWi-7f0LOHDXfv9eFNEfEfOlO1V6oqXP3V~3BCaijdIhEOVASitZWkd0g4G-16AIsIECNeK5lqto3Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '책의 시작, 모험의 시작 ‘반지의 제왕 일러스...',
    tag: '#책의시작',
    watch: '39,920',
  },
  {
    img: 'https://s3-alpha-sig.figma.com/img/8819/7973/0d2786a74cd7d6e8b581cc8eda5fa737?Expires=1702252800&Signature=Dq8o7f5VrdBPpMY9okxevL9jVwfME2cML0k8iSm25TSguH4CkrGUt6L-XCVTYSDmwp2F7SbbwbzVmgvR-vrxZyTFvoSVNWCgoxjI~wYGWhoNtPLSZ6DXHRwxinQU-oTDKC-2Of4LuZ1lLo~WVcBTrDjO1~i8bL-FT-idP6nBQw5dIVwsPjg059ZCuDO~PXkif0nxrjuYLl22MjMsNuz-lTzQW-OXOKObg5JveaEk03YL44SlDAp9JF5By3Bv7Mxei9QApl~rWi-7f0LOHDXfv9eFNEfEfOlO1V6oqXP3V~3BCaijdIhEOVASitZWkd0g4G-16AIsIECNeK5lqto3Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: '책의 시작, 모험의 시작 ‘반지의 제왕 일러스...',
    tag: '#책의시작',
    watch: '39,920',
  },
];

export {
  FIRST_BANNER_IMAGE_LINKS,
  TOP_TEN_BOOK_LINK,
  TOP_TEN_TAG_TEXT_LIST,
  HOT_BOOK_IMAGE_LINKS,
  GIFT_IMAGE_LINKS,
  MIDDLE_BANNER_IMAGE_LINK,
  CONCENTRATE_BOOKS,
  DISCOUNT_BOOKS,
  ONE_SENTENCE_LINK,
  ANOTHER_COVER_LINK,
  PURE_BOOKS,
  BOOKFUND_BOOK_LINK,
  TO_BE_CONTINUED_BOOKS,
  BEST_CLIP_BOOKS,
  ALADIN_AUDIO_BOOKS,
  CARD_REVIEW_BOOKS,
  ALADINER_TV_LIST,
};
