import pandas as pd 
import time
import os
with open("arquivos/cme-open.txt", "r") as arquivo:
        x = arquivo.read()

var1 = float(x)
number = 1 / var1
result = round(number, 3) 

# Open the file in append mode
with open('arquivos/cme-abertura.txt', 'w') as file:
    file.write(str(result))

print(result)
