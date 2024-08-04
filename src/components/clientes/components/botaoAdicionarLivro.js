import { Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, ModalHeader, ModalFooter } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { GlobalContext } from "@/contexts/global";
import { useDisclosure } from "@chakra-ui/react"

export default function BotaoAdicionarLivro() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const { rotas } = useContext(GlobalContext)

    const rotaAdicionarLivro = rotas.adicionarLivro

    async function adicionarLivro() {
        const response = await fetch(rotaAdicionarLivro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: 'Livro Teste',
                autor: 'Autor Teste',
                preco: 50.00,
                quantidade: 1
            })
        })
        const data = await response.json()
        console.log(data)
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
                    <Input ref={initialRef} placeholder='Nome' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Autor(a)</FormLabel>
                    <Input placeholder='Autor(a)' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Quantidade</FormLabel>
                    <Input placeholder='Quantidade' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Preço</FormLabel>
                    <Input placeholder='Preço' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Adicionar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </>
    )

}