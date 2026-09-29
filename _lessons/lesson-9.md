---
layout: default
title: Lección 9 - Arreglos
order: 9
---

# Lección 9
## Arreglos

Si las variables son cajas, los arreglos son cajas de cajas. Los arreglos, dado un tamaño `N`, guardarán `N` elementos a los cuales podrás hacer referencia por medio de un índice, que va desde 0 hasta `N - 1`.

Por ejemplo, podemos tener un arreglo de cuatro galletas:

- Galleta de chispas: 0
- Galleta funfetti: 1
- Galleta doble chocolate: 2
- Galleta de Oreo: 3

En código, esto sería algo así:

```cpp
#include <iostream>
using namespace std;
int main(){
    string galletas[4]={"Galleta de chispas", "Galleta funfeti", "Galleta doble chocolate", "Galleta de oreo"};
}
```

Al inicio pusimos `string` para indicar que el tipo de dato a guardar en el arreglo es string. No podemos guardar strings en un arreglo de enteros. Seguido de esto, agregamos un tamaño entre corchetes. Un arreglo tiene un tamaño fijo: cuando su tamaño es declarado no podrá cambiar, aunque sus elementos sí pueden cambiar.

Después de colocar el tamaño entre corchetes, metimos los datos separados por comas y rodeados por comillas dobles debido a que son strings.

Para acceder a uno de los valores guardados en el arreglo:

```cpp
#include <iostream>
using namespace std;
int main(){
    string galletas[4]={"Galleta de chispas", "Galleta funfeti", "Galleta doble chocolate", "Galleta de oreo"};
    cout << galletas[0];
}
```

También podemos guardar un elemento de un arreglo en una variable:

```cpp
#include <iostream>
using namespace std;
int main(){
    string galletas[4]={"Galleta de chispas", "Galleta funfeti", "Galleta doble chocolate", "Galleta de oreo"};
    string posicion0 = galletas[0];
    cout << posicion0;
}
```

Con los arreglos también es posible dejar un tamaño declarado y luego colocar los elementos dentro:

```cpp
#include <iostream>
using namespace std;
int main(){
    int numeros[4];
    int numero;
    cin >> numero;
    numeros[0]=numero;
    cin >> numero;
    numeros[1]=numero;
    cin >> numero;
    numeros[2]=numero;
    cin >> numero;
    numeros[3]=numero;
    cout << numeros[0] << endl;
    cout << numeros[1] << endl;
    cout << numeros[2] << endl;
    cout << numeros[3] << endl;
}
```

Como podrás imaginar, esta tarea puede facilitarse haciendo uso de los bucles:

```cpp
#include <iostream>
using namespace std;
int main(){
    int numeros[4];
    for(int i=0;i<4; i++){
        cin >> numeros[i];
    }
    for(int i=0;i<4; i++){
        cout << numeros[i] << endl;
    }
}
```

La salida de este código sería igual a la anterior. Los arreglos pueden tener múltiples dimensiones; es decir, puedes tener un arreglo de arreglos, un arreglo de arreglo de arreglos, etc. Aquí un arreglo bidimensional:

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[4][4]={ {5,5,5,5}, {4,4,4,4}, {3,3,3,3}, {2,2,2,2} };
    // Recorremos todas las filas y columnas del arreglo
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++) cout << arr[i][j] << '\n';
    }
}
```

También podemos introducir los elementos al arreglo:

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[4][4];
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++){
            cin >> arr[i][j];
        }
    }
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++){
            cout << arr[i][j] << '\n';
        }
    }
}
```

Como son variables guardadas dentro de una caja de variables, podemos hacer comparaciones:

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[4]={1,2,5,4};
    if(arr[0]<arr[2]){
        cout << "elemento 0 es menor que elemento 2" << endl;
    }
}
```

También podemos revisar si los elementos son pares:

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[4]={1,2,5,4};
    for(int i=0;i<4;i++){
        if(arr[i]%2==0){
            cout << "elemento " << i << " es par" << endl;
        }else{
            cout << "elemento " << i << " no es par" << endl;
        }
    }
}
```

También podemos reasignar elementos del arreglo.

### Problemas

En caso de dudas revisa las páginas encontradas en [recursos]({{ '/html/recursos/paginas-programacion.html' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/Reverso)
