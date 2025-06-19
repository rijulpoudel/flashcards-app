export default function FlashcardSet({ title, description, total }) {
  return (
    <div className="set-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Cards: {total}</p>
    </div>
  );
}
