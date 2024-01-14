// List of food items
const foods = [
  'Chicken Wings', 'Meatballs', 'Thyme', 'Caesar Dressing', 'Wasabi', 'Apples', 'Whole Chicken', 'Fettuccine Pasta', 'Peaches', 'Corn on the Cob', 'Sugar', 'Blackberries', 'Whole Wheat Tortillas', 'Turkey Breast', 'Mango Salsa', 'Paprika', 'Dill', 'Crab', 'Onions', 'Ramen Noodles', 'Eggplant', 'Taco Shells', 'Honey', 'Strawberry', 'Elbow Macaroni', 'Curry Powder', 'Jalapeño', 'Coconut Milk', 'Tomato', 'Salmon Fillets', 'Carrots', 'Alfredo Sauce', 'Asparagus', 'Acorn Squash', 'Feta Cheese', 'Fresh Basil', 'Cajun Seasoning', 'Red Onion', 'Kimchi', 'Jumbo Pasta Shells', 'Coleslaw', 'Salsa', 'White Wine', 'Eggs', 'Marinara Sauce', 'Sun-Dried Tomatoes', 'Ginger', 'Sweet and Sour Sauce', 'Linguine', 'Tortillas', 'Pecans', 'Bell Peppers', 'Tofu', 'Mayonnaise', 'Beef Stew Meat', 'Chicken Thighs', 'Gruyere Cheese', 'Orzo Pasta', 'Tuna Steak', 'Soy Sauce', 'Bread Crumbs', 'Turmeric', 'Orange', 'Raspberries', 'Blueberries', 'Mushrooms', 'Balsamic Vinaigrette', 'Cherry Tomatoes', 'Egg', 'Garlic Powder', 'Parsley', 'Red Pepper Flakes', 'Rice Vinegar', 'Spinach', 'Pork Shoulder', 'Basil Pesto', 'Bananas', 'Tahini Sauce', 'Poppy Seeds', 'Tahini', 'Cod Fillets', 'Arugula', 'Avocado', 'Graham Cracker Crust', 'Whole Wheat Wrap', 'Pasta', 'Brown Sugar', 'Rosemary', 'Cranberries', 'Onion', 'Baked Potatoes', 'Gochujang Sauce', 'Spaghetti Squash', 'Thai Basil', 'Blackberry Jam', 'Hummus', 'Chipotle Powder', 'Baking Soda', 'Chocolate Chips', 'Capers', 'Potatoes', 'Almonds', 'Romaine Lettuce', 'Syrup', 'Portobello Mushrooms', 'Greek Yogurt', 'Chickpeas', 'Pesto Sauce', 'Marsala Wine', 'Artichokes', 'Lemon Juice', 'Vanilla Extract', 'Buffalo Sauce', 'Brown Rice', 'Pepper', 'Apple Cider Vinaigrette', 'Bamboo Shoots', 'Sausage', 'Peas', 'Panko Bread Crumbs', 'Lettuce', 'Almond Milk', 'Cotija Cheese', 'Cooked Quinoa', 'Mozzarella Cheese', 'Cilantro', 'Rhubarb', 'Dijon Mustard', 'Peanut Sauce', 'Lentils', 'Baking Powder', 'Penne Pasta', 'Rice Noodles', 'Chicken Tenders', 'Chives', 'Croutons', 'Cheese', 'Cinnamon', 'Chia Seeds', 'Kalamata Olives', 'Green Onions', 'Balsamic Glaze', 'Lamb or Chicken', 'Ziti Pasta', 'Nutmeg', 'Cucumbers', 'Balsamic Vinegar', 'Kidney Beans', 'Cabbage Leaves', 'Pork Chops', 'Nori Seaweed', 'Ground Beef', 'Black Beans', 'Pepperoni', 'Lemon Zest', 'Oats', 'Chicken Breasts', 'Cream', 'Mozzarella Balls', 'Beets', 'Cheddar Cheese', 'Sesame Seeds', 'Salt', 'Celery', 'Chicken Broth', 'Orange Juice', 'Cucumber', 'Strawberries', 'Mixed Greens', 'Roasted Red Peppers', 'Egg Noodles', 'Cumin', 'Lime', 'Guinness Beer', 'Banana', 'Curry Sauce', 'Walnuts', 'Basil', 'Refried Beans', 'Sriracha', 'Lime Juice', 'Granola', 'Basmati Rice', 'Pita Bread', 'Greek Yogurt Dip', 'Buttermilk', 'Saffron', 'Sage', 'Toppings of Choice', 'Coconut', 'Pineapple', 'Kale', 'Lasagna Noodles', 'White Rice', 'Lemon', 'Sesame Ginger Sauce', 'Baguette', 'Mixed Vegetables', 'Enchilada Sauce', 'Chicken Strips', 'Chicken', 'Rice', 'Green Curry Paste', 'Brioche Buns', 'Pie Crust', 'Maple Syrup', 'Beetroot', 'White Sugar', 'Sour Cream', 'Ricotta Cheese', 'Mint Leaves', 'Cranberry Sauce', 'Pomegranate Seeds', 'Lemonade', 'Bread', 'Shrimp', 'Arborio Rice', 'Blue Cheese', 'Cocoa Powder', 'Chicken Breast', 'Greek Dressing', 'Vodka Sauce', 'Bok Choy', 'Butter', 'Beef Broth', 'Pumpkin', 'BBQ Sauce', 'Chorizo', 'Fajita Seasoning', 'Cauliflower', 'Garlic', 'Sweet Chili Sauce', 'Pizza Dough', 'Water', 'Goat Cheese', 'Broccoli', 'Ground Turkey', 'Vegetable Broth', 'Zucchini', 'Flour', 'Pinto Beans', 'Tomatoes', 'Butternut Squash', 'Cream Cheese', 'Fish Sauce', 'Flatbread', 'Puff Pastry', 'Milk', 'Italian Sausage', 'Caramel Sauce', 'Jasmine Rice', 'Pine Nuts', 'Tuna', 'Sushi Rice', 'Sweet and Spicy Sauce', 'Beef Strips', 'All-Purpose Flour', 'Heavy Cream', 'Tzatziki Sauce', 'Corn', 'Noodles', 'Ice', 'Zucchini Noodles', 'Mixed Berries', 'Brussels Sprouts', 'Parmesan Cheese', 'Chili Powder', 'Sweet Potatoes', 'Pork Tenderloin', 'Sesame Oil', 'Teriyaki Sauce', 'Mango', 'Quinoa', 'Dried Cherries', 'Lime Vinaigrette', 'Olive Oil', 'Cannellini Beans', 'Catfish Fillets', 'Dates', 'Tomato Sauce', 'Flour Tortillas'
];

