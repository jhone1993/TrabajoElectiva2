import React from 'react'
import {Container, Section} from 'react-bulma-components'

const Header = ({title}) => {

    return(
            
        <Section>
            <Container>

            <h1 className="title has-text-centered">{title}Inscríbete a la Mejor Universidad del Sur Colombiano</h1>
            </Container>
        </Section>

    )
}

    export default Header