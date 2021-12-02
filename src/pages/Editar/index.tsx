import React, { useState, useEffect } from "react"
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import {Box,Legend , BoxButton,TagCep, Tag } from "./styles"
import InputSelect from '../../components/Select'
import Input from '../../components/Input'
import api from '../../Api/Api'
import axios from 'axios';
import { useRouter } from "next/router"
import {Title} from '../Home/styles'


interface ceps {
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string
}

const Editar = (ceps) => {

  const [lanca, setLanca] = useState('');
  const [nome, setNome] = useState('');
  const [resis, setResis] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [dados, setDados] = useState([]);
  const [dadosCep, setDadosCep] = useState(ceps);
  const [message, setMessage] = useState('');

  const router = useRouter()
  const {
    query: { id },
  } = router

  const Allget = () => {
    axios.get(`http://localhost:3001/enterprises?id=${id}`)
      .then((response) => {
        setDados(response.data);
        console.log(response.data);
      }).catch((error) => console.log(error))

  }
      
  useEffect(() => {
      Allget();
      dados.map( dado => {
        setLanca(dado.status);
        setNome(dado.name);
        setNumero(dado.ri_number);
        setResis(dado.purpose);
        setCep(dado.address.cep);
        setDadosCep(dado.address)
        })
  }, [(e) => id])


  const Atualizar = (e) => {

    if (lanca.length === 0 || nome.length === 0 || resis.length === 0 || dadosCep.length === 0 || numero.length === 0) {
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

        axios.patch(`http://localhost:3001/enterprises/${id}`, empre)
          .then((response) => {
            router.push(`/`);
          }).catch((error) => console.log(error))
      }
  } 


  function getCep(e) {
    if (e.key === "Enter") {
      api.get(`${cep}/json`)
      .then((response)=>{
        setDadosCep( response.data);
        console.log(response.data);
      }).catch((error)=>console.log(error))
    }
  }


  return (
    <>
      <Head>
        <title>Editar</title>
      </Head>

      <main>
        <Menu titleMenu="Editar empreendimento" title="adicionar"/>

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

            <Input title="nome do empreendimento"  value={nome} onChange={(e) => setNome(e.target.value)}  /> 

            <InputSelect
            name="subject"
            label="residencial"
            value={resis}
            onChange={(e) => { setResis(e.target.value) }}
            options={[
              { value: 'Residencial', label: 'Residencial' },
              { value: 'Comercial', label: 'Comercial' },
            ]} />

             <div onKeyPress={(e) => getCep(e)} style={{ width: '100%'}}> 
                <Input title="CEP" value={cep} onChange={(e) => setCep(e.target.value)}/> 
             </div>

             <TagCep>
                <Tag>{dadosCep.logradouro}</Tag>
                <Tag>{dadosCep.bairro}</Tag>
                <Tag>{dadosCep.localidade}</Tag>
                <Tag>{dadosCep.uf}</Tag>
             </TagCep>

             <Input title="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/> 

        </Box>

        <Title>
          {message}
        </Title>

        <BoxButton>
             <Button title="Editar" onClick={Atualizar} />
        </BoxButton>
      </main>
    </>
  )
}

export default Editar;