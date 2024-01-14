import csv

Ing_Rec = {} # Maps ingredients to list of recipes it is included in
Rec_Tot = {} # Maps recipes to the number of ingredients required

# Read the CSV file
with open('../Datasets/Testing/genRecipes.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)

    # Print only the Recipe names
    for row in reader:
        count = 0
        for item in row['ingredients'].split(', '):
            ingredient = item.replace('[', '').replace(']', '').replace('\'', '')
           
            if ingredient not in Ing_Rec:
                Ing_Rec[ingredient] = list()
            Ing_Rec[ingredient].append(row['title'])
            count += 1
        Rec_Tot[row['title']] = count


user_ing = ['Pasta', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic', 'Olive Oil', 'Salt', 'Pepper', 'Cabbage Leaves'] # Testing list
Rec_Num = {} # Maps recipes to the number of ingredients the user has

for ingredient in user_ing:
    for recipe in Ing_Rec[ingredient]:
        if recipe not in Rec_Num:
            Rec_Num[recipe] = 1
        else:
            Rec_Num[recipe] += 1


Rat_Rec = {} # Maps rating of recipe to recipes

for recipe in Rec_Num.keys():
    rating = Rec_Num[recipe] / Rec_Tot[recipe]
    if rating not in Rat_Rec:
        Rat_Rec[rating] = list()
    Rat_Rec[rating].append(recipe)


keys = sorted(Rat_Rec.keys(), reverse=True)

for key in keys:
    print(key, Rat_Rec[key])

