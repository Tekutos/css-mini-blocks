import "./Blog.scss";

function Blog() {
  const base = `blog`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_column1`}>
        <div className={`${base}_line`}></div>
      </div>
      <div className={`${base}_column2`}>
        <div className={`${base}_title`}>
          <span>
            DOLOR <p>SIT AMET</p>
          </span>
        </div>
        <div className={`${base}_text1`}>
          <div className={`${base}_line1`}></div>
          <span className={`${base}_span1`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            corrupti aut eveniet voluptate aliquid mollitia.
          </span>
        </div>
        <div className={`${base}_text2`}>
          <div className={`${base}_line2`}></div>
          <span className={`${base}_span2`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            corrupti aut eveniet voluptate aliquid mollitia.
          </span>
        </div>
        <div className={`${base}_text3`}>
          <div className={`${base}_line3`}></div>
          <span className={`${base}_span3`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            corrupti aut eveniet voluptate aliquid mollitia.
          </span>
        </div>
        <div className={`${base}_text4`}>
          <div className={`${base}_line4`}></div>
          <span className={`${base}_span4`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            corrupti aut eveniet voluptate aliquid mollitia.
          </span>
        </div>
      </div>
      <div className={`${base}_column3`}></div>
    </div>
  );
}

export default Blog;
