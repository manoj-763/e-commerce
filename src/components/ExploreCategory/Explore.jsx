import { useContext } from "react";
import "./Explore.css";
import { StoreContext } from "../../context/StoreContext";

// eslint-disable-next-line react/prop-types
const Explore = ({ category, setCategory }) => {
  const categories = useContext(StoreContext).categories;

  return (
    <div className="explore-cat" id="explore-menu">
      <h1>Shop Category Wise</h1>
      <p className="explore-cat-text">Explore Categories</p>
      <div className="exlpore-cat-list">
        {categories.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(category === item.menu_name ? undefined : item.menu_name)
              }
              key={index}
              className="explore-cat-list-item"
            >
              <img
                className={category === item.menu_name ? "Active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
