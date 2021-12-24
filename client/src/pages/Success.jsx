import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  // const data = location.state.stripeData;
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  console.log(location);
  return <div>successfull</div>;
};

export default Success;
