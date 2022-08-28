# APP CLIMA CONSOLA INTERACTIVA NODEJS 

App que permite consultar el clima de forma interactiva desarrollada en node.js, realizando dos peticiones a traves de axios, la primera a la API de Mapbox para encontrar latitud y longitud y la segunda a la API Open Wheater Map  para retornar el clima pasandole las coordenas anteriores,  puede ser ejecutada por  consola y permite buscar ciudades, listar max 5 resultados de busqueda, seleccionar ciudad, ver los datos del clima y ver el historial de busqueda.

## Modulos utilizados

- Colors
- Inquirer 
- axios
- File System de node.js 
- dotenv

## API'S UTILIZADAS

- Mapbox 
- Open Wheater Map


## LISTA DE OPCIONES

```bash
=========================
       Mostrar Menu
=========================

? ¿Que desea hacer? (Use arrow keys)
> 1. Buscar Ciudad
  2. Historial
  0. Salir

```

## lISTA DE CIUDADES SEGÚN TERMINO DE BUSQUEDA

```bash
=========================
       Mostrar Menu
=========================

? ¿Que desea hacer? 1. Buscar Ciudad
? Ciudad:  MADRID
? SELECCIONAR UN CIUDAD (Use arrow keys)
> 0 Cancelar
  1. Madrid, Madrid, España
  2. Madrid, España
  3. Aeropuerto de Madrid-Cuatro Vientos, Avenida de la Aviación, Madrid, Madrid
 28054, España
  4. Madridejos, Toledo, España
  5. Madrid, Cundinamarca, Colombia

```
## DATOS DEL LUGAR SEGÚN CIUDAD SELECCIONADA 

```bash
Información de la ciudad

Ciudad:  Madrid, Madrid, España
Lat:  40.416705
Lng:  -3.703583
Temperatura:  31.8
Min:  29.45
Max:  33.14
Tiempo:  cielo claro
? Presione enter para continuar

```

## HISTORIAL

```bash
=========================
       Mostrar Menu
=========================

? ¿Que desea hacer? 2. Historial
1. Madrid,,Madrid,,España
2. Bogota,,Nueva,Jersey,,Estados,Unidos
3. Illinois,,Estados,Unidos
4. Miami,,Florida,,Estados,Unidos
5. Madrid,,España
? Presione enter para continuar

```

## CONTACTAME
- [Linkedin](linkedin.com/in/sergiosalgado17)
- [Whatsapp](https://wa.link/1yzaxy)
