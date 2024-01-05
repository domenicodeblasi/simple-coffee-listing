import styles from './App.module.css'
import { useSwitch, SwitchType } from './context/SwitchContext'
import { useData } from './context/DataContext'

const App: React.FC = () => {

  const { toggleSwitch } = useSwitch()
  const dataToDisplay = useData()

  const handleSwitchBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const buttonID = e.currentTarget.id as SwitchType
    if (toggleSwitch) {
      toggleSwitch(buttonID)
    }
  }

  return (
    <>

      <div>
        <button onClick={handleSwitchBtnClick} id="all products">
          All Products
        </button>

        <button onClick={handleSwitchBtnClick} id="available now">
          Available Now
        </button>
      </div>

      {dataToDisplay && dataToDisplay.map(item => {
        const { id, name, image, price, rating, votes, popular, available } = item
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        )
      })}

    </>

  )
}

export default App