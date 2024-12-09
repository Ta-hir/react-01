export default function IngridientsList(props) {
  return (
    <section ref={props.ref}>
      <h2>Ingridients on hand:</h2>

      <ul className="ingridients-list">
        {props.IngridientsList.map((ingridient) => (
          <li key={ingridient}>{ingridient}</li>
        ))}
      </ul>
    </section>
  );
}
