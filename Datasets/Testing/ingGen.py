import re
import csv


testfile = 'genRecipes.csv'  # '../../helper/output_dataframe.csv'


# Read the file and initialize an empty set for ingredients
ingredient_set = set()

# Open the file and iterate through each line
with open(testfile, 'r') as file:
# with open('genRecipes.csv', 'r') as file:
    next(file)  # Skip the header line
    for line in file:
        print(line)

        # Extract ingredients between "[" and "]" using regular expression
        ingredients_match = re.search(r'\[([^]]+)\]', line.replace("'", ''))

        # If ingredients are found, split them and add to the set
        if ingredients_match:
            ingredients = ingredients_match.group(1).split(', ')
            ingredient_set.update(ingredients)

# Write unique ingredients to a new CSV file
with open('unique_ingredients.csv', 'w', newline='') as output_file:
    csv_writer = csv.writer(output_file)

    # Write header
    csv_writer.writerow(['Unique Ingredients'])

    # Write each ingredient as a row
    for ingredient in ingredient_set:
        csv_writer.writerow([ingredient])

print("Unique Ingredients written to 'unique_ingredients.csv'")

