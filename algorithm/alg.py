import csv

tau = {}
sigma = {}

# Read the CSV file
with open('../Datasets/Testing/genRecipes.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)

    # Print only the Recipe names
    for row in reader:
        count = 0
        for item in row['ingredients'].split(', '):
            ingredient = item.replace('[', '').replace(']', '').replace('\'', '')
           
            if ingredient not in tau:
                tau[ingredient] = list()
            tau[ingredient].append(row['title'])
            count += 1
        sigma[row['title']] = count


user_ing = ['Pasta', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic', 'Olive Oil', 'Salt', 'Pepper', 'Cabbage Leaves']
phi = {}

for ing in user_ing:
    for recipe in tau[ing]:
        if recipe not in phi:
            phi[recipe] = 1
        else:
            phi[recipe] += 1


pi = {}

for recipe in phi.keys():
    rating = phi[recipe] / sigma[recipe]
    if rating not in pi:
        pi[rating] = list()
    pi[rating].append(recipe)


keys = sorted(pi.keys(), reverse=True)

for key in keys:
    print(key, pi[key])


# print(list(tau.items())[:5])
# print(list(sigma.items())[:5])
