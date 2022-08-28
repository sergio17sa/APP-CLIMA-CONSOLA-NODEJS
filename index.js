const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquire");
const Busquedas = require('./models/busquedas.js')


const main = async () => {

    console.clear();

    let opt = "";

    const busquedas = new Busquedas();


    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:

                // mostrar un mensaje escribir ciudad 

                const terminoDeBusqueda = await leerInput("Ciudad: ");

                // mostrar listado de ciudades que coincidan con la busqueda
                const ciudades = await busquedas.ciudad(terminoDeBusqueda);

                // sellecionar la ciudad deseada 
                const id = await listarLugares(ciudades);
                if (id === '0') continue
                const lugarSel = await ciudades.find(ciudad => ciudad.id === id)

                const { Nombre, lng, lat } = lugarSel
                busquedas.historialBusqueda(Nombre)

                // mostrar el clima 
                const wheater = await busquedas.clima(lat, lng)
                const { temp, temp_max, temp_min, description } = wheater

                // imprimir los resultados 
                console.clear()
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad: ', Nombre)
                console.log('Lat: ', lat)
                console.log('Lng: ', lng)
                console.log('Temperatura: ', temp)
                console.log('Min: ', temp_min)
                console.log('Max: ', temp_max)
                console.log('Tiempo: ', description)

                break;

            case 2:

                busquedas.getHistorialCapitalizado().forEach((lugar, i) => {

                    const idx = `${(i + 1)}.`.green
                    console.log(`${idx} ${lugar}`)
                });

                break;
        }

        if (opt !== 0) {
            await pausa()
        }

    } while (opt !== 0);

};

main();