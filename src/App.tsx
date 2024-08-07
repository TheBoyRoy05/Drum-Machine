import { useEffect } from "react";
import DrumPad from "./DrumPad";
import sounds from "./Sounds";

function App() {
  const play = (key: string) => {
    if (sounds[key]) {
      new Audio(sounds[key].sound)
        .play()
        .catch((err) => console.error("Audio failed to play:", err));
    } else console.warn(`No sound mapped for ${key}`);
  };

  useEffect(() => {
    document.addEventListener("keyup", (e) => play(e.key.toUpperCase()), true);
  }, []);

  return (
    <div id="drum-machine">
      <div className="pad-bank">
        {Object.keys(sounds).map((key, index) => (
          <DrumPad padKey={key} key={index} play={play} />
        ))}
      </div>
    </div>
  );
}

export default App;
