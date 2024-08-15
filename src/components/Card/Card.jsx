import "./Card.css";
const Card = ({ name, model, price }) => {
  return (
    <div className="card">
      <div className="head-container">
        <h3>{name}</h3>
        <h4>{model}</h4>
      </div>
      <div className="price-container">
        <p>PRICE PER 1K TOKEN: </p>
        <b>{price}</b>
      </div>
      <div className="button">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
