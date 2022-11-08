import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import PeriodoLetivo from '../core/PeriodoLetivo'

// const Home: NextPage = () => {
export default function Home() {
  const [periodoLetivo, setperiodoLetivo] = useState<PeriodoLetivo>(
    PeriodoLetivo.vazio()
  )
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const PeriodoLetivos = [
    new PeriodoLetivo('1', 'Quimica', '03-01-2022', '04-06-2022'),
    new PeriodoLetivo('2', 'Fisica', '05-01-2022', '11-06-2022'),
    new PeriodoLetivo('3', 'ADS', '07-01-2022', '10-06-2022'),
  ]

  function periodoLetivoSelecionado(periodoLetivo: PeriodoLetivo) {
    setperiodoLetivo(periodoLetivo)
    setVisivel('form')
  }

  function periodoLetivoExcluido(periodoLetivo: PeriodoLetivo) {
    console.log(`periodo Letivo de ${periodoLetivo.descricao} foi excluido`)
  }

  function novoPeriodoLetivo() {
    setperiodoLetivo(PeriodoLetivo.vazio())
    setVisivel('form')
  }

  function salvarPeriodoLetivo(periodoLetivo: PeriodoLetivo) {
    console.log(periodoLetivo)
    setVisivel('tabela')
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-white
    `}
    >
      <Layout titulo="HU 04 - Periodo Letivo - ADM">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" onClick={novoPeriodoLetivo}>
                Adicionar Periodo Letivo
              </Botao>
            </div>
            <Tabela
              periodoLetivo={PeriodoLetivos}
              periodoLetivoSelecionado={periodoLetivoSelecionado}
              periodoLetivoExcluido={periodoLetivoExcluido}
            />
          </>
        ) : (
          <Formulario
            periodoLetivo={periodoLetivo}
            cancelado={() => setVisivel('tabela')}
            periodoLetivoMudou={salvarPeriodoLetivo}
          />
        )}
      </Layout>
    </div>
  )
}

// export default Home
