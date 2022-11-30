import "./DoubleBlock.scss";

function DoubleBlock() {
  const base = `doubleblock`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_left`}>
        <div>
          <div className={`${base}_square`}>
            <div className={`${base}_bg_wrap`}>
              <div className={`${base}_square_bg1`}></div>
            </div>
          </div>
          <div className={`${base}_text`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, qui.
          </div>
        </div>
        <div>
          <div className={`${base}_text`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, qui.
          </div>
          <div className={`${base}_square`}>
            <div className={`${base}_bg_wrap`}>
              <div className={`${base}_square_bg2`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${base}_right`}>
        <h1 className={`${base}_title`}>
          Lorem
          <br />
          ipsum
        </h1>
        <div className={`${base}_label`}>
          dolar
          <br />
          sit
          <br />
          amet
        </div>
        <div className={`${base}_desc`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ducimus
          deserunt.
        </div>
        <div className={`${base}_line`}></div>
      </div>
    </div>
  );
}

export default DoubleBlock;
