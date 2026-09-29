---
layout: default
title: Lección 7 - Bucles
order: 7
---

# Lección 7
## Bucles

La repetición de comandos es muy recurrente en la programación, y para evitar escribir múltiples veces el mismo código, existen los bucles, que repiten dicha instrucción según lo dicte una condición.

### `while`

Un bucle `while` repite sus comandos mientras una condición sea verdadera. Tiene una estructura igual al condicional `if`:

```cpp
while(condicion){
    accion1();
    condicion = false;
}
```

La condición que evalúa generalmente tiene la posibilidad de cambiar mientras el bucle se repite, ya que si no cambia se repetirá indefinidamente. Si la condición es falsa desde un inicio, el bucle no comenzará.

Un ejemplo de programa que puede hacerse con un bucle `while`:

```cpp
#include <iostream>
using namespace std;
int main(){
    bool adolescente = true;
    int edad = 13;
    while(adolescente){
        cout << "sos adolescente" << endl;
        edad++;
        if(edad >= 18){
            cout << "te toca sacar la INE flojo flojo flojo flojo" << endl;
            adolescente=false;
        }
    }
}
```

Para repetir mientras algo no sea verdadero, se agrega un signo de exclamación, por ejemplo: `while(!adolescente)`.

### `do while`

El bucle `do while` es similar a un `while` ordinario. Su única diferencia es que primero ejecuta las instrucciones y luego evalúa si la condición se sigue cumpliendo.

```cpp
do{
    accion1();
}while(condicion);
```

Este bucle termina con un `;` como una instrucción ordinaria.

### `for`

Un bucle `for` repite las instrucciones aplicando un contador:

```cpp
for(int i = 0; i < 10; i++){}
```

Primero se declara un contador de tipo entero, que por lo general se llama `i` y comienza en 0. Después se le da un límite con una condición (en este caso, `i` menor a 10) y se indica cuánto aumenta el contador en cada repetición, por ejemplo `i++` para aumentar en 1.

En otras palabras, comienza a contar desde 0 hasta 10, contando de 1 en 1. Cada uno de estos valores se puede cambiar según lo que se quiera hacer: comenzar desde otro número, aumentar en otra cantidad o usar un límite distinto.

Las variables declaradas en el contador, la condición y la modificación no pueden utilizarse fuera del bucle. Sí puedes usar dentro del bucle las variables declaradas fuera de él.

Un ejemplo de código que puede crearse con un bucle `for` es mostrar los números del 1 al 100:

```cpp
#include <iostream>
using namespace std;
int main(){
    for(int i=1;i<=100; i++){
        cout << i << endl;
    }
}
```

O decirle 10 veces hola a alguien:

```cpp
#include <iostream>
using namespace std;
int main(){
    for(int i=1;i<=10; i++){
        cout << "hola" << endl;
    }
}
```

### `continue` y `break`

Los comandos `continue` y `break` sirven para saltar una iteración en un ciclo y para salir de él, respectivamente.

Con el siguiente bucle, la salida incluye los números del 1 al 5, pero omite el 3 por la orden `continue`:

```cpp
#include <iostream>
using namespace std;
int main(){
    for(int i = 1; i <= 5; i++){
        if(i == 3) continue;
        cout << i << " ";
    }
}
```

![Ejemplo de continue]({{ '/imgs/lec6/continue.png' | relative_url }})

Si reemplazamos `continue` con `break`, el bucle terminará antes de escribir el número 3:

```cpp
#include <iostream>
using namespace std;
int main(){
    for(int i = 1; i <= 5; i++){
        if(i == 3) break;
        cout << i << " ";
    }
}
```

![Ejemplo de break]({{ '/imgs/lec6/break.png' | relative_url }})

Esto funciona de la misma manera en bucles `while` y `do while`. El siguiente ejemplo abre un bucle `while` que se repetirá por siempre, pero da la opción de salir si escribimos `s` como valor de un `char`:

```cpp
#include <iostream>
using namespace std;
int main(){
    while(true){
        char salir;
        cout << "escribe 's' para salir: ";
        cin >> salir;
        if(salir == 's') break;
    }
}
```

![Salir de un while con break]({{ '/imgs/lec6/while_break.png' | relative_url }})

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/html/recursos/paginas-programacion.html' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/ciclo_mientras_no_cero)
- [Problema 2](https://omegaup.com/arena/problem/Mensaje-de-Amor)
- [Problema 3](https://omegaup.com/arena/problem/El-problema-3n1)
- [Problema 4](https://omegaup.com/arena/problem/La-secuencia-infinita)
