import type { TipoAparelho } from '../types/Produto'

export type FiltroTipo = TipoAparelho | 'Todos'

interface FiltrosProps {
  busca: string
  tipo: FiltroTipo
  tipos: FiltroTipo[]
  aoBuscar: (texto: string) => void
  aoEscolherTipo: (tipo: FiltroTipo) => void
}

export default function Filtros({ busca, tipo, tipos, aoBuscar, aoEscolherTipo }: FiltrosProps) {
  return (
    <div className="filtros">
      <input
        type="search"
        className="filtros__busca"
        placeholder="Buscar por modelo, marca ou BTUs..."
        value={busca}
        onChange={(e) => aoBuscar(e.target.value)}
        aria-label="Buscar produto"
      />
      <div className="filtros__tipos" role="group" aria-label="Filtrar por tipo">
        {tipos.map((t) => (
          <button
            key={t}
            className={`chip ${t === tipo ? 'chip--ativo' : ''}`}
            onClick={() => aoEscolherTipo(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
