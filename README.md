# TestSearch - Contiene una SPA construida en React y un servidor creado a partir de un archivo httpClient.js

## **SPA** :computer: :chart_with_upwards_trend: :mag_right: _:_

**Instalación de dependencias:**

>Luego de hacer git clone del repositorio y antes de levantarlo en el entorno local es indispensable realizar un **npm install** para agregar todas las dependencias y generar la carpeta **node_modules**

**Scripts de inicio:** 

  - npm run start:local (_Este script es utilizado para levantar la spa en modo local_) --> **Utilizarlo para levantar la SPA posterior a haber realizado un git clone y un npm install.**
  - npm run start (_Este script es utilizado para levantar la spa en modo productivo_)
  - npm run build (_Este script es utilizado para la generación del build productivo_)

**Librerias utilizadas para el desarrollo de componentes, ruteo y estilizado:**

  _Para componentes:_ :construction_worker:
  
  - React-bootstrap

 _Para ruteo:_ :airplane:
 
  - react-router-dom

 _Para estilizado:_ :art:
 
 - Css
 - Bootstrap

**Librerias utilizadas para invocaciones API Rest:**

  - Axios

**Contenedores de la SPA:**

  > **_cajaBusqueda.jsx_** Contiene el componente del buscador.
  
  > **_resultadosBusqueda.jsx_** Contiene el componente que crea la lista de productos asociados y breadcrumbs.

  > **_detalle.jsx_** Contiene el componente que mapea el producto y su descripción.

**Componentes de la SPA:**

  1. **Searcher** utilizado en el contenedor de caja de busqueda, es el buscador de la SPA.
  2. **Breadcrumbs** utilizado para tomar las urls relacionadas y navegación en el sitio, se implementa en todos los contenedores.
  3. **Mapper** utilizado para mapear la lista de resultados en el contenedor de resultados de la busqueda.
  4. **Item** utilizado para mapear el producto por id en el contenedor de detalle, contiene un sub-componente para crear un carousel de imagenes, mapea la descripción del producto.
  5. **Carousel** utilizado en el componente de mapeo del item para generar un carousel de imagenes.

**Layout:**

> Contiene un wrapper nombrado **body.jsx** y en dicho wrapper se encuentra el ruteo de los 3 contenedores de la SPA.

## IMPORTANTE :warning: 

> ### NOTA: Funcionalidad del buscador, click en la lupa para buscar resultados, buscador funcional desde cualquier vista de la SPA. Para una mejor experiencia utilizar el navegador Google Chrome.

## **Server (Client-side)** 💻 _:_

> **Archivo httpClient.js generado para realizar las invocaciones con axios desde la SPA.**

- **_Se generó una función de invocación generica donde se le devuelven la url de las funciones para invocar servicios y los metodos_**

- **_Se generó una función llamada getSimpleSearch donde se le envia el query para invocar al servicio de busqueda de ML_**

- **_Se generó una función llamada getSimpleProductById donde se le envia el id del producto para que en su respuesta solo me devuelva información de dicho producto_**

- **_Se generó una función llamada getSimpleProductByIdDesc donde se le envia el id del producto y solo se solicita la descripción especifica de ese producto en su respuesta_**
