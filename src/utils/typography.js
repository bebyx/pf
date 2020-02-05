import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

noriegaTheme.baseFontSize = '29px'
noriegaTheme.scaleRatio = 6.00
noriegaTheme.headerFontFamily = ['Lato', 'san-serif']


const typography = new Typography(noriegaTheme)

export const { scale, rhythm, options } = typography
export default typography