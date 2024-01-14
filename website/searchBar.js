// List of food items
const foods = []

d3.csv('./Datasets/unique_ingredients.csv', (data) => {
    for (let i = 0; i < data.length; i++) {
        foods.push(data[i]['Unique Ingredients']);
    }
});

// Selected items
const selectedItems = [];

// Function to filter and display matching foods
function filterFoods() {
  const searchBox = document.getElementById('search-box');
  const dropdownContent = document.getElementById('dropdown-content');
  const searchTerm = searchBox.value.toLowerCase();

  // Filter foods based on search term and not in selectedItems
  const filteredFoods = foods.filter(food => food.toLowerCase().includes(searchTerm) && !selectedItems.includes(food));

  // Display the results in the dropdown
  dropdownContent.innerHTML = filteredFoods.map(food => `<div onclick="selectItem('${food}')">${food}</div>`).join('');

  // Show/hide the dropdown
  dropdownContent.style.display = (filteredFoods.length > 0 && searchBox.value !== '') ? 'block' : 'none';

  // If there is only one item left and enter key is pressed, select it
  if (filteredFoods.length === 1 && event.key === 'Enter') {
    selectItem(filteredFoods[0]);
  }
}

// Function to toggle the dropdown visibility
function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Function to handle enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const dropdownContent = document.getElementById('dropdown-content');
    const visibleItems = Array.from(dropdownContent.children).filter(item => item.style.display !== 'none');
    if (visibleItems.length === 1) {
      selectItem(visibleItems[0].textContent);
    }
  }
}

// Function to select an item from the dropdown
function selectItem(item) {
  const resultContainer = document.getElementById('result');

  // Check if the item is already selected
  if (selectedItems.includes(item)) {
    return;
  }

  selectedItems.push(item);

  // Sort the selected items alphabetically
  selectedItems.sort();

  // Display the selected items
  displaySelectedItems();

  // Clear the search box, hide the dropdown, and reset the dropdown content
  document.getElementById('search-box').value = '';
  document.getElementById('dropdown-content').style.display = 'none';
  document.getElementById('dropdown-content').innerHTML = '';

  // Update the dropdown with new filtered items (excluding selected items)
  filterFoods();
}

// Function to remove an item from selectedItems
function removeItem(item) {
  const index = selectedItems.indexOf(item);
  if (index !== -1) {
    selectedItems.splice(index, 1);
    displaySelectedItems();
    filterFoods(); // Add this line to update the dropdown after removing an item
  }
}

// Function to display the selected items
function displaySelectedItems() {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = 'Available items: ' + selectedItems.map(selected => `<span class="selected-item" onclick="removeItem('${selected}')">${selected} &#10006;</span>`).join(', ');
}

// Function to update meal title based on the current time
function updateMealTitle() {
  const mealTitle = document.getElementById('meal-title');
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    mealTitle.textContent = 'Tentatively Breakfast';
  } else if (currentHour >= 12 && currentHour < 17) {
    mealTitle.textContent = 'Tentatively Lunch';
  } else {
    mealTitle.textContent = 'Tentatively Dinner';
  }
}


let compatibilityValue = 50
// Function to update the compatibility value
function updateCompatibility() {
  compatibilityValue = document.getElementById('meal-compatibility').value;
  document.getElementById('compatibility-value').textContent = compatibilityValue;
}

// Function to generate recipes as differently colored rectangle buttons
function generateRecipes() {
  // Implement your recipe generation logic here
  let outputRecipes = findRecipes(selectedItems, compatibilityValue, ingMap, totMap);
  let container = document.getElementById("recipeView");
  container.innerHTML = ""; // Clear previous content
  for (let rating in outputRecipes) {
    for(recipe of outputRecipes[rating]) {
      let button = document.createElement('button');
      button.classList.add('recipe-button');
      button.innerText = recipe;

      // Set background color based on compatibility-value range
      const hue = (rating * 120) % 360;
      button.style.backgroundColor = `hsl(${hue}, 70%, 50%)`
      container.appendChild(button);
    }
  }
}


// Call the function to set the initial meal title
updateMealTitle();

document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdown');
  const dropdownContent = document.getElementById('dropdown-content');
  const searchBox = document.getElementById('search-box');

  // Check if the clicked element is outside the dropdown
  if (!dropdown.contains(event.target) && !searchBox.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});
