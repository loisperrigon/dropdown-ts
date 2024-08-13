# Composant Dropdown

## Prérequis

Node.js (14.x ou supérieur)
React (18.x ou supérieur)

## Installation

```bash
npm i dropdownopenclassroom

```

### Installer les Dépendances

```javascript
import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const App: React.FC = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default App;
```

### Props du Composant Dropdown

options (string[]): Liste des options à afficher dans le dropdown.
selectedOption (string): L'option actuellement sélectionnée.
onOptionSelect (function): Fonction appelée lorsqu'une option est sélectionnée. Reçoit l'option sélectionnée en argument.

### Personnalisation du CSS

#### .dropdownOpenclassroom-container :

Description : Conteneur principal du dropdown.
Utilisation : Utilisez cette classe pour définir les styles de base du composant dropdown.
Exemple :

```css
.dropdownOpenclassroom-container {
  position: relative;
  display: inline-block;
  width: 200px;
}
```

#### .dropdownOpenclassroom-header :

Description : En-tête du dropdown qui affiche l'option sélectionnée.
Utilisation : C'est ici que vous pouvez styliser le texte de l'option actuellement choisie.
Exemple :

```css
.dropdownOpenclassroom-header {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
```

#### .dropdownOpenclassroom-arrow :

Description : Flèche indiquant la direction du dropdown.
Utilisation : Cette classe est utilisée pour la flèche qui montre si le dropdown est ouvert ou fermé.
Exemple :

```css
.dropdownOpenclassroom-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  margin-left: 10px;
}
```

#### .dropdownOpenclassroom-arrow.up :

Description : Flèche pointant vers le haut lorsque le dropdown est ouvert.
Utilisation : Vous pouvez personnaliser cette classe pour modifier l'apparence de la flèche lorsqu'elle est dans l'état "ouvert".
Exemple :

```css
.dropdownOpenclassroom-arrow.up {
  border-top: none;
  border-bottom: 5px solid #333;
}
```

#### .dropdownOpenclassroom-options :

Description : Conteneur des options du dropdown.
Utilisation : Utilisez cette classe pour styliser la liste des options disponibles.
Exemple :

```css
.dropdownOpenclassroom-options {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1000;
}
```

#### .dropdownOpenclassroom-options li :

Description : Élément de liste d'options.
Utilisation : Appliquez les styles aux éléments individuels de la liste des options.
Exemple :

```css
.dropdownOpenclassroom-options li {
  padding: 10px;
  cursor: pointer;
}
```

#### .dropdown-options li:hover :

Description : Style appliqué à une option lorsque vous la survolez.
Utilisation : Utilisez cette classe pour définir l'apparence des options au survol pour une meilleure interaction utilisateur.
Exemple :

```css
.dropdownOpenclassroom-options li:hover {
  background-color: #f0f0f0;
}
```
