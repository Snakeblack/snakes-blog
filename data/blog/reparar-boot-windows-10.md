---
title: 'Reparar el arranque de Windows 10'
date: '2022-10-17'
tags: ['reparación', 'sistema', 'arranque', 'boot', 'windows', 'ms-dos', 'cmd', 'diskpart', 'mbr']
draft: true
summary: 'Cómo reparar el arranque de Windows 10'
---

# Reparar el arranque de Windows 10

## Introducción

En este artículo vamos a ver cómo reparar el arranque de Windows 10. Para ello vamos a utilizar la herramienta `diskpart` que nos permite reparar el arranque de Windows 10.

### Descarga y boot desde un USB

Para ello primero teneis que descargar la herramienta de instalación de Windows 10 desde [la página de descargas de Microsoft](https://www.microsoft.com/es-es/software-download/windows10).

Una vez descargado el fichero de instalación de Windows 10, lo ejecutamos y nos aparecerá la siguiente pantalla:

![Instalación de Windows 10](./images/instalacion-windows-10.png)

Selecciona el idioma, la edición y la arquitectura (64 o 32 bits) de Windows 10. Esta tabla te ayudará a decidir qué edición de Windows 10 elegir:

<table>
  <thead>
    <tr>
      <th>Edición</th>
      <th>Características</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Home</td>
      <td>Para usuarios domésticos</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Para usuarios profesionales</td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td>Para empresas</td>
    </tr>
    <tr>
      <td>Education</td>
      <td>Para estudiantes</td>
    </tr>
  </tbody>
</table>

Una vez seleccionada la edición de Windows 10, pulsamos en `Siguiente` y nos aparecerá la siguiente pantalla:

![Instalación de Windows 10](./images/instalacion-windows-10-2.png)

En esta pantalla seleccionamos la opción `Crear medios de instalación para otro PC` y pulsamos en `Siguiente`.

En la siguiente pantalla seleccionamos la opción `USB flash drive` y pulsamos en `Siguiente`.

Una vez finalizada la instalación, reiniciamos el equipo y pulsamos la tecla `F12`, o la tecla asignada del fabricante, para entrar en el menú de arranque del equipo.

![Menú de arranque](./images/menu-arranque.png)

Seleccionamos la opción `USB` y pulsamos `Enter`.

Una vez iniciado el equipo desde el USB, nos aparecerá la siguiente pantalla:

![Instalación de Windows 10](./images/instalacion-windows-10-3.png)

Seleccionamos la opción `Reparar el equipo` y pulsamos `Enter`.

Aparecerá la siguiente pantalla:

![Instalación de Windows 10](./images/instalacion-windows-10-4.png)

Seleccionamos la opción `Solucionar problemas` y pulsamos `Enter`.

Despues seleccionamos la opción `simbolo del sistema` y pulsamos `Enter`.

![Instalación de Windows 10](./images/instalacion-windows-10-5.png)

### Reparación del arranque desde el CMD

Una vez iniciado el CMD, ejecutamos el siguiente comando:

```bash
diskpart
```

Despues ejecutamos el siguiente comando:

```bash
list disk
```

Este comando nos muestra los discos duros que tenemos en nuestro equipo.

Seleccionamos el disco donde tenemos instalado Windows 10 y ejecutamos el siguiente comando:

```bash
sel disk 0 # o  el número del disco duro
```

Despues ejecutamos el comando:

```bash
list vol
```

Este comando nos muestra las particiones que tenemos en nuestro disco duro.

Seleccionamos el volumen donde se encuentra la particion uefi, que normalmente pesa unos 100MB, y ejecutamos el siguiente comando:

```bash
sel vol 3 # o el número del volumen
```

Esta partición es la que suele estar dañada, por lo que hace que no os arranque el equipo.

Si esta partición esta eliminado o no se encuentra, listaremos las particiones y seleccionaremos la partición que tenga el sistema operativo Windows 10.

```bash
list partition
```
