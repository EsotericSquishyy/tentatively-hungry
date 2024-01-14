import pandas as pd
import json
from dataclasses import dataclass
# from enum import Enum
import re


@dataclass
class Unit:
    name: str
    abbrev: str


units = []
for unit in [
    ['teaspoon', 'tsp'],
    ['tablespoon', 'tbsp'],
    ['pound', 'lb'],
    ['cup', ''],
    ['ounce', 'oz'],
    ['pinch', ''],
    ['fluid ounce', 'fl oz'],
    ['package', 'pkg'],
    ['can', ''],
    ['container', '']
]:
    units.append(Unit(unit[0], unit[1]))


@dataclass
class Ingredient:
    quantity: str
    unit: str
    food_item: str
    mod: str


@dataclass
class Recipe:
    name: str
    ingredients: list[Ingredient]
    instructions: str


def clean_ingredient(ingredient: str) -> Ingredient:
    cleaned = ingredient.replace(' ADVERTISEMENT', '')

    ingredient_unit = ''
    food_item = ''
    for unit in units:
        search_terms = [unit.name, unit.name + 's']
        if unit.abbrev:
            search_terms.append(unit.abbrev)
            search_terms.append(unit.abbrev + 's')

        for term in search_terms:
            if term in cleaned:
                ingredient_unit = unit
                food_item = cleaned[(cleaned.rfind(term) + len(term) + 1):].lstrip()

    mod = ''
    if ', ' in food_item:
        comma_split = food_item.split(', ')
        mod = ' '.join(comma_split[1:])
        food_item = comma_split[0]

    if '(' in food_item:
        food_item = food_item[:food_item.find(' (')]

    quantity = ''
    if m := re.match(r'\d+\s*\d*/*\d*', cleaned):
        quantity = m.group(0).rstrip()

    return Ingredient(quantity, ingredient_unit, food_item, mod)


# Read data from the JSON file
file_path = "../Datasets/recipes_raw_nosource_ar.json"
with open(file_path, 'r') as file:
    data = json.load(file)

# Create a DataFrame from the loaded data
df = pd.DataFrame.from_dict(data, orient='index')

# Drop the "instructions" and "picture_link" columns
df = df.drop(["picture_link"], axis=1)

# Reset the index, rename columns, and remove redundant index column
df = df.reset_index().rename(columns={"index": "ID"}).drop(columns=["ID"])

for i, ingredient_list in df[['ingredients']].iterrows():
    ingredients = []
    for item in ingredient_list.iloc[0]:
        if item != 'ADVERTISEMENT':
            # print(clean_ingredient(item).food_item)
            if ingred := clean_ingredient(item).food_item:
                ingredients.append(ingred)

    df.at[i, 'ingredients'] = ingredients


for i, instructions in df[['instructions']].iterrows():
    df.at[i, 'instructions'] = instructions.iloc[0].replace('\n', ' ')

# Export the DataFrame to a new CSV file
output_file_path = "output_dataframe.csv"
print(f"Wrote to {output_file_path}")

# Assign ascending sequence numbers to the "ID" column starting at 1
df.insert(0, "ID", range(1, len(df) + 1))
df.to_csv(output_file_path, index=False)
