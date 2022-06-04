export default function Card(props) {
  return (
    <div className="cardBox">
      <div className="divider"></div>
      <div className="contents">
        <div className="nameHeader">
          <h2>{props.name}</h2>
          <div className="details">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="img">
          <img src={props.imgURL} alt=""></img>
        </div>
      </div>
    </div>
  );
}
