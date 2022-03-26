import {getUsers, MostrarProyectos} from './users';
import login from './login';
import loggedIn from './loggedIn';
import {Proyecto, ActualizarProyectos} from './proyectos';
import {RegistrarProyecto}from './users';
//console.log(getUsers());
//Check if logged in 
loggedIn();
let categoriaGlobal:string="";
MostrarProyectos(localStorage.username,<string>categoriaGlobal);
document.getElementById('loginButton')!.addEventListener('click',function(e){
    e.preventDefault();
    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;    
    login(getUsers().filter(user => user.username == username && user.password == password)[0],{username,password});
    MostrarProyectos(localStorage.username,<string>categoriaGlobal);
})

$("#listaCategorias li").on('click',function(e){
    e.preventDefault();
    let categoria = $(this).attr("value");
    categoriaGlobal = <string>categoria;
    MostrarProyectos(localStorage.username,<string>categoria);
});
document.getElementById('nuevoProyecto')!.addEventListener('click',function(e){
    e.preventDefault();
    let nombreProyecto:string = (<HTMLInputElement>document.getElementById('nombreProyecto')).value;
    let descripcionProyecto:string = (<HTMLInputElement>document.getElementById('descripcionProyecto')).value;
    let enlaceProyecto:string = (<HTMLInputElement>document.getElementById('enlaceProyecto')).value;
    let fechaInicio:string = (<HTMLInputElement>document.getElementById('fechaInicio')).value;
    let fechaFin:string = (<HTMLInputElement>document.getElementById('fechaFin')).value;
    let categoriaF:string = (<HTMLInputElement>document.getElementById('categoria')).value;
    
    RegistrarProyecto(localStorage.username,{nombreProyecto,categoriaF,descripcionProyecto,enlaceProyecto,fechaInicio,fechaFin});
    MostrarProyectos(localStorage.username,<string>categoriaGlobal);
})







//console.log($('#loginButton'));

