# Comandos

Para ejecutar un comando de magento debes ir a la carpeta bin/magento:

    - php bin/magento comando

- deploy:mode:show : Muestra el modo actual

- deploy:mode:set :

    - default
    - developer
    - production

- cache: :

    - disable  name
    - enable name
    - clean : solo aplicacion
    - flush : Aplicaciones externas.

- module: :
    - disable name 
    - enable


scp -i ec2magento2.pem -r Apurata.zip bitnami@ec2-18-219-29-116.us-east-2.compute.amazonaws.com:~/.