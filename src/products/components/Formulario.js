import React from 'react'
import {Container} from 'react-bulma-components'

const Formulario = () => {

    return(
        <Container>
            <div class="control"> 
                <label class="label">Nombre</label>
                <input class="input" type="text" placeholder="Nombre"></input>
                <label class="label">Apellido</label>
                <input class="input" type="text" placeholder="Apellido"></input>
                <label class="label">Celular</label>
                <input class="input" type="number" placeholder="Celular"></input>
                <label class="label">Email</label>
                <input class="input" type="mail" placeholder="@example"></input>
            </div>  
        </Container>

    )
}

    export default Formulario