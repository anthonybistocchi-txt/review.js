"use strict";
var _a;
const nome = "Anthony";
console.log(`Olá, ${nome}`);
let moto;
moto = {
    modelo: 'MT-03',
    ano: 2023
};
console.log("Eu queria muito comprar uma " + ((_a = moto.modelo) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) + " do ano " + moto.ano);
function getMessage() {
    return "se não for o tipo correto nada funciona";
}
console.log(getMessage().toUpperCase());
function getMoto() {
    return {
        modelo: 'S1000RR',
        ano: 2025,
        marca: 'BMW',
    };
}
console.log(getMoto());
function toJSON(obj) {
    JSON.stringify(obj);
}
function fromJSON(json) {
    return JSON.parse(json);
}
const moto2 = {
    modelo: "START",
    ano: 2019,
};
console.log(toJSON(moto2));
const motoJSON = `{"modelo":"kawasaki", "ano":2024}`;
console.log(fromJSON(motoJSON).ano);
