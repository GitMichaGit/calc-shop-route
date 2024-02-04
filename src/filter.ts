import { data } from './categories.js';

const items = [];

function assignIdsToItems(data, items) {
  const result = [];
  const categories = Object.keys(data);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const products = data[category];

    for (let j = 0; j < products.length; j++) {
      const product = products[j];

      if (items.includes(product.name)) {
        result.push(
          { 
            ID: product.id, 
            Produkt: product.name
           }
          );
      }
    }
  }
  result.sort((a, b) => a.ID - b.ID);
  return result;
}
assignIdsToItems(data, items);

const productListContainer = document.getElementById('productList');
const selectedItemsList = document.getElementById('selectedItems');

function createProductButtons() {
  for (const category in data) {
    const products = data[category];

    // Erstelle einen Container für die Produktgruppe
    const groupContainer = document.createElement('div');
    groupContainer.className = 'product-group';
    groupContainer.id = category;
    groupContainer.innerHTML = `<h2>${category}</h2>`;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const productButton = document.createElement('div');
      productButton.className = `product-button-${category}`;
      productButton.textContent = product.name;

      productButton.addEventListener('click', () => toggleSelectedItem(product, productButton));

      // Füge den Button zum Container hinzu
      groupContainer.appendChild(productButton);
    }

    // Füge den Gruppencontainer zum Dokument hinzu
    // document.body.appendChild(groupContainer);
    productListContainer.appendChild(groupContainer);
  }
}

createProductButtons();

function toggleSelectedItem(product, productButton) {
  // const listItem = document.createElement('li');
  const listItem = document.createElement('button');
  listItem.textContent = `ID: ${product.id}, Produkt: ${product.name}`;
  listItem.className = 'selected-item list-item-btn';

  // Überprüfe, ob das Produkt bereits ausgewählt wurde
  const isSelected = selectedItemsList.contains(listItem);

  if (isSelected) {
    // Produkt entfernen
    selectedItemsList.removeChild(listItem);
    productButton.style.backgroundColor = ''; // Optional: Stil zurücksetzen
    // Element aus items-Array entfernen
    const index = items.findIndex(item => item.id === product.id && item.name === product.name);
    if (index !== -1) {
      items.splice(index, 1);
    }
  } else {
    // Produkt hinzufügen
    selectedItemsList.appendChild(listItem);
    productButton.style.backgroundColor = '#316593'; // Optional: Hervorhebung
    // Element zum items-Array hinzufügen, falls es noch nicht existiert
    const existingItem = items.find(item => item.id === product.id && item.name === product.name);
    if (!existingItem) {
      items.push({ id: product.id, name: product.name });
    }
  }

  // Füge einen Eventlistener hinzu, um das Produkt erneut zu entfernen
  listItem.addEventListener('click', () => {
    selectedItemsList.removeChild(listItem);
    productButton.style.backgroundColor = ''; // Optional: Stil zurücksetzen
    // Element aus items-Array entfernen
    const index = items.findIndex(item => item.id === product.id && item.name === product.name);
    if (index !== -1) {
      items.splice(index, 1);
    }
  });


  function innerHtmlP() {
    // items.sort((a, b) => a.id-b);
    // inner html paragah 
  }

}