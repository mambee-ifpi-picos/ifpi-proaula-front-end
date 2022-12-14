import React, { useState } from 'react'
import Professor from '../core/Professor'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaProfessor from '../components/TabelaProfessor'
import FormularioProfessor from '../components/FormularioProfessor'

export default function Professores() {
  const [visivel, setVisivel] = useState<'tabelaProfessor' | 'formProfessor'>('tabelaProfessor')

  const [professor, setProfessor] = useState<Professor>(Professor.vazio())

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

  function professorSelecionado(professor: Professor) {
    setVisivel('formProfessor')
    setProfessor(professor)
  }

  function professorInativado(professor: Professor) {
    console.log(`O professor ${professor.nome} foi inativado`)
    alert(`O professor ${professor.nome} foi inativado`)
  }

  function novoProfessor() {
    setProfessor(Professor.vazio())
    setVisivel('formProfessor')
  }

  function salvarProfessor(professor: Professor) {
    console.log(professor)
    
    if(professor.matricula == ''){
      alert(`preencha a matricula corretamente `)
    }
    else if(professor.nome == ''){
      alert(`preencha  o nomecorretamente `)
    }
    else if(professor.email == ''){
      alert(`preencha o email corretamente `)
    }
    else if(professor.qualificacao == ''){
      alert(`preencha a qualificação corretamente `)
    }
    else if(professor.eixo == ''){
      alert(`preencha o eixo corretamente `)
    }
    else{
      setVisivel('tabelaProfessor')
    }
    
  }

  return (
    <div
      className={`
          flex justify-center items-center h-screen
         bg-gray-600
      `}
    >
      <Layout titulo="Professores - Administrador">
        {visivel === 'tabelaProfessor' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar onClick={novoProfessor}>
                Novo Professor
              </BotaoAdicionar>
            </div>
            <TabelaProfessor
              professores={professores}
              professorSelecionado={professorSelecionado}
              professorInativado={professorInativado}
            />
          </>
        ) : (
          <FormularioProfessor
            professor={professor}
            cancelado={() => setVisivel('tabelaProfessor')}
            professorMudou={salvarProfessor}
          />
        )}
      </Layout>
    </div>
  )
}
