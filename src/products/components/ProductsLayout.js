import React from 'react'
import Header from './Header'
import Imagen from './Logo'
import Video from './Video'
import AddButton from './AddButton'
import Formulario from './Formulario'
import Tables from './Tables'
import ScrollVertical from './ScrollVertical'
import ScrollHorizontal from './ScrollHorizontal'
import RepresenColumnas from './RepresenColumnas'
import AgrupacionFilas from './AgrupacionFilas'
import ArchivoIdioma from './ArchivoIdioma'
import BaseEstilo from './BaseEstilo'
// import App from '../App'
import BaseEstilohover from './BaseEstilohover'
import BaseEstiloRow from './BaseEstiloRow'
import BarChart from './BarChart'
import VerticalChart from './VerticalChart'
import BarrasChart from './BarrasChart'


const ProductsLayout = () =>{

    return(
        <>
            <Imagen/>
            <Header/>
            <Formulario/>
            <AddButton />
            <Video/>
            <Tables/>
            <ScrollVertical/>
            <ScrollHorizontal/>
            <RepresenColumnas/>
            <AgrupacionFilas/>
            <ArchivoIdioma/>
            <BaseEstilo/>
            <BaseEstilohover/>
            <BaseEstiloRow/>
            <BarChart/>
            <VerticalChart/>
            <BarrasChart/>
        </>
    )
}

    export default ProductsLayout