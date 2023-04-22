import React from 'react'
import Pagina from '../components/pagina'
import apiDeputados from '../services/apiDeputados'

const Detalhes = ({detalhe}) => {
  return (
    <Pagina titulo={detalhe.nome}>
    <div>Detalhes</div>
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context){

    const id = context.params.id

    const resultado = await apiDeputados.get("/deputados/" + id)
    const detalhe = resultado.data
    return{
      props:{detalhe},
    }
  }
