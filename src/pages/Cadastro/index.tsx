import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { Box, Legend, BoxButton, TagCep, Tag } from "./styles"
import InputSelect from '../../components/Select'
import Input from '../../components/Input'
import api from '../../Api/Api'
import axios from 'axios';
import {Title} from '../Home/styles'


const Cadastro: React.FC = () => {

  const router = useRouter()

  const [lanca, setLanca] = useState('Breve lançamento');
  const [nome, setNome] = useState('');
  const [resis, setResis] = useState('Residencial');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');

  const [dadosCep, setDadosCep] = useState('')
  const [message, setMessage] = useState('');

  function getDados(e) {
    
    if (e.key === "Enter") {
      if(cep.length === 8 ){
      api.get(`${cep}/json`)
        .then((response) => {
          setDadosCep(response.data);
          console.log(response.data);
        }).catch((error) => console.log(error))
       }
     }
  }

  const Adicionar = (e) => {
    e.preventDefault()

    try {

      if (lanca.length === 0 || nome.length === 0 || resis.length === 0 || numero.length === 0) {
        setMessage(
          'Informar todos os campos do formulámario!'
        );
      } else {

        const empre = {

          name: nome,
          status: lanca,
          purpose: resis,
          ri_number: numero,
          address: {
            street: dadosCep.logradouro,
            number: dadosCep.siafi,
            district: dadosCep.bairro,
            city: dadosCep.localidade,
            state: dadosCep.uf,
            cep: dadosCep.cep
          }

        };

        axios.post(`http://localhost:3001/enterprises`, empre)
          .then((response) => {
            router.push(`/`);
          }).catch((error) => console.log(error))
      }

    } catch (error) {

      if (error.response.status === 404)
        setMessage('Ocorreu algum problema no servidor!');

      setTimeout(() => {
        setMessage('');

      }, 5000);
    }

  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <main>
        <Menu titleMenu="Cadastro de empreendimento" title="adicionar" />

        <Box>
          <Legend>Informações</Legend>

          <InputSelect
            name="subject"
            label="Lançamento"
            value={lanca}
            onChange={(e) => { setLanca(e.target.value) }}
            options={[
              { value: 'Breve lançamento', label: 'Breve lançamento' },
              { value: 'Lançamento', label: 'Lançamento' },
              { value: 'Em obras', label: 'Em obras' },
              { value: 'Pronto pra morar', label: 'Pronto pra morar' },
            ]} />

          <Input title="nome do empreendimento" value={nome} onChange={(e) => setNome(e.target.value)} />

          <InputSelect
            name="subject"
            label="residencial"
            value={resis}
            onChange={(e) => { setResis(e.target.value) }}
            options={[
              { value: 'Residencial', label: 'Residencial' },
              { value: 'Comercial', label: 'Comercial' },
            ]} />


          <div onKeyPress={(e) => getDados(e)} style={{ width: '100%' }}>
            <Input title="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
          </div>

          <TagCep>
            <Tag>{dadosCep.logradouro}</Tag>
            <Tag>{dadosCep.bairro}</Tag>
            <Tag>{dadosCep.localidade}</Tag>
            <Tag>{dadosCep.uf}</Tag>
          </TagCep>


          <Input title="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />

        </Box>

        <Title>
          {message}
        </Title>

        <BoxButton>
          <Button title="Cadastrar" onClick={Adicionar} />
        </BoxButton>
      </main>
    </>
  )
}

export default Cadastro;
