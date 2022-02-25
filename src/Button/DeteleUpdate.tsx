import React, { useState } from 'react'
import { Button, Modal, Overlay, Form} from 'react-bootstrap'
import api from '../axios/api'
import { useRef } from 'react'
interface DelUp{
    id: number
    url: string
}
function DeleteUpdate(props:DelUp){
    const [showOne, setShowOne] = useState(false);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [nome, setNome]  = useState("")
    const [imagem, setImagem]  = useState(new Blob())
    const [email, setEmail]  = useState("")
    const [telefone, setTelefone]  = useState("")
    const [message, setMessage] = useState("")

    const handleFileSelected = (e: any): void => {
        const file = e.target.files[0]
            setImagem(file || undefined)
      }

    async function onclick(){
        try{
            const response = await api.delete(`${props.url}${props.id}`)
            setMessage(response.data.message)
            console.log(message)
            alert(message)
            window.location.reload()
           }catch(err){
             console.log(err)
           }
    }

    async function send(e: any){
        e.preventDefault();
             const formData = new FormData();

             formData.append("imagem", imagem);
             formData.append("nome", nome);
             formData.append("email", email);

             const response = await api.put(`/api/atualizarContatos/${props.id}`, formData)
             setMessage(response.data.message)
             window.location.reload()
    }
    async function sendTelefone(e: any){
        e.preventDefault();
             const response = await api.post(`/api/criarTelefones/${props.id}`, { 
                "telefones":telefone
                })
             setMessage(response.data.message)
             alert(message)
             window.location.reload()
    }
    return(
       
        <><Overlay target={target.current} show={show} placement="right">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                    style={{
                        backgroundColor: 'rgba(248, 253, 181, 0.85)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}
                >
                   <div className="form-container">
            <Form className="signup-form" onSubmit={send}>
                <Form.Group>
                    <Form.Control className="name-input" type="text" placeholder="name" name="name"  value={nome} onChange={e => setNome(e.target.value)} required></Form.Control>
                    <Form.Control className="email-input" type="email" placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required ></Form.Control>
                    <Form.Control className="file-input" type="file" placeholder="file" name="file" onChange={handleFileSelected} required></Form.Control>
                    <Button className="submit-button" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
        </div>
                </div>
            )}
        </Overlay>
        <Overlay target={target.current} show={showOne} placement="right">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                    style={{
                        backgroundColor: 'rgba(191, 250, 186, 0.85)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}
                >
                   <div className="form-container">
            <Form className="signup-form" onSubmit={sendTelefone}>
                <Form.Group>
                    <Form.Control className="tel-input" type="tel" placeholder="telefone" name="telefone"  value={telefone} onChange={e => setTelefone(e.target.value)} required></Form.Control>
                    <Button className="submit-button" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
        </div>
                </div>
            )}
        </Overlay>
        <Modal.Dialog>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setShowOne(!showOne)}>Adicionar número</Button>
                    <Button variant="danger" onClick={onclick}>Deletar</Button>
                    <Button variant="warning" ref={target} onClick={() => setShow(!show)}>Atualizar</Button>
                </Modal.Footer>
            </Modal.Dialog></>
     
    )
}


export default DeleteUpdate