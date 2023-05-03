const state = {
  top: 0,
  pages: 0,
  threshold: 5.5,
  mouse: [0, 0],
  content: [
    {
      tag: '01',
      text: `Portfolio`,
      // images: ['/images/BH41NVu.jpg', '/images/fBoIJLX.jpg', '/images/04zTfWB.jpg'],
      images: [
        {
          front: '/images/BH41NVu.jpg',
          back: '/images/BH41NVu.jpg',
        },
        {
          front: '/images/fBoIJLX.jpg',
          back: '/images/fBoIJLX.jpg',
        },
        {
          front: '/images/04zTfWB.jpg',
          back: '/images/04zTfWB.jpg',
        },
      ],
    },
    {
      tag: '02',
      text: `Case Study`,
      // images: ['/images/c4cA8UN.jpg', '/images/ajQ73ol.jpg', '/images/gZOmLNU.jpg']
      images: [
        {
          front: '/images/c4cA8UN.jpg',
          back: '/images/c4cA8UN.jpg',
        },
        {
          front: '/images/ajQ73ol.jpg',
          back: '/images/ajQ73ol.jpg',
        },
        {
          front: '/images/gZOmLNU.jpg',
          back: '/images/gZOmLNU.jpg',
        },
      ],
    },
    {
      tag: '03',
      text: `About Me`,
      // images: ['/images/mbFIW1b.jpg', '/images/mlDUVig.jpg', '/images/gwuZrgo.jpg']
      images: [
        {
          front: '/images/mbFIW1b.jpg',
          back: '/images/mbFIW1b.jpg',
        },
        {
          front: '/images/mlDUVig.jpg',
          back: '/images/mlDUVig.jpg',
        },
        {
          front: '/images/gwuZrgo.jpg',
          back: '/images/gwuZrgo.jpg',
        },
      ],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In the vast expanse\nof possibilities,\ninnovation knows\nno bounds.\nThe journey of\ndigital transformation\nnever stops...',
      image: '/images/cAKwexj.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'Explore limitless possibilities\nfor digital transformation\nin IT with ignited\ninnovative vision.\nUnleash the power\nof the future today.',
      // text: 'Discover how ingenious\nvision and innovative\ntechnologies are\nrevolutionizing the IT\nindustry,\ndriving growth, and\ncreating new\nopportunities.',
      image: '/images/04zTfWB.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      lineWidth: 0.5,
    },
  ],
}

export default state
