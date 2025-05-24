import { PrefersDarkColorScheme, Theme } from './constants'
import { applyTheme } from './dom'

/** @type {import("vue").FunctionPlugin} */
export const theme = () => {
  const theme = Theme.System
  const media = window.matchMedia(PrefersDarkColorScheme)

  applyTheme(theme, media)

  media.addEventListener('change', () => applyTheme(theme, media))
}
