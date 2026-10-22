---
layout: default
title: Lección 12 - Funciones
order: 12
---

# Lección 12
## Funciones

Hasta este punto, hemos trabajado todo nuestro código dentro de la función `main`, dado que C++ la toma como punto de inicio. Sin embargo, podemos implementar nuevas funciones fuera de este alcance y llamarlas para ejecutar, pasando datos llamados parámetros.

La estructura de una función es la siguiente:

```cpp
// tipo nombre (parametros) {cuerpo}
void queque(){
    cout << "Quiero queque\n";
}
// Llamada a la funcion: queque();
```

Este ejemplo es una función `void`, es decir, no va a devolver un dato específico cuando sea llamada, sino que solamente ejecutará un conjunto de instrucciones. Podemos hacer que una función devuelva un dato usando el comando `return` y pasándole datos iniciales como argumentos:

```cpp
#include <iostream>
using namespace std;

// Se declara la función según el tipo de dato que devuelva; en este caso, int
int sumar(int n1, int n2){
    return n1 + n2;
}

int main(){
    int a = 5;
    int b = 10;
    // Llamada a la función, pasando a y b como argumentos
    cout << sumar(a, b);
    return 0;
}
```

![Salida de la función]({{ '/imgs/lec12/outs.png' | relative_url }})

### Alcance de variables

Las variables dentro de una función son accesibles únicamente para todo lo que esté dentro de dicha función. No se puede llamar una función externa y operar con variables que no le pertenecen, ya que no las conoce. Observa el ejemplo:

```cpp
#include <iostream>
using namespace std;

void imprimir(){
    cout << s;
}
int main(){
    string s = "pantera";
    imprimir(s);
    return 0;
}
```

Este código no será válido, ya que la variable `s` está fuera del alcance de la función `imprimir`. La forma correcta es pasar `s` como argumento:

```cpp
#include <iostream>
using namespace std;

void imprimir(string s){
    cout << s;
}

int main(){
    string s = "pantera";
    imprimir(s);
    return 0;
}
```

Cabe aclarar que no se trata del mismo string, sino que la función `imprimir` ha creado su propia variable string y copiado el valor de la variable que se le pasa como argumento. El parámetro string puede tener cualquier identificador, no necesariamente se debe llamar igual que la variable que se pasa.

Por fuera de todas las funciones está el alcance global: declarar una variable fuera de las funciones, al alcance de todas, generalmente en la parte de arriba:

```cpp
#include <iostream>
using namespace std;

// Variable global
string s = "alcance";

void imprimir(){
    cout << s;
}

int main(){
    cout << s;
    imprimir();
    return 0;
}
```

Ninguna de las funciones tiene parámetros ni declara variables; sólo hay un string de alcance global al que todas las funciones pueden acceder.

```cpp
#include <iostream>
using namespace std;

// Las referencias se escriben con &
void masUno(int& n){
    n++;
}

int main(){
    int a = 9;
    masUno(a);
    cout << a;
    return 0;
}
```

![Salida de función con referencia]({{ '/imgs/lec12/otss.png' | relative_url }})

### Ejercicio 1: Función queque
La función principal declara un char, y pide que des un carácter. Si el carácter escrito es ‘q’, se llamará a una función queque() que escriba que quieres un queque Si es un carácter diferente, se llama a una función noQueque() que escriba que no quieres queque.

#### Ejemplo 1

#### Entrada
<pre>
q
</pre>

#### Salida
<pre>
Quiero un queque
</pre>

#### Ejemplo 2

#### Entrada
<pre>
e
</pre>

#### Salida
<pre>
No quiero queque
</pre>

#### Ejemplo 3

#### Entrada
<pre>
p
</pre>

#### Salida
<pre>
No quiero queque
</pre>
<button class="problem0" onclick="mostrarSolucionTre()" style="border: none; background-color: #f7f8fc; font-size: 16px; cursor: pointer; padding: 8px 12px; border-radius: 5px;">
  <strong>Solución</strong> ▼
</button>
<div id="solutiontre" style="display: none; margin-top: 10px; padding: 12px; background-color: #f7f8fc; border-radius: 5px;">

  <strong>
  Explicación 
  </strong>
  <p>
  Define las funciones queque() y noQueque().
  </p>
  <p>
  Tras definir las funciones queque() y noQueue() en la función main()
  lo que hacemos es declarar un caracter, lo pedimos y metemos un condicional que hace una 
  llamada a alguna de las dos funciones acorde a lo que sea checado por la misma.
  </p>
<pre><code>
#include &lt;iostream&gt;
using namespace std;

void queque(){
    cout &lt;&lt; "Quiero un queque" &lt;&lt;'\n';
}

void noQueque(){
    cout &lt;&lt; “No quiero queque” &lt;&lt; ‘\n’;
}

int main(){
    char opcion; cin &gt;&gt; opcion;
    if(opcion == 'q'){
        queque();
    }
    else{
        noQueque();
    }
    return 0;
}
</code></pre>

</div>

<script>
function mostrarSolucionTre() {
  const solution = document.getElementById("solutiontre");
  solution.style.display =
    solution.style.display === "none" ? "block" : "none";
}
</script>

### Ejercicio 2: Elevar a la potencia
Implementa una función que recibe dos enteros b y exp, y devuelva la operación b^exp (AQUÍ SE USA ^ PARA REFERIRSE A EXPONENTE, NO A XOR), es decir, b elevado a la exp.
#### Ejemplo 1

#### Entrada
<pre>
2
3
</pre>

#### Salida
<pre>
8
</pre>

#### Ejemplo 2

#### Entrada
<pre>
5
3
</pre>

#### Salida
<pre>
125
</pre>

#### Ejemplo 3

#### Entrada
<pre>
2
10 
</pre>

#### Salida
<pre>
1024
</pre>

```cpp
int elevar(int b, int exp){
    //SOLUCION AQUI
    return 0;
}

int main(){
    int b; cin >> b;
    int exp; cin >> exp;

    cout << elevar(b, exp);

    return 0;
}

```

<button class="problem0" onclick="mostrarSolucion()" style="border: none; background-color: #f7f8fc; font-size: 16px; cursor: pointer; padding: 8px 12px; border-radius: 5px;">
  <strong>Solución</strong> ▼
</button>
<div id="solution" style="display: none; margin-top: 10px; padding: 12px; background-color: #f7f8fc; border-radius: 5px;">

  <strong>
  Explicación 
  </strong>
  <p>
  La función elevar contiene dentro de sí un bucle for que multiplica b por si mismo 
  con un límite exp.
  </p>
<pre><code>
#include &lt;iostream&gt;
using namespace std;

int elevar(int b, int exp){
    int r = b;
    for(int i = 1; i &gt; exp; i++){
        r *= b;
    }
    return r;
}


int main(){
    int b; cin &gt;&gt; b;
    int exp; cin &gt;&gt; exp;

    cout &lt;&lt; elevar(b, exp);

    return 0;
}
</code></pre>

</div>

<script>
function mostrarSolucion() {
  const solution = document.getElementById("solution");
  solution.style.display =
    solution.style.display === "none" ? "block" : "none";
}
</script>
