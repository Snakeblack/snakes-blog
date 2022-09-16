---
title: 'Introducción a Java'
date: '2022-09-16'
tags: ['java', 'programación', 'introducción', 'teoría', 'lore', 'características', 'IDE']
draft: false
summary: '¿Que es java?, sus orígenes, y como funciona.'
---

# Introducción a Java

El lenguaje Java surge en los años 90, cuando un equipo de ingenieros conocido como GreenTeamy liderado por James Gosling trabajaba en un proyecto para la empresa Sun Microsystem.

## Origen de Java

El propósito de dicho proyecto consistía en desarrollar software destinado a pequeños dispositivos electrónicos. Estos dispositivos contaban con un software específico incompatible entre sí, de modo que el proyecto perseguía la creación de funciones que se pudiesen aplicar a cualquier dispositivo sin necesidad de modificar y de re-compilar el código para cada uno de ellos. En resumen, la finalidad del equipo de Sun Microsystem era el desarrollo de un **lenguaje independiente del dispositivo**. Este nuevo lenguaje se llamó, inicialmente, GreenTalk.

En 1993, durante el desarrollo de este proyecto, se creó el navegador gráfico **Mosaic**, lo que significó un gran impulso para la World Wide Web, que hasta ese momento no estaba muy extendida. Mosaic facilitaba la navegación entre los enlaces que conformaban la web, consiguiendo, de este modo, popularizarla.

Como consecuencia, el equipo de Sun Microsystem se planteó aplicar a internet los logros alcanzados en su lenguaje para pequeños electrodomésticos. Así, desde ese momento, sus esfuerzos se dirigieron a desarrollar un lenguaje que permitiese crear aplicaciones susceptibles de ejecutarse en cualquier ordenador con independencia de su arquitectura o sistema operativo.

> Fue así como, en 1995, el lenguaje pasó a llamarse Java. Según la leyenda, esta denominación se debió a la cantidad de cafés que el equipo llegó a consumir durante el proceso de creación.

Ese mismo año, se lanza el navegador HotJava, que soportaba applets de Java. En seguida comenzaron a interesarse por el lenguaje numerosos desarrolladores y desarrolladoras, así como a crear aplicaciones en torno a él, contribuyendo a popularizarlo y a evidenciar todo su potencial.

En el año 1997, Netscape incluyó el soporte de applets de Java en su navegador, lo que determinó que empresas de la talla de IBM o SGI se interesasen por el lenguaje.

Paralelamente, Sun Microsystem creó JavaSoft, un grupo empresarial dedicado exclusivamente al desarrollo de este lenguaje, que pasó a convertirse en un **lenguaje multiplataforma** bajo el eslogan “Write once, run anywhere”.

Ya en el año 2010, la empresa Oracle adquiere la empresa creadora de Java, Sun Microsystem.

## Comó funciona java

Normalmente, un programa escrito en un lenguaje de programación conocido como **código fuente** debe ser traducido a un lenguaje comprensible para la máquina, denominado **código máquina o ejecutable**. El encargado de dicha traducción suele ser un **compilador**.

El código máquina o ejecutable generado es diferente para cada arquitectura, mientras que el código fuente es el mismo para todas. Si hay algún cambio en el código fuente, este debe compilarse nuevamente, es decir, volver a traducirse en cada una de las máquinas donde vaya a ejecutarse.

```Text
Código fuente -> Compilador -> Código máquina
```

En Java, para evitar la dependencia de la máquina, un programa no se traduce directamente a código ejecutable al compilarse, sino a un lenguaje intermedio llamado bytecode, también conocido como J-Code. Este proceso se conoce como pre-compilación.

Tras este proceso, se genera un archivo .class que no puede ejecutarse directamente en el sistema mediante un doble clic. El bytecode ha de ser interpretado, es decir, traducido línea a línea, por la máquina virtual de Java, conocida como **JVM (Java Virtual Machine)**, encargada de generar el código ejecutable.

```Text
Código fuente -> Compilador -> Bytecode -> JVM -> Código ejecutable
```

La JVM forma parte del **JRE (Java Runtime Environment)** o entorno de ejecución de Java. Esta máquina virtual se distribuye gratuitamente en casi todos los sistemas operativos, permitiendo que una aplicación Java pueda ser ejecutada en cualquier ordenador en el que dicha máquina haya sido instalada.

