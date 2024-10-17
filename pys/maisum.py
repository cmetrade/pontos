import pandas as pd 
import time
import os


with open("arquivos/wdoD-2.txt", "r") as arquivo:
        x = arquivo.read()

wdo = float(x.replace('.','').replace(',','.'))
num1 = wdo * 0.01
number = wdo + num1
rounded_number = round(number, 1)
print(rounded_number)
result = rounded_number

# Open the file in write mode ('w' means write mode)
with open('arquivos/maisum.txt', 'w') as file:
     file.write(str(result))

print("Data has been saved into maisum.txt")

