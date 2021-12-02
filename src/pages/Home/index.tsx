import React, { useState, useEffect } from "react"
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import InputSearch from '../../components/InputSearch'
import Card from '../../components/Card'
import { BoxCard, Box, Page, Title } from "./styles"
import axios from 'axios';
import plus from '../../assets/plus.png'

const Home: React.FC = () => {

  const [nomeInput, setNomeInput] = useState('');
  const [dados, setDados] = useState([]);
  const [pages, setPages] = useState(1);
  let [indexPage, setIndexPage] = useState(1);
  const [erro, setErro] = useState('');
  const [erroName, setErroName] = useState('');

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

      if (nomeInput.length !== 0) {
        axios.get(`http://localhost:3001/enterprises?name=${nomeInput}`)
          .then((response) => {
            setDados(response.data);
            console.log(response.data);
          }).catch((error) => console.log(error))
        setNomeInput('')
      } else {
        setErroName("Pesquisa em branco");
      }
    }
    if (nomeInput.length !== 0) {
      axios.get(`http://localhost:3001/enterprises?name=${nomeInput}`)
        .then((response) => {
          setDados(response.data);
          console.log(response.data);
        }).catch((error) => console.log(error))
      setNomeInput('')
    }else{
      setErroName("Pesquisa em branco");
    }
  }


  const Excluir = (id) => {
    axios.delete(`http://localhost:3001/enterprises/${id}`)
      .then((response) => {
        Allget();
      }).catch((error) => console.log(error))
  }


  const CarregarMais = () => {

    if (pages <= dados.length / 10) {
      setPages(pages + 1);
      Allget();
    } else {
      setErro("Final da lista");
    }
  }


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Menu titleMenu="Empreendimentos" title="adicionar" icon={plus.src} />

        <div onKeyPress={(e) => Pesquisar(e)} style={{ width: '100%' }}>
          <InputSearch title="pesquisar" value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} onClick={Pesquisar} />
        </div>

        <Title>
          {erroName}
        </Title>

        <BoxCard>
          {dados && dados.map((dado, index) => (
            <Card key={index} title={dado.name} id={dado.id} subTile={`${dado.address.street}, ${dado.ri_number} - ${dado.address.district}, ${dado.address.city}`} onClickExcluir={() => Excluir(dado.id)} tagLancamento={dado.status} tagResidencial={dado.purpose} />
          ))}
        </BoxCard>

        <Box>
          {Array.from(Array(pages), (page, i) => {
            return <Page value={i} onClick={(e) => setIndexPage(() => indexPage = i + 1)}> {i + 1}</Page>
          })}
        </Box>

        <Title>
          {erro}
        </Title>

        <Box>
          <Button title="carregar mais" onClick={CarregarMais} />
        </Box>

      </main>
    </>
  )
}

export default Home;
