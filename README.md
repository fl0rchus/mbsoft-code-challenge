## Consigna
Dadas las pantallas como referencia, deberás construir una serie de componentes React que permitan renderizar la aplicación. Deberás realizar request a JSON,
filtrar dichos datos y usar los campos relevantes.

## Detalles
Deberás construir 3 páginas en React:
->Página Home.
->Página de Series.
->Página de Películas.

*El desarrollo deberá ser construido en una carpeta llamada "build" con un punto de entrada llamado "index.html".
*Tratar de constuir componentes para cada sección de la página (header, content, footer, etc).
*Los assets se proveen en la carpeta "assets".
*Las páginas deberán ser responsivas.

### Página Home
*Hacen referencia a los archivos [screens/1-home.jpg](./screens/1-home.jpg)
*Será la página "index.html".
*Deberán mostrarse 2 títulos, que harán referencia a las páginas de "Series" y "Películas".

### Página Series y Página Películas
*Hacen referencia a [screens/2-series.jpg](./screens/2-series.jpg) y [screens/3-movies.jpg](./screens/3-movies.jpg).
*Para cada página, deberá consumirse el JSON que se encuentra en [feed/sample.json]. Con dicho JSON, deberá:
->Mostrarse las primeras 20 entradas.
->Mostrarse las entradas cuyo "releaseYear" sea mayor a "2010".
->Mostrase las entradas ordenadas por el atributo "title" en orden ascendente.

*Para la página Series, deberá filtrase cuando el atributo "programType" tiene un valor igual a "series".
*Para la página Películas, deberá filtrase cuando el atributo "programType" posee el valor igual a "movie"
*Los atributos que deberán mostrase son "title" e "images" ("Poster ART" -> url)
*Deberán manejarse los estados de carga y error al buscar el JSON. Para ello utilizar: "Loading" state [screens/1.1-loading.jpg](./screens/1.1-loading.jpg) 
y "Error" state [screens/1.2-error.jpg](./screens/1.2-error.jpg)


## Entrega
El desarrollo deberá subirse a un repositorio de Git y deberá enviarse el link de acceso por email a jhaedo@mbsoft.com.ar
