import { navegar } from '../hooks/useRota'
import { useInstalarApp } from '../hooks/useInstalarApp'

export default function Cabecalho() {
  const { podeInstalar, instalar } = useInstalarApp()

  return (
    <header className="cabecalho">
      <div className="container cabecalho__conteudo">
        <a
          href="#/"
          className="marca"
          onClick={(e) => {
            e.preventDefault()
            navegar('/')
          }}
        >
          <img src="/logo.svg" alt="" className="marca__logo" />
          <span className="marca__texto">
            <strong>AIRSUL</strong>
            <small>REFRIGERAÇÕES</small>
          </span>
        </a>

        {podeInstalar && (
          <button className="botao botao--instalar" onClick={instalar}>
            ⬇ Instalar app
          </button>
        )}
      </div>
    </header>
  )
}
