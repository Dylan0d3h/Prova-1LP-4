import { CIDADE_LOJA, NOME_LOJA } from '../config'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <p>
          <strong>{NOME_LOJA}</strong> · Venda, instalação e manutenção · {CIDADE_LOJA}
        </p>
        <p className="rodape__nota">Preços ilustrativos, sujeitos a alteração. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
