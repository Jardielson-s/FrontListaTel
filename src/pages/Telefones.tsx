import React from "react";

import { useEffect, useState } from 'react'
import api from '../axios/api';
import Delete from '../Button/DeteleUpdate';
import './Listar.css'

interface Contatos{
  id: number
  nome: string
}
interface Telefones{
  id_tel: number
  telefones: string
  id_tel_con: Contatos
}

const ListarTelefones =() => {
  const [telefones, setTelefones] = useState([])
  
    useEffect(()=>{

      async function list(){
        try{
         const response = await api.get('/api/encontrarTelefones')
         setTelefones(response.data.contatos)
        }catch(err){
          console.log(err)
        }
      }

      list()
    }, [])


  return (
    <div
      style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '100vh',
      }}
    >
      <h1>Lista de Telefones</h1>{console.log(telefones)}
          <ul className='list-contatos'>
            {
              telefones.map((data: Telefones) => {
                return(
                  <fieldset>
                  <li key={data.id_tel}>
                        <p>telefone: {data.telefones}</p>
                        <p>nome: {data.id_tel_con.nome}</p>
                  </li>
                  <Delete id={data.id_tel} url="/api/deleteTelefones/"/>
                  </fieldset>
                )
              })
            }
          </ul>
    </div>
  );
};
  
export default ListarTelefones;