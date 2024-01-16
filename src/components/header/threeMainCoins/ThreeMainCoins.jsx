import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ThreeMainCoins.module.css'
import { Link } from 'react-router-dom';




const ThreeMainCoins = () => {
  let coins = useSelector(state => state.coins.coins.data)
  console.log(1212, coins);
  return (
    <>
      <div className={styles.wrapper}>
        {coins && coins.filter((_, index) => index < 3).map((item) => <div className={styles.famCoins}>{item.name}:<p>{Number(item.priceUsd).toFixed(3)}$</p></div>)}
      </div>
    </>
  )
}

export default ThreeMainCoins
