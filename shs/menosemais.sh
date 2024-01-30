#!/bin/bash
cd ~/pontos
i=1
arquivo="arquivos/abrtura_d-1_WDO.txt"

while [[ $i -lt 11 ]] 
do
        if [ -e "$arquivo" ]
           then
           python3 pys/maisum.py
           python3 pys/menosum.py
           break
        fi
echo $i
((i++))
done
echo "$i tentativa(s)" > logs/menosemais.los