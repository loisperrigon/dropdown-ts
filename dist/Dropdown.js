import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import des icônes de flèche
import "./dropdown.css";
const Dropdown = ({ options, selectedOption, onOptionSelect, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };
    return (React.createElement("div", { className: "dropdownOpenclassroom-container" },
        React.createElement("div", { className: "dropdownOpenclassroom-header", onClick: () => setIsOpen(!isOpen) },
            selectedOption,
            React.createElement("i", { className: `dropdownOpenclassroom-arrow ${isOpen ? "up" : "down"}` }, isOpen ? React.createElement(FaChevronUp, null) : React.createElement(FaChevronDown, null))),
        isOpen && (React.createElement("ul", { className: "dropdownOpenclassroom-options" }, options.map((option) => (React.createElement("li", { key: option, onClick: () => handleOptionClick(option) }, option)))))));
};
export default Dropdown;
