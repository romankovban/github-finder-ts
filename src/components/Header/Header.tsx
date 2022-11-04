import {ThemeSwitcher} from "../ThemeSwitcher"

import styles from './Header.module.scss'


export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        devFinder
      </div>
      <ThemeSwitcher />
    </div>
  )
}
