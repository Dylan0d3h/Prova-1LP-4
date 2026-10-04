import { produtos } from './data/produtos'
import { useRota } from './hooks/useRota'
import Cabecalho from './components/Cabecalho'
import AvisoOffline from './components/AvisoOffline'
import ListaProdutos from './components/ListaProdutos'
import DetalhesProduto from './components/DetalhesProduto'
import BotaoWhatsAppFlutuante from './components/BotaoWhatsAppFlutuante'
import Rodape from './components/Rodape'

export default function App() {
  const rota = useRota()

  const correspondencia = rota.match(/^\/produto\/(.+)$/)
  const produtoSelecionado = correspondencia ? produtos.find((p) => p.id === correspondencia[1]) : null

  return (
    <>
      <AvisoOffline />
      <Cabecalho />
      {correspondencia ? (
        <DetalhesProduto produto={produtoSelecionado ?? undefined} />
      ) : (
        <ListaProdutos produtos={produtos} />
      )}
      <Rodape />
      <BotaoWhatsAppFlutuante />
    </>
  )
}
