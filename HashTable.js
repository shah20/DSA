class HashTable {
    constructor(size = 7) {
        this.datamap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if(!this.datamap[index]) {
            this.datamap[index] = [];
        }
        this.datamap[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this._hash(key);
        if(this.datamap[index]) {
            const data = this.datamap[index].find(item => item[0] === key);
            if(data) return data[1];
        }
        return undefined;
    }

    keys() {
        const allKeys = [];
        for(let i = 0; i < this.datamap.length; i++) {
            if(this.datamap[i]) {
                for(let j=0; j<this.datamap[i].length;j++) {
                    allKeys.push(this.datamap[i][j][0])
                }
            }
        }
        return allKeys;
    }
}

const myHashTable = new HashTable();
myHashTable.set('bolts', 1400);
myHashTable.set('washers', 200);
myHashTable.set('lumber', 300);