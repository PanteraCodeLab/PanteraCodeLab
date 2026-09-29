---
layout: default
title: Lección 6 - Condicionales
order: 6
---

# Lección 6
## Condicionales

Imagina que te encuentras programando un sistema que ordene a individuos por su grupo de edad. ¿Cómo lo harías?

Hasta ahora has aprendido a declarar variables y constantes, y manejar entrada y salida. Pero para que el código pueda tomar decisiones con base en estos, necesitas conocer los condicionales.

### Condicional `if`

Los condicionales `if` son estructuras que realizan una acción sólo si una condición es verdadera. Su estructura es la siguiente:

```cpp
if(condicion){
    accion1(); // considera accion como la instruccion que quieres que se cumpla
}
```

Dentro de los paréntesis se evalúa un valor o una condición, que puede ser de diferentes tipos:

- **Booleano:** Declara una variable `bool` y el condicional cumplirá una instrucción si esta es `true`.
- **Igualdades:** Para ver si una variable tiene un valor específico escribe `(variable == valor)`, donde valor puede ser un número, carácter, string u otra variable establecida. También puedes evaluar si es desigual con `(variable != valor)`.
- **Mayor, menor, etc.:** Puedes ver si un valor numérico es mayor, menor, mayor o igual, y menor o igual.

```cpp
if(variable < valor) {}
if(variable > valor) {}
if(variable <= valor) {}
if(variable >= valor) {}
```

Un ejemplo sería revisar si una persona con una edad dada es adolescente:

```cpp
#include <iostream>
using namespace std;
int main(){
    int edad;
    cin >> edad;
    if(edad >= 13){
        cout << "eres adolescente guao omaga guao" << endl;
    }
}
```

Este código es un cuanto erróneo, pues clasificará a una persona de 65 años como adolescente. Los condicionales también pueden seguir instrucciones diferentes si la condición es `false`:

```cpp
if(condicion){
    accion1();
}else{
    accion2();
}
```

Un ejemplo de aplicación sería:

```cpp
#include <iostream>
using namespace std;
int main(){
    string profesion;
    cin >> profesion;
    if(profesion=="maestro"){
        cout << "te pagaremos poco aunque te encuentres preparando a la sociedad del mañana" << endl;
    }else if(profesion=="investigador"){
        cout << "te pagaremos poco aunque tus descubrimientos sean la razón por la cual la mayor parte de los avances de la sociedad han sido posibles" << endl;
    }else{
        cout << "no estoy seguro que poner aquí" << endl;
    }
}
```

También existen los condicionales compuestos, que evalúan más de una condición a la vez con ayuda de los operadores lógicos “y” (`&&`) y “o” (`||`):

```cpp
if(condicion1 && condicion2) {} // se cumple si ambas son true
if(condicion1 || condicion2) {} // se cumple con un solo true
```

Mejoremos el código de los grupos de edad para no llamar erróneamente adolescente a una persona de 65 años:

```cpp
#include <iostream>
using namespace std;
int main(){
    int edad;
    cin >> edad;
    if(edad >= 13 && edad < 20){
        cout << "adolescente" << endl;
    }else if(edad >= 20 && edad < 65){
        cout << "adulto" << endl;
    }else if(edad >= 65 && edad < 130){
        cout << "abuelito" << endl;
    }else{
        cout << "no estoy seguro que poner aqui" << endl;
    }
}
```

Además, puedes anidar condicionales una dentro de otra, o usar `else if` para ir evaluando condiciones falsas hasta que una sea verdadera:

```cpp
// Condicional anidado
if(cond){
    if(cond_anidada){
        accion();
    }
}

// Condiciones else if
if(cond1){}
else if(cond2){}
else if(cond3){}
else {}
```

### Switches

Un `switch` es una estructura condicional que evalúa una variable entre un conjunto de posibles valores, similar a una cadena de `else if`, con la ventaja de ser fácil de escribir.

El `switch` funciona sólo para variables numéricas y `char`, ya que evalúa un único valor y no puede medir si es mayor o menor que algo. Observa el ejemplo:

```cpp
// Evaluar un valor numerico de tipo int
switch(num){
case 1: accion1(); break;
case 2: accion2(); break;
case 3: accion3(); break;
default: accion_def(); break;
}
```

La variable a evaluar va dentro de los paréntesis. Después del comando `case` va un posible valor, dos puntos y una instrucción a cumplir; termina con `break` para salir del `switch`. `default` sirve como instrucción en caso de que ningún caso se cumpla, y puedes dejarlo vacío si no necesitas código ahí.

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/html/recursos/paginas-programacion.html' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/Par-o-Impar)
- [Problema 2](https://omegaup.com/arena/problem/Ordenando-numeros/)
- [Problema 3](https://omegaup.com/arena/problem/Cuantos-dias-tiene-febrero)
- [Problema 4](https://omegaup.com/arena/problem/Tipos-de-Triangulos/)
- [Problema 5](https://omegaup.com/arena/problem/Una-serie-poco-interesante/)
- [Problema 6](https://omegaup.com/arena/problem/Calculos-condicionales)

**Nota:** Para resolver problemas relacionados con residuos de división, lee [esta página sobre el operador módulo](https://www.geeksforgeeks.org/cpp/modulo-operator-in-c-cpp-with-examples/).
