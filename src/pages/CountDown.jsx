import { useState, useEffect, useContext } from "react";
import TimerContext from "../context/timerContext";
import { useNavigate } from 'react-router-dom';

// Import sound files
import StartSound from '../assets/Start.aac';
import BreakTimeSound from '../assets/Breaktime.aac';
import VegetaStartSound from '../assets/vegeta/VegetaStart.aac'
import VegetaBreakOverSound from '../assets/vegeta/VegetaBreakOver.mp3'
import VegetaBreakTimeSound from '../assets/vegeta/VegetaBreakTime.mp3'
import VegetaMotivate from '../assets/vegeta/VegetaMotivate.mp3'
import VegetaEnd from '../assets/vegeta/VegetaEnd.mp3'
import ArthurStartSound from '../assets/Arthur/ArthurStart.aac';
import ArthurMotivate from '../assets/Arthur/ArthurMotivate.aac';
import ArthurBreakTimeSound from '../assets/Arthur/ArthurBreakTime.aac';
import ArthurBreakOverSound from '../assets/Arthur/ArthurBreaKEnd.aac';
import ArthurEnd from '../assets/Arthur/ArthurEnd.aac';
 
function CountDown() {
  const { sets, work, rest, voice } = useContext(TimerContext);
  const navigate = useNavigate();
  const [currentSet, setCurrentSet] = useState(1);
  const [timeLeft, setTimeLeft] = useState(3);
  const [isWorkPhase, setIsWorkPhase] = useState(false);

  // Initialize audio objects outside the component function
  const defaultStartAudio = new Audio(StartSound);
  const defaultBreakAudio = new Audio(BreakTimeSound);
  const VegetaStartAudio = new Audio(VegetaStartSound);
  const VegetaBreakOverAudio = new Audio(VegetaBreakOverSound)
  const VegetaBreakAudio = new Audio(VegetaBreakTimeSound);
  const VegetaMotivateAudio = new Audio(VegetaMotivate);
  const VegetaEndAudio = new Audio(VegetaEnd);

  const ArthurStartAudio = new Audio(ArthurStartSound);
  const ArthurBreakOverAudio = new Audio(ArthurBreakOverSound)
  const ArthurBreakAudio = new Audio(ArthurBreakTimeSound);
  const ArthurMotivateAudio = new Audio(ArthurMotivate);
  const ArthurEndAudio = new Audio(ArthurEnd);

  const voices = {
    start: voice === 'vegeta'? VegetaStartAudio:
    voice === 'arthur'? ArthurStartAudio: defaultStartAudio,
    breakEnd: voice === 'vegeta'? VegetaBreakOverAudio: 
    voice === 'arthur'? ArthurBreakOverAudio: defaultStartAudio,
    break: voice === 'vegeta'? VegetaBreakAudio:
    voice === 'arthur'? ArthurBreakAudio: defaultBreakAudio,
    motivate: voice === 'vegeta'? VegetaMotivateAudio: 
    voice === 'arthur'? ArthurMotivateAudio: VegetaMotivateAudio,
    end: voice === 'vegeta'? VegetaEndAudio: 
    voice === 'arthur'? ArthurEndAudio: VegetaEndAudio
  }

  useEffect(() => {
    if (timeLeft > 0) {
      if(work >= 10 && timeLeft === work/2 && isWorkPhase){
        voices.motivate.play()
      }
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Handle end of initial countdown, work, or rest periods
      if (timeLeft === 0 && currentSet <= sets) {
        if (!isWorkPhase) {
          // Start of work phase: play start sound
          currentSet === 1? voices.start.play(): voices.breakEnd.play();
          setIsWorkPhase(true);
          setTimeLeft(work);
        } else {
          // End of work phase, start rest phase if more sets remain
          if (currentSet < sets) {
            voices.break.play(); // Play break sound
            setIsWorkPhase(false);
            setTimeLeft(rest);
            setCurrentSet(prevSet => prevSet + 1);
          } else {
            // Workout complete
            voices.end.play()
            setTimeLeft(0);
            navigate('/');
          }
        }
      }
    }
  }, [timeLeft, isWorkPhase, currentSet, sets, work, rest, navigate, voices.start, voices.break]);

  return (
    <div style={{ backgroundColor: isWorkPhase ? '#C1E1C1' : '#FF746C' }} id="timer-wrapper">
      <h1 className="is-size-1 has-text-weight-bold mb-6 is-black">Set {currentSet} of {sets}</h1>
      <h2 className="is-size-1 has-text-weight-bold is-black">{isWorkPhase ? "Work Time" : "Rest Time"}: {timeLeft}</h2>
      {currentSet > sets && <h2>Workout Complete!</h2>}
    </div>
  );
}

export default CountDown;
