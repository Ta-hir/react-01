import { useState } from "react";

export default function Pad({ color, on, handleClick, id }) {
  const [IsOn, setIsOn] = useState(on);

  const styles = {
    backgroundColor: color,
  };

  return (
    <button
      style={styles}
      className={on ? "on" : null}
      onClick={() => handleClick(id)}
    ></button>
  );
}
