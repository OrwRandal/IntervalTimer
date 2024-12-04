import TimerContext from "./timerContext";
import { useState } from "react";
const TimerProvider = ({children}) => {
    const [sets, setSets] = useState(0);
    const [work, setWork] = useState(0);
    const [rest, setRest] = useState(0);
    const [voice, setVoice] = useState('default');
    const contextValues = {
        sets, setSets, work, setWork, rest, setRest, voice, setVoice
    };
    return (
        <TimerContext.Provider value={contextValues}>
          {children}
        </TimerContext.Provider>
    );
}

export default TimerProvider;