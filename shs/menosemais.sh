#!/bin/bash
cd ~/pontos
arquivo="arquivos/wdoD-1.txt"

i=1

while [[ $i -lt 20 ]] 
do
        if [ -e $arquivo ]; then
           python3 pys/maisum.py
           python3 pys/menosum.py
           break
        fi
echo "$i tentativa(s)"
((i++))
done
echo "$i tentativa(s)" > logs/menosemais.log
