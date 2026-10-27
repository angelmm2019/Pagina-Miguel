# Análisis de la interfaz — Blockverse

## 1. Referencia y alcance
Referencia visual: la página de inicio/descubrimiento de Roblox y su organización por experiencias. La documentación oficial describe la página de inicio como un espacio que presenta juegos recomendados y opciones de navegación; la sección Discovery organiza experiencias para ayudar a las personas a encontrarlas. Esta entrega se inspira en esa idea general, sin reutilizar logotipos, capturas ni recursos gráficos oficiales.

Fuentes consultadas:
- Roblox Creator Hub, “Discovery”: https://create.roblox.com/docs/discovery
- Roblox Creator Hub, “Play on Roblox”: https://create.roblox.com/docs/education/educator-onboarding/2-playing-on-roblox
- Roblox, “What is Roblox?”: https://about.roblox.com/what-is-roblox

## 2. Componentes observados y decisiones
- Barra superior con marca, navegación y perfil ilustrativo.
- Bloque de bienvenida que explica el propósito de la página.
- Buscador, filtros por categoría y selector de orden.
- Tarjetas con título, categoría, valoración ficticia y botón de favoritos.
- Sección de invitación a crear y pie de página.
- Estilo oscuro, acentos morado/cian/naranja y tarjetas redondeadas para diferenciar secciones.

## 3. Boceto textual
1. Encabezado: marca a la izquierda, navegación al centro, perfil a la derecha.
2. Hero: texto y botones a la izquierda; ilustración abstracta de bloques a la derecha.
3. Exploración: título, buscador, ordenamiento, filtros y cuadrícula de seis tarjetas.
4. Banner: invitación a aprender a crear.
5. Acerca del proyecto y pie de página.

## 4. Implementación técnica
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`, `button`, `dialog`.
- CSS: variables, selectores por elemento/clase/ID, `box-sizing`, `padding`, `margin`, `border`, Flexbox, Grid y media queries.
- JavaScript: búsqueda por texto, filtrado por categoría, ordenamiento, favoritos, diálogo de detalles, menú móvil y mensajes de estado.

## 5. Comparación y ajustes
La comparación pixel a pixel con la página oficial no se presenta como terminada. La propuesta usa contenido e ilustraciones originales, por lo que sus diferencias intencionales son: marca ficticia, colores propios, tarjetas ilustradas con CSS y datos de muestra. Al revisar en navegador, comprueba alineación, legibilidad, desbordamiento en móvil, contraste y funcionamiento de controles; registra cualquier ajuste real que hagas.

## 6. Pruebas recomendadas
- Buscar “isla”: debe quedar una tarjeta.
- Elegir “Obby”: debe aparecer Torre imposible.
- Ordenar por “Nombre: A–Z”: las tarjetas visibles deben ordenarse alfabéticamente.
- Pulsar el corazón: cambia el estado y muestra un mensaje.
- Pulsar una tarjeta: abre una ventana con detalles; cerrar con el botón o fuera de la ventana.
- Abrir el menú en móvil y elegir una sección.
- Revisar con teclado que los botones y enlaces reciben foco.

## 7. Evidencias que faltan por capturar
Las capturas reales de escritorio y móvil y la captura del repositorio deben generarse después de abrir la página en un navegador y subirla a GitHub. No se incluyen como si ya se hubieran realizado.
