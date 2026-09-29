---
layout: default
title: Lección 2 - Variables y constantes en C++
order: 2
---

# **Lección 2**
## **Variables y constantes**

### C++

Las siguientes lecciones tratarán sobre C++. Por ende, ha de notarse como importante una explicación con respecto a lo que es C++.

C++ es un lenguaje de programación de alto nivel y propósito general creado por el informático danés Bjarne Stroustrup. Se lanzó por primera vez en 1985 como una extensión del lenguaje de programación C, incorporando funcionalidades de programación orientada a objetos y ampliándose posteriormente de manera significativa con la inclusión de características de programación funcional.

Tal como se mencionó anteriormente, el enfoque de C++ es la eficiencia de ejecución y el manejo de la memoria. Por lo que tiene aplicaciones excelentes en prácticamente cualquier ámbito, como los motores de videojuegos (Unreal Engine para Fortnite y Final Fantasy VII Remake, RAGE para GTA V), sistemas operativos o en la industria automotriz y aeroespacial (NASA).

Este lenguaje presenta nuevas implementaciones cada 3 años a partir de 2011, entre las que se encuentra la Standard Library, una colección de funciones y clases desarrolladas a partir del lenguaje en sí mismo.

<img src="{{ '/imgs/lec2/bjarne.jpg' | relative_url }}" width="238px" height="208px" alt="Bjarne Stroustrup">
<p style="font-size: 12px; font-style: italic;">Bjarne Stroustrup</p>

### Variables y constantes

Dada una introducción a la historia de C++, continuemos ahora con el siguiente tema.

Previo a cualquier otro tema debemos abarcar variables y constantes. La utilidad de la programación reside en gran parte en su capacidad para guardar datos.

Para guardar datos por medio de la programación requerimos de la declaración de variables y constantes. Variable, por su nombre hace referencia a un valor que puede cambiar, constante lo opuesto, evidentemente.

En C++ las variables requieren de la especificación de un tipo de dato. No es posible colocar un número dentro de una caja que está orientada al guardado de palabras. Existen 5 tipos principales de datos en C++.

* **<span style="color:#323cab;">int</span>**: números enteros
* **<span style="color:#323cab;">float</span>**: números de punto flotante (decimales)
* **<span style="color:#c9a361">char</span>**: caracteres (letras, caracteres especiales, entre otros)
* **<span style="color:#2b6627;">string</span>**: cadenas de caracteres (palabras, palabras con números)
* **<span style="color:#323cab;">bool</span>**: valores booleanos (falso o verdadero)

Para declarar una variable en C++ es necesario colocar el tipo de dato, seguido de un nombre para la variable. El valor de la variable puede colocarse después antecedido por un signo de igualación “=”.

### **Estructura para declarar una variable**

Tipo de dato + nombre = valor;

### **Ejemplos:**

* **<span style="color:#323cab;">int</span>** edad = 17;
* **<span style="color:#323cab;">float</span>** estatura = 0.5;
* **<span style="color:#c9a361">char</span>** sexo = 'M';
* **<span style="color:#2b6627;">string</span>** nombre = "chinos";
* **<span style="color:#323cab;">bool</span>** adolescente = false;

* **<span style="color:#323cab;">int</span>** edad2;
* **<span style="color:#323cab;">float</span>** estatura2;
* **<span style="color:#c9a361">char</span>** sexo2;
* **<span style="color:#2b6627;">string</span>** nombre2;
* **<span style="color:#323cab;">bool</span>** adolescente2;

Como podrás notar, algunas variables tienen algunos caracteres específicos notando el valor asignado. Este formato debe seguirse ESTRICTAMENTE, pues si no C++ pensará que estás usando el tipo de dato incorrecto con respecto a la variable. Los números sólo llevan el número, char lleva comillas simples entre sí, string lleva comillas dobles, booleanos sólo es true o false.

Los nombres de las variables no pueden llevar números al inicio, caracteres especiales, entre otros.

En el segundo conjunto de ejemplos no asignamos un valor a las variables. Como se mencionó previamente, esto es posible pues podemos asignar el valor en otro momento, pedírselo al usuario, etcétera.

Existen más tipos de datos en C++ para diferentes usos, esto se debe a que int, por ejemplo, sólo puede guardar un número entre -2,147,483,648 y 2,147,483,648 y float sólo puede guardar un número decimal con 7 puntos de precisión. Para guardar números más grandes se usa long long y para guardar números decimales con el doble de precisión puede hacerse uso del tipo de dato double.

Por ahora quedémonos con los 5 tipos de datos mencionados anteriormente.

Para declarar constantes sólo faltaría agregar “const” antes del tipo de dato.

#### **Ejemplo:**

* <span style="color:#323cab;">const float</span> PI = 3.14;
* <span style="color:#323cab;">const float</span> eul = 2.71;

Los valores constantes se mantienen como fueron declarados, su valor no puede cambiar.