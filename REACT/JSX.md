# JSX
- JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

- JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

- React.createElement recibe 3 argumentos:

    - El tipo de elemento que estamos creando
    - sus atributos o props
    - el children que es el contenido.

    > Ejemplo:
    > React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

- En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

- Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.