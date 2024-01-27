#!/bin/bash
cd ~/pontos
i=1
arquivo="arquivos/fechamentoWDO.txt"

while [[ $i -lt 11 ]] 
do
        if [ -e "$arquivo" ]
           then
           python3 /home/oficialnosdois/projetos/pontos/pys/maisum.py
           python3 /home/oficialnosdois/projetos/pontos/pys/menosum.py
           break
        fi
echo $i
((i++))
done
echo "$i tentativa(s)" > logs/menosemais.los