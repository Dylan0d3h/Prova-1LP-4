import type { Produto } from '../types/Produto'
import { formatarPreco, linkWhatsApp } from '../utils/formatadores'
import { navegar } from '../hooks/useRota'
import IconeWhatsApp from './IconeWhatsApp'

interface DetalhesProdutoProps {
  produto: Produto | undefined
}

export default function DetalhesProduto({ produto }: DetalhesProdutoProps) {
  if (!produto) {
    return (
      <main className="container detalhes">
        <p className="vazio">Produto não encontrado.</p>
        <button className="botao botao--secundario" onClick={() => navegar('/')}>
          ← Voltar ao catálogo
        </button>
      </main>
    )
  }

  const mensagem = `Olá! Tenho interesse no ${produto.nome} (${produto.marca}) de ${formatarPreco(produto.preco)}. Pode me passar mais informações?`
  const parcela = produto.preco / 10

  return (
    <main className="container detalhes">
      <button className="voltar" onClick={() => navegar('/')}>
        ← Voltar ao catálogo
      </button>

      <div className="detalhes__grid">
        <div className="detalhes__imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="detalhes__info">
          <span className="card__marca">
            {produto.marca} · {produto.tipo}
          </span>
          <h1>{produto.nome}</h1>
          <p className="detalhes__descricao">{produto.descricaoCompleta}</p>

          <ul className="destaques">
            {produto.destaques.map((d) => (
              <li key={d}>✓ {d}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="painel">
        <h2>Especificações técnicas</h2>
        <table className="tabela">
          <tbody>
            <tr>
              <th>Marca</th>
              <td>{produto.marca}</td>
            </tr>
            <tr>
              <th>Tipo</th>
              <td>{produto.tipo}</td>
            </tr>
            <tr>
              <th>Inverter</th>
              <td>{produto.inverter ? 'Sim' : 'Não'}</td>
            </tr>
            {Object.entries(produto.especificacoes).map(([chave, valor]) => (
              <tr key={chave}>
                <th>{chave}</th>
                <td>{valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="painel painel--preco">
        <div>
          {produto.precoAntigo && <s className="preco-antigo">De {formatarPreco(produto.precoAntigo)}</s>}
          <p className="preco-atual">
            {produto.precoAntigo ? 'Por ' : ''}
            <strong>{formatarPreco(produto.preco)}</strong>
          </p>
          <p className="preco-parcela">ou 10x de {formatarPreco(parcela)} sem juros</p>
        </div>

        <a className="botao botao--whatsapp" href={linkWhatsApp(mensagem)} target="_blank" rel="noopener noreferrer">
          <IconeWhatsApp tamanho={22} />
          Falar com o vendedor no WhatsApp
        </a>
      </section>
    </main>
  )
}
