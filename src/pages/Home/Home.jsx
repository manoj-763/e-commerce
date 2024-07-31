import  { useContext } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Explore from "../../components/ExploreCategory/Explore";
import AppDownload from "../../components/AppDownload.jsx/AppDownload";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import { StoreContext } from "../../context/StoreContext";



const Home = () => {
  const storeContext = useContext(StoreContext);

  return (
    <div>
      <Header />
      <Explore
        category={storeContext.category}
        setCategory={(cat) => {
          storeContext.onUpdateCategory(cat);
        }}
      />
      <CartDisplay category={storeContext.category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
