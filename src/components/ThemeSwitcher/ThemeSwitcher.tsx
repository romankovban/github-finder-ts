import {useEffect, useState} from "react";

import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg'
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg'

import styles from './ThemeSwitcher.module.scss'


export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(window.localStorage.getItem('theme') === 'Dark')

  const theme = isDark ? 'Dark' : 'Light'

  const themeText = isDark ? 'Light' : 'Dark'
  const ThemeIcon = isDark ? SunIcon : MoonIcon

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme')
    if (currentTheme === 'Dark') {
      setDark(true)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark, theme])

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon}/>
    </div>
  )
}
