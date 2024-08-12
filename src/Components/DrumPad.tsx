import sounds from "./Sounds";

interface DrumPadProps {
  drumKey: string;
}

export default function DrumPad({ drumKey: key }: DrumPadProps) {
  const playSound = (key: string) => {
    (document.getElementById(key) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.innerText = sounds[key].name;
  };

  return (
    <button
      className={"drum-pad"}
      id={`drum-${key}`}
      onClick={() => playSound(key)}
    >
      <audio className={"clip"} id={key} src={sounds[key].sound} />
      {key}
    </button>
  );
}
