import React, { useState, useEffect } from "react"
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import InputSearch from '../../components/InputSearch'
import Card from '../../components/Card'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { BoxCard, Box, Page } from "./styles"
import axios from 'axios';

const Home: React.FC = () => {

  const [nomeInput, setNomeInput] = useState('');
  const [dados, setDados] = useState([]);
  const [pages, setPages] = useState(1);
  let [indexPage, setIndexPage] = useState(1);
  
  const Allget = () => {

    console.log(indexPage)
    axios.get(`http://localhost:3001/enterprises?_page=${indexPage}&_limit=10`)
      .then((response) => {
        setDados(response.data);
        console.log(response.data);
      }).catch((error) => console.log(error))
  }


  useEffect(() => {

    Allget();

  }, [indexPage])


  const Pesquisar = (e) => {

    if (e.key === "Enter") {
    axios.get(`http://localhost:3001/enterprises?name=${nomeInput}`)
    .then((response) => {
      setDados(response.data);
      console.log(response.data);
    }).catch((error) => console.log(error))
    setNomeInput('')
    }
    axios.get(`http://localhost:3001/enterprises?name=${nomeInput}`)
    .then((response) => {
      setDados(response.data);
      console.log(response.data);
    }).catch((error) => console.log(error))
    setNomeInput('')
  }

  
  const Excluir = (id) => {
    axios.delete(`http://localhost:3001/enterprises/PA03`)
    .then((response) => {
      Allget();
    }).catch((error) => console.log(error))
  }


  const CarregarMais = () => {

    if(pages <= dados.length / 10){
     setPages(pages + 1);
     Allget();
    }else{
      alert("Final da lista")
    }
  }


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Menu titleMenu="Empreendimentos" title="adicionar" icon={faPlus} />

        <div onKeyPress={(e) => Pesquisar(e)} style={{ width: '100%'}}> 
        <InputSearch title="pesquisar" value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} onClick={Pesquisar} />
        </div>

        <BoxCard>
          {dados && dados.map((dado, index) => (
            <Card key={index} title={dado.name} subTile={`${dado.address.street}, ${dado.address.number} - ${dado.address.district}, ${dado.address.city}`} onClickExcluir={Excluir} tagLancamento={dado.status} tagResidencial={dado.purpose} />
          ))}
        </BoxCard>

        <Box>
          {Array.from(Array(pages), (page, i) => {
              return <Page value={i} onClick={(e) => setIndexPage(() => indexPage = i+1)}> {i +1}</Page>
          })}
        </Box>
        <Box>
          <Button title="carregar mais" onClick={CarregarMais} />
        </Box>

      </main>
    </>
  )
}

export default Home;
