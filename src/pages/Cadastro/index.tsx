import React, { useState,useEffect } from 'react';
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Box,Legend , BoxButton,TagCep, Tag, InputCep } from "./styles"
import InputSelect from '../../components/Select'
import Input from '../../components/Input'
import api from '../../Api/Api'

const Cadastro: React.FC = () => {

  const [lanca, setLanca] = useState('');
  const [nome, setNome] = useState('');
  const [resis, setResis] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');

  const [dadosCep, setDadosCep] = useState([])

  function getDados(e) {
    if (e.key === "Enter") {
      api.get(`${cep}/json`)
      .then((response)=>{
        setDadosCep( response.data);
        console.log(response.data);
      }).catch((error)=>console.log(error))
    }
  }

  const Adicionar = (e) => {
    
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <main>
        <Menu titleMenu="Cadastro de empreendimento" title="adicionar" icon={faPlus} />

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


             <div onKeyPress={(e) => getDados(e)} style={{ width: '100%'}}> 
             <Input title="CEP" value={cep} onChange={(e) => setCep(e.target.value)} /> 
             </div>

             <TagCep>
                <Tag>{dadosCep.logradouro}</Tag>
                <Tag>{dadosCep.bairro}</Tag>
                <Tag>{dadosCep.localidade}</Tag>
                <Tag>{dadosCep.uf}</Tag>
             </TagCep>


             <Input title="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/> 

        </Box>

        <BoxButton>
             <Button title="Cadastrar" onClick={getDados} />
        </BoxButton>
      </main>
    </>
  )
}

export default Cadastro;
