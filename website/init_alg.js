
const ingMap = {}; // Maps ingredients to a list of recipes it is included in
const totMap = {}; // Maps recipes to the number of ingredients required

d3.csv('./Datasets/Utils/recipes.csv', (data) => {
    // console.log(data);

    // Read the CSV file

    for (let i = 0; i < data.length; i++) {
        row = data[i];
        // const row = rows[i].split(',');
        let count = 0;
        if (!row['Ingredients']) {
            continue;
        }

        for (const item of row['Ingredients'].split(',')) {
            const ingredient = item.replace('[', '').replace(']', '').replace('\'', '').trim().replace('"', '');

            if (!ingMap[ingredient]) {
                ingMap[ingredient] = [];
            }
            ingMap[ingredient].push(row['Recipe']);
            count++;
        }
        totMap[row['Recipe']] = count;
    }

    // console.log(ingMap)
    // console.log(totMap);
});
