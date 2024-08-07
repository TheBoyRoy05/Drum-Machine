import sounds from "./Sounds";

interface DrumPadProps {
  padKey: string;
  play: (key: string) => void;
}

export default function DrumPad({ padKey: key, play }: DrumPadProps) {
  return (
    <button id={sounds[key].name} onClick={() => play(key)}>
      <audio id={key} />
      {key}
    </button>
  );
}
