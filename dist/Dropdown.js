import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import des icônes de flèche pour le dropdown
import "./dropdown.css"; // Import du fichier CSS pour styliser le dropdown
// Composant fonctionnel Dropdown
const Dropdown = ({ options, selectedOption, onOptionSelect, }) => {
    // État pour gérer l'ouverture ou la fermeture du dropdown
    const [isOpen, setIsOpen] = useState(false);
    /**
     * Fonction pour gérer le clic sur une option du dropdown
     *
     * @param option - L'option qui a été cliquée
     * @return void
     *
     * Cette fonction appelle onOptionSelect avec l'option sélectionnée et ferme le dropdown
     */
    const handleOptionClick = (option) => {
        onOptionSelect(option); // Appelle la fonction passée en props pour mettre à jour l'option sélectionnée
        setIsOpen(false); // Ferme le dropdown après la sélection de l'option
    };
    return (React.createElement("div", { className: "dropdownOpenclassroom-container" },
        " ",
        React.createElement("div", { className: "dropdownOpenclassroom-header" // Header du dropdown, affichant l'option sélectionnée et la flèche
            , onClick: () => setIsOpen(!isOpen) },
            selectedOption,
            " ",
            React.createElement("i", { className: `dropdownOpenclassroom-arrow ${isOpen ? "up" : "down"}` }, isOpen ? React.createElement(FaChevronUp, null) : React.createElement(FaChevronDown, null))),
        isOpen && ( // Affiche la liste des options seulement si le dropdown est ouvert
        React.createElement("ul", { className: "dropdownOpenclassroom-options" }, options.map((option) => (React.createElement("li", { key: option, onClick: () => handleOptionClick(option) }, option)))))));
};
export default Dropdown;
