'use client'
import Livros from "@/components/livros"
import { Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useState, useContext } from "react"
import { GlobalContext } from "@/contexts/global"

export default function Home() {
  const { tipoAcesso, setTipoAcesso } = useContext(GlobalContext)

  const [tabIndex, setTabIndex] = useState(0)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
    setTipoAcesso(index === 0 ? 'user' : 'admin')
  }

  return (
    <>
      <Tabs isFitted variant='soft-rounded' colorScheme='blue' index={tabIndex} onChange={handleTabsChange} mt='5'>
        <TabList mb='1em' paddingX='10'>
          <Tab>Usuário</Tab>
          <Tab>Vendedor</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Livros />
          </TabPanel>
          <TabPanel>
            <Stack textAlign='center' mb='5'>
              <Button variant='solid' colorScheme='blue' w='100%'>Adicionar Livro</Button>
            </Stack>
            <Livros />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
