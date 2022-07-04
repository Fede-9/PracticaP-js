import React, { Component } from "react";
import usuarios from "../data/usuarios.json"

class UserItem extends Component {
    render() {
        const { usuario } = this.props;
        return (
            <li>
                <p><b>ID: </b>{usuario.id}</p>
                <p><b>Usuario: </b>{usuario.name}</p>
                <p><b>clave: </b>{usuario.clave}</p>
            </li>
        )
    }
}

export default class ListaObjetos extends Component {
    render() {
        return (
            <ul>
                {
                    usuarios.map(usuario => {
                        return (
                            <UserItem key={usuario.id} usuario={usuario} />
                        )
                    })
                }
            </ul>
        )
    }
}