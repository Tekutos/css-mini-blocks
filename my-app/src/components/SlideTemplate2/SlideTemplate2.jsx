import "./SlideTemplate2.scss";

function SlideTemplate2() {
  const base = `slideTemplate2`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_content`}>
        <h1 className={`${base}_title`}>Slide Template</h1>
        <div className={`${base}_desc`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          excepturi?
        </div>
        <div className={`${base}_item`}>
          <div className={`${base}_item_circle`}>
            <div className={`${base}_circle_text`}>
              dolar
              <br />
              sit
              <br />
              amet
            </div>
          </div>
          <div className={`${base}_item_text`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, nisi.
          </div>
        </div>
        <div className={`${base}_item item_invert`}>
          <div className={`${base}_item_circle`}>
            <div className={`${base}_item_circle_label`}>Lorem ipsum</div>
            <div className={`${base}_item_circle_text`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
              velit!.
            </div>
          </div>
          <div className={`${base}_item_text`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, et!
          </div>
        </div>
        <div className={`${base}_item`}>
          <div className={`${base}_item_circle`}>
            <div className={`${base}_item_numb`}>2345</div>
            <div className={`${base}_item_circle_text`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              fuga!
            </div>
          </div>
          <div className={`${base}_item_text`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, ex?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideTemplate2;
