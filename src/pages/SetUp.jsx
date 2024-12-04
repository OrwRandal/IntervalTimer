import TimerContext from "../context/timerContext";
import { useState } from "react";
import { useContext } from "react";
import {Link} from 'react-router-dom'
function SetUp() {
    const {sets, setSets, work, setWork, rest, setRest, voice, setVoice} = useContext(TimerContext);
    const [isActive, setIsActive] = useState(false)
    // const handleSelection = (event) => {
    //   setVoice(event.target.value);
    // };
  return (
    <>
    <div id='wrapper'>
      <div className="select mb-6">
        <select value={voice} onChange={(e) => setVoice(e.target.value)}>
          <option value="default">Default</option>
          <option value="vegeta">Vegeta</option>
          <option value="arthur">Arthur</option>
        </select>
      </div>
      {/* <button className="button mb-6" onClick={() => setIsActive(true)}>Voice Select</button> */}
      <h1 className="is-size-2 mb-3">Sets</h1>
      <div className='timeChanger'>
        <button className='button mx-3 arrow-btn' onClick={() => setSets(sets > 0? sets - 1: 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        <p>{sets}</p>
        <button className='button mx-3 arrow-btn' onClick={() => setSets(sets + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
        </button>
      </div>
      <h1 className="is-size-2 mt-3 mb-3">Work Time</h1>
      <div className='timeChanger'>
        <button className='button mx-3 arrow-btn' onClick={() => setWork(work > 0? work - 1: 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        <p>{work}</p>
        <button className='button mx-3 arrow-btn' onClick={() => setWork(work + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
        </button>
      </div>
      <h1 className="is-size-2 mt-3 mb-3">Rest Time</h1>
      <div className='timeChanger'>
        <button className='button mx-3 arrow-btn' onClick={() => setRest(rest > 0? rest - 1: 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        <p>{rest}</p>
        <button className='button mx-3 arrow-btn' onClick={() => setRest(rest + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
        </button>
      </div>
      <Link to='/count'>
        <button className="button mt-6">Start!</button>
      </Link>
     </div>
    </>
  )
}

export default SetUp;