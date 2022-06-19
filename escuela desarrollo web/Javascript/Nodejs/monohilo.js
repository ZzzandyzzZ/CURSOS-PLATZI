let i = 0;
console.log('Primera instruccion');
setInterval( () => {
	console.log(i++);
	if (i === 5) {
		console.log(a); // Forzamos error
	}
},1000);
console.log('Segunda instruccion');