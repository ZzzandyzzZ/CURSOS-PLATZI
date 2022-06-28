import { promises as fs } from 'fs';
const read = (path, callback) => {
	fs.readFile(path, (err, data) => {
		callback(data.toString());
	});
}
const write = (path, content, callback) => {
	fs.writeFile(path, content, callback);
}
const deleteFile = (path, callback) => {
	fs.unlink(path, callback);
}
// read('fileTest.txt', console.log);
// write('fileTest.txt', 'Hola de nuevo', console.log);
// deleteFile('fileTest.txt', console.log);

const asyncRead = async (path, callback) => {
	let data = await fs.readFile(path);
	callback(data.toString());
}

asyncRead('fileTest.txt', (data)=>{
	console.log('Async function', data)
});