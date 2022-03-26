import {getUsers} from './users';
import "jquery";
export default function(){
    if(localStorage.username){
        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username}</span>`;
        document.getElementById('addGalleryPhoto')!.innerHTML = `<a href ="#registroProyecto" class="btn btn-primary btn-block" data-toggle="modal">Agregar Proyecto</a>
                                                                <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar Sesión</button>
                                                                `;
         document.getElementById('perfilUsuario')!.innerHTML = `<img src="${getUsers().filter(opt=> opt.username == localStorage.username)[0].enlaceImagen}" alt=""></img>
                                                                <p>
                                                                    <br>
                                                                    ${getUsers().filter(opt=> opt.username == localStorage.username)[0].descripcion}
                                                                </p>`;                                                        
        $('#closeSessionButton').on('click',function(e){{
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        }});
    }
}
//console.log($('#loginButton'));