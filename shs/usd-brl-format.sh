#!/bin/bash
#
cd ~/pontos/arquivos
 echo " echo "DATA        ABE    MAX   MIN" > usd-brl.txt"
 echo "$(cat linha1-usd-brl-data.txt)| $(cat linha1-usd-brl-abertura.txt)| $(cat linha1-usd-brl-max.txt)| $(cat linha1-usd-brl-min.txt)" >> usd-brl.txt
 echo "$(cat linha2-usd-brl-data.txt)| $(cat linha2-usd-brl-abertura.txt)| $(cat linha2-usd-brl-max.txt)| $(cat linha2-usd-brl-min.txt)" >> usd-brl.txt
 echo "$(cat linha3-usd-brl-data.txt)| $(cat linha3-usd-brl-abertura.txt)| $(cat linha3-usd-brl-max.txt)| $(cat linha3-usd-brl-min.txt)" >> usd-brl.txt
