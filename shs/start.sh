#!/bin/bash
#git pull
#./busca.sh
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log
./wdo-fecha.sh
./wdoD-1.sh
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