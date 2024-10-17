import pandas as pd 
import time
import os

with open("arquivos/dx-fechamento.txt", "r") as dxfecha:
     dx = dxfecha.read()

with open("arquivos/dx-abertura.txt", "r") as dxabe:
        dxabertura = dxabe.read()


fechamento = float(dx.replace('.','').replace(',','.'))
abe = float(dxabertura.replace('.','').replace(',','.'))


numero = (abe - fechamento) / fechamento  
rounded_numero = round(numero, 3)

with open("arquivos/wdo-fecha.txt", "r") as arquivo:
        x = arquivo.read()

#wdo = float(x) 
wdo = float(x.replace('.','').replace(',','.'))
dxopen = rounded_numero
number = wdo * (dxopen+1)
rounded_number = round(number, 2)
print(rounded_number)
result = rounded_number

with open('arquivos/dx-openn.txt', 'w') as file:
    file.write(str(result))

