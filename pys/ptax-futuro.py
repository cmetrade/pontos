import pandas as pd 
import time
import os

os.system("awk {'print $1'} arquivos/ptax-futuro.txt > arquivos/ptax-futuro2.txt")
with open("arquivos/ptax.txt", "r") as ptax:
        ptax1 = ptax.read()
with open("arquivos/ptax-futuro2.txt", "r") as ptaxfut:
        ptax2 = ptaxfut.read()
with open('arquivos/ptax-ptaxfut.txt', 'w') as file:
    file.write(str(ptax1))
    file.write(' + ')
with open('arquivos/ptax-ptaxfut.txt', 'a') as file2:
    file2.write(str(ptax2))
with open("arquivos/ptax-ptaxfut.txt", "r") as arquivo:
        result = arquivo.read()
print(result)
