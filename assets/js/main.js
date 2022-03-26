"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const login_1 = __importDefault(require("./login"));
const loggedIn_1 = __importDefault(require("./loggedIn"));
const users_2 = require("./users");
//console.log(getUsers());
//Check if logged in 
(0, loggedIn_1.default)();
let categoriaGlobal = "";
(0, users_1.MostrarProyectos)(localStorage.username, categoriaGlobal);
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    (0, login_1.default)((0, users_1.getUsers)().filter(user => user.username == username && user.password == password)[0], { username, password });
    (0, users_1.MostrarProyectos)(localStorage.username, categoriaGlobal);
});
$("#listaCategorias li").on('click', function (e) {
    e.preventDefault();
    let categoria = $(this).attr("value");
    categoriaGlobal = categoria;
    (0, users_1.MostrarProyectos)(localStorage.username, categoria);
});
document.getElementById('nuevoProyecto').addEventListener('click', function (e) {
    e.preventDefault();
    let nombreProyecto = document.getElementById('nombreProyecto').value;
    let descripcionProyecto = document.getElementById('descripcionProyecto').value;
    let enlaceProyecto = document.getElementById('enlaceProyecto').value;
    let fechaInicio = document.getElementById('fechaInicio').value;
    let fechaFin = document.getElementById('fechaFin').value;
    let categoriaF = document.getElementById('categoria').value;
    (0, users_2.RegistrarProyecto)(localStorage.username, { nombreProyecto, categoriaF, descripcionProyecto, enlaceProyecto, fechaInicio, fechaFin });
    (0, users_1.MostrarProyectos)(localStorage.username, categoriaGlobal);
});
//console.log($('#loginButton'));
