import React, { useEffect, useState } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import Wishlist from "../../assets/images/icon-heart.svg";
import Cart from "../../assets/images/icon-cart.svg";

const Header = () => {
  const [categories] = useState([
    "Milk and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    " Baking material",
    "Vegetables",
    "  Fresh Fruit",
    "Bread and Juice",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  });

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res != null) {
          // console.log(res.data.data);
          res.data.data.map((item) => {
            return countryList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="logo" />
            </div>
            {/* search bar */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select
                  data={categories}
                  placeholder="All Categories"
                  icon={false}
                />

                <div className="search">
                  <input type="text" placeholder="Search" />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>

            <div className="col-sm-5  d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center">
                <div className="countryDropDown">
                  <Select
                    data={countryList}
                    placeholder="Your Location"
                    icon={
                      <LanguageOutlinedIcon
                        style={{ opacity: "0.1", position: "absolute" }}
                      />
                    }
                  />
                </div>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <img src={IconCompare} alt="compare" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={Wishlist} alt="compare" />
                      <span className="badge bg-success rounded-circle">3</span>
                      WishList
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={Cart} alt="compare" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
