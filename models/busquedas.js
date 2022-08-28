const fs = require('fs');
const { default: axios } = require("axios");
require('dotenv').config();
const { ACCESS_TOKEN, BASE_URL, OPEN_WHEATHER_KEY, BASE_URL_OPEN_WHEATHER } = process.env;


class Busquedas {

    historial = []
    dbPath = './db/historial.json'

    constructor() {
        // TODO: leer db si existe 
        this.leerDb();
    };


    getParamsMapbox() {
        return {
            access_token: ACCESS_TOKEN,
            language: 'es',
        }
    };


    getOpenWheater(lat, lon) {
        return {
            appid: OPEN_WHEATHER_KEY,
            lat,
            lon,
            lang: 'es',
            units: 'metric'
        }
    };


    getHistorialCapitalizado() {

        this.historial.map(ciudad => {

            const letraCapitalizada = ciudad.split(' ').map(palabra => palabra[0].toUpperCase() + palabra.substring(1))

            return letraCapitalizada.join()
        });
    };


    async ciudad(lugar = "") {

        try {

            // petición de las ciudades http
            const instancia = axios.create({
                baseURL: `${BASE_URL}${lugar}.json`,
                params: this.getParamsMapbox()
            })

            const res = await instancia.get()
            return res.data.features.map(lugar => ({
                id: lugar.id,
                Nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))

        } catch (error) {
            console.log(error)
        }
    };


    async clima(lat = '', lon = '') {

        try {

            const instancia = axios.create({
                baseURL: `${BASE_URL_OPEN_WHEATHER}`,
                params: this.getOpenWheater(lat, lon),
            });

            const res = await instancia.get()
            const { description } = (res.data.weather[0])
            const { temp_min, temp_max, temp } = res.data.main

            return {
                temp,
                temp_max,
                temp_min,
                description
            }

        } catch (error) {
            console.log(error)
        }

    };


    historialBusqueda(lugar = '') {

        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return
        }

        if (this.historial.length > 4) {
            this.historial.pop()
        }

        this.historial.unshift(lugar.toLocaleLowerCase())

        this.guardarEnDb()

    };


    guardarEnDb() {

        const payload = {
            historial: this.historial
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    };


    leerDb() {

        if (!fs.existsSync(this.dbPath)) return

        const ciudadesHistorial = fs.readFileSync(this.dbPath, { encoding: 'utf-8' })

        const info = JSON.parse(ciudadesHistorial)

        this.historial = info.historial
    };

};

module.exports = Busquedas