//to use Components on project
import React, {Component} from 'react';

//$$$$$$$$$$$$$$$$$$$$$$$
import Usuario from './Usuario/Usuario';

//create class of component type
class Usuarios extends Component{
    //properties mounting
    constructor(props){
        super (props)
        this.state ={//actualization of state
            usuarios:[
                {
                    id:1, nome: 'Afonso', idade:'28', email:'afonso.ur@gmail.com'
                }
            ]
        }

        //$$$$$$$$$$$$
    }
    
    //all component have render 
    render(){
        //$$$$$$
        return(
            
                //get all usuarios
                this.state.usuarios.map(usuario =>(
                    <Usuario key={usuario.id}
                        usuario={usuario}
                    />
                ))
            
        );
    }
}

export default Usuarios;