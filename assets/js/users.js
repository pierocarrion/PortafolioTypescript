"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarProyecto = exports.MostrarProyectos = exports.getUsers = exports.User = void 0;
const proyectos_1 = require("./proyectos");
class User {
    constructor(_username, _password, proyectos, descripcion, enlaceImagen) {
        this._username = _username;
        this._password = _password;
        this.proyectos = proyectos;
        this.descripcion = descripcion;
        this.enlaceImagen = enlaceImagen;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.User = User;
let users = [
    new User("juan", "1234", [
        new proyectos_1.Proyecto('Proyecto 1', "Desarrollo Web", 'https://projectcor.com/es/wp-content/uploads/2019/05/gestion-de-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
        new proyectos_1.Proyecto('Proyecto 2', "Desarrollo Web", 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
        new proyectos_1.Proyecto('Proyecto 3', "Desarrollo de Escritorio", 'https://www.easyproject.com/EasyProject/media/images/easy-redmine-devops-plugins.png', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
        new proyectos_1.Proyecto('Proyecto 4', "Desarrollo de Escritorio", 'https://br.atsit.in/es/wp-content/uploads/2021/07/practique-la-programacion-en-linea-resolviendo-problemas-de-proyectos-reales-practice-dev.png', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc')
    ], 'Hola, que tal?, mi nombre es Piero!. Bienvenido a mi portafolio, actualizado hasta el 25/03/2022', 'https://marketplace.canva.com/EAEj17Y_k_k/1/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-ECHU3zpt238.jpg'),
    new User("juan2", "1234", [
        new proyectos_1.Proyecto('Proyecto 3', "Desarrollo Web", 'https://projectcor.com/es/wp-content/uploads/2019/05/gestion-de-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
        new proyectos_1.Proyecto('Proyecto 2', "Desarrollo Web", 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc')
    ], 'Hola!.Bienvenido a mi portafolio, mi nombre es Juan!!', 'https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg')
];
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
function MostrarProyectos(username, categoria) {
    console.log({ username, categoria });
    if (username) {
        let proyectosUsuario;
        if (categoria) {
            proyectosUsuario = users
                .filter(user => user.username === username)[0].proyectos
                .filter(p => p.categoria == categoria);
        }
        else {
            proyectosUsuario = users
                .filter(user => user.username === username)[0].proyectos;
        }
        (0, proyectos_1.ActualizarProyectos)(proyectosUsuario);
    }
    else {
        (0, proyectos_1.ActualizarProyectos)([]);
    }
}
exports.MostrarProyectos = MostrarProyectos;
function RegistrarProyecto(username, formInfo) {
    try {
        users.filter(p => p.username == username)[0].proyectos.push(new proyectos_1.Proyecto(formInfo.nombreProyecto, formInfo.categoriaF, formInfo.enlaceProyecto, new Date(formInfo.fechaInicio), new Date(formInfo.fechaFin), formInfo.descripcionProyecto));
        console.log("Proyecto Registrado");
    }
    catch (e) {
        console.log(e);
    }
}
exports.RegistrarProyecto = RegistrarProyecto;
