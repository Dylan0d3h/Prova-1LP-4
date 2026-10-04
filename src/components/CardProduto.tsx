import type { Produto } from '../types/Produto'
import { formatarBtus, formatarPreco } from '../utils/formatadores'
import { navegar } from '../hooks/useRota'

interface CardProdutoProps {
  produto: Produto
}

export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={produto.imagem} alt={produto.nome} loading="lazy" />
        {produto.precoAntigo && <span className="selo selo--oferta">Oferta</span>}
        {produto.inverter && <span className="selo selo--inverter">Inverter</span>}
      </div>

      <div className="card__corpo">
        <span className="card__marca">
          {produto.marca} · {produto.tipo} · {formatarBtus(produto.btus)}
        </span>
        <h2 className="card__titulo">{produto.nome}</h2>
        <p className="card__descricao">{produto.descricaoCurta}</p>

        <div className="card__preco">
          {produto.precoAntigo && <s>{formatarPreco(produto.precoAntigo)}</s>}
          <strong>{formatarPreco(produto.preco)}</strong>
        </div>
      </div>

      <button className="botao botao--primario card__botao" onClick={() => navegar(`/produto/${produto.id}`)}>
        Mais informações
      </button>
    </article>
  )
}