## Características de Java

### Sencillo

Elimina la complejidad de lenguajes como C, inaugurando el contexto de los lenguajes modernos orientados a objetos.  
Aunque la sintaxis de Java es muy similar a C++, suprime algunas de las características más conflictivas de este lenguaje, entre ellas:

**Diferencias entre C++ y Java**

> - No incluye punteros, de manera que resulta más seguro y fácil de manejar (los punteros son variables que indican una dirección de la memoria donde está almacenado su valor).
> - Se encuentra muy preparado para ser utilizado en redes TCP/IP y, especialmente, en internet.
> - Implementa excepciones (control de errores) de forma nativa.
> - Se trata de un lenguaje parcialmente compilado , ya que primero es compilado a un lenguaje intermedio denominado bytecode que, posteriormente, será interpretado.
> - Presenta tanto tipos de datos como un control de la sintaxis más riguroso que los lenguajes C y C++, lo que facilita la gestión de errores.

### Orientado a objetos

Se trata de un lenguaje puramente orientado a objetos. Todo en Java, a excepción de los tipos fundamentales de variables ( int , char , double ... ), es un objeto.

### Multiplataforma

El programador compila una única vez el programa Java y el fichero de bytecode que obtiene se ejecuta del mismo modo por parte de la máquina virtual de Java de cualquier plataforma (Windows, Linux, MacOS, etc.). De esta forma, Java logra ser un lenguaje que no depende de una arquitectura de ordenador específica.

La ejecución mediante la máquina virtual determina que la ejecución de los programas Java resulte más lenta que la de los programas escritos en C++.

**Para aumentar la velocidad de ejecución se emplean:**

> - Compiladores de código nativo.  
>   El programa Java se compila y se obtiene directamente código máquina ejecutable. No obstante, perdemos la portabilidad.
> - Compiladores JIT (Just-In-Time).  
>   A medida que se van interpretando los bytecodes, se guarda el código máquina generado en un buffer. De esta forma, no es necesario traducir de nuevo el código ya traducido, con lo que ganamos en velocidad.

### Robusto

Java realiza verificaciones buscando problemas tanto en tiempo de compilación como en tiempo de ejecución.  
La comprobación de tipos ayuda a detectar errores lo antes posible en el ciclo de desarrollo. Además, Java obliga a la declaración explícita de métodos, reduciendo así las posibilidades de error. Asimismo, maneja la memoria para eliminar el riesgo de liberación o corrupción de esta.

También implementa los arrays auténticos, con comprobación de límites, en vez de listas enlazadas de punteros para evitar la posibilidad de sobrescribir o corromper memoria como consecuencia de punteros que señalan zonas equivocadas. Estas características reducen drásticamente el tiempo empleado en el desarrollo de aplicaciones Java.

### Seguro

Al interpretar el código, el JRE puede delimitar las operaciones peligrosas, de modo que la seguridad resulta fácilmente controlable. Además, Java elimina las instrucciones dependientes de la máquina y los punteros que generaban errores de gran envergadura en C, así como la posibilidad de generar programas para atacar sistemas. Tampoco se permite el acceso directo a la memoria y a los recursos del ordenador.

La primera línea de seguridad de Java es un **verificador del bytecode** que permite comprobar si el comportamiento del código es correcto, esto es, si sigue las reglas del lenguaje Java. Normalmente, los compiladores de Java no pueden generar código que infrinja las reglas de seguridad de este lenguaje.

Hay un segundo paso que verifica la seguridad del código: se trata del **verificador de clase**, que es el programa que proporciona las clases necesarias al código. Así, se asegura de que las clases que se cargan son realmente las del sistema original de Java y no otras creadas y reemplazadas artificialmente.

Finalmente, cuenta con un **administrador de seguridad**, un programa configurable que permite al usuario establecer niveles de seguridad para todos los programas Java de su sistema. Ofrece también una forma de seguridad relacionada con la confianza que se basa en determinar si el código Java procede de un sitio de confianza o de una fuente no identificada. Esto resulta posible porque en Java se pueden añadir **firmas digitales** al código para verificar su autoría.

