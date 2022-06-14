# COMANDOS GIT

## BASICOS

- git init:

  - Crea una carpeta .git: BD donde se guarda el historial de cambios.

  - Crea el staging: Espacio de memoria RAM para cambios momentaneos.

  - ESTADO: untracked

- git config:

  - --list: Muestra todas las configuraciones.

  - --global user.name "": cambia de manera global el nombre del usuario.

  - --global user.email "": cambia de manera global el email del usuario.

  - --global alias.name "command" : Agregar un alias para git. Se llama con git command.

- git status "":

  - Muestra archivos añadidos o borrados, asi como los commits realizados.

- git log "": Muestra la historia de nuestros archivos, los commits, el usuario que lo cambió, cuando se realizaron los cambios etc.

  - --stat: Especifica que se borro y que se agrego.

  - --all: Muestra TODOS los cambios.A veces no muestra todo dependiendo de la rama en que se hizo.

  - --graph: Muestra lineas para separar las ramas.

  - --decorate: Agrega detalles como nombre de la cabecera y ramas.

  - --oneline: Solo muestra el has y titulo del log.

  - -S "" : Buscar una palabra en la historia del proyecto.

- git add "":

  - Añadir archivos al staging.

  - ESTADO: staged

- git rm:

  - --force "": Elimina el archivo del staging y el disco duro.

  - --cached "": Quita el archivo del staging.

- git commit:

  -m "":Envia un commit con los cambios, solo para archivos del staging.

  - -am "": Hace un add y un commit con el mensaje, solo con archivos guardados antes.

  - --amend : Agrega los cambios que hayas añadido al staging al ultimo commit. Tambien puedes editar el mensaje del commit.

- git diff "" "":

  - Da prioridad al commit1, como si fuera el original

  - muestra diferencias

- git checkout "":

  - -b : git branch + git checkout

  - Podemos ir a otro commit con su id.

  - Podemos ir a otra rama.

  - Viajas en el tiempo y puedes volver.

- git reset:

  - --hard "commit": Borra todo del repositorio y disco duro hasta este commit.

  - --soft "commit": Borrar el historial de commits, conserva lo que esta en staging.

  - --reset HEAD: Este es el comando para sacar archivos del área de Staging.

- git branch "": Crea una nueva rama, el Head apuntara a master y la nueva rama.

  - -d : elimina la rama. con -D se fuerza.

  - -m "old" "new" : cambiar nombre rama.

  - -l : lista todas las ramas.

  - -r : Muestra ramas del remoto.

  - -a : Muestra todas las ramas locales y de remoto.

- git merge "rama" -m "": Crea un commit con los ultimos

  - Si editaron las mismas linas: se genera un conflicto y se ve asi:
    ```
    <<<<<<< HEAD
    Esta es la sexta linecita.
    =======
    Esta es la sexta linea.
    Esta es la septima linea.
    >>>>>>> ModificarLineas
    ```
    > Debemos decidir que cambios conservar y hacer otro commit.

- git remote: Muestra el remote

  - add origin "url": Agrega un origen remoto de nuestro archivos.

  - add origin upstream: Agregamos un segundo origen remoto, esto cuando hicimos fork.

  - -v: Muestra que podemos hacer con el remote (fetch y push).

- git push: Sube nuestro repositorio local a un repositorio remoto.

  - origin branch: Hara un push al origen de la rama branch.

  - origin --tags: Pushea las tags creadas.

  - origin :refs/tags/v0.x.y : Borra la referencia de un tag, lo sincroniza con nuestra referencia.

- git pull: Integra los cambios del repositorio remoto a tu repositorio local.

  - origin master: pull del origen a la rama master.

  - --allow-unrelated-histories: para integrar cambios a pesar de tener historias diferentes.

- git tag: Muestra los tag existentes.

  - -a v0.x.y -m "hash" : append, agregar nuevo tag en el hash indicado

  - -d v0.x.y: delete, borrar un tag. Aunque lo borremos internamente seguira apareciendo, porque se usa para releases.

- git show-ref

  - --tags: Muestra el hash al que esta asociado cada tag.

- git show-branch : Muestra las ramas y su historia

  - --all: Muestra mas datos, como la ultima modificacion de cada rama.

- git rebase branch: Trae los cambios de la rama branch y luego pega los cambios de la rama actual.

- git stash: Guarda tus cambios en un espacio temporal, tomando como referencia el ultimo commit que usaste. Regresa tus cambios al ultimo commit, puedes moverte a otra rama.

  - list : lista los stash

  - pop : Recuperas los cambios del ultimos stash

  - drop : Elimina el stash

  - branch "" : Envia los cambios del stash a una nueva rama.

- git clean: Eliminar archivos inecesarios. No se incluye .gitignore.

  - --dry-run : Simula que archivos eliminara.

  - -f : Fuerza el borrado.

- git cherry-pick "" : Traemos solo un cambio del hash del commit seleccionado.

- git reflog : Muestra el historial completo de todo nuestro proyecto, como cambios de la cabecera, hasta lo que se borro.

- git grep "":

  - -c : cuenta las veces que aparece la palabra.

  - -n : Muestra el numero de linea donde aparece.

- git shortlog : Log por persona.

  - -sn : Cuenta los commits.

  - --all : Incluye borrados.

  - -no-merges : Excluye los merges.

- git blame "" : Muestra los cambios que hizo cada persona en el archivo especificado. Con su fecha.

  - -c : Agrega identacion para verlo mejor.

  - La,b : Muestra cambios de la linea a hasta la linea b.



## .gitignore

- Esto indica que archivos se ignoraran al hacer nuestros push.

  - *jpg
  - /dir/dir/*.txt

# Exclusivo GitHub
  # FORK

  - Clonamos el repositorio para poder colaborar.

  # PULL REQUEST

  -Lugar intermedio antes de hacer un merge.

# DEPLOY

Sincroniza un repositorio de github con tus archivos en deploy.

- travis-ci : cuesta

- jenkins : gratis,instalarlo