---
title: 'Tipos de datos y operadores en Java'
date: '2022-10-5'
tags:
  [
    'java',
    'tipos',
    'operadores',
    'fundamentos',
    'programación',
    'variables',
    'constantes',
    'comentarios',
  ]
draft: false
summary: 'En este artículo vamos a ver los tipos de datos y operadores que podemos utilizar en Java, ademas de los comentarios.'
---

# Variables y Constantes

Una variable es una representación de un valor un identificador. Las constantes son un caso especial de variables donde, una vez asignado un valor, este no va a ser modificado durante el resto del programa.

## Variables

Una variable es **una representación de un valor mediante un identificador**, es decir, se trata de asociar un nombre a determinados datos. Por tanto, sirve para almacenar los datos que utiliza un programa. El valor que asignamos a una variable, como su propio nombre indica, es variable, lo que significa que puede cambiar durante la ejecución del programa.

Cada dato almacenado en una variable ocupa un espacio en la memoria RAM del ordenador; así, cuando la usamos,
estamos haciendo referencia a un dato almacenado en la memoria.

En Java, podemos distinguir dos tipos de variables: por un lado, las **variables locales o de bloque**, que son aquellas declaradas dentro de un bloque de comandos y que, por tanto, solo podemos manipular dentro de ese bloque; y, por otro lado, las **variables globales**, que son aquellas declaradas fuera de cualquier función, generalmente al principio del
programa.

Codigo de ejemplo:

```java
int num = 3;
```

La variable num apunta en memoria al valor 3 almacenado en un espacio de memoria.

## Constantes

Las constantes son un caso especial de variables donde, una vez asignado un valor, este no va a ser modificado durante el resto del programa, al contrario de lo que sucede con las variables. Por consiguiente, cualquier dato que no vaya a ser cambiado, debe almacenarse en una constante y no en una variable; por ejemplo, el valor del número pi, el IVA, etc.

Los identificadores de las constantes siguen las mismas reglas que los de las variables, aunque, por convención, se recomienda que su nombre se escriba siempre en **mayúsculas** para diferenciarlos de las variables y que el programa
resulte más legible.

Además, cuando se declara una constante, esta debe ir precedida de la palabra reservada `final`.

## Palabras reservadas

En Java, existen una serie de palabras con un significado especial llamadas palabras reservadas que no pueden utilizarse como identificadores de nuestras variables.  
En la siguiente figura, se muestra, en orden alfabético, el conjunto de palabras reservadas en Java:

`abstract` `assert` `boolean` `break` `byte` `case` `catch` `char` `class` `const` `continue` `default` `do`
`double` `else` `enum` `extends` `final` `finally` `float` `for` `goto` `if` `implements` `import`
`instanceof` `int` `interface` `long` `native` `new` `package` `private` `protected` `public` `return`
`short` `static` `strictfp` `super` `switch` `synchronized` `this` `throw` `throws` `transient` `try` `void`
`volatile` `while`

## Identificadores

En Java, el identificador de una variable puede contener cualquier carácter Unicode. En este sentido, conviene destacar que Java constituye lo que se denomina un lenguaje case sensitive, lo que significa que distingue entre mayúsculas y minúsculas. El identificador de la variable, además de tratarse de un carácter Unicode, debe ajustarse a las siguientes
reglas:

**Identificador de variable**

> - No puede comenzar por un número ni incluir espacios. En cambio, sí puede empezar por una letra, por un subrayado ( `_` ) o por el símbolo del dólar `$`.
> - No hay una longitud máxima establecida para el identificador, aunque se recomienda que sea breve y descriptivo.
> - Se distingue entre mayúsculas y minúsculas.
> - No puede usar ninguna palabra reservada del lenguaje Java.

**Ejemplos de identificadores válidos en Java**

```java
package unidad2;
public class IdentificadoresValidos {
  public static void main(String[] args) {
    String Edad, edad, _edad, eDaD, año, año_Nacimiento, año0;
    String $edad, _$edad, edad_1_1, AñoNacimiento, num1, máx;
  }
}
```

**Ejemplos de identificadores no válidos en Java**

```java
public class IdentificadoresNoValidos {
  public static void main(String[] args) {
    String 4edad, "edad", año-maximo, public, _edad.maxima;
  }
}
```

Es recomendable ajustarnos a la **guia de estilos de Java** usando la notación **camelCase**.

