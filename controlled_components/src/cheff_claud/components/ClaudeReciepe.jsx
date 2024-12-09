import ReactMarkdown from "react-markdown";

export default function ClaudeReciepe(props) {
  return (
    <article className="suggested-reciepe" aria-label="polite">
      <h3>Chef Claude Recommends:</h3>
      {props.isloading ? "Loading..." : null}
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </article>
  );
}
