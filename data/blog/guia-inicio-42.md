---
title: 'Guia de inicio para piscineros en 42'
date: '2022-07-20'
update: '2020-07-21'
tags: ['guía', '42', 'piscina', 'git', 'vim', 'shell']
draft: false
summary: 'Guía de inicio para piscineros en 42, donde podras aprender lo necesario para empezar a programar, crear un repositorio en git, configurar vim, aprender a usarlo y mucho más.'
---

# ¿Que es 42?

42 es un lugar donde aprendes a aprender, donde conseguiras habilidades y experiencias a traves del peer to peer, es decir, tendras que compartir y resolver los problemas con tus compañeros, habra veces que os tendreis que reunir todos juntos para resolver un problema, hacer piña 🍍, ademas adquiriras metodos de busqueda para la información, como documentaciones, manuales, guias... o blogs como este.

# Tu Primera vez

Si esta es **tu primera experiencia** con la informatica, o si nunca habias entrado a la terminal, no te preocupes, te ayudare a empezar.

Lo primero que debes de aprender es a navegar por la terminal y a usar los comandos. Ademas deberas aprender a usar el control de versiones **git**, para que puedas manejar los cambios que hagas en tu codigo y entregar el proyecto para su proxima revision.

Los primeros proyectos estan pensados para que tengas conocimientos en **shell**, para que puedas usarlo al realizar tus proyectos.

Ademas deberas aprender a usar un editor de texto, como **vim**, para que puedas crear y editar tu codigo. Todo esto y mucho más podras aprenderlo en esta guia de inicio para piscineros

## Comandos basicos de Shell

    ```Shell
    # cd: Cambiar de directorio
    # ls: Listar los archivos en el directorio actual
    # mkdir: Crear un directorio
    # touch: Crear un archivo
    # rm: Eliminar un archivo
    # rm -r: Eliminar un directorio
    # mv: Renombrar un archivo o mover un archivo a otro directorio
    # cp: Copiar un archivo
    # git: Git, para manejar los cambios en tu codigo
    # vim: Vim, para editar tu codigo
    # help: Ayuda, para ver los comandos disponibles
    # exit: Salir del shell
    # clear: Limpiar la pantalla
    # history: Ver la historia de comandos
    ```

## Comandos basicos de Git

    ```Shell
    # git init: Inicializar un repositorio
    # git add: Agregar un archivo al repositorio
    # git commit: Commitear los cambios en el repositorio
    # git push: Entregar los cambios al repositorio
    # git pull: Obtener los cambios del repositorio
    # git status: Ver el estado del repositorio
    # git log: Ver el historial de cambios
    ```

## Vim

Vim es un editor de texto en la terminal, que te permitira crear y editar tu codigo. Para poder usarlo simplemente tendras que escribir por la terminal: `vim [nombre del archivo]`, de esta forma creas o editas el archivo elegido.

Una vez dentro podras usar los comandos basicos de vim, como:

    ```Shell
    # :wq :Guardar y salir
    # :w :Guardar sin salir
    # :w :[nombre del archivo]: Guardar como
    # :q :Salir sin guardar
    # :![comando] :Forzar un comando
    # :e [nombre del archivo] :Editar el archivo elegido
    # :set :Ver las configuraciones
    # :set [opcion] :Cambiar una configuracion
    # :help :Ayuda, para ver los comandos disponibles
    ```

Iniciando siempre con el caracter `:` antes del comando.

Lo curioso y diferenciador de vim son los atajos de teclado, es una manera de trabajar más rapido una vez tengas soltura y estos eson:

    ```Shell
    # a: para insertar texto despues de la posicion actual
    # A: para insertar texto al final de la linea
    # i: para insertar texto antes de la posicion actual
    # I: para insertar texto al inicio de la linea
    # o: para crear una nueva linea e insertar texto en ella
    # O: para insertar texto en la posicion actual y crear una nueva linea debajo
    # gg: para ir al inicio del archivo
    # G: para ir al final del archivo
    # y: para copiar el texto seleccionado
    # yy: para copiar la linea actual
    # yw: para copiar una palabra, es decir, la palabra que esta despues del cursor
    # c: para cortar lo seleccionado
    # cc: para cortar la linea actual
    # dd: para eliminar la linea de texto seleccionada
    # p: para pegar el texto copiado
    # P: para pegar el texto copiado y crear una nueva linea debajo
    # dd: para eliminar la linea actual
    # d0: para eliminar todo desde el inicio de la linea actual hasta el cursor
    # dgg: para eliminar todo desde el inicio del archivo hasta el cursor
    # dG: para eliminar todo desde el cursor hasta el final del archivo
    # D: para eliminar el texto de la linea actual, pero no la linea
    # x: para eliminar el texto seleccionado y mover el cursor a la siguiente linea o eliminar un caracter
    # X: para eliminar el texto seleccionado y mover el cursor a la linea anterior o eliminar un caracter
    # u: para deshacer el ultimo cambio
    # U: para deshacer todos los cambios
    # ctrl+r: para rehacer el ultimo cambio
    # .: para repetir tu ultima acción
    ```

Estas dos cosas te ayudaran a empezar a trabajar con vim. Para mas informacion sobre vim visita [la pagina de ayuda de vim](https://vimdoc.net/), ademas proximamente hare una guia para que puedas usar vim de forma mas facil, personalizartelo como tu quieras, instalar plugins, etc.
