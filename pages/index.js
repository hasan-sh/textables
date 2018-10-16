import React from 'react'
import Textables from '../components/Textables'
import styles from '../style.scss'

const Home = () => (
  <div>
    <div className={styles.container}>
      <Textables />
    </div>

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
