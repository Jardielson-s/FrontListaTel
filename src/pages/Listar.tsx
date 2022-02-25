import React from 'react';
import { useEffect, useState } from 'react'
import api from '../axios/api';
import Delete from '../Button/DeteleUpdate';
import './Listar.css'

interface Contatos{
  id: number
  nome: string
  email: string
  telefones: [Telefones]
  imagem: string
}
interface Telefones{
  id: number
  telefones: string
}

const Listar =() => {
  const [contatos, setContatos] = useState([])

    useEffect(()=>{

      async function list(){
        try{
         const response = await api.get('/api/encontrarContatos')
         setContatos(response.data.contatos)
  
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
      <h1>Lista de Contatos</h1>
          <ul className='list-contatos'>
            {
              contatos.map((data: Contatos) => {
                return(
                  <fieldset>
                  <li key={data.id}>
                    <img alt="" src={data.imagem}/>
                    <p> nome: {data.nome}</p>
                    <p> email: {data.email}</p>
                    <ul>
                      {
                      data.telefones.map((telefones:Telefones) => {
                        return (
                            <li key={telefones.id}>
                              <p> telefone: {telefones.telefones}</p>
                            </li>
                            )
                      })
                      }
                    </ul>
                  </li>
                  <Delete id={data.id} url="/api/deleteContatos/"/>
                  </fieldset>
                )
              })
            }
          </ul>
    </div>
  );
};
  
export default Listar;