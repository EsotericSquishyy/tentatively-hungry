import pandas as pd
import json
from dataclasses import dataclass
# from enum import Enum
import re
from collections import defaultdict


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
    ['container', ''],
    ['quart', 'qt'],
    ['gallon', 'gal']
]:
    units.append(Unit(unit[0], unit[1]))


search_terms = []
for unit in units:
    search_terms.append(unit.name + 's')
    search_terms.append(unit.name)

    if unit.abbrev:
        search_terms.append(unit.abbrev + 's')
        search_terms.append(unit.abbrev)


mods = [
    'minced',
    'ground',
    'diced',
    'chopped',
    'grated',
    'frozen',
    'packed',
    'crushed',
    'shredded',
    'mashed',
    'to taste',
    'sliced',
    'freshly',
    'large',
    'medium',
    'small',
    'and',
    'coarsely',
    'thinly'
]

occurences = defaultdict(lambda: 0)


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
    cleaned = ingredient.replace(' ADVERTISEMENT', '').replace("'", '').replace('"', '')

    ingredient_unit = ''
    food_item = ''

    for term in search_terms:
        if term in cleaned:
            ingredient_unit = unit
            food_item = cleaned[(cleaned.rfind(term) + len(term) + 1):].lstrip()
            break
    else:
        food_item = cleaned

    mod = ''
    if ', ' in food_item:
        comma_split = food_item.split(', ')
        mod = ' '.join(comma_split[1:])
        food_item = comma_split[0]

    for ingredient_mod in mods:
        if ingredient_mod in food_item:
            food_item = food_item[:food_item.find(ingredient_mod)]

    if '(' in food_item:
        food_item = food_item[:food_item.find(' (')]

    if len(food_item) < 3:
        food_item = ''

    elif food_item[-1] == 's':
        if food_item[-2] not in ['s', 'e']:
            food_item = food_item[:-1]

    if ':' in food_item:
        food_item = ''

    quantity = ''
    if m := re.match(r'\d+\s*\d*/*\d*', cleaned):
        quantity = m.group(0).rstrip()

    food_item.replace('-', '').replace('1/', '')
    food_item = re.sub(r'\d+\s+', '', food_item).strip()

    if food_item:
        occurences[food_item] += 1
    return Ingredient(quantity, ingredient_unit, food_item, mod)


def main():
    # Read data from the JSON file
    file_path = "../recipes_raw_nosource_ar.json"
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Create a DataFrame from the loaded data
    df = pd.DataFrame.from_dict(data, orient='index')

    # Assign ascending sequence numbers to the "ID" column starting at 1
    df.insert(0, "ID", range(1, len(df) + 1))
    df = df.rename(columns={"ingredients": "Ingredients", "title": "Recipe", "instructions": "Instructions"})

    # Drop the "instructions" and "picture_link" columns
    df = df.drop(["picture_link"], axis=1)

    # Reset the index, rename columns, and remove redundant index column
    df = df.reset_index().rename(columns={"index": "ID"}).drop(columns=["ID"])

    for i, ingredient_list in df[['Ingredients']].iterrows():
        ingredients = []
        for item in ingredient_list.iloc[0]:
            if item != 'ADVERTISEMENT':
                # print(clean_ingredient(item).food_item)
                if ingred := clean_ingredient(item).food_item:
                    ingredients.append(ingred)

        if len(ingredients) < 2:
            df.drop(i, inplace=True)

        df.at[i, 'Ingredients'] = ingredients

    for i, instructions in df[['Instructions']].iterrows():
        df.at[i, 'Instructions'] = instructions.iloc[0].replace('\n', ' ')

    for i, recipe in df[['Recipe']].iterrows():
        df.at[i, 'Recipe'] = recipe.iloc[0].replace('"', '')

    with open('occurences.json', 'w') as fp:
        json.dump(occurences, fp)

    for i, ingredient_list in df[['Ingredients']].iterrows():
        if i % 3000 == 0:
            print(f'{100 * round(i / df.size, 4)}%')

        for item in ingredient_list.iloc[0]:
            if occurences[item] < 50:
                df.drop(i, inplace=True)
                break


    # Export the DataFrame to a new CSV file
    output_file_path = "recipes.csv"

    df.to_csv(output_file_path, index=False)

    print(f"Wrote to {output_file_path}")


if __name__ == '__main__':
    main()
