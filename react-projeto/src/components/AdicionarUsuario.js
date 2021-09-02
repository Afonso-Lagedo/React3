import React, {Component} from 'react';
import './components.css';

class AdicionarUsuario extends Component{
    constructor(props){
        super(props);

        this.state = {
            usuario: {nome:'', idade:'', email:''}
        }

        //"connect the method"
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    //altering inputs
    onChangeHandler(event){
        const {name, value} = event.target;
        this.setState({usuario:{...this.state.usuario, [name]:value}});
    }
    //add user
    onSubmitHandler(event){
        event.preventDefault();
        //generation random ID
        const id = Math.floor(Math.random()*1000);
        const usuario ={...this.state.usuario, id};

        //inputs cleaning
        this.setState({usuario:{nome:'', idade:'', email:''}});
        this.props.adicionarUsuario(usuario);
    }

    render(){
        return(
            <div className="AddUsuario">
                <h2>Adicionar Usuário</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="Linha">
                        <div className="Coluna">
                            <label>Nome</label>
                            <input type="text"
                                name="nome"
                                value={this.state.usuario.nome}
                                onChange={this.onChangeHandler}
                                required>
                            </input>
                        </div>
                        <div className="Coluna">
                            <label>Idade</label>
                            <input type="number"
                                name="idade"
                                value={this.state.usuario.idade}
                                onChange={this.onChangeHandler}
                                required>
                            </input>
                        </div>
                    </div>
                    <div className="Linha">
                        <div className="Coluna">
                            <label>Email</label>
                            <input type="email"
                                name="email"
                                value={this.state.usuario.email}
                                onChange={this.onChangeHandler}
                                required>
                            </input>
                        </div>
                    </div>
                    <button type="submit">
                        Adicionar
                    </button>
                </form>
            </div>
        )
    }
}

export default AdicionarUsuario;