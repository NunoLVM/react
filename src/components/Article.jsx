export default function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p className="article-author">Written by {props.author}</p>
    </article>
  );
}
