import {Proyecto,ActualizarProyectos} from './proyectos'
export class User{
    constructor(private _username:string, private _password:string, public proyectos:Proyecto[], public descripcion:string, public enlaceImagen:string){}
    get username():string{
        return this._username;
    }
    set username(value:string){
        this._username = value;
    }
    get password():string{
        return this._password;
    }
    set password(value:string){
        this._password = value;
    }
}
let users:User[] = [
    new User("juan","1234",[
        new Proyecto('Proyecto 1',"Desarrollo Web",'https://projectcor.com/es/wp-content/uploads/2019/05/gestion-de-proyectos.jpg',new Date('2022-03-20'),new Date('2025-03-20'),'Desc'),
        new Proyecto('Proyecto 2',"Desarrollo Web",'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg',new Date('2022-03-20'),new Date('2025-03-20'),'Desc'),
        new Proyecto('Proyecto 3',"Desarrollo de Escritorio",'https://www.easyproject.com/EasyProject/media/images/easy-redmine-devops-plugins.png',new Date('2022-03-20'),new Date('2025-03-20'),'Desc'),
        new Proyecto('Proyecto 4',"Desarrollo de Escritorio",'https://br.atsit.in/es/wp-content/uploads/2021/07/practique-la-programacion-en-linea-resolviendo-problemas-de-proyectos-reales-practice-dev.png',new Date('2022-03-20'),new Date('2025-03-20'),'Desc')]
        ,'Hola, que tal?, mi nombre es Piero!. Bienvenido a mi portafolio, actualizado hasta el 25/03/2022','https://marketplace.canva.com/EAEj17Y_k_k/1/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-ECHU3zpt238.jpg'), 
    new User("juan2","1234",[
        new Proyecto('Proyecto 3',"Desarrollo Web",'https://projectcor.com/es/wp-content/uploads/2019/05/gestion-de-proyectos.jpg',new Date('2022-03-20'),new Date('2025-03-20'),'Desc'),
        new Proyecto('Proyecto 2',"Desarrollo Web",'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg',new Date('2022-03-20'),new Date('2025-03-20'),'Desc')],
        'Hola!.Bienvenido a mi portafolio, mi nombre es Juan!!','https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg'    
    )
];


export function getUsers(){
    return users;
}
export function MostrarProyectos(username:string,categoria:string):void{
    console.log({username,categoria});
    if (username) {
        let proyectosUsuario ;
        if(categoria){
             proyectosUsuario = users
            .filter(user => user.username === username)[0].proyectos
            .filter(p => p.categoria == categoria);
        }else{
            proyectosUsuario = users
            .filter(user => user.username === username)[0].proyectos;
        }
        
        ActualizarProyectos(proyectosUsuario);
    } else {
        ActualizarProyectos([])
    }
}

export function RegistrarProyecto(username:string,formInfo: {nombreProyecto:string,categoriaF:string,descripcionProyecto:string,enlaceProyecto:string,fechaInicio:string,fechaFin:string }){
    try{
        users.filter(p=>p.username==username)[0].proyectos.push(new Proyecto(formInfo.nombreProyecto,
                                    formInfo.categoriaF,
                                    formInfo.enlaceProyecto,
                                    new Date(formInfo.fechaInicio),
                                    new Date(formInfo.fechaFin),
                                    formInfo.descripcionProyecto));
        console.log("Proyecto Registrado");
    }catch(e){
        console.log(e);
    }
}