> - Si un identificador consta de varias palabras, las diferenciaremos entre sí escribiendo en mayúscula la primera letra de cada palabra.
> - Si un identificador se compone de una sola palabra, se recomienda escribirla completamente en minúscula.

**Ejemplos** de identificadores siguiendo la notación Camel:

```java
public class EjemplosCamel {
  public static void main(String[] args) {
    // TODO Auto-generated method stub
    String altura, alturaMaxima, nombre, nombrePersona, pesoCoche;
  }
}
```

---

# Tipos de datos

Cada variable requiere un tamaño concreto en memoria para almacenar sus valores. Si se usa un tamaño en memoria demasiado pequeño, no podrá almacenarse toda la información; asimismo, si usamos un tamaño demasiado grande, realizaremos un uso poco eficiente del programa, ya que ocupará más memoria de la que realmente necesita.

En cualquier caso, en Java no es necesario establecer un tamaño específico para cada variable, sino un «tipo» de variable
que ya define determinado tamaño de memoria, así como rangos de valores conocidos.

Los tipos predefinidos en Java, también conocidos como **tipos primitivos**. Se trata de tipos de datos del lenguaje, es decir, no representan objetos. Son los siguientes:

`byte` `short` `int` `long` `short` `float` `boolean` `char`

A continuación, veremos qué clase de datos puede almacenarse en cada tipo primitivos de Java.

## Enteros

Son los tipos primitivos `byte`, `short`, y `long`. Los enteros son aquellos números que carecen de decimales. Se pueden asignar enteros normales, octales, anteponer un cero al número o hexadecimales anteponiendo un 0x.

## Números en coma flotante

Se denominan así por cómo los almacena el ordenador. Los decimales no se almacenan de forma exacta, por eso siempre existe la posibilidad de que se produzca un error. Los decimales de coma flotante, en cambio, proporcionan mayor precisión y se almacenan en los tipos `double` y `float` . La diferencia entre uno y otro reside en la exactitud con la que se almacenan, pues el tipo `double` es más preciso que el tipo `float` . Asimismo, el valor decimal permanece separado por un
punto, no por una coma.

`✱ No se pueden asignar números decimales a enteros.`

Si no se indica nada, se entiende que un número decimal es, por defecto, de tipo `double` . Además, al declarar números (tanto enteros como decimales), si no se les asigna un valor, presentarán, por defecto, el **valor cero**.

## Booleanos

Los valores booleanos, de tipo `boolean` , indican si algo es verdadero ( `true` ) o falso ( `false` ). Si no se le asigna un valor
inicial, presentarán, por defecto, el valor `false`.

## Caracteres

El tipo primitivo de caracteres es `char` y sirve para almacenar caracteres Unicode.

