import styles from '../../styles/HeroHeader.module.scss'

const HeroHeader = (): JSX.Element => {
  return (
    <header className={styles['hero-header']}>
      <div>
        <h1>narilog on stage</h1>
        <p>since 2021-02-14</p>
      </div>
    </header>
  )
}

export default HeroHeader
