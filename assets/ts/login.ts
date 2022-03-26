import {User} from './users';
import loggedIn from './loggedIn';

export default function(dbUser:User, formInfo:{username:string, password:string}){
    if(formInfo.username === dbUser.username && formInfo.password === dbUser.password){
        localStorage.setItem('username',formInfo.username);
        //localStorage.setItem('password',formInfo.password);
        document.getElementById('perfilUsuario')!.innerHTML = `<img src="${dbUser.enlaceImagen}" alt=""></img>
                                                                <p>
                                                                    <br>
                                                                    ${dbUser.descripcion}
                                                                </p>`;

        loggedIn();
    } else {
        return;
    }
}