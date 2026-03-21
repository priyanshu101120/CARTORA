import { useNavigate } from "react-router-dom";
import Productgrid from "../products/ProductsGrid";
import BannerSlider from "../pages/BannerSlider";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Productgrid />
      <BannerSlider />
    </>
  );
};

export default Home;
