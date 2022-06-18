class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return address;
    }
    get(key){
        const address = this.hashMethod(key);
        return this.data[address]?.find((v)=>v[0] == key)[1];
    }
    del(key){
        const address = this.hashMethod(key);
        if(this.data[address].length > 0){
            this.data[address].forEach(element => {
                if(element[0] === key){
                    this.data[address] = [];
                }
            });
        }
    }
}

let myHash = new HashTable(50);
myHash.set("Andy", 22);
myHash.set("Diego", 35);
myHash.set("Mariana", 30);
console.log(myHash.get("asd"));
console.log(myHash.get("Andy"));
console.log(myHash.get("Diego"));