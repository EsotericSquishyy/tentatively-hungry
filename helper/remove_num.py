import re
import csv

# Read the CSV file and open a new CSV file for writing
with open('output_dataframe.csv', 'r') as input_file, open('output_file.csv', 'w', newline='') as output_file:
    csv_reader = csv.DictReader(input_file)
    fieldnames = csv_reader.fieldnames

    # Write the header to the output file
    csv_writer = csv.DictWriter(output_file, fieldnames=fieldnames)
    csv_writer.writeheader()

    # Iterate through each row in the input file
    for row in csv_reader:
        # Apply regex to remove quantities from ingredients
        row['ingredients'] = [re.sub(r'\d+\s*(?:/\s*\d+)?\s*[a-zA-Z]+\s*', '', ingredient) for ingredient in eval(row['ingredients'])]

        # Write the modified row to the output file
        csv_writer.writerow(row)

