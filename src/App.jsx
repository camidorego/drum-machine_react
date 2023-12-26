import './App.css';
import DrumMachine from './DrumMachine';

const keys=['Q','W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sounds=['Heater-1','Heater-2','Heater-3','Heater-4','Clap','Open-HH','Kick-n\'-Hat','Kick','Closed-HH']
const urls=['/audio/Heater-1.mp3', '/audio/Heater-2.mp3', '/audio/Heater-3.mp3', '/audio/Heater-4_1.mp3', '/audio/Heater-6.mp3', '/audio/Kick_n_Hat.mp3', '/audio/RP4_KICK_1.mp3', '/audio/Cev_H2.mp3', '/audio/Dsc_Oh.mp3']
const colors=['#ff0000', '#ff8700', '#deff0a', '#a1ff0a','#0aff99','#0aefff', '#147df5','#580aff','#be0aff']

function App() {
  return (
    <>
        <h1>Drum Machine</h1>
        <DrumMachine keys={keys} urls={urls} colors={colors} sounds={sounds}/>
    </>
  )
}

export default App
