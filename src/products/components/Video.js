import React from 'react'
import {Container, Section,} from 'react-bulma-components'

const Video = ({imagen}) => {

    return(
            
        <Section>
            <Container>
             <center><iframe width="560" height="315" src="https://www.youtube.com/embed/C8WUSGCtsdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            </Container>
        </Section>

    )
}

    export default Video