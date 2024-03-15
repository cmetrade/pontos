# importing pandas module 
import pandas as pd 
import os

# DX alta
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

wdo = float(x.replace('.','').replace(',','.'))
dxalta = rounded_numero
number = wdo * (dxalta+1)
rounded_number = round(number, 2)
print(rounded_number)
result_max = rounded_number

# DX ALTA OLD
with open("arquivos/dx-max-old.txt", "r") as dxmax_old:
        dxmaxima_old = dxmax_old.read()


max_old = float(dxmaxima_old.replace('.','').replace(',','.'))


numero_old = (max_old - fechamento) / fechamento  
rounded_numero_old = round(numero_old, 3)

with open("arquivos/wdo-fecha.txt", "r") as arquivo_old:
        x_old = arquivo_old.read()

wdo_old = float(x_old.replace('.','').replace(',','.'))
dxalta_old = rounded_numero_old
number_old = wdo_old * (dxalta_old+1)
rounded_number_old = round(number_old, 2)
print(rounded_number_old)
result_max_old = rounded_number_old


if result_max != result_max_old:
    print('O valor do DX MAX é {:.3f}'.format(result_max))
    import requests
    TOKEN = "5779297459:AAE2k4xaLnQZW0MRSmu0OX3UYftw7vZishg"
    chat_id = "-1001546918854"
    message = "DX de alta alterado para"
    result = '{:.3f}'.format(result_max)
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={chat_id}&text={message} {result_max}"
    print(requests.get(url).json()) # this sends the message
    pass

else:
    print("igual")

