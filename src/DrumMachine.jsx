import { useState, useEffect, useRef } from "react";
import './DrumMachine.css';

const playAudio=(url)=>{
    const [audio]=useState(new Audio(url));
    const [playing, setPlaying]=useState(false);

    const toggle=() => setPlaying(!playing);
    useEffect(()=>{
        playing ? audio.play() : audio.pause() 
    }, [playing]) // se ejecuta cada vez que 'playing' cambia

    return [toggle];
}


function DrumPad({text, url, color, changeDisplay, sound}) {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggle = () => setPlaying(!playing);

    const handleClick = () => {
        toggle();
        changeDisplay(sound);
    }
    useEffect(()=>{
        const drumPad = document.getElementById(text);

        if (drumPad) {
            if (playing) {
                drumPad.currentTime = 0; // Reset audio to the beginning
                drumPad.play();
            } else {
                drumPad.pause();
            }
        }
    }, [playing, sound]);


    return (
        <button className="drum-pad" onClick={handleClick} style={{backgroundColor: color}} id={sound}>
            {text}
            <audio src={url} className="clip" id={text}></audio>
        </button>
    );
}

function DrumMachine({keys, urls, colors, sounds}) {
    const [display, setDisplay] = useState('');
    const changeDisplay = text => setDisplay(text);
    
    return (
        <>
            <div id="display">{display}</div>
            <div id='container'>
                {keys.map((key, i) => (
                    <DrumPad key={i} text={key} url={urls[i]} color={colors[i]} changeDisplay={changeDisplay} sound={sounds[i]}/>
                ))}
            </div>
        </>
    );
}



export default DrumMachine