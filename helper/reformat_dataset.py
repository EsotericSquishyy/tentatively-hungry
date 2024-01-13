import pandas as pd
import json

# Read data from the JSON file
file_path = "../Datasets/recipes_raw_nosource_ar.json"
with open(file_path, 'r') as file:
    data = json.load(file)

# Create a DataFrame from the loaded data
df = pd.DataFrame.from_dict(data, orient='index')

# Drop the "instructions" and "picture_link" columns
df = df.drop(["instructions", "picture_link"], axis=1)

# Reset the index, rename columns, and remove redundant index column
df = df.reset_index().rename(columns={"index": "ID"}).drop(columns=["ID"])

# Assign ascending sequence numbers to the "ID" column starting at 1
df["ID"] = range(1, len(df) + 1)

# Export the DataFrame to a new CSV file
output_file_path = "output_dataframe.csv"
df.to_csv(output_file_path, index=False)

print(f"DataFrame exported to {output_file_path}")

