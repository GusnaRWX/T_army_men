/**
 * Media Query 
 * 
 */
export const size = {
  mobile: '600px',
  tablet: '768px',
  laptop: '992px',
  laptopLarge: '1200px'
}

export const device = {
  responsiveMobile: `(max-width: ${size.mobile})`,
  responsiveTablet: `(min-width): ${size.tablet}`,
  responsiveLaptop: `(min-width): ${size.laptop}`,
  responsiveLaptopLarge: `(min-width): ${size.laptopLarge}`
}
