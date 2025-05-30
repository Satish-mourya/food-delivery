import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({ Category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a
        veritatis doloribus magni excepturi sint voluptatibus nihil voluptatem
        vel quo. Molestiae ea ad deserunt earum ratione id sint, officia harum?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          return (
            <div

            key={item.menu_name}
              onClick={  () =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={Category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
