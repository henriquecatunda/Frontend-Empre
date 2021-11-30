import React, {useState} from "react"
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import InputSearch from '../../components/InputSearch'
import Card from '../../components/Card'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {BoxCard, Box } from "./styles"

const Home: React.FC = () => {

  const [nomeInput, setNomeInput] = useState('');

  
  const Adicionar = () => {

  }


  const Pesquisar = () => {

  }


  const Editar = () => {

  }



  const Excluir = () => {

  }


  const CarregarMais = () => {

  }



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
       <Menu titleMenu="Empreendimentos" title="adicionar" icon={faPlus} onClick={Adicionar}/> 

       <InputSearch title="pesquisar" value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} onClick={Pesquisar}/>

      <BoxCard>
       <Card title="vila velha" subTile="rua doirio, sapi" onClickEditar={Editar} onClickExcluir={Excluir} tagLancamento="lançamento" tagResidencial="residencial"/> 
      </BoxCard>
      <Box>
       <Button title="carregar mais" onClick={CarregarMais}/>
       </Box>
      </main>
    </>
  )
}

export default Home;
