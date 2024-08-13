import React from "react";
import "./dropdown.css";
interface DropdownProps {
    options: string[];
    selectedOption: string;
    onOptionSelect: (option: string) => void;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
