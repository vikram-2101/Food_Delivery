import Card from "../Card/Card";
import "./Pricing.css";
const Pricing = () => {
  return (
    <section className="card-container">
      <div>
        <header>
          <h1>API Pricing</h1>
          <h4>
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </h4>
        </header>
      </div>
      <div className="cards">
        <Card name={"OpenAI"} model={"GPT-3.5"} price={"$0.002"} />
        <Card name={"OpenAI"} model={"GPT-4"} price={"$0.03"} />
        <Card name={"Together AI"} model={"Llama-2-70b"} price={"$0.08"} />
        <Card name={"Together AI"} model={"Llama-2-13b"} price={"$0.06"} />
      </div>
    </section>
  );
};

export default Pricing;
