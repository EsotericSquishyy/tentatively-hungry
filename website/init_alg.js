
const Rec_Ing = {};
const ingMap = {}; // Maps ingredients to a list of recipes it is included in
const totMap = {}; // Maps recipes to the number of ingredients required

d3.csv('./Datasets/recipes.csv', (data) => {
    // console.log(data);

    // Read the CSV file

    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        // const row = rows[i].split(',');
        let count = 0;
        if (!row['Ingredients']) {
            continue;
        }
        const recipe = row['Recipe']
        for (const item of row['Ingredients'].split(',')) {
            const ingredient = item.replace('[', '').replace(']', '').replaceAll('\'', '').trim().replaceAll('"', '');
            if(!Rec_Ing[recipe]){
                Rec_Ing[recipe] = []
            }
            Rec_Ing[recipe].push(ingredient)

            if (!ingMap[ingredient]) {
                ingMap[ingredient] = [];
            }
            ingMap[ingredient].push(recipe);
            count++;
        }
        totMap[row['Recipe']] = count;
    }

    // console.log(Rec_Ing)
    console.log(ingMap)
    // console.log(totMap);
});
