const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: '00',
      text: `The Bacchic\nand Dionysiac\nRites`,
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
      tag: '01',
      text: `The Elysian\nMysteries`,
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
      tag: '02',
      text: `The Hiramic\nLegend`,
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
      text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/images/cAKwexj.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
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