// Selected items
const selectedItems = [];

// Function to filter and display matching foods
function filterFoods() {
  const searchBox = document.getElementById('search-box');
  const dropdownContent = document.getElementById('dropdown-content');
  const searchTerm = searchBox.value.toLowerCase();

  // Filter foods based on search term and not in selectedItems
  const filteredFoods = foods.filter(food => food.toLowerCase().startsWith(searchTerm) && !selectedItems.includes(food));

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
  var outputRecipes = findRecipes(selectedItems, compatibilityValue, ingMap, totMap);
  let container = document.getElementById("recipeView");
  container.innerHTML = ""; // Clear previous content

  for (rating in outputRecipes) {
    for(recipe in outputRecipes[rating]) {
      let button = document.createElement('button');
      button.classList.add('recipe-button');
      button.innerText = myArray[i];

      // Set background color based on compatibility-value range
      button.style.setProperty('--button-color', getColorForCompatibility(rating));
      container.appendChild(button);
    }
  }
}

// Function to get color based on compatibility-value range
function getColorForCompatibility(value) {
  if (value >= 75) {
    return 'var(--green-color)';
  } else if (value <= 50) {
    return 'var(--light-green-color)';
  } else if (value <= 25) {
    return 'var(--yellow-color)';
  } else {
    return 'var(--red-color)';
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