import DrumPad from "./Components/DrumPad";
import sounds from "./Components/Sounds";
import "./Styles/drums.css"

function App() {

  const playSound = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key.toUpperCase();
    const sound = sounds[key];
    if (!sound) return;
    (document.getElementById(key) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById(`drum-${key}`)?.focus();
    document.getElementById("display")!.innerText = sound.name;
  };

  return (
    <>
      <h1>FCC Drum Machine</h1>
      <div id="drum-machine" onKeyDown={playSound}>
        <div className="pad-bank">
          {Object.keys(sounds).map(key => (
            <DrumPad drumKey={key} key={key} />
          ))}
        </div>
        <div id={"display"} className={"display"}>{"Press a Pad"}</div>
      </div>
    </>
  );
}

export default App;
