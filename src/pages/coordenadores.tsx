import React, { useState } from 'react'
import Professor from '../core/Professor'
import Coordenador from '../core/Coordenador'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaCoordenador from '../components/TabelaCoordenador'
import FormularioCoordenador from '../components/FormularioCoordenador'

export default function Coordenadores() {
  const [visivel, setVisivel] = useState<'tabelaCoordenador' | 'formCoordenador'>('tabelaCoordenador')

  const [coordenador, setCoordenador] = useState<Coordenador>(
    Coordenador.vazio()
  )

  const professores = [
    new Professor(
      '12345ER',
      'Jesiel',
      'Jesiel@ifpi.edu.br',
      'Professor',
      'ADS'
    ),
    new Professor(
      '12345UY',
      'Aislan',
      'Aislan@ifpi.edu.br',
      'Professor',
      'ADS'
    ),
    new Professor('12345OP', 'Jader', 'Jader@ifpi.edu.br', 'Professor', 'ADS'),
  ]

  const coordenadores = [
    new Coordenador(
      1,
      'Base Comum',
      'Ensino Médio',
      professores[0],
      'Aprovar Curso'
    ),
    new Coordenador(
      2,
      'Gestão',
      'Ensino Médio',
      professores[1],
      'Aprovar Curso'
    ),
    new Coordenador(3, 'ADS', 'Superior', professores[2], 'Aprovar Curso'),
  ]

  function coordenadorSelecionado(coordenador: Coordenador) {
    setVisivel('formCoordenador')
    setCoordenador(coordenador)
  }

  function coordenadorInativado(coordenador: Coordenador) {
    console.log(`O coordenador ${coordenador.professor.nome} foi inativado`)
    alert(`O coordenador ${coordenador.professor.nome} foi inativado`)
  }

  function novoCoordenador() {
    setCoordenador(Coordenador.vazio())
    setVisivel('formCoordenador')
  }

  function salvarCoordenador(coordenador: Coordenador) {
    console.log(coordenador)
   
    if(coordenador.eixo == ''){
      alert(`preencha o eixo corretamente`)
    }
    else if(coordenador.modalidade == ''){
      alert(`preencha a modalidade corretamente`)
    }
    else if(coordenador.professor.nome == ''){
      alert(`preencha professor corretamente`)
    }
    else if(coordenador.aprovaSolicitacao == ''){
      alert(`preencha o aprova solicitação corretamente`)
    }
    else{
      setVisivel('tabelaCoordenador')
      console.log(coordenador.professor)
    }
  }

  return (
    <div
      className={`
                flex justify-center items-center h-screen
                bg-gray-600
            `}
    >
      <Layout titulo="Coordenadores - Administrador">
        {visivel === 'tabelaCoordenador' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar onClick={novoCoordenador}>
                Novo Coordenador
              </BotaoAdicionar>
            </div>
            <TabelaCoordenador
              coordenadores={coordenadores}
              coordenadorSelecionado={coordenadorSelecionado}
              coordenadorInativado={coordenadorInativado}
            />
          </>
        ) : (
          <FormularioCoordenador
            coordenador={coordenador}
            cancelado={() => setVisivel('tabelaCoordenador')}
            coordenadorMudou={salvarCoordenador}
          />
        )}
      </Layout>
    </div>
  )
}