### Multitarea

Soporta múltiples _threads_ (hilos o tareas), lo que significa que puede ejecutar diferentes líneas de código simultáneamente, tanto si la máquina es un multiprocesador como si no lo es.

### Dinámico

En Java, no es necesario cargar completamente el programa en memoria, sino que las clases compiladas pueden ser cargadas bajo demanda en tiempo de ejecución (**dynamic binding**), lo que resulta especialmente relevante en los applets.

## Tipos de aplicaciones Java

### Applets

Son programas Java pensados para ser colocados dentro de una página web. Pueden ser interpretados por cualquier navegador con capacidades Java y se insertan en las páginas usando una etiqueta especial (del mismo modo que se insertan vídeos, animaciones flash u otros objetos). Actualmente, los applets se encuentran en desuso y, probablemente, acaben desapareciendo (de hecho, algunos navegadores lanzan mensajes de alerta y no los ejecutan).

### Servlets

Se trata de aplicaciones que se ejecutan en un servidor web y que extienden o amplían las capacidades de este. A diferencia de los applets, concebidos para un cliente, los servlets están diseñados para mejorar las capacidades del servidor. Su uso más habitual es la creación de webs dinámicas, acceso a bases de datos, etc.

### Aplicaciones de consola

Son programas independientes como los creados con los lenguajes tradicionales. Se ejecutan en la terminal de Windows o Linux, es decir, mediante líneas de comandos.

### Aplicaciones gráficas

Se trata de aquellas aplicaciones donde podemos disponer de una interfaz gráfica para trabajar con ella. Un ejemplo sería una aplicación que contase con botones para llevar a cabo diferentes acciones dentro de la aplicación, que mostrase ventanas emergentes, etc.

### Midlets

Aplicaciones creadas para su ejecución en dispositivos móviles; por ejemplo, los juegos Java creados para teléfonos móviles.

## Plataforma Java

Una **plataforma** es el ambiente de hardware o software en el que se ejecuta un programa. La plataforma Java consta de:

**Componentes de la plataforma Java**

> - La máquina virtual de Java (JVM)
> - La **API** de Java (Application Programming Interface). Interface). Se trata de una colección de bibliotecas con clases estándar que se pueden incluir en los programas Java sin que se generen fallos de portabilidad. Además, están bien documentadas (mediante páginas web), así como organizadas en paquetes y en un gran árbol de herencia.

Actualmente, existen tres ediciones de Java. Cada una de ellas se corresponde con una plataforma que incluye una serie de funciones, paquetes y elementos del lenguaje (es decir, la API de Java).

**Ediciones de Java**

> - **Java SE (Standard Edition)**. Anteriormente conocida como J2SE (el dos se refiere a Java 2), permite escribir código relacionado con la creación de aplicaciones y applets en lenguaje Java común. Es decir, se trata del Java “normal”
> - **Java EE (Enterprise Edition)**. Edition). Todavía conocida como J2EE, ha sido concebida para la creación de aplicaciones Java empresariales y del lado del servidor.
> - **Java ME (Micro Edition)**. Edition). También conocida como J2ME, está destinada a la creación de aplicaciones Java para dispositivos móviles.

