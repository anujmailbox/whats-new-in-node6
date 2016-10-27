// Built-ins

// Proxy
var handler = {
    set (target, key, value) {
        console.log(`called: ${key} : ${value}`);
        return true;
    },
    get (target, key) {
        console.info(`Get on property ${key}`);
        return target[key]
    }
    
}
var p = new Proxy({}, handler);

p.a = "123";
p.a;

// Symbols
var sym1 = Symbol(123);
var sym2 = Symbol(123);

console.log(sym1 === sym2);