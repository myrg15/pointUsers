"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //cargamos e inicializamos el objeto express
const app = (0, express_1.default)(); //ejecuta la funcion y guardala en una constante
app.listen(3000, () => console.log('Servidor levantado en 3000')); //instanciamos el servidor
app.get('/', (req, res) => {
    res.send('Hello world!');
});
