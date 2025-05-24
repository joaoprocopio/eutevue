import { Theme } from './constants'

/**
 * @param {(typeof Theme)[keyof typeof Theme]} theme
 * @param {MediaQueryList} media
 */
export function applyTheme(theme, media) {
  const rootEl = document.documentElement

  rootEl.classList.remove(Theme.Light, Theme.Dark)

  if (theme === Theme.System) {
    const resolvedTheme = media.matches ? Theme.Dark : Theme.Light

    rootEl.classList.add(resolvedTheme)
  } else {
    rootEl.classList.add(theme)
  }
}
