---
layout: default
title: Lección 10 - Arreglos dinámicos
order: 10
---

# Lección 10
## Arreglos dinámicos

Los arreglos dinámicos son arreglos pero dinámicos... jeje. Como podrás recordar, un arreglo normal tiene un tamaño fijo. En el caso del arreglo dinámico se cuenta con un tamaño variable o dinámico. Es posible seguir insertando elementos aunque no quepan dentro de dicho “tamaño”.

Para poder usar arreglos necesitamos incluir otra librería, es decir, agregar `#include` y el nombre de la librería (`vector`) entre comparadores. Esto se vería así:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    // De esta manera declaramos un vector
    vector<int> v;
}
```

Para declarar un vector necesitamos colocar `vector` seguido de un tipo de dato entre comparadores y un nombre. Sólo podemos tener un tipo de dato en el vector.

También podemos crear un vector con un tamaño inicial:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> v(3);
}
```

También podemos poner valores dentro del vector desde un inicio:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> v={1,2,3};
}
```

Para meter valores a un vector, en caso de que no hayamos declarado un tamaño inicial o que ya existan valores dentro del vector, necesitamos usar la función `push_back()`:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> v;
    int n;
    cin >> n;
    v.push_back(n);
}
```

En caso de tener un tamaño inicialmente definido o ya contar con elementos dentro del vector, podríamos hacerlo de la siguiente manera:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> v(5);
    for(int i=0;i<5;i++){
        cin >> v[i];
    }
}
```

Así como es posible crear arreglos de arreglos, podemos crear vectores de vectores:

```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<vector<int>> v(5, vector<int>);
    for(int i=0;i<n;i++){
        for(int j=0;j<n; j++){
            int n;
            cin >> n;
            v[i].push_back(n);
        }
    }
}
```

Aquí una cosa que probablemente no sabías... ¡el string es un arreglo dinámico! Probablemente no te emociones tanto como yo dado que aprendas esto, notando claro, que te emociones siquiera. El vector es un arreglo dinámico de caracteres.

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/html/recursos/paginas-programacion.html' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/Ordenando-las-letras-de-la-linea)
