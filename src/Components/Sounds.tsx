import Clap from "../assets/sounds/Clap.mp3";
import ClosedHH from "../assets/sounds/Closed-HH.mp3";
import Heater1 from "../assets/sounds/Heater-1.mp3";
import Heater2 from "../assets/sounds/Heater-2.mp3";
import Heater3 from "../assets/sounds/Heater-3.mp3";
import Heater4 from "../assets/sounds/Heater-4.mp3";
import KickHat from "../assets/sounds/Kick_n_Hat.mp3";
import Kick from "../assets/sounds/Kick.mp3";
import OpenHH from "../assets/sounds/Open-HH.mp3";

const sounds: Record<string, { name: string; sound: string }> = {
  Q: { name: "Heater 1", sound: Heater1 },
  W: { name: "Heater 2", sound: Heater2 },
  E: { name: "Heater 3", sound: Heater3 },
  A: { name: "Heater 4", sound: Heater4 },
  S: { name: "Clap", sound: Clap },
  D: { name: "Open HH", sound: OpenHH },
  Z: { name: "Kick n' Hat", sound: KickHat },
  X: { name: "Kick", sound: Kick },
  C: { name: "Closed HH", sound: ClosedHH },
};

export default sounds;