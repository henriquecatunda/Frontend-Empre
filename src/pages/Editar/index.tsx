import React, { useState } from "react"
import Head from 'next/head'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Box,Legend , BoxButton,TagCep, Tag } from "./styles"
import InputSelect from '../../components/Select'
import Input from '../../components/Input'

const Editar: React.FC = () => {

  const [lanca, setLanca] = useState('');
  const [nome, setNome] = useState('');
  const [resis, setResis] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');


  const Atualizar = () => {

  } 

  return (
    <>
      <Head>
        <title>Editar</title>
      </Head>

      <main>
        <Menu titleMenu="Editar empreendimento" title="adicionar" icon={faPlus} />

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

             <Input title="CEP" value={cep} onChange={(e) => setCep(e.target.value)}/> 

             <TagCep>
                <Tag>jjj</Tag>
                <Tag> jjj</Tag>
                <Tag> jj</Tag>
                <Tag> kkk</Tag>
             </TagCep>

             <Input title="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/> 

        </Box>

        <BoxButton>
             <Button title="Cadastrar" onClick={Atualizar} />
        </BoxButton>
      </main>
    </>
  )
}

export default Editar
