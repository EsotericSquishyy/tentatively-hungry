import pandas as pd


df = pd.read_csv('genRecipes2.csv')
df.drop_duplicates(inplace=True)
df.to_csv('genRecipes3.csv', index=False)
