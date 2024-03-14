#!/bin/bash
cd ~/pontos/
mv cypress/e2e/* cypress/
mv cypress/dx.cy.js cypress/e2e/
ls arquivos/dx-max.txt

    if [ $? -eq 0 ]; then
       mv arquivos/dx-max.txt arquivos/dx-max-old.txt
       mv arquivos/dx-low.txt arquivos/dx-low-old.txt
       npm start
    fi

valid=true
count=1

        while [ $valid ]
        do
            python pys/follow-dx.py
            mv arquivos/dx-max.txt arquivos/dx-max-old.txt
            mv arquivos/dx-min.txt arquivos/dx-min-old.txt
            npm start

            if [ $count -eq 15 ];
            then
            break
            fi
        ((count++))
        echo $count
        sleep 60
        done