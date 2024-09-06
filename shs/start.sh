#!/bin/bash
#git pull
#./busca.sh
valida=`cat ~/pontos/arquivos/rodou.txt`
dia=`date +%d%m%Y`

if [ "$dia" != "$valida" ]
then
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log

        ps -ef | grep start | grep -v grep | grep -v sshd
        if [ $? -eq 0 ]; then
                ./wdo-fecha.sh
                ./wdoD-2.sh
                ./menosemais.sh
                ./ptax.sh
                ./ptax-futuro.sh
                ./cupom.sh
                ./usd-brl.sh
                ./cme.sh
                ./xau.sh
                ./dx.sh
                ./relatorio-concat.sh
                ./relatorio.sh
                echo `date '+%d%m%Y'` > ~/pontos/arquivos/rodou.txt
        fi
fi