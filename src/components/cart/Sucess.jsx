import { useHistory } from "react-router-dom";

export const Success = () => {
    let history = useHistory();
  return (
    <section id="success">
      <div className="container-fluid">
        <div className={"row justify-content-center align-items-center"}>
          <div className={"col-12 col-md-9"}>
            <h2 className={"my-3"}>Order Received</h2>
            <img
              className={"d-block mx-auto"}
              src={require("../../assets/images/success.png").default}
            />
            <h1 className={"text-center"}>Thank You!</h1>
            <p className={"text-center my-3"}>
              We have successfully received your order!
            </p>
            <button className={"gradient-btn"} onClick={()=>history.push("/")}>Submit another order</button>
          </div>
        </div>
      </div>
    </section>
  );
};
