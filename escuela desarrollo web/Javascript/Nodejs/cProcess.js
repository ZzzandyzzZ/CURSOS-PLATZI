const log = console.log;

process.on('beforeExit', ()=>{
  log('va a terminar');
});
process.on('exit', ()=>{
  log('termino');
  // Se desconecta del event loop
  setTimeout(() => {
    log('Nunca se ejecutara');
  }, 0);
});
process.on('uncaughtException', ()=>{
  log('olvidaste un error');
});
process.on('uncaughtRejection', ()=>{
  log('termino');
});

// log(a);
// log('No continua la ejecucion')

export default log;