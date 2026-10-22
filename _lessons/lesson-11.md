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
### Ejercicio 1: Cambiar precios
Tienes un programa de C++, con 4 variables globales (fuera de la función main) que representan el precio de 4 productos. Debes usar punteros que contengan la dirección de cada producto y pedir que pongas un nuevo precio. Al final debes mostrar en la consola los nuevos precios de cada producto.


```cpp
//precios
//variables globales
float manzana = 10.99;
float platano = 24.50;
float naranja = 16.20;
float aguacate = 5.40;

int main(){
    //cambiar el precio de cada uno, usando punteros
    float* cambiar_precio = &manzana;
    //tipo* nombre = &variable;

    //SOLUCION AQUI

    return 0;
}
```

<button class="problem0" onclick="mostrarSolucionTre()" style="border: none; background-color: #f7f8fc; font-size: 16px; cursor: pointer; padding: 8px 12px; border-radius: 5px;">
  <strong>Solución</strong> ▼
</button>
<div id="solutiontre" style="display: none; margin-top: 10px; padding: 12px; background-color: #f7f8fc; border-radius: 5px;">

  <strong>
  Explicación 
  </strong>
  <p>
  Cambias las variables luego de declararlas... cambiándolas.
  </p>
<pre><code>
#include &lt;iostream&gt;
using namespace std;

//precios
//variables globales
float manzana = 10.99;
float platano = 24.50;
float naranja = 16.20;
float aguacate = 5.40;

int main(){
    //cambiar el precio de cada uno, usando punteros
    //tipo* nombre = &amp;variable;
    float* cambiar_manzana = &amp;manzana;
    float* cambiar_platano = &amp;platano;
    float* cambiar_naranja = &amp;naranja;
    float* cambiar_aguacate = &amp;aguacate;

    cin &gt;&gt; *cambiar_manzana;
    cin &gt;&gt; *cambiar_platano;
    cin &gt;&gt; *cambiar_naranja;
    cin &gt;&gt; *cambiar_aguacate;

    cout &lt;&lt; "El precio de la manzana es: " &lt;&lt; manzana &lt;&lt; '\n';
    cout &lt;&lt; "El precio del platano es: " &lt;&lt; platano &lt;&lt; '\n';
    cout &lt;&lt; "El precio de la naranja es: " &lt;&lt; naranja &lt;&lt; '\n';
    cout &lt;&lt; "El precio del aguacate es: " &lt;&lt; aguacate &lt;&lt; '\n';

    
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
### Ejercicio 2: Cambio de identidad
Imagina que eres perseguido, y decides mejor llamar a Saúl, un abogado que puede borrar personas de los registros, cambiar identidades.

Hay un programa en C++ que tiene variables globales con todo sobre tí, tu nombre, edad, altura y país de residencia.

En la función principal usa un solo puntero que cambie cada variable con datos falsos, Al final muestra los datos de tu nueva identidad.

Código base
```cpp
#include <iostream>
using namespace std;

//datos
//variables globales
string nombre = "Walter";
int edad = 52;
float altura = 1.79;
string pais = "United States";

int main(){
    //cambiar el precio de cada uno, usando un puntero
    void* desaparecer;
    //tipo* nombre = &variable;

    //SOLUCION AQUI

    return 0;
}
```


#### Ejemplo 1

#### Entrada
<pre>
Jesse
26
1.80
Alaska
</pre>

#### Salida
<pre>
nombre: Jesse
edad:   26
altura: 1.8
pais:   Alaska
</pre>



<button class="problem2" onclick="mostrarSolucion()" style="border: none; background-color: #f7f8fc; font-size: 16px; cursor: pointer; padding: 8px 12px; border-radius: 5px;">
  <strong>Solución</strong> ▼
</button>
<div id="solution" style="display: none; margin-top: 10px; padding: 12px; background-color: #f7f8fc; border-radius: 5px;">

  <strong>
  Explicación 
  </strong>
  <p>
  Pedimos cuatro datos que inmediatamente transformamos a strings haciendo uso de static_cast. 
  Después de esto, simplemente los sacamos.
  </p>
<pre><code>
#include &lt;iostream&gt;
using namespace std;

//datos
//variables globales
string nombre = "Walter White";
int edad = 52;
float altura = 1.79;
string pais = "United States";

int main(){
    //cambiar el precio de cada uno, usando un puntero
    void&#42; desaparecer = &amp;nombre;
    //tipo&#42; nombre = &amp;variable;
    cin >>&#42;(static_cast&lt;string&#42;&gt;(desaparecer));

    desaparecer = &amp;edad;
    cin >> &#42;(static_cast&lt;int&#42;&gt;(desaparecer));


    desaparecer = &amp;altura;
    cin >> &#42;(static_cast&lt;float&#42;&gt;(desaparecer));


    desaparecer = &amp;pais;
    cin >> &#42;(static_cast&lt;string&#42;&gt;(desaparecer));


    cout << "nombre: " << nombre << '\n';
    cout << "edad:   " << edad << '\n';
    cout << "altura: " << altura << '\n';
    cout << "pais:   " << pais << '\n';


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

