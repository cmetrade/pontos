import pandas as pd 
import time
import os
with open("arquivos/dx-fechamento.txt", "r") as dxfecha:
     dx = dxfecha.read()

with open("arquivos/dx-max.txt", "r") as dxmax:
        dxmaxima = dxmax.read()


fechamento = float(dx.replace('.','').replace(',','.'))
max = float(dxmaxima.replace('.','').replace(',','.'))


numero = (max - fechamento) / fechamento  
rounded_numero = round(numero, 3)

with open("arquivos/wdo-fecha.txt", "r") as arquivo:
        x = arquivo.read()

#wdo = float(x) 
wdo = float(x.replace('.','').replace(',','.'))
dxalta = rounded_numero
number = wdo * (dxalta+1)
rounded_number = round(number, 2)
print(rounded_number)
result = rounded_number

with open('arquivos/dx-alta.txt', 'w') as file:
    file.write(str(result))

