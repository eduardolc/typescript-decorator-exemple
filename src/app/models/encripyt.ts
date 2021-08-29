export function Encripter(target: any, key: string) {
    //const newKey = `_${key}`;
    const newKey = target[key];

    Object.defineProperty(target, key, {

        get() {
            //console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal) {
            //console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = btoa(newVal);
        },
        enumerable: true,
        configurable: true
    });
}

export function Decripter(target: any, key: string) {
    const newKey = `_${key}`;
    
    Object.defineProperty(target, key, {

        get() {
            //console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal) {
            //console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = atob(newVal);
        },
        enumerable: true,
        configurable: true
    });
}