#!/bin/bash
#git pull
#./busca.sh
cd ~/pontos/shs
rm ~/pontos/arquivos/*.txt
rm ~/pontos/logs/*.log
./wdo-fecha.sh
./wdoD-2.sh
./amplitude.sh
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
mv cypress/e2e/* cypress/
mv cypress/cme.cy.js cypress/e2e/
mv cypress/xau.cy.js cypress/e2e/
mv cypress/dx.cy.js cypress/e2e/