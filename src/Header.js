import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";  

function Header() {  
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
    }
  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="logo.png"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
        <div onClick={handleAuthenticaton} className="header__option_login">
            <span className="header__optionLineTwo">Login</span>
          </div>
        </Link>
          <div className="header__option">
            <span className="header__optionLineTwo">Become a Seller</span>
          </div>
          <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Header;