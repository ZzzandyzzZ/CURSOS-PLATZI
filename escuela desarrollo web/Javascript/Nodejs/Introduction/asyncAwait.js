function hola(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        },1000);
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}

const main = async () => {
    let nombre = await hola('andy');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}
console.log('Iniciando el proceso..');
main()
console.log('Terminando el proceso..');