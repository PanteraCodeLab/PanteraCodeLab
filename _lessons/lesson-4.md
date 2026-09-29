---
layout: default
title: Lección 4 - Entrada y salida en C++
order: 4
---

# Lección 4
## Entrada y salida

La interacción entre el usuario y la máquina es fundamental para cualquier aplicación. En C++, se logra a través de los comandos `cin` y `cout`, definidos en la biblioteca `<iostream>`. `cin` recibe datos y `cout` muestra datos.

Para mostrar texto, escribe `cout` seguido de los operadores `<<` y el valor que quieres mostrar:

```cpp
#include <iostream>
using namespace std;

int main(){
    cout << "Hola Mundo!" << '\n';
}
```

Usamos comillas dobles para encerrar “Hola Mundo” porque es un string. Sin las comillas, C++ pensaría que hacemos referencia a dos variables: `Hola` y `Mundo`.

En CodeBlocks, copia y pega este código, compílalo y ejecútalo. La apariencia de la terminal puede variar entre sistemas operativos, pero la salida debería ser la misma.

![Salida de Hola Mundo]({{ '/imgs/lec4/out.png' | relative_url }})

La primera línea muestra “Hola Mundo”, el mensaje indicado en el código. El mensaje `process returned 0 (0x0)` significa que la ejecución fue correcta y que `return 0;` terminó el programa exitosamente. `Execution time` indica cuánto tiempo estuvo ejecutándose.

Para crear un mensaje más largo, por ejemplo, saludar a alguien, podemos combinar texto y una variable:

```cpp
#include <iostream>
using namespace std;

int main(){
    string nombre = "chinos";
    cout << "hola" << nombre << '\n';
}
```

Al ejecutar el código, “hola” y “chinos” aparecen juntos porque no especificamos un espacio.

![Salida sin espacio]({{ '/imgs/lec4/out2.png' | relative_url }})

Las instrucciones deben ser precisas; la computadora no puede predecir el formato deseado. Para agregar el espacio, podemos incluirlo en el string:

```cpp
#include <iostream>
using namespace std;

int main(){
    string nombre = "chinos";
    cout << "hola " << nombre << '\n';
}
```

También podemos escribir el espacio por separado:

```cpp
cout << "hola" << " " << nombre << '\n';
```

En el primer ejemplo, el espacio se escribe después de hola dentro del string. En el segundo, se agrega como otro valor. Ambos producen el mismo resultado:

![Salida con espacio]({{ '/imgs/lec4/out4.png' | relative_url }})

### Entrada con `cin`

Para recibir datos usamos `cin` y los operadores `>>`:

```cpp
#include <iostream>
using namespace std;

int main(){
    string nombre;
    cin >> nombre;
}
```

`nombre` no tiene un valor asignado; se lo pediremos al usuario con `cin`. Una variable que ya tiene un valor también puede recibir otro mediante `cin`.

Al ejecutar este programa, aparecerá un cursor para introducir el valor de `nombre`:

![Cursor de entrada]({{ '/imgs/lec4/cursor.png' | relative_url }})

Por ejemplo, aquí se introdujo el valor “sebas”. Todavía no aparece una salida porque no la hemos indicado.

![Valor introducido]({{ '/imgs/lec4/out5.png' | relative_url }})

Podemos mostrar un saludo con el valor recibido:

```cpp
#include <iostream>
using namespace std;

int main(){
    string nombre;
    cin >> nombre;
    cout << "hola " << nombre << '\n';
}
```

![Salida de entrada y saludo]({{ '/imgs/lec4/out7.png' | relative_url }})

### Problemas

Registra una cuenta en [OmegaUp](https://omegaup.com) para que su juez en línea evalúe tus soluciones. En caso de dudas, revisa [las páginas de programación]({{ '/recursos/paginas-programacion/' | relative_url }}).

- [Problema 1](https://omegaup.com/arena/problem/Hola-Mundo-c/)
- [Problema 2](https://omegaup.com/arena/problem/Tres-Numeros-Al-Reves/)