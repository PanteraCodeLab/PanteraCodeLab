---
layout: default
title: Lección 11 - Punteros
order: 11
---

# Lección 11
## Punteros

Las variables de C++ son más que sólo su valor: se declaran con un identificador y tienen una dirección en la memoria. Al usar una variable, estás accediendo a la dirección donde su valor se almacena.

Del mismo modo, las direcciones de memoria se pueden guardar en punteros. Los punteros guardan la dirección de memoria de una variable para dirigirse a ella cuando se use. Observa el diagrama:

![Diagrama de punteros]({{ '/imgs/lec11/ptr.png' | relative_url }})

Si intentas ver qué hay en un puntero usando `cout`, verás la dirección de memoria que este guarda. Observa las diferentes salidas:

```cpp
#include <iostream>
using namespace std;
int main(){
    int n = 10;
    int* ptr = &n;
    cout << n << '\n';
    cout << ptr << '\n';
    cout << *ptr << '\n';
    return 0;
}
```

![Salidas de punteros]({{ '/imgs/lec11/loc.png' | relative_url }})

Primero se muestra el valor de `n`, que es 10; después, `ptr` muestra dónde se almacena `n`; y finalmente, `*ptr` apunta al valor alojado en la dirección, que vuelve a ser 10. Esto se llama desreferenciar.

- Para punteros: `*`
- Para direcciones: `&`

También es importante diferenciar la dirección que guarda un puntero de la dirección propia del puntero:

![Dirección de un puntero]({{ '/imgs/lec11/ptr2.png' | relative_url }})

Los punteros tienen su dirección propia, por lo tanto, otros punteros pueden apuntar hacia ellos; estos se llaman punteros dobles.

Los punteros pueden ser declarados sin ninguna dirección a la cual apuntar, pero esto lleva a comportamiento indeterminado o errores de segmentación. Como alternativa, se pueden declarar punteros vacíos con el valor `nullptr`:

```cpp
#include <iostream>
using namespace std;
int main(){
    // Puntero sin valor, indeterminado
    int* ptr1;
    // Puntero nulo, valor 0
    int* ptr2 = nullptr;
    return 0;
}
```

Los punteros estrictamente tienen un tipo de dato al cual apuntar, a menos que se usen punteros `void`.

### Punteros `void`

Los punteros `void` pueden almacenar la dirección de cualquier tipo de dato. Para desreferenciar dicho puntero, primero hay que convertirlo usando `static_cast<>`:

```cpp
#include <iostream>
#include <string>
using namespace std;
int main(){
    int n = 10;
    string s = "algoritmo";
    void* ptr = &n;
    // Notar el cambio en el tipo de dato
    ptr = &s;
    cout << *(static_cast<string*>(ptr));
    return 0;
}
```
