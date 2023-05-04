export const IconInfinite = ({ width = 64, height = 64, color = '#fff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" fill={color}>
      <path
        d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c30,0,56.45-13.18,78-32"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"
      />
      <path
        d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-29.37,0-56.66,13.75-78,32"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"
      />
    </svg>
  )
}
