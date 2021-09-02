//to use Components on project
import React, {Component} from 'react';

import AdicionarUsuario from './AdicionarUsuario';
import Usuario from './Usuario';

//create class of component type
class Usuarios extends Component{
    //properties mounting
    constructor(props){
        super (props)
        this.state ={//actualization of state
            usuarios:[
                //************** */
            ]
        }

        //"connecting the method"
        this.adicionarUsuario = this.adicionarUsuario.bind(this);
    }

    //add user
    adicionarUsuario(usuario){
        //get state of usuarios and add usuario
        const usuarios = [...this.state.usuarios, usuario];
        //actualization of state
        this.setState({usuarios:usuarios});
    }

    //remove user
    removerUsuario(usuario){
        //if confirm alert, will remove
        if (window.confirm(`Excluir"${usuario.nome}"?`)){
            //receives state
            let usuarios = this.state.usuarios;
            //geting user of ID
            usuarios = usuarios.filter(filtrado => filtrado.id !==usuario.id);
            //actualization of state
            this.setState({usuarios:usuarios});
        }
    }

    //receives API data
    componentDidMount(){
        fetch('https://reqres.in/api/users') //localization of API //API of test: https://reqres.in/
        //executed in sequence
            .then(resposta=>resposta.json())
            .then (dados=>{
                //tranformation API data to props of my state
                const usuarios = dados.data.map(usuario =>{
                    return{
                        id:usuario.id,
                        nome: usuario.first_name,
                        email:usuario.email
                    }
                })

                //actualization state
                //this.setState({usuarios:usuarios})
                //when have same name
                this.setState({usuarios})
            })
    }

    //all component have render
    render(){

        return(
            <>
                {/*add user*/}
                <AdicionarUsuario adicionarUsuario={this.adicionarUsuario}/>

                {/*get all usuarios and show*/}
                {this.state.usuarios.map(usuario =>(
                    <Usuario key={usuario.id}
                        usuario={usuario}
                        //remove user
                        removerUsuario={this.removerUsuario.bind(this, usuario)}
                    />
                ))}
            </>
        );
    }
}

export default Usuarios;