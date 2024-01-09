import React from "react"
import classNames from "classnames"
import styles from './App.module.css'
import { useSwitch, SwitchType } from './context/SwitchContext'
import { useData } from './context/DataContext'
import BannerImg from "./assets/imgs/bg-cafe.jpg"
import VectorImg from "./assets/imgs/vector.svg"
import Card from "./components/Card"

const App: React.FC = () => {

  const { switchValue, setSwitchValue } = useSwitch()
  const dataToDisplay = useData()

  const handleSwitchBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const buttonID = e.currentTarget.id as SwitchType
    setSwitchValue(buttonID)
  }

  return (
    <div className={styles.layout}>

      <div
        className={styles.banner}
        style={{
          background: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className={styles.container}>

        <div className={styles.headingsAndBtnsContainer}>

          <div
            className={styles.vector}
            style={{
              background: `url(${VectorImg})`,
              backgroundRepeat: "no-repeat"
            }}
          />

          <h1>Our Collection</h1>
          <h2>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>

          <div className={styles.btnsContainer}>
            <button
              onClick={handleSwitchBtnClick}
              id="all-products"
              className={classNames(styles.switchBtn, { [styles.selectedBtn]: switchValue === "all-products" })}
            >
              All Products
            </button>

            <button
              onClick={handleSwitchBtnClick}
              id="available-now"
              className={classNames(styles.switchBtn, { [styles.selectedBtn]: switchValue === "available-now" })}
            >
              Available Now
            </button>
          </div>

        </div>

        <div className={styles.cardContainer}>
          {dataToDisplay && dataToDisplay.map(item => {
            return (
              <Card key={item.id} item={item} />
            )
          })}
        </div>

      </div>
    </div>

  )
}

export default App