import "./SlideTemplate.scss";

function SlideTemplate() {
  const base = `slideTemplate`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_bg`}></div>
      <h1 className={`${base}_title`}>Slide Template</h1>
    </div>
  );
}

export default SlideTemplate;
