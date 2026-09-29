---
layout: default
title: Lección 5 - Operaciones aritméticas
order: 5
---

# Lección 5
## Operaciones aritméticas

Para hacer sumas, restas, multiplicaciones, etcétera, en C++ sólo requerimos del uso de los operadores necesarios. Algunos de estos cambian con respecto a lo convencional:

- `+`: suma
- `-`: resta
- `*`: multiplicación
- `/`: división
- `%`: módulo (residuo de la división)
- `^`: XOR (**no es potencia**)

Este es un ejemplo de cómo podríamos lograr la suma de dos números cuyos valores ya han sido declarados en variables:

```cpp
#include <iostream>
using namespace std;
int main(){
    int a=2, b=2;
    cout << a+b << '\n';
}
```

En este caso, la salida del código sería:

![Salida de suma]({{ '/imgs/lec5/out1.png' | relative_url }})

La entrada y salida también puede lograrse al tratar con números. Digamos que queremos hacer la suma de dos números `a` y `b` que le pedimos al usuario:

```cpp
#include <iostream>
using namespace std;
int main(){
    int a,b;
    cin >> a >> b;
    cout << a+b << '\n';
}
```

No podemos introducir datos que no sean números a esta variable, pues no es el tipo de dato correcto; en caso de hacerlo, veremos el siguiente error:

![Error de entrada]({{ '/imgs/lec5/out2.png' | relative_url }})

Para cualquier otra operación sólo es cuestión de usar otro operador. Es necesario seguir la jerarquía de operaciones para conseguir un resultado apropiado.

Por ejemplo, calculemos el área de un cuadrado:

```cpp
#include <iostream>
using namespace std;
int main(){
    int l;
    cin >> l;
    cout << l*l << '\n';
}
```

O el área de un triángulo:

```cpp
#include <iostream>
using namespace std;
int main(){
    int b, h;
    cin >> b >> h;
    cout << (b*h)/2 << '\n';
}
```

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/html/recursos/paginas-programacion.html' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/suma_simple/)
- [Problema 2](https://omegaup.com/arena/problem/0-Resta-basica/)
- [Problema 3](https://www.omegaup.com/arena/problem/Area_Triangulo/)
- [Problema 4](https://www.omegaup.com/arena/problem/Calculos-mentales-competitivos/)
- [Problema 5 (extra)](https://omegaup.com/arena/problem/Repartiendo-cachorros/)

**Nota:** Para resolver problemas relacionados con residuos de división, lee [esta página sobre el operador módulo](https://www.geeksforgeeks.org/cpp/modulo-operator-in-c-cpp-with-examples/).
