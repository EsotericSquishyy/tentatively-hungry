function findRecipes(items, rating, ingredientMap, countMap){
    const user_ing = items
    const user_rat = rating / 100

    const Ing_Rec = ingredientMap; // Maps ingredients to a list of recipes it is included in
    const Rec_Tot = countMap; // Maps recipes to the number of ingredients required
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

    console.log(output)
}
