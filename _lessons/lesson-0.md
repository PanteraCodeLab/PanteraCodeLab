---
layout: default
title: Lección 0 - Lógica de la programación
order: 0
---

# Lección 0
## Programación

La programación consiste en organizar una secuencia de pasos ordenados a seguir para hacer cierta cosa. En el contexto de la informática, implica escribir instrucciones para que una computadora las ejecute una tras otra.

### Algoritmos y lógica

Algoritmo se refiere a “conjunto ordenado y finito de operaciones que permite hallar la solución de un problema” (Real Academia Española, s.f., definición 1). Lógica se refiere a “Ciencia que expone las leyes, modos y formas de las proposiciones en relación con su verdad o falsedad” (Real Academia Española, s.f., definición 6). En la programación creamos algoritmos para dar solución a problemas. Los algoritmos siguen una lógica para funcionar.

### Características de la lógica de la programación

- **Pensamiento ordenado:** Los algoritmos se escriben y ejecutan en una secuencia ordenada.
- **Base universal:** Resolución de problemas: está hecha para facilitar la capacidad de la computadora de ejecutar acciones.
- **Resolución de problemas:** Está hecha para facilitar la capacidad de la computadora de ejecutar acciones.

La programación se rige principalmente por el uso de estructuras de datos, condicionales y repeticiones.

### Diagramas de flujo

Un diagrama de flujo es una representación gráfica de un algoritmo o proceso, compuesto de recuadros que tienen una acción definida.

El diagrama de flujo se sigue a través de las flechas, llamadas líneas de flujo. Estas separan una acción tras otra y se pueden desviar o regresar a acciones anteriores, siempre y cuando se siga la dirección en la que apuntan.

![Diagrama de flujo]({{ '/imgs/lec0/diagrama.png' | relative_url }})

### Elementos del diagrama de flujo

![Elementos del diagrama de flujo]({{ '/imgs/lec0/elementos_diagrama.png' | relative_url }})

### Manejo de datos

La programación se desarrolló con el propósito principal de manejar valores y datos automáticamente, para omitir procesos manuales.

Alan Turing, padre de la informática, sentó las bases para la primera computadora programable. Si bien no la creó, su trabajo para descifrar Enigma, un método de encriptación de mensajes utilizado por los alemanes en la Segunda Guerra Mundial, siguió ese propósito de la programación.

En su momento, el trabajo de los criptógrafos se hacía enteramente a lápiz y papel, hasta que Turing inventó una máquina gigantesca que ayudó a romper la encriptación; los datos eran los mensajes de los alemanes.

![Alan Turing]({{ '/imgs/lec0/turing.jpg' | relative_url }})

*Alan Turing*

### Condiciones

Un recurso fundamental en la programación es el uso de condiciones y compuertas lógicas. Esto es, que una instrucción se ejecute cuando algo se cumpla y combinar condiciones de diferente manera.

Las condiciones realizan una instrucción si son verdaderas, y pueden omitirse o realizar algo diferente si son falsas.

![Condiciones]({{ '/imgs/lec0/condiciones.jpg' | relative_url }})

### Compuertas lógicas

Además de analizar condiciones, estas se pueden comparar una con otra a través de operadores lógicos, como los siguientes:

- **OR:** Si una de las dos se cumple, `true`.
- **AND:** Si ambas se cumplen, `true`.
- **NOT:** Opuesto (`true = false`, `false = true`).
- **NOR:** Si una de las dos se cumple, `false`.
- **NAND:** Si ambas se cumplen, `false`.
- **XOR:** Si son iguales (`true & true`, `false & false`), `false`.
- **XNOR:** Si son iguales (`true & true`, `false & false`), `true`.

Todo esto se da a entender mejor en las llamadas tablas de verdad:

![Tabla de verdad de compuertas]({{ '/imgs/lec0/tabla_verdad_compuertas.png' | relative_url }})

**Notemos también la manera en la cual se representan gráficamente.**

Prácticamente toda la programación se basa en cosas que se cumplen o no, ya que, a nivel de hardware, un cable o un transistor de computadora solo puede estar encendido o apagado; es decir, `true` o `false`.

### Repeticiones

Otro aspecto importante de los algoritmos es que, si realizan la misma acción múltiples veces, es conveniente programar un ciclo o repetición para omitir escribir las instrucciones muchísimas veces. Los ciclos se rigen por condiciones: se repiten mientras algo se cumpla o una cantidad determinada de veces.

Se puede usar una condición que evalúe si es verdadera o falsa, o utilizar un contador para hacerlo cierta cantidad de veces. Esto se llama bucle `while` y bucle `for`, respectivamente.

![Bucle while]({{ '/imgs/lec0/while.png' | relative_url }})
![Bucle for]({{ '/imgs/lec0/for.png' | relative_url }})

*Representación visual de los bucles while y for, respectivamente.*

### Problemas con RAPTOR (diagramas de flujo)

Vamos a resolver un par de ejercicios usando los diagramas de RAPTOR para familiarizarnos con los diagramas y el manejo de datos. La entrada y salida de datos del usuario es fundamental para resolverlos; esto es, que quien ejecuta un código de RAPTOR pueda introducir valores y recibir otros como respuesta.

#### Ejercicio 1: Dinero suficiente

Imagina que vas al supermercado a comprar un producto que tiene cierto costo y tú llevas una cantidad de dinero para pagarlo. Escribe un código que use un condicional para determinar si te alcanza el dinero para comprarlo y mostrar tu cambio, o si no te alcanza y la cantidad que te falta.

Para determinar el costo y el dinero que llevas, declara variables que contengan uno de los valores cada una y pídelos con una entrada.

**Solución:**
