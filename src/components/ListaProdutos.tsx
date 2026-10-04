import { useMemo, useState } from 'react'
import type { Produto } from '../types/Produto'
import CardProduto from './CardProduto'
import Filtros, { type FiltroTipo } from './Filtros'

interface ListaProdutosProps {
  produtos: Produto[]
}

export default function ListaProdutos({ produtos }: ListaProdutosProps) {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState<FiltroTipo>('Todos')

  const tipos = useMemo<FiltroTipo[]>(
    () => ['Todos', ...new Set(produtos.map((p) => p.tipo))],
    [produtos],
  )

  const filtrados = produtos.filter((p) => {
    const texto = `${p.nome} ${p.marca} ${p.btus} ${p.tipo}`.toLowerCase()
    const combinaBusca = texto.includes(busca.trim().toLowerCase().replace('.', ''))
    const combinaTipo = tipo === 'Todos' || p.tipo === tipo
    return combinaBusca && combinaTipo
  })

  return (
    <main className="container">
      <section className="hero">
        <h1>Conforto térmico para o seu ambiente</h1>
        <p>Confira nossos modelos de ar-condicionado com instalação feita pela equipe AirSul.</p>
      </section>

      <Filtros busca={busca} tipo={tipo} tipos={tipos} aoBuscar={setBusca} aoEscolherTipo={setTipo} />

      {filtrados.length > 0 ? (
        <div className="grade">
          {filtrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="vazio">Nenhum produto encontrado para essa busca.</p>
      )}
    </main>
  )
}
