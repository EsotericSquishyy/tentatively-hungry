d3.csv('../Datasets/genRecipes.csv', (data) => {
    console.log(data);

    const ingMap = {}; // Maps ingredients to a list of recipes it is included in
    const totMap = {}; // Maps recipes to the number of ingredients required

    // Read the CSV file

    const rows = data.split('\n');
    const headers = rows[0].split(',');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        let count = 0;

        for (const item of row.slice(headers.indexOf('Recipe'))) {
            const ingredient = item.replace('[', '').replace(']', '').replace('\'', '').trim().replace('"', '');

            if (!ingMap[ingredient]) {
                ingMap[ingredient] = [];
            }
            ingMap[ingredient].push(row[headers.indexOf('Recipe')]);
            count++;
        }
        totMap[row[headers.indexOf('Recipe')]] = count;
    }
});
