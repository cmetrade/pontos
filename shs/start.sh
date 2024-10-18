#!/bin/bash

valida=`cat ~/pontos/arquivos/rodou.txt`
dia=`date +%d%m%Y`

if [ "$dia" != "$valida" ]
then
           cd ~/pontos/shs
           rm ~/pontos/arquivos/*.txt
           rm ~/pontos/logs/*.log
           ./wdoD-2.sh
           ./menosemais.sh
           ./ptax.sh
           ./ptax-futuro.sh
           ./cupom.sh
           ./cme.sh
           ./usd-brl.sh
           ./wdo-fecha.sh
           ./xau-fechamento.sh
           ./xau.sh
           ./dx.sh
           ./relatorio-concat.sh
           ./relatorio.sh
           ./data.sh
           ./move-txt.sh
           ./clear-cache.sh
           echo `date '+%d%m%Y'` > ~/pontos/arquivos/rodou.txt


   else
           echo "Script ja rodou hoje" 
fi