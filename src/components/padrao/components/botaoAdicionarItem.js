import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "@/contexts/global";
import { useDisclosure } from "@chakra-ui/react";

export default function BotaoAdicionarItem({ tipoItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { rotas, dados, generos, servidor } = useContext(GlobalContext);

  const propriedades = [...dados[tipoItem].propriedades];

  const nomeItem = dados[tipoItem].tipoItem;

  const toast = useToast();

  const [formValues, setFormValues] = useState({});

  const handleChange = (e, propriedade) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function adicionarLivro() {
    onClose();

    const examplePromise = new Promise(async (resolve, reject) => {
      const informacoesRotaParaAdicionarItem = rotas[tipoItem].adicionar;
      const metodo = informacoesRotaParaAdicionarItem.tipo;
      const rota = servidor + informacoesRotaParaAdicionarItem.rota;

      const valoresFormulario = {}

      const formValuesKeys = Object.keys(formValues)
      for (const key of formValuesKeys) {
        if (key === 'autor') {
          valoresFormulario.autor = {
            nome: formValues.autor
          }
        } else {
          valoresFormulario[key] = formValues[key]
        }
      }

      const response = await fetch(rota, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valoresFormulario), 
      });

      const data = await response.json();

      if (response.status === 200) {
        window.location.reload();
        resolve(response.status);
      } else {
        reject(response.status);
      }
    });

    const nomeItemFormatado = nomeItem[0].toUpperCase() + nomeItem.slice(1);

    toast.promise(examplePromise, {
      success: { title: nomeItemFormatado + " adicionado" },
      error: { title: "Erro ao adicionar " + nomeItem },
      loading: { title: `Adicionando ${nomeItem}...` },
    });
  }

  return (
    <>
      <Button onClick={onOpen} variant="solid" colorScheme="blue" w="100%">
        Adicionar {nomeItem}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar {nomeItem}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {propriedades.map((propriedade, index) => (
              <FormControl key={index} mt={4}>
                <FormLabel>{propriedade.nome}</FormLabel>
                {propriedade.codigo === "genero" ? (
                  <Select
                    name={propriedade.codigo}
                    onChange={(e) => handleChange(e, propriedade)}
                  >
                    {generos.map((genero, index) => (
                      <option key={index} value={genero.codigo}>
                        {genero.codigo}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    name={propriedade.codigo}
                    placeholder={propriedade.nome}
                    onChange={(e) => handleChange(e, propriedade)}
                  />
                )}
              </FormControl>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={adicionarLivro}>
              Adicionar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}