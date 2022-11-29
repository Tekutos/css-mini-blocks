import "./MainPage.scss";
import { React } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const base = `main`;

  const navigate = useNavigate();

  function handlerClick1() {
    navigate("/slidetemplate");
  }

  function handlerClick2() {
    navigate("/blog");
  }

  function handlerClick3() {
    navigate("/slidetemplate");
  }

  function handlerClick4() {
    navigate("/slidetemplate");
  }

  function handlerClick5() {
    navigate("/slidetemplate");
  }

  return (
    <div className="container">
      <div className={`${base}_Box1`}>
        <div className={`${base}_slidetemplateBox1`} onClick={handlerClick1} />
        <div className={`${base}_slidetemplateBox2`} onClick={handlerClick2} />
        <div className={`${base}_slidetemplateBox3`} onClick={handlerClick3} />
        <div className={`${base}_slidetemplateBox4`} onClick={handlerClick4} />
        <div className={`${base}_slidetemplateBox5`} onClick={handlerClick5} />
      </div>
    </div>
  );
}

export default MainPage;
