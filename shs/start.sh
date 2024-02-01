#!/bin/bash
#git pull
#./busca.sh
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log
./cupom.sh
./usd-brl.sh
./cme.sh
./wdo-fecha.sh
./wdoD-1.sh
./menosemais.sh
./xau.sh
./dx.sh