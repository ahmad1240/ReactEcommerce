import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../selectDrop/select.css";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDrop cursor position-relative">
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectDropDown">
            <div className="searchField">
              <input type="text" placeholder="Search here..." />
            </div>
            <ul className="searchResult">
              <li
                key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {data.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => closeSelect(index, item)}
                    className={`${selectedIndex === index ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
