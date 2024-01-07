import React from "react"
import classNames from "classnames"
import styles from './App.module.css'
import { useSwitch, SwitchType } from './context/SwitchContext'
import { useData } from './context/DataContext'

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
      <div className={styles.container}>

        <div className={styles.headingsAndBtnsContainer}>
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

        {dataToDisplay && dataToDisplay.map(item => {
          const { id, name, image, price, rating, votes, popular, available } = item
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default App