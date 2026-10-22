---
layout: default
title: Lección 8 - Bucles anidados
order: 8
---

# Lección 8
## Bucles anidados

Puedes ejecutar un bucle dentro de otro bucle, lo que significa una serie de “repeticiones que se repiten”. Observa el ejemplo:

```cpp
#include <iostream>
using namespace std;
int main(){
    int n = 10, m = 5;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            cout << "# ";
        }
        cout << '\n';
    }
}
```

Este es un algoritmo que utiliza un bucle anidado para escribir un rectángulo de caracteres `#`. El primer bucle separa `n` líneas con un carácter de salto de línea, y el segundo escribe los símbolos `#` con un espacio `m` veces; esto da la siguiente salida:

![Salida de bucles anidados]({{ '/imgs/lec8/sqr.png' | relative_url }})

Puedes anidar tres, cuatro, cinco o más bucles. Sin embargo, cada uno deberá tener un contador diferente (notando el diseño del código); por eso se usan convencionalmente las letras `i`, `j` y `k` para los bucles.

Los bucles `while` y `do while` también pueden ser anidados.

```cpp
#include <iostream>
using namespace std;
int main(){
    int n = 10, m = 5, o = 5;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            for(int k = 0; k < o; k++){
                cout << "# ";
            }
        }
        cout << '\n';
    }
    cout << '\n';
}
```

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/recursos/paginas-programacion' | relative_url }}).

- [Problema 1](https://www.omegaup.com/arena/problem/Escalera-de-asteriscos/)
- [Problema 2](https://omegaup.com/arena/problem/Mensaje-de-Amor)
- [Problema 3](https://omegaup.com/arena/problem/La-secuencia-infinita)
- [Problema 4](https://www.omegaup.com/arena/problem/COMI-Tak-Tak-Tree/)
- [Problema 5](https://www.omegaup.com/arena/problem/Suma-de-sumas/)
- [Problema 6](https://www.omegaup.com/arena/problem/Matrices-Simples/)
- [Problema 7](https://www.omegaup.com/arena/problem/Valles/)
- [RETO](https://omegaup.com/arena/problem/Suma-de-rangos/)


