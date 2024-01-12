import pandas as pd 
#import matplotlib.pyplot as plt
import time
import os

with open("C:\Users\Andre\Documents\cypress\spot\dx.txt", "r") as arquivo:
        result = arquivo.read()
print(result)
import requests
TOKEN = "5779297459:AAE2k4xaLnQZW0MRSmu0OX3UYftw7vZishg"
chat_id = "-1001546918854"
message = "DOL Cupom, Spot 1 e 2 dias = "
url = f"https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={chat_id}&text={message} {result}"
print(requests.get(url).json()) # this sends the messager