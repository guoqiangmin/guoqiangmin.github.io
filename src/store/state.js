// import { proxy } from 'valtio'

// export const state = proxy({
//   clicked: 0,
//   hovered: null
// })

const state = {
  top: 0,
  pages: 9,
  sections: 10,
  threshold: 4,
  mouse: [0, 0],
  navs: {
    home: {
      pageSize: 5.2,
      display: true,
    },
    work: {
      pageSize: 0.96,
      display: true,
    },
    about: {
      pageSize: 0.96,
      display: true,
    },
    expertise: {
      pageSize: 0.96,
      display: true,
    },
    divider: {
      pageSize: 1,
      display: false,
    },
    contact: {
      pageSize: 0.95,
      display: true,
    },
  },
}

export default state
