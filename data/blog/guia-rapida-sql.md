---
title: 'Guía de Referencia Rápida de SQL'
date: '2025-04-09'
tags: ['sql', 'guia', 'referencia rapida', 'comandos sql', 'base de datos', 'programación', 'consultas']
draft: false
summary: 'Esta guía proporciona un resumen conciso de los comandos y conceptos esenciales de SQL, ideal para entrevistas y uso diario.'
layout: PostSimple
---

## Tabla de Contenido

1.  [**Consultando Tablas con SELECT**](#1-consultando-tablas-con-select)
2.  [**Agregación y Agrupamiento**](#2-agregación-y-agrupamiento)
3.  [**Funciones de Ventana**](#3-funciones-de-ventana)
4.  [**Filtrado de Salida con WHERE**](#4-filtrado-de-salida-con-where)
5.  [**Combinación de Múltiples Tablas con JOINS**](#5-combinación-de-múltiples-tablas-con-joins)
6.  [**Subconsultas**](#6-subconsultas)
7.  [**Expresiones de Tabla Comunes (CTEs)**](#7-expresiones-de-tabla-comunes-ctes)
8.  [**Operaciones de Conjuntos**](#8-operaciones-de-conjuntos)
9.  [**Otras Comandos SQL**](#9-otros-comandos-sql)

---

Esta guía proporciona un resumen conciso de los comandos y conceptos esenciales de SQL, ideal para entrevistas y uso diario.

## 1. Consultando Tablas con SELECT

* **Seleccionar todas las columnas:**
    ```sql
    SELECT * FROM nombre_tabla;
    ```
* **Seleccionar columnas específicas:**
    ```sql
    SELECT columna1, columna2 FROM nombre_tabla;
    ```
* **Usar alias para renombrar columnas:**
    ```sql
    SELECT columna1 AS alias_columna1, columna2 AS alias_columna2 FROM nombre_tabla;
    ```
* **Ordenar los resultados:**
    * **Orden ascendente (por defecto):**
        ```sql
        SELECT columna1 FROM nombre_tabla ORDER BY columna1;
        ```
    * **Orden descendente:**
        ```sql
        SELECT columna1 FROM nombre_tabla ORDER BY columna1 DESC;
        ```

## 2. Agregación y Agrupamiento

* **GROUP BY:** Agrupa filas con el mismo valor en las columnas especificadas y luego calcula resúmenes (agregados) para cada grupo de valores.
* **Funciones de agregación comunes:**
    * `COUNT()`: Cuenta el número de filas.
    * `AVG()`: Calcula el promedio de una columna numérica.
    * `MAX()`: Encuentra el valor máximo de una columna.
    * `MIN()`: Encuentra el valor mínimo de una columna.
    * `SUM()`: Calcula la suma de una columna numérica.

## 3. Funciones de Ventana

* Las funciones de ventana calculan su resultado basándose en un marco de ventana deslizante, un conjunto de filas que de alguna manera se relacionan con la fila actual.
* **Cláusulas comunes:**
    * `PARTITION BY`: Divide las filas en múltiples grupos, llamados particiones, a los que se aplica la función de ventana.
    * `ORDER BY`: Especifica el orden de las filas en cada partición a la que se aplica la función de ventana.
* **Ejemplos de funciones de ventana:**
    * `RANK()`: Asigna rangos a las filas según los valores de la columna especificada.
    * `LAG()`: Accede a los datos de una fila anterior en el mismo conjunto de resultados sin necesidad de una autocombinación.
        ```sql
        SELECT columna1,
               LAG(columna1, 1, 0) OVER (PARTITION BY particion_columna ORDER BY orden_columna) AS columna1_anterior
        FROM nombre_tabla;
        ```

## 4. Filtrado de Salida con WHERE

* **Operadores de comparación:** `=`, `>`, `<`, `>=`, `<=`, `<>`
    * Ejemplo:
        ```sql
        SELECT * FROM customers WHERE age > 55;
        ```
* **Operadores lógicos:** `AND`, `OR`, `NOT`
    * Ejemplo:
        ```sql
        SELECT * FROM customers WHERE country = 'USA' OR country = 'Canada';
        ```
* **Filtrado de texto con LIKE:**
    * `%`: Comodín para cualquier secuencia de caracteres.
    * `_`: Comodín para un solo carácter.
    * Ejemplo:
        ```sql
        SELECT * FROM customers WHERE city LIKE 'New%';
        ```
* **BETWEEN e IN:**
    * Ejemplo:
        ```sql
        SELECT status FROM orders WHERE cost BETWEEN 100 AND 200;
        ```
    * Ejemplo:
        ```sql
        SELECT name FROM customers WHERE country IN ('USA', 'Canada');
        ```
* **NOT y NULLS:**
    * Ejemplo:
        ```sql
        SELECT * FROM customers WHERE age IS NOT NULL;
        ```

## 5. Combinación de Múltiples Tablas con JOINS

* **INNER JOIN:** Devuelve las filas que tienen valores coincidentes en ambas tablas.
    ```sql
    SELECT columna1, columna2
    FROM tabla1
    INNER JOIN tabla2 ON tabla1.columna_clave = tabla2.columna_clave;
    ```
* **LEFT JOIN:** Devuelve todas las filas de la tabla izquierda con las filas correspondientes de la tabla derecha. Si no hay coincidencia, se devuelven NULLs para la tabla derecha.
    ```sql
    SELECT columna1, columna2
    FROM tabla1
    LEFT JOIN tabla2 ON tabla1.columna_clave = tabla2.columna_clave;
    ```
* **RIGHT JOIN:** Devuelve todas las filas de la tabla derecha con las filas correspondientes de la tabla izquierda. Si no hay coincidencia, se devuelven NULLs para la tabla izquierda.
    ```sql
    SELECT columna1, columna2
    FROM tabla1
    RIGHT JOIN tabla2 ON tabla1.columna_clave = tabla2.columna_clave;
    ```
* **FULL JOIN:** Devuelve todas las filas de ambas tablas. Si no hay coincidencia, se devuelven NULLs.
    ```sql
    SELECT columna1, columna2
    FROM tabla1
    FULL OUTER JOIN tabla2 ON tabla1.columna_clave = tabla2.columna_clave;
    ```
* **CROSS JOIN:** Devuelve todas las combinaciones posibles de filas de ambas tablas. ¡No tiene condición de join!
    ```sql
    SELECT columna1, columna2
    FROM tabla1
    CROSS JOIN tabla2;
    ```
* **SELF JOIN:** Se utiliza para unir una tabla consigo misma para comparar filas dentro de la misma tabla.
    ```sql
    SELECT t1.columna1, t2.columna2
    FROM tabla1 AS t1, tabla1 AS t2
    WHERE condicion;
    ```

## 6. Subconsultas

* Una subconsulta es una consulta que está anidada dentro de otra consulta o dentro de otra subconsulta.
* **Subconsultas de un solo valor:** Devuelven exactamente una columna y exactamente una fila.
    * Ejemplo:
        ```sql
        SELECT *
        FROM orders
        WHERE cost > (SELECT AVG(cost) FROM orders);
        ```
* **Subconsultas de múltiples valores:** Pueden devolver múltiples columnas o múltiples filas.
    * Ejemplo:
        ```sql
        SELECT *
        FROM orders
        WHERE cus_id IN (SELECT cus_id FROM customers WHERE country = 'USA');
        ```

## 7. Expresiones de Tabla Comunes (CTEs)

* Las CTEs son conjuntos de resultados temporales a los que puede hacer referencia dentro de una consulta.
* Las CTEs mejoran la legibilidad de las consultas y se utilizan a menudo para simplificar consultas complejas dividiéndolas en partes más pequeñas y manejables.
    ```sql
    WITH cte_nombre AS (
      SELECT columna1, columna2
      FROM tabla
      WHERE condicion
    )
    SELECT *
    FROM cte_nombre
    WHERE otra_condicion;
    ```

## 8. Operaciones de Conjuntos

* Las operaciones de conjuntos se utilizan para combinar los resultados de dos o más consultas/tablas en un único resultado.
* **UNION:** Combina los resultados y elimina los duplicados.
    ```sql
    SELECT columna1 FROM tabla1
    UNION
    SELECT columna1 FROM tabla2;
    ```
* **UNION ALL:** No elimina las filas duplicadas.
    ```sql
    SELECT columna1 FROM tabla1
    UNION ALL
    SELECT columna1 FROM tabla2;
    ```

## 9. Otros Comandos SQL

* `LENGTH()`: Devuelve la longitud de la cadena proporcionada.
* `CAST()`: Convierte una expresión en el tipo de datos específico.
* `NOW()`: Devuelve la fecha y hora actuales.
* `CEILING()`: Redondea hacia arriba al entero más cercano.
* `FLOOR()`: Redondea hacia abajo al entero más cercano.
* `TRIM()`: Elimina los espacios de uno o ambos lados de una cadena.
* `CONCAT()`: Combina múltiples cadenas.
* `COALESCE()`: Devuelve el primer valor no NULL.
* **CASE:** Permite realizar diferentes acciones según diferentes condiciones.
    ```sql
    SELECT columna1,
           CASE
               WHEN condicion1 THEN resultado1
               WHEN condicion2 THEN resultado2
               ELSE resultado_por_defecto
           END AS nueva_columna
    FROM tabla;
    ```
