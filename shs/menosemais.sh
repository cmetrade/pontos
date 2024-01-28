#!/bin/bash
cd ~/pontos
i=1
arquivo="arquivos/fechamentoWDO.txt"

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