En [este enlace](https://unicode-table.com/es/), se pueden consultar todos los caracteres Unicode disponibles:

Dichos caracteres deben ir entre comillas simples. Paralelamente, hay una serie de caracteres especiales que deben
declararse como se muestra en la siguiente tabla:

<table>
  <thead>
    <tr>
      <th>Caracter</th>
      <th>Significado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\b</td>
      <td>Retroceso</td>
    </tr>
    <tr>
      <td>\t</td>
      <td>Tabulador</td>
    </tr>
    <tr>
      <td> \n </td>
      <td>Salto de línea</td>
    </tr>
    <tr>
      <td> \r </td>
      <td>Retorno de carro</td>
    </tr>
    <tr>
      <td> \ " </td>
      <td>Comillas dobles</td>
    </tr>
    <tr>
      <td> \ ' </td>
      <td>Comillas simples</td>
    </tr>
    <tr>
      <td> \ \ </td>
      <td>Barra inclinada</td>
    </tr>
  </tbody>
</table>

## Tamaño y rango de datos almacenados en tipos primitivos

En la siguiente tabla, se muestran los tipos de datos primitivos, el dato que almacenan, su tamaño (es decir, la memoria RAM que ocupan) y el rango de valores que pueden almacenar.

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Dato almacenado</th>
      <th>Tamaño</th>
      <th colspan="2">Rango (desde - hasta)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>byte</td>
      <td>Entero corto</td>
      <td>8 bits</td>
      <td>-128</td>
      <td>127</td>
    </tr>
    <tr>
      <td>short</td>
      <td>Entero</td>
      <td>16 bits</td>
      <td>-32768</td>
      <td>32767</td>
    </tr>
    <tr>
      <td>int</td>
      <td>Entero</td>
      <td>32 bits</td>
      <td>-2³¹</td>
      <td>2³¹ -1</td>
    </tr>
    <tr>
      <td>long</td>
      <td>Entero corto</td>
      <td>64 bits</td>
      <td>-2⁶³</td>
      <td>2⁶³ -1</td>
    </tr>
    <tr>
      <td>float</td>
      <td>Decimales</td>
      <td>32 bits</td>
      <td>-10³²</td>
      <td>10³²</td>
    </tr>
    <tr>
      <td>double</td>
      <td>Decimales</td>
      <td>64 bits</td>
      <td>-10³⁰⁰</td>
      <td>10³⁰⁰</td>
    </tr>
    <tr>
      <td>boolean</td>
      <td>Booleanos</td>
      <td>1 bit</td>
      <td colspan="2">true or false</td>
    </tr>
    <tr>
      <td>char</td>
      <td>Carácter</td>
      <td>16 bits</td>
      <td colspan="2">Cualquier carácter Unicode entre comillas</td>
    </tr>
  </tbody>
</table>

## Lenguaje tipificado

Java es un lenguaje muy tipificado, esto es, se trata de un lenguaje muy estricto a la hora de utilizar tipos de datos, motivo por el que las variables de datos distintos son incompatibles. Esto no ocurre en otros lenguajes de programación como C.  
**Setrata, por tanto de una característica que dota a este lenguaje de una mayor seguridad y robustez**.

Cuando un dato ocupa más espacio del que se le ha asignado, puede producirse un desbordamiento en memoria; así, puede ocurrir que, al necesitar más espacio, sobrescriba otro dato ya existente. Por suerte, al tratarse de un lenguaje altamente tipificado, Java no permite el desbordamiento de memoria. Además, si intentamos asignar un valor fuera de rango a una variable, Java nos devolverá un error de compilación, lo que no ocurre en todos los lenguajes.

---

# Declaración y asignación de variables y constantes

## Declaración

Al escribir un programa, siempre debemos «declarar la variable o la constante», es decir, indicar su identificador, así como el tipo al que pertenece, antes de utilizarlas. Una **variable** puede declararse de la siguiente forma (en pseudocódigo):

```java
  tipo identificador;
```

Donde **«tipo»** se refiere al tipo de datos que almacenará la variable —`int` (entero), `char` (carácter), `boolean` (booleano)...
— mientras que **«identificador»** es el nombre asignado a esta.

**Ejemplos de declaración de variables:**

```java
package unidad2;
public class EjemplosDeclaracionVariables {
  public static void main(String[] args) {
    int num;
    char nom1, nom2;
    boolean test;
  }
}
```

Como podemos observar en el ejemplo anterior, una variable se puede declarar sola, pero también podemos declarar dosvariables del mismo tipo siempre que se encuentren separadas por comas. Además, podemos ver la declaración de una variable tipo `boolean` que ya presenta, por defecto, el valor `false` .

Una **constante** se declara del mismo modo, pero añadiendo, además, la palabra reservada final al inicio (lo que implica que a esa variable solo se le puede asignar un valor una única vez y que este tampoco podrá ser modificado), quedando de este modo (psudocódigo):

`final tipo identificador;`

**Ejemplos de declaración de constantes:**

```java
package unidad2;
public class EjemplosDeclaracionConstantes {
  public static void main(String[] args) {
    // TODO Auto-generated method stub
    final int NUM;
    final char NOM1, NOM2;
  }
}
```

## Asignación

A las variables y constantes declaradas, se les pueden asignar valores. Para ello, se utiliza el **operador de asignación `=`**.  
Cuando asignamos un valor a una variable, esta se inicializa, de manera que iniciar una variable equivale a asignarle un valor. Estos valores podrán asignarse en el momento de la declaración de la variable o posteriormente, en otra línea de código. Además, se pueden asignar valores a variables y constantes del mismo tipo en una misma línea.

**Ejemplos de asignación de variables y constantes:**

```java
public class EjemplosAsignacion {
  public static void main(String[] args) {
    // TODO Auto-generated method stub
    int dias = 30;
    int minutos = 60, horas = 24;
    final double GRAVEDADTIERRA = 9.807;
    final int AÑO = 365;
  }
}
```
