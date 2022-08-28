const colors = require('colors');
const inquirer = require('inquirer');


/* Creating a list of choices for the user to choose from. */
const questions = [{

    type: 'list',
    name: 'option',
    message: '¿Que desea hacer?',
    choices: [

        {
            value: 1,
            name: `${'1.'.green} Buscar Ciudad`
        },
        {
            value: 2,
            name: `${'2.'.green} Historial`,
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        },
    ]
}];


/**
 * It's a function that returns a promise that resolves to the value of the option property of the
 * object returned by the inquirer.prompt function.
 * @returns The option that the user selects.
 */
const inquirerMenu = async () => {

    console.clear();
    console.log('========================='.green);
    console.log('       Mostrar Menu        '.green);
    console.log('=========================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
};


const pause_option = [{

    type: 'input',
    name: 'pause',
    message: `Presione ${'enter'.green} para continuar`,
}]


/**
 * The function pausa() is an async function that returns a promise. The promise is the result of the
 * inquirer.prompt() function, which is a function that returns a promise. The inquirer.prompt()
 * function is passed the pause_option object, which is an object that contains a question and a name
 * property. The question property is an object that contains a type property, which is a string, and a
 * message property, which is a string. The name property is a string.
 * @returns The pause function is returning the pause object.
 */
const pausa = async () => {

    const pause = await inquirer.prompt(pause_option);
    return pause;

};

/**
 * A function that asks the user to enter a value.
 * @param message - The message to display to the user.
 * @returns The question object is being returned.
 */
const leerInput = async (message) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor Ingrese un valor'
            }
            return true
        }
    }]

    const { desc } = await inquirer.prompt(question);
    return desc   // inquirer devuelve un objeto {name: input ingresado} ------------> {desc: tarea creada}    
};


/**
 * It takes an array of objects, and returns a list of choices for the user to select from.
 * @param [tareas] - an array of objects
 * @returns The id of the task to be deleted.
 */
const listarLugares = async (lugares = []) => {

    const choices = lugares.map((lugar, i) => {
        const idx = `${i + 1}.`
        return {
            value: lugar.id,
            name: `${idx.green} ${lugar.Nombre}`
        }
    })

    const questions = [{
        type: 'list',
        name: 'id',
        message: 'SELECCIONAR UN CIUDAD'.green,
        choices
    }];

    choices.unshift({
        value: "0",
        name: `${'0'.green} Cancelar`
    })

    const { id } = await inquirer.prompt(questions)
    return id

};


module.exports = {

    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,

};