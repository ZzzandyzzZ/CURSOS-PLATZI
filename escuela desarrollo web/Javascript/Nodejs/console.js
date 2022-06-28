console.info('INFO');
console.error('ERROR');
console.warn('WARNING');
console.table({war: 'WARNING'});
console.count('COUNT');
console.count('COUNT');
console.group('GROUP')
console.log('Log 1')
console.group('SUBGROUP')
console.log('Sublog 1')
console.groupEnd('SUBGROUP')
console.log('Log 2')
console.groupEnd('GROUP')
console.time("100-elementos")
for (let i = 0; i < 100; i++){
};
console.timeEnd("100-elementos")