function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {console.log('Adios', nombre); otroCallback();}, 5000);
}
const hablar = (callback) => {
    setTimeout(()=>{
        console.log('Bla bla bla');
        callback();
    })
}

// hola('Andy', function (nombre) {
//     hablar(()=>{
//         hablar(()=>{
//             hablar(()=>{
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 })
//             })
//         })
//     });
// });

const conversacion = (nombre,veces,callback) => {
    if (veces>0) {
        hablar(()=>{
            conversacion(nombre,--veces,callback);
        });
    } else {
        adios(nombre,callback)
    }
}

hola('Andy',(nombre)=>{
    conversacion(nombre,3,()=>{
        console.log('Terminamos la conversacion');
    })
})