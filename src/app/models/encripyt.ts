export function Encripter() {
    return function (target: Object, key: string | symbol) {
        let val = target[key];

        const getter = () => {
            return val;
        };
        const setter = (next) => {
            val = btoa(next);
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

export function Decripter() {
    return function (target: Object, key: string | symbol) {
        let val = target[key];

        const getter = () => {
            return val;
        };
        const setter = (next) => {
            val = atob(next);
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}