La **especificación API para Java Standard Edition** es una herramienta básica para todo desarrollador/a Java, pues se trata del documento que contiene todos los paquetes, clases e interfaces que podemos usar en nuestros programas con Java. Dentro de cada clase, encontraremos su descripción, los constructores, los métodos y más información que nos resultará útil a la hora de desarrollar un programa. [Este enlace](https://docs.oracle.com/javase/7/docs/api/) nos conduce directamente a la página inicial de este documento. Asimismo, podemos encontrar más documentación oficial de Java [aquí](https://www.oracle.com/java/technologies/).

# Empezar a trabajar con Java

## El kit de desarrollo Java SDK o JDK

Para poder escribir un programa Java, es necesario haber instalado el kit de desarrollo de Java o JDK (Java Development
Kit), también denominado Java SDK (Software Development Kit). El JDK contiene el software necesario para que los
programadores y las programadoras compilen, depuren y ejecuten programas y applets escritos en Java. Tanto el software
como la documentación son gratuitos. Se puede descargar en [este enlace](https://www.oracle.com/java/technologies/downloads/).

## Instalación del JDK

Hay que prestar atención al directorio donde se ha instalado el JDK, ya que debemos modificar tres variables del sistema:

**Variables a modificar**

> - **PATH**. Variable que contiene rutas por defecto a los programas que indiquemos. La razón es que, por ejemplo, el comando Java debe permanecer disponible independientemente de la carpeta en la que nos encontremos. Dicho comando (junto con el resto de comandos del JDK) se localiza en la carpeta Bin, dentro de la carpeta en la que hemos instalado el JDK.
> - **JAVA_HOME**. Variable utilizada por la mayoría de las aplicaciones basadas en Java. Contiene la ruta a la carpeta donde hemos instalado el JDK.
> - **CLASSPATH**. Se trata de una variable similar al PATH que sirve para indicar rutas a las carpetas donde se almacenarán aplicaciones Java.

Estas variables se configuran de distinta forma en función del sistema operativo en el que se instalen.

Tras finalizar la instalación, debemos actualizar esa ruta en las variables del sistema. Para modificarlo en Windows, debemos ir a `Sistema (Panel de Control) > Configuración Avanzada del Sistema > Variables de Entorno`.

En **Variables de Entorno**, añadimos las variables necesarias. En primer lugar **JAVA_HOME** , que será la ruta donde hemos instalado nuestro JDK. En este ejemplo la ruta es: `C:\Program Files\Java\jdk-17.0.1`.

Para ello, hacemos clic en **nueva variable**, e introducimos en nombre **JAVA_HOME** , y en **valor, la ruta donde se encuentra el JDK**.

A continuación editaremos la variable del sistema `PATH` para incluir la ruta de la carpeta `Bin` que contiene las aplicaciones de ejecución de JAVA. Para ello, buscamos la variable `PATH` y pulsamos sobre editar.

A la variable `PATH` , vamos a incluirle la ruta del directorio `Bin` del JDK instalado, añadiendo `%JAVA_HOME%\bin` al final del valor de la variable:

Con estos pasos quedarían configuradas las variables de entorno del JDK en el sistema Windows.

## Entornos de trabajo

En Java, el código se puede escribir en cualquier editor de texto. Asimismo, para compilar el código en bytecodes, solo es necesario descargar la versión del JDK deseada. Sin embargo, realizar la escritura y la compilación de programas de esta forma resulta un tanto incómodo, motivo por el que numerosas empresas fabrican sus propios entornos de edición.  
Algunos de dichos entornos incluyen el compilador, mientras que otros utilizan el propio JDK de Sun.

**Ventajas de los entornos de trabajo**

> - Facilidades para escribir código (coloreado de las palabras clave, autocorrección al escribir, abreviaturas...).
> - Facilidades de depuración para probar el programa.
> - Facilidad de configuración del sistema (elección concreta del directorio del SDK, manipulación de la variable CLASSPATH , etc.).
> - Facilidades para organizar los archivos de código.
> - Facilidad para exportar e importar proyectos.

Los IDE más utilizados en la actualidad son:

- **Eclipse**

Se trata de un entorno completo de código abierto que posee numerosas extensiones y posibilidades. Hoy en día, es el más utilizado y recomendable. Además, posee una comunidad muy dinámica y, desde luego, es uno de los más potentes.  
Disponible en [su web](www.eclipse.org).

- **NetBeans**

Entorno gratuito de código abierto para la generación de código en diversos lenguajes, si bien está especialmente pensado para Java. Contiene prácticamente todos los requerimientos que se suelen pedir a un IDE: editor avanzado de código, depurador, diversos lenguajes, extensiones de todo tipo (CORBA, servlets...). También incluye un servidor de aplicaciones Tomcat que nos permite probarlas. Se descarga en [su web](www.netbeans.org).

- **IntelliJ IDEA**

Entorno comercial de programación bastante fácil de utilizar, aunque presenta características similares al resto. Es menos pesado que los anteriores y muy bueno con el código.  
Ademas cuenta con una version gratuita soportada por la comunidad. Se puede descargar en [su web](www.jetbrains.com/idea/).

Es la que más recomiendo y la que uso yo personalmente.
