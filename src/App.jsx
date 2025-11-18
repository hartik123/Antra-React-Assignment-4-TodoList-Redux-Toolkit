import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css'
import MainPage from './pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
      <MainPage/>
     </Provider>
    </>
  )
}

export default App
