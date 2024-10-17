import pandas as pd 
import time
import os
#os.system("awk {'print $1'} arquivos/usd-brl-abertura.txt arquivos/usd-brl-max.txt arquivos/usd-brl-min.txt > arquivos/usd-brl.txt")

with open("arquivos/usd-brl.txt", "r") as arquivo:
        result = arquivo.read()
print(result)
