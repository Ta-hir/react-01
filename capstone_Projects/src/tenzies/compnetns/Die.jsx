export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "white",
  };

  return (
    <button onClick={() => props.handleClick(props.id)} style={styles}>
      {props.value}
    </button>
  );
}
