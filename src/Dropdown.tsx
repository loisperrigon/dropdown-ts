import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import des icônes de flèche pour le dropdown
import "./dropdown.css"; // Import du fichier CSS pour styliser le dropdown

// Interface décrivant les propriétés attendues par le composant Dropdown
interface DropdownProps {
  options: string[]; // Tableau des options à afficher dans le dropdown
  selectedOption: string; // Option actuellement sélectionnée dans le dropdown
  onOptionSelect: (option: string) => void; // Fonction appelée lorsque l'utilisateur sélectionne une option
}

// Composant fonctionnel Dropdown
const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
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
  const handleOptionClick = (option: string) => {
    onOptionSelect(option); // Appelle la fonction passée en props pour mettre à jour l'option sélectionnée
    setIsOpen(false); // Ferme le dropdown après la sélection de l'option
  };

  return (
    <div className="dropdownOpenclassroom-container">
      {" "}
      {/* Conteneur principal du dropdown */}
      <div
        className="dropdownOpenclassroom-header" // Header du dropdown, affichant l'option sélectionnée et la flèche
        onClick={() => setIsOpen(!isOpen)} // Change l'état du dropdown (ouvert/fermé) lorsque le header est cliqué
      >
        {selectedOption} {/* Affiche l'option actuellement sélectionnée */}
        <i className={`dropdownOpenclassroom-arrow ${isOpen ? "up" : "down"}`}>
          {/* Affiche l'icône de flèche orientée en fonction de l'état du dropdown */}
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </i>
      </div>
      {isOpen && ( // Affiche la liste des options seulement si le dropdown est ouvert
        <ul className="dropdownOpenclassroom-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {/* Affiche chaque option et appelle handleOptionClick lorsque l'option est cliquée */}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
