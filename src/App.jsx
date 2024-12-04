import {Routes, Route} from 'react-router-dom'
import SetUp from './pages/setUp'
import './App.css'
import TimerProvider from './context/timerProvider'
import CountDown from './pages/CountDown'

function App() {
  return (
    <TimerProvider>
      <Routes>
        <Route path='/' element={<SetUp />}/>
        <Route path='/count' element={<CountDown />} />
      </Routes>
    </TimerProvider>
  )

}

export default App
