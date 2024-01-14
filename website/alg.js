const fs = require('fs');

const user_ing = ['Banana']
const user_rat = 0.5

const Ing_Rec = {}; // Maps ingredients to a list of recipes it is included in
const Rec_Tot = {}; // Maps recipes to the number of ingredients required



// Read the CSV file
const data = fs.readFileSync('../Datasets/genRecipes.csv', 'utf-8');
const rows = data.split('\n');
const headers = rows[0].split(',');

for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    let count = 0;

    for (const item of row.slice(headers.indexOf('Recipe'))) {
        const ingredient = item.replace('[', '').replace(']', '').replace('\'', '').trim().replace('"', '');

        if (!Ing_Rec[ingredient]) {
            Ing_Rec[ingredient] = [];
        }
        Ing_Rec[ingredient].push(row[headers.indexOf('Recipe')]);
        count++;
    }
    Rec_Tot[row[headers.indexOf('Recipe')]] = count;
}



const Rec_Num = {}; // Maps recipes to the number of ingredients the user has

for (const ingredient of user_ing) {
    for (const recipe of Ing_Rec[ingredient]) {
        if (!Rec_Num[recipe]) {
            Rec_Num[recipe] = 1;
        } else {
            Rec_Num[recipe]++;
        }
    }
}



const Rat_Rec = {}; // Maps the rating of the recipe to recipes

for (const recipe in Rec_Num) {
    const rating = Rec_Num[recipe] / Rec_Tot[recipe];

    if (!Rat_Rec[rating]) {
        Rat_Rec[rating] = [];
    }
    Rat_Rec[rating].push(recipe);
}



const keys = Object.keys(Rat_Rec).sort((a, b) => b - a);

/*for (const key of keys) {
    console.log(key, Rat_Rec[key]);
}*/

const output = []
for (const key of keys){
	if (key < user_rat)
		continue
	for (const recipe of Rat_Rec[key]){
		output.push(recipe)
	}
}

// console.log(output)
