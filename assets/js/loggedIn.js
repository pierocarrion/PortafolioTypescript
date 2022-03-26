"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
require("jquery");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = `<span>Hola, ${localStorage.username}</span>`;
        document.getElementById('addGalleryPhoto').innerHTML = `<a href ="#registroProyecto" class="btn btn-primary btn-block" data-toggle="modal">Agregar Proyecto</a>
                                                                <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar Sesión</button>
                                                                `;
        document.getElementById('perfilUsuario').innerHTML = `<img src="${(0, users_1.getUsers)().filter(opt => opt.username == localStorage.username)[0].enlaceImagen}" alt=""></img>
                                                                <p>
                                                                    <br>
                                                                    ${(0, users_1.getUsers)().filter(opt => opt.username == localStorage.username)[0].descripcion}
                                                                </p>`;
        $('#closeSessionButton').on('click', function (e) {
            {
                e.preventDefault();
                localStorage.clear();
                window.location.reload();
            }
        });
    }
}
exports.default = default_1;
//console.log($('#loginButton'));
