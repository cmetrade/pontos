#!/bin/bash
#git pull
#./busca.sh
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log
./ptax.sh
./cupom.sh
./usd-brl.sh
./cme.sh
./wdo-fecha.sh
./wdoD-1.sh
./xau.sh
./dx.sh
./menosemais.sh
./relatorio-concat.sh
./relatorio.sh