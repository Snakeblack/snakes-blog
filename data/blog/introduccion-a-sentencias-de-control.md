---
title: 'Introducción a sentencias de control'
date: '2022-10-17'
tags:
  [
    'java',
    'programación',
    'teoria',
    'fundamentos',
    'introduccion',
    'sentencias',
    'control',
    'condicionales',
    'bucles',
  ]
draft: false
summary: 'En este artículo vamos a ver las sentencias de control más comunes en Java, como son las sentencias condicionales y las sentencias de bucle.'
---

## Indice

1. [Introducción a las sentencias de control](#id1)
2. [Sentencias secuenciales](#id2)
3. [Sentencias condicionales, alternativa o selectiva](#id3)
4. [Sentencia repetitiva o iterativa](#id4)

---

# Introducción a las sentencias de control <a name="id1"></a>

Las sentencias de control determinan la secuencia de ejecución de las sentencias de un programa,es decir, controlan el flujo de ejecución de un programa.

Todos los programas contienen **instrucciones** que, generalmente, se ejecutan una a continuación de la otra según la
secuencia en la que el programador o la programadora ha escrito el código. Sin embargo, en ciertas ocasiones, es necesario
romper esa secuencia de ejecución para que una serie de instrucciones se ejecuten o no dependiendo de una determinada
**condición** o bien para que se **repitan** un número determinado de veces.

Por tanto, las sentencias de control permiten **modificar el orden natural de ejecución de un programa**.

**Categorias de las secuencias de control**

> - Secuenciales
> - Condicionales o selectivas
> - Repetitivas o iterativas
> - Instrucciones de salto

---

# Sentencias secuenciales <a name="id2"></a>

Por defecto, las instrucciones de un programa se ejecutan en orden secuencial, lo que significa que se ejecutan una después de otra, en el orden en que aparecen escritas dentro del programa, de arriba abajo y de izquierda a derecha.

Por consiguiente, la estructura secuencial constituye el **orden natural** de ejecución. En la mayoría de los casos, dichas instrucciones están separadas por el carácter punto y coma (`;`).

Un ejemplo de un programa Java con estructura secuencial sería aquel que lee dos números por teclado y los muestra por pantalla. Así, las instrucciones se ejecutan en el mismo orden en que aparecen escritas.

En el siguiente ejemplo, podemos observar un pequeño programa donde se le pide al usuario o usuaria que introduzca dos números y, posteriormente, se muestran por pantalla.

```java
import java.util.Scanner;
public class EjemploEstructuraSecuencial {
  public static void main(String[] args) {
    //Inicio del método main

    //Declaración de variables
    int num1, num2;
    Scanner entrada=new Scanner(System.in);

    //Introducir el primer número
    System.out.println("Introduce un número entero");
    num1 = entrada.nextInt();

    //Introducir el segundo número
    System.out.println("Introduce un segundo número entero");
    num2 = entrada.nextInt();

    //Imprimir por pantalla los números
    System.out.println("Has introducido los números: "+num1+" y "+num2);
  } //Fin del método main
}
```

Para **modificar el orden de ejecución** de las instrucciones de un programa Java, se utilizan las sentencias **condicionales**
e **iterativas**.

---

# Sentencias condicionales, alternativa o selectiva <a name="id3"></a>

Una sentencia condicional determina si se ejecutan unas acciones u otras según se cumpla o no una determinada
**condición**.

La condición que se comprueba para decidir si unas instrucciones se ejecutan o no debe ser una **expresión booleana** , es
decir, debe ofrecer como resultado un valor booleano true o false.

En Java, la estructura condicional se implementa mediante las instrucciones:

- `if`
- `switch`

---

## Introducción a la sentencia if

**Tipos de condicionales**

> - Condiconal simple (`if`)
> - Condicional doble (`if` y `else`)
> - Condicional múltiple (`if`, `else if` y `else`)

### Sentencia condicional simple: `if`

Como su propio nombre indica, se trata de la estructura condicional más sencilla en Java. La usaremos para decidir si **una instrucción o bloque de instrucciones se ejecuta o no** en función de **determinada condición**. Así, se evalúa la condición y, si esta se cumple, se ejecuta. Si, en cambio, no se cumple la condición, se salta dicho grupo de instrucciones.

Ejemplo:

```java
import java.util.Scanner;
public class EjemploCondicionalSimple {
  public static void main(String[] args) {

    //Declaracion de variables
    int dia;
    Scanner entrada = new Scanner(System.in);

    //Introducir el día
    System.out.println("¿Cuantos días tiene febrero este año?");
    dia = entrada.nextInt();
    System.out.println("Un año normal tiene 365 días");

    //Condicional if que evalúa la respuesta
    if(dia==29) {
      /*Si la condición ES cierta, ejecutará esta parte del código
      * Si NO ES cierta, saltará esta parte */
      System.out.println("Pero este año es bisiesto");
    }
    System.out.println("Aunque lo habitual es que febrero tenga 28 días");
  }
}
```

En este ejemplo, el programa pide al usuario o usuaria que introduzca los días del mes de febrero. El programa seguirá
ejecutándose y, cuando llegue a la condición, la evaluará, ejecutando el código que contiene si la condición se cumple y, si
no es así, saltando ese bloque de código y continuando con su ejecución.

<img width="200" src="/static/svgs/diagrama-condicional.svg"></img>

### Sentencia condicional doble: `if ... else`

Mediante esta sentencia de control, el flujo de ejecución del programa puede seguir dos caminos distintos dependiendo
del valor de una condición.

Se evalúa la condición y, si se cumple, se ejecuta una determinada instrucción o grupo de instrucciones. Si, en cambio, no se
cumple, se ejecuta **otra instrucción o grupo de instrucciones**.

Ejemplo:

```java
import java.util.Scanner;
public class EjemploCondicionalDoble {
  public static void main(String[] args) {

    //Declaración de variables
    int edad;
    Scanner entrada = new Scanner(System.in);

    //Introducir la edad
    System.out.println("Introduce tu edad: ");

    edad=entrada.nextInt();
    //Condicional if que evalúa la respuesta

    if(edad>=18) {

      //La condición ES cierta, se ejecuta esta parte del código
      System.out.println("Eres mayor de edad.");

    } else {

      //La condición NO ES cierta, se ejecuta esta parte del código
      System.out.println("Aun no eres mayor de edad.");

    }
  }
}
```

En este ejemplo, se solicita al usuario o usuaria que introduzca su edad por medio del teclado. A continuación, se abre la
condición y se evalúa. Si la condición se cumple, se ejecutarán las líneas de código correspondientes, el programa saltará
aquella parte donde la condición no fuera cierta y seguirá ejecutándose. En cambio, si el programa llega a la condición y
esta no se cumple, saltaría la parte de código correspondiente y ejecutaría aquella donde la condición no se cumple para,
posteriormente, continuar con su flujo de ejecución.

<img width="300" src="/static/svgs/diagrama-doble-condicional.svg"></img>

### Sentencia condicional múltiple: if anidados

La estructura condicional múltiple se obtiene **encadenando sentencias if ... else**. De este modo, podemos construir
estructuras de selección más complejas, con **varias condiciones**.

Ejemplo:

```java
import java.util.Scanner;
public class EjemploIfAnidados {
  public static void main(String[] args) {
    //Declaración de variables
    int edad;
    Scanner entrada=new Scanner(System.in);

    //Introducir la edad
    System.out.println("¿Cuantos años tienes?: ");
    edad=entrada.nextInt();

    //Condicional if que evalúa la respuesta
    if(0<edad && edad<18) {
      //Primera condición
      System.out.println("Eres joven todavía");

    } else if(18<= edad && edad<40) {
      //Segunda condición
      System.out.println("Eres un adulto")

    } else if(40<=edad && edad<65) {
      //Tercera condición
      System.out.println("Ya empiezas ser mayor");

    } else {
      System.out.println("Hay que cuidarse");
    }
    //Última instrucción
    System.out.println("¡Y que cumplas muchos más!");
  }
}
```

En este ejemplo, vemos cómo al usuario o usuaria se le pide que introduzca un valor. Dicho valor saltará al bloque de
instrucciones que le corresponda según la condición que se cumpla, se ejecutará la condición y el programa continuará su
ejecución saltando los bloques de instrucciones donde la condición no se cumpla. En este caso, si el usuario o la usuaria,
introduce un número comprendido entre 18 y 40, el programa iría a la segunda condición, ejecutaría el código que contiene
y, posteriormente, saltaría a la última instrucción.

---

## Instrucción `switch`

Esta estructura de control se utiliza para seleccionar **una de entre múltiples opciones posibles**. Se trata de **una alternativa a los _if_ anidados**: si el número de anidamientos `if` es elevado, la estructura switch produce un código más sencillo de leer y de modificar. El flujo de ejecución del programa está determinado por el valor de una **variable** o **expresión** que puede ser de tipo `string` o de tipo primitivo, excepto `float` y `double`.

**Funcionamiento de la instrucción `switch`:**

> - En primer lugar, se evalúa la expresión y se salta al `case` cuyo valor coincida con el de la expresión.
> - A continuación, se ejecutan las instrucciones que contiene el `case` seleccionado hasta que se encuentra un `break` o hasta el final del `switch` . El `break` produce un salto y la ejecución continúa por la siguiente instrucción a continuación del `switch`.
> - Si el valor de la expresión no coincide con ningún `case`, se ejecuta el `default` si lo hubiera.

El **bloque default** es opcional; por lo tanto, no es obligatorio incluirlo en un `switch` . Generalmente, el bloque default suele escribirse al final del `switch` , a continuación de todos los `case` , pero esto tampoco es obligatorio, puede aparecer **en cualquier lugar**.

Los **valores** que aparecen en los `case` deben ser **únicos**, esto es, no puede haber dos `case` con el mismo valor. Además, el valor de un `case` no puede ser una variable, debe ser un **literal** o una **constante** (variables declaradas como final).

Es importante entender que, cuando la ejecución del programa entra en uno de los `case` , el programa sigue ejecutándose desde ese punto hasta que encuentre el primer `break` (se encuentre o no dentro del mismo `case` ) o hasta que se llegue al final del switch , en cuyo caso continuará por la instrucción que se encuentre a continuación del `switch`.

Ejemplo:

```java
import java.util.Scanner;
public class EjemploSwitchCase {
  public static void main(String[] args) {

    Scanner teclado=new Scanner(System.in);

    System.out.println("Menú");
    System.out.println("a. Opción a");
    System.out.println("b. Opción b");
    System.out.println("c. Opción c");
    System.out.println("d. Opción d");

    //Introducción del valor de la variable
    System.out.println("Introduce una opción: ");
    String opcion=teclado.nextLine();

    switch(opcion) {

      case "a": //Primer valor
        System.out.println("Has escogido la opcion a");
        break; //Instrucción que nos sacará del bucle

      case "b": //Segundo valor
        System.out.println("Has escogido la opcion b");
        break;

      case "c": //Tercero valor
        System.out.println("Has escogido la opcion c");
        break;

      case "d": //Cuarto valor
        System.out.println("Has escogido la opcion d");
        break;
    }
    System.out.println("Aquí sigo después del switch-case");
  }
}
```

En este ejemplo, el usuario o la usuaria introduce una opción del menú que se mostrará en pantalla. Según la opción elegida, el flujo del programa saltará directamente al bloque de instrucciones correspondiente y, después, obviará el resto de opciones disponibles y continuará la ejecución del programa.

---

# Sentencia repetitiva o iterativa <a name="id4"></a>

Esta estructura de control permite **ejecutar de forma repetida una instrucción** o un bloque de instrucciones mientras se cumpla una determinada condición.

En Java, las estructuras repetitivas se implementan mediante:

- **Bucles `while`**.
- **Bucles `do-while`**.
- **Bucles `for`**.

## Bucle `while`

Un ciclo o bucle `while` comienza con la comprobación de una condición para determinar si es cierta o falsa. Si la condición es cierta, se iniciaría la ejecución del bloque de instrucciones dentro del `while` , que seguiría ejecutándose continuamente hasta que la condición se convirtiese en falsa, momento en el que se abandonaría el bucle y el programa continuaría con su ejecución. Normalmente, cuando se ejecutan las instrucciones del bucle `while` , el valor de la variable va cambiando a cada vuelta de bucle hasta que la condición deje de cumplirse.

En un bucle `while`, **la condición se comprueba al principio del bucle**, de modo que las instrucciones que lo conforman se ejecutan **0 o más veces**, ya que si la condición no se cumpliera desde el principio, no entraría en el bucle. Un bucle `while` se escribiría de la siguiente forma:

```java
public class EjemploWhile {
  public static void main(String[] args) {
    instrucción1;
    instrucción2;

    while (condición) { //Inicio del bucle while
      instrucción3;
      instrucción4;

    }//Fin del bucle while
    instrucción5;
    instrucción6;
  }
}
```

**Ejecución del bucle `while`:**

> 1. El programa ejecuta las instrucciones hasta llegar al `while`.
> 2. Se evalúa la condición del `while`.
> 3. Si el resultado es `false`, las instrucciones no se ejecutan y el programa sigue ejecutandose por la siguiente instrucción a continuación del `while`.
> 4. Si el resultado es `true`, se ejecutan las instrucciones que contiene el bucle y se vuelve al paso 2 hasta que la condicion se convierta en `false`.

Esta técnica se conoce como lectura adelantada o anticipada y es la forma correcta de utilizar la estructura `while`. Se debe usar cuando **no sabemos el número de iteraciones que se van a realizar**, sino que esto depende de la condición.
Las instrucciones se ejecutan mientras la condicion sea **cierta**.

Ejemlo:

```java
public class EjemploWhile2 {
  public static void main(String[] args) {
    //Declaración de variables
    int `i` = 0;
    int suma = 0;

    //Inicio del bucle while con su condición
    while(i < 10) {
      suma = suma + i;
      `i` +=1;
    } //Fin del bucle while
    System.out.println(suma);
    System.out.println("Aqui termina el programa");
  }
}
```

En este ejemplo, mientras `i` presente un valor inferior a 10, la variable suma toma su valor, más el valor de esa variable i en ese momento. En la siguiente línea de código el valor de `i` se incrementa en uno a cada vuelta de bucle. En la primera vuelta, `i` presenta el valor 0; en la segunda, el valor 1; en la tercera, el valor 2; y así sucesivamente hasta que `i` valga 10, momento en el que la condición ya no se cumple y, por tanto, se abandonaría el bucle para continuar con la ejecución. El programa lo que ha hecho es un sumatorio de los valores que toma `i` desde el 0, hasta el 9, ya que cuando `i` vale 10 la condición deja de cumplirse como se ha dicho.

---

## Bucle `do-while`

Se trata de un bucle muy similar al bucle `while` , con la diferencia de que, primero, se ejecutan las instrucciones, mientras que **la condición se comprueba al final**; de este modo, se consigue que el programa ejecute las instrucciones del bucle **al menos una vez**. A continuación, se ejecutarán las instrucciones mientras la condición sea **cierta**. Así, cuando la condición no se cumpla, se saldrá del bucle.

Por tanto, la diferencia fundamental entre el bucle `while`y el bucle `do-while` consiste en que las instrucciones de un bucle `while` puede que no se ejecuten si la condicion es, inicialmente, falsa. De esta forma, un bucle `do-while` quedaria expresado del siguiente modo:

```java
public class EjemploDoWhile {
  public static void main(String[] args) {
    instrucción1;
    instrucción2;

    do { //Inicio del bucle do ... while
      //Estas instrucciones se ejecutarían al menos una vez
      instrucción3;
      instrucción4;
    } while(condición); //Fin do ... while
  }
}
```

**Ejecución de un bucle `do-while`**

> 1. Se ejecutan las primeras instrucciones.
> 2. Se ejecutan las instrucciones de la instruccion `do{...}`.
> 3. Se evalúa la condición del `while`.
> 4. Si el resultado es `false`, las instrucciones no se ejecutan y el programa sigue ejecutandose por la siguiente instrucción a continuación del `while`.
> 5. Si el resultado es `true`, se ejecutan las instrucciones que contiene el bucle y se vuelve al paso 2 hasta que la condicion se convierta en `false`.

La condición se comprueba al final del bucle, asi que el bloque de instrucciones se ejecutará al menos una vez.

Ejemplo:

```java
package unidad3;
public class EjemploDoWhile2 {
  public static void main(String[] args) {
    // Declaración de variables
    int = 1;
    int num2 = 2;
    int res;

    do {
      // Inicio del bucle do ... while
      res = + num2;
      ++;
    }while(<1);

    /*La condición se comprueba al final, por lo que con el bucle do while, nos aseguramos de que las instrucciones se ejecuten al menos una vez. */
  }
}
```

En este ejemplo, se muestran tres variables. El programa entrará en el bucle `do-while` al menos una vez y ejecutará las instrucciones del bucle mientras se cumpla la condición que se indica en el `while`. Cuando la condición no se cumpla, se saldrá del bucle y se ejecutará la siguiente instrucción.

---

## Bucle `for`

Un `for` permite que una instrucción o un bloque de instrucciones **se repita un numero determinado de veces** mientras se cumple la condicon. Los bucles `for`son los más adecuados **cuando se conoce el número de veces que se van a repetir las instrucciones**.

Sintaxis:

```java
package unidad3;
public class EjemploFor {
  public static void main(String[] args) {
    instrucción1;
    instrucción2;

    for(inicialización; condición; incremento/decremento) {
      //Inicio del bucle for
      instrucción3;
      instrucción4;
    } //Fin del for
    instrucción5;
    instrucción6;
  }
}
```

Justo a continuación de la palabra reservada `for` y entre paréntesis, se encuentran tres partes separadas por punto y coma:

- **Inicialización**

  Es la parte donde la variable de control del bucle adopta un valor inicial. Enel caso de que contemos con más de una variable en el inicio, estas deben ir separadas por comas.

- **Condición**

  Se trata de una expresón booleana que se va a evaluar. En función de si el resutaldo es `true` o `false`, el codigo del `for` se ejecutará o no.

- **Incremento/decremento**

  Estra expresion modifica a variable o variables dela inicialización, dando, por tanto, una vuelta de ciclo. Como ocurre con la zona de inicialización, pueden existir varias expresiones para modificar las variables, en cuyo caso deben ir separadas por comas.

Las tres zonas son **opcionales**, pero al menos una de ellas debe estar presente. Si en alguna ocasión no fuese necesario escribir alguna de ellas, se puede dejar el espacio en blanco, **pero los puntos y comas deben estar presentes**.

**Ejecución de un bucle `for`**

> 1. Se inicializa la variable o variables de control.
> 2. Se evalúa la condición.
> 3. Si el resultado es `false`, las instrucciones no se ejecutan y el programa sigue ejecutandose por la siguiente instrucción a continuación del `for`.
> 4. Si el resultado es `true`, se ejecutan las instrucciones que contiene el `for`.
> 5. Se ejecuta la expresión de incremento/decremento.
> 6. Se vuelve al paso 2.

Como ocurría con el bucle `while`, un bucle `for` se puede ejecutar **0 o más veces**. Lo que los diferencia es que el bucle `for` se debe utilizar cuando se conoce el número de veces que se va a ejecutar según la condición.

---

## ¿Qué secuencia repetitiva usar?

Aunque un `for` se puede utilizar tambien cuando no se sabe a _priori_ el numero de iteraciones que se van a realizar, esta instrucción está especialmente indicada para bucles donde se conoce el número de pasadas.

Como regla practica, podemos indicar:

**¿Qué bucle usar?**

> - La instrucción `for` se utiliza, generalmente, cuando se conoce el nùmero de iteraciones que se van a realizar.
> - Las instrucciones `while` y `do-while` se utilizan cuando no se conoce el número de iteraciones que se van a realizar.
> - La instrucción `do-while` será más adecuada que la instrucción `while` cuando el bloque de instrucciones se deba repetir al menos una vez.

---

## Bucles anidados

Hablamos de bucles anidados cuando se incluyen instrucciones `for`, `while` o `do-while` dentro de otros bucles. Los bucles anidados se utilizan cuando se necesitan realizar varias iteraciones de un bucle dentro de otra iteración de otro bucle.

**Sintaxis para anidar dos bucles `for`**

```java
package unidad3;
public class EjemploForAnidado {
  public static void main(String[] args) {
    instrucción1;
    instrucción2;

    for(inicialización; condición; incremento/decremento) {
      //For 1
      instrucción3;
      instrucción4;

      for(inicialización; condición; incremento/decremento) {
        //For 2
        instrucción5;
      } //Fin for 2

    } //Fin for 1
    instrucción6;
    instrucción7;
  }
}
```

**Sintaxis para anidar dos bucles `while`**

```java
package unidad3;
public class EjemploWhileAnidado {
  public static void main(String[] args) {

    instrucción1;
    instrucción2;

    while(condición1) { //While 1
      instrucción3;

      while(condición2) { //While 2
        instrucción4;
        instrucción5;

      } //Fin while 2
    } //Fin while 1
    instrucción6;
  }
}
```

**Sintaxis para anidar dos bucles `do-while`**

```java
package unidad3;
public class EjemploDoWhileAnidado {
  public static void main(String[] args) {
    instrucción1;
    instrucción2;

    do { //do while 1
      instrucción3;

      do { //do while 2
        instrucción4;

      } while(condición); //Fin do while 2
      instrucción5;

    } while(condición); //Fin do while 1

    instrucción6;
    instrucción7;
  }
}
```

Los bucles se pueden anidar aunque sean de tipos distintos. Así, por ejemplo, podriamos anidar un bucle `for` dentro de un bucle `while` o un bucle `do-while`, y viceversa.

```java
package unidad3;
public class EjemploBuclesAnidados {
  public static void main(String[] args) {
    instrucción1;

    while(condición) { //Inicio while
      instrucción2;

      do { //Inicio do while
        instrucción3;

        for(inicialización; condición; incremento/decremento) {
          //Inicio for
          instrucción4;

        }//Fin del for

      } while(condición); //Fin do while
      instrucción5;

    } //Fin del while
    instrucción6;
  }
}
```
