import "/src/pages/style.css";
import { Dropdown, Option } from "../Dropdown";
import { useNavigate } from "react-router-dom";
import ControlledCarousel from "../carousel";

export default function Login(props) {
  const handleSelect = (e) => {
    console.log(e.target.value);
    props.setOptionValue(e.target.value);
  };

  function handleChange(event) {
    console.log(event.target.value);
    props.setName(event.target.value);
  }

  let navigate = useNavigate();

  return (
    <div>
      <h1>Enter Your Name Here</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name"
        value={props.name}
      />
      <Dropdown buttonText="Start" onChange={handleSelect} action="page2">
        <Option selected value="Program Studi" />
        <Option value="Informatika" />
        <Option value="Manajemen" />
        <Option value="Akuntansi" />
        <Option value="Ilmu Komunikasi" />
        <Option value="Sistem Informasi" />
        <Option value="Desain Komunikasi Visual" />
        <Option value="Film & Animasi" />
      </Dropdown>
      <p>Anda telah memilih jurusan "{props.optionValue}", apakah benar ?</p>
      <ControlledCarousel index={props.index} setIndex={props.setIndex} />
      <div class="d-flex justify-content-center">
        <button
          onClick={() => {
            props.setRender(1);
            props.setProgressValue1(50);
            props.setProgressValue2(50);
            props.setProgressValue3(50);
            props.setProgressValue4(0);
            props.setMinute(0);
            props.setHour(0);
            props.setDay(0);
            navigate("/home");
          }}
          className={"button"}
        >
          Next
        </button>
      </div>
    </div>
  );
}
