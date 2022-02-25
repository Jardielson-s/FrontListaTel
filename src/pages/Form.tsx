import { Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import api from '../axios/api'
import {  useNavigate } from 'react-router-dom'

function Cadastro(){
    const [nome, setNome]  = useState("")
    const [imagem, setImagem]  = useState(new Blob())
    const [email, setEmail]  = useState("")
    const [telefone, setTelefone]  = useState("")
    const [message, setMessage] = useState("")

    const history = useNavigate()

    const handleFileSelected = (e: any): void => {
        const file = e.target.files[0]
            setImagem(file || undefined)
      }


    async function send(e: any){
        e.preventDefault();
             const formData = new FormData();

             formData.append("imagem", imagem);
             formData.append("nome", nome);
             formData.append("email", email);
             formData.append("telefones", telefone);

             const response = await api.post('/api/criarContatos', formData)
             setMessage(response.data.message)
             
            if(response.status === 201){
                return history('/')
            }
    }
 return (
     <div className="form-container">
            <Form className="signup-form" onSubmit={send}>
                <Form.Group>
                    <Form.Control className="name-input" type="text" placeholder="name" name="name"  value={nome} onChange={e => setNome(e.target.value)} required></Form.Control>
                    <Form.Control className="email-input" type="email" placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required ></Form.Control>
                    <Form.Control className="file-input" type="file" placeholder="file" name="file" onChange={handleFileSelected} required></Form.Control>
                    <Form.Control className="tel-input" type="tel" placeholder="telefone" name="telefone"  value={telefone} onChange={e => setTelefone(e.target.value)} required></Form.Control>
                    <Button className="submit-button" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
            {
                   
                        <Alert variant={message}>
                           {message}
                        </Alert>
            }
        </div>
       )

}

export default Cadastro