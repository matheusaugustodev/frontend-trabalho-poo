'use client'
import { Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useState, useContext } from "react"
import { GlobalContext } from "@/contexts/global"
import Lista from "@/components/padrao/lista"

export default function Home() {
  const { dados } = useContext(GlobalContext)

  const [tabIndex, setTabIndex] = useState(0)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  const listaDados = []

  for (const dado in dados) {
    listaDados.push({
      nome: dados[dado].nome,
      tipoItem: dado,
      propriedades: dados[dado].propriedades
    })
  }

  return (
    <>
      <Tabs isFitted variant='soft-rounded' colorScheme='blue' index={tabIndex} onChange={handleTabsChange} mt='5'>
        <TabList mb='1em' paddingX='10'>
          {
            listaDados.map((dado, index) => (
              <Tab key={index}>{dado.nome}</Tab>
            ))
          }
        </TabList>
        <TabPanels>
          {
            listaDados.map((dado, index) => (
              <TabPanel key={index}>
                <Lista tipoItem={dado.tipoItem} key={index}/>
              </TabPanel>
            ))
          }
        </TabPanels>
      </Tabs>
    </>
  );
}
