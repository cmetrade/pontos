import pandas as pd 
import time
import os

with open("arquivos/cme-low.txt", "r") as arquivo:
        x = arquivo.read()


        
var1 = float(x)
number = 1 / var1
result = round(number, 4) 


# Open the file in append mode
with open('arquivos/cme-baixa.txt', 'w') as file:
    file.write(str(result))
    print(result)
