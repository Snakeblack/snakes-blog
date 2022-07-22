---
title: 'Guía de inicio para piscineros'
date: '2022-07-20'
lastmod: '2020-07-22'
tags: ['guía', '42', 'piscina', 'git', 'vim', 'shell']
draft: false
summary: 'Guía de inicio para piscineros en 42, donde podrás aprender lo necesario para empezar a programar, crear un repositorio en git, configurar vim, aprender a usarlo y mucho más.'
---

# ¿Qué es 42?

42 es un lugar donde aprendes a aprender, donde conseguirás habilidades y experiencias a través del peer to peer, es decir, tendrás que compartir y resolver los problemas con tus compañeros, habrá veces que os tendréis que reunir todos juntos para resolver un problema, hacer piña 🍍, ademas adquirirás métodos de búsqueda para la información, como documentaciones, manuales, guías... o blogs como este.

# Tu Primera vez

Si esta es **tu primera experiencia** con la informática, o si nunca habías entrado a la terminal, no te preocupes, te ayudare a empezar.

Lo primero que debes de aprender es a **navegar por la terminal** y a usar los comandos. Ademas deberás aprender a usar el control de versiones **git**, para que puedas manejar los cambios que hagas en tu código y entregar el proyecto para su próxima revision.

Los primeros proyectos están pensados para que tengas conocimientos en **shell**, para que puedas usarlo al realizar tus proyectos.

Ademas deberás aprender a usar un editor de texto, como **vim**, para que puedas crear y editar tu código. Todo esto y mucho más podrás aprenderlo en esta guía de inicio para piscineros

## Shell

En 42 es casi obligatorio usar **la terminal**, es por eso que los primeros pasos serán descubrir los distintos comandos para completar los primeros proyectos.

Estos son los comandos básicos y de navegación:

    ```Shell
    # cd: Cambiar de directorio
    # ls: Listar los archivos en el directorio actual
    # mkdir: Crear un directorio
    # touch: Crear un archivo
    # rm: Eliminar un archivo
    # rm -r: Eliminar un directorio
    # mv: Renombrar un archivo o mover un archivo a otro directorio
    # cp: Copiar un archivo
    # cat: Mostrar el contenido de un archivo
    # git: Git, para el control de versiones
    # vim: Vim, para abrir o editar un archivo de texto
    # help: Ayuda, para ver los comandos disponibles
    # exit: Salir de la terminal
    # clear: Limpiar la pantalla
    # history: Ver la historia de comandos
    ```

Pero hay muchos más, que lo miraremos más a fondo en próximos artículos del blog.

## GIT

Para poder empezar con un proyecto, tendrás que clonar el repositorio que se da al iniciar cada proyecto, una vez finalizado, tendrás que "pushear" el contenido al repositorio, ¿cómo se hace eso? te lo explicare en detalle.

    ```Shell
    # git init: Inicializar un repositorio
    # git add: Agregar un archivo al repositorio
    # git commit: Commitear los cambios en el repositorio
    # git push: Entregar los cambios al repositorio
    # git pull: Obtener los cambios del repositorio
    # git status: Ver el estado del repositorio
    # git log: Ver el historial de cambios
    # git branch: ver todas las ramas del repositorio
    ```

Estos son los comandos básicos, usarás alguno de ellos para poder completar los proyectos y entregarlos correctamente.

1. Deberás clonar el repositorio, copiando el enlace que se encuentra al iniciar el proyecto.

2. Abres tu terminal, y pondrás `git clone [enlace del repositorio] [opcional: nombre del repositorio]`.

3. Entras al repositorio con `cd [nombre del repositorio]` y haces el proyecto según las instrucciones.

4. Para comprobar el estado de los archivos actualizados pondrás `git status` de esta forma sabrás que archivos no están trackeados o añadidos al staging.

5. Tendrás que añadir al staging o trackear los archivos con el comando `git add [nombre/s del archivo/s]` o para añadir todo `git add .`.

6. (Opcional) Puedes comprobar con `git status` nuevamente el estado, veras que los archivos añadidos están en estado staging.

7. Para guardar los cambios y generar un log en el historial del repositorio tendrás que commitear los cambios añadiéndole un comentario breve pero descriptivo de los cambios, para hacer esto deberás usar el comando `git commit -m "[texto descriptivo de la actualización]"`.

8. (Opcional) Puedes comprobar los commits hechos con el comando `git log`, este comando sirve para ver el historial de commits, es decir, podremos ver todas las actualizaciones a nuestro repositorios hechos desde el primer commit.

9. Para poder saber como se llama la rama o branch del repositorio en el que estas tendrás que usar `git branch`, por defecto suele ser **master**, pero estos últimos años ha ido cambiando a **main**.

10. Una vez hecho los anteriores pasos tendrás que subir los cambios al repositorio online, haciendo `git push origin [nombre del branch]`, y ahora ya podrás entregar tu proyecto.

Estos son los pasos básicos para poder entregar un proyecto en 42 a través de GIT, pero si quieres aprender más, haré un post dedicado al uso de GIT, también podrás encontrar documentación en su [pagina oficial](https://git-scm.com/docs).

## Vim

Vim es un editor de texto en la terminal, que te permitirá crear y editar tu código. Para poder usarlo simplemente tendrás que escribir por la terminal: `vim [nombre del archivo]`, de esta forma creas o editas el archivo elegido.

Una vez dentro podrás usar los comandos básicos de vim, como:

    ```Shell
    # :wq :Guardar y salir
    # :w :Guardar sin salir
    # :w :[nombre del archivo]: Guardar como
    # :q :Salir sin guardar
    # :![comando] :Forzar un comando
    # :e [nombre del archivo] :Editar el archivo elegido
    # :set :Ver las configuraciones
    # :set [opción] :Cambiar una configuración
    # :help :Ayuda, para ver los comandos disponibles
    ```

Iniciando siempre con el carácter `:` antes del comando.

Lo curioso y diferenciador de vim son los atajos de teclado, es una manera de trabajar más rápido una vez tengas soltura y estos son:

    ```Shell
    # a: para insertar texto después de la posición actual
    # A: para insertar texto al final de la linea
    # i: para insertar texto antes de la posición actual
    # I: para insertar texto al inicio de la linea
    # o: para crear una nueva linea e insertar texto en ella
    # O: para insertar texto en la posición actual y crear una nueva linea debajo
    # gg: para ir al inicio del archivo
    # G: para ir al final del archivo
    # y: para copiar el texto seleccionado
    # yy: para copiar la linea actual
    # yw: para copiar una palabra, es decir, la palabra que esta después del cursor
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
    # x: para eliminar el texto seleccionado y mover el cursor a la siguiente linea o eliminar un carácter
    # X: para eliminar el texto seleccionado y mover el cursor a la linea anterior o eliminar un carácter
    # u: para deshacer el ultimo cambio
    # U: para deshacer todos los cambios
    # ctrl+r: para rehacer el ultimo cambio
    # .: para repetir tu ultima acción
    ```

Estos dos apartados te ayudaran a empezar a trabajar con vim. Para mas información sobre vim visita [la pagina de ayuda de vim](https://vimdoc.net/), ademas próximamente haré una guía para que puedas usar vim de forma mas fácil, personalizarlo como tu quieras, instalar plugins, etc.
