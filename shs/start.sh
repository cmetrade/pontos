#!/bin/bash
#git pull
#./busca.sh
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log
./cupom.sh
./usd-brl.sh
./cme.sh
./wdoG.sh
./menosemais.sh
./xau.sh
./dx.sh