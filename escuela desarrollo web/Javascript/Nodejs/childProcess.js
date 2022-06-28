import { exec, spawn } from 'child_process';

exec('ls -la', (err, stdout, sterr) => {
	if(err) {
		console.error(err);
	} else {
		console.log(stdout)
	}
});
let process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);
process.stdout.on('data', (data) => {
	console.log('Is killed?',process.killed);
	console.log(data.toString());
})
process.on('exit', (data) => {
	console.log('Termino');
	console.log('Is killed?',process.killed);
})