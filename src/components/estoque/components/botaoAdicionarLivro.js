import { Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, ModalHeader, ModalFooter, useToast } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "@/contexts/global";
import { useDisclosure } from "@chakra-ui/react";

export default function BotaoAdicionarLivro() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const initialRef = useRef(null);
    const finalRef = useRef(null);

    const { rotas } = useContext(GlobalContext);

    const rotaAdicionarLivro = rotas.adicionarLivro;

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    
    const toast = useToast()

    async function adicionarLivro() {

        onClose()

        const examplePromise = new Promise(async (resolve, reject) => {
            return setTimeout(() => resolve(200), 5000)

            const response = await fetch(rotaAdicionarLivro, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo,
                    autor,
                    preco: parseFloat(preco),
                    quantidade: parseInt(quantidade, 10)
                })
            });
    
            const data = await response.json()
            console.log(data)

            response.status === 200 ? resolve(response.status) : reject(response.status)
        })

        toast.promise(examplePromise, {
            success: { title: 'Livro adicionado'},
            error: { title: 'Erro ao adicionar livro' },
            loading: { title: 'Adicionando livro...' },
        })
        
        setTitulo('')
        setAutor('')
        setQuantidade('')
        setPreco('')
    }

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue' w='100%'>Adicionar Livro</Button>
      
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Adicionar Livro</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input 
                      ref={initialRef} 
                      placeholder='Nome' 
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                    />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Autor(a)</FormLabel>
                    <Input 
                      placeholder='Autor(a)'
                      value={autor}
                      onChange={(e) => setAutor(e.target.value)}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Quantidade</FormLabel>
                    <Input 
                      placeholder='Quantidade'
                      value={quantidade}
                      onChange={(e) => setQuantidade(e.target.value)}
                      type="number"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Preço</FormLabel>
                    <Input 
                      placeholder='Preço'
                      value={preco}
                      onChange={(e) => setPreco(e.target.value)}
                      type="number"
                    />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={adicionarLivro}>
                    Adicionar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </>
    );
}
