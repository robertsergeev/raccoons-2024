import TransactionsList from './components/TransactionsList/TransactionsList'
import CategoriesCard from './components/CategoriesCard/CategoriesCard'
import './styles/App.css'

function App() {

  return (
    <div className='App'>
      <CategoriesCard />
      <TransactionsList />
    </div>
  )
}

export default App
