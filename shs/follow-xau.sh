#!/bin/bash
cd ~/pontos/
mv cypress/e2e/* cypress/
mv cypress/xau.cy.js cypress/e2e/
ls arquivos/xau-max.txt

    if [ $? -eq 0 ]; then
       mv arquivos/xau-max.txt arquivos/xau-max-old.txt
       mv arquivos/xau-low.txt arquivos/xau-low-old.txt
       npm start
    fi

valid=true
count=1

        while [ $valid ]
        do
            python3 pys/follow-xau.py
            mv arquivos/xau-max.txt arquivos/xau-max-old.txt
            mv arquivos/xau-min.txt arquivos/xau-min-old.txt
            npm start

            if [ $count -eq 15 ];
            then
            break
            fi
        ((count++))
        echo $count
        sleep 60
        done