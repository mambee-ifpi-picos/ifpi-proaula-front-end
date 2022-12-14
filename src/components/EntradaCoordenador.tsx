interface EntradasCoordenadorProps {
  texto: string
  tipo?: "number" | "text"
  valor: string
  valorMudou?: (valor: any) => void
}

export default function EntradaCoodenador(props: EntradasCoordenadorProps) {
  return (
    <div className="flex flex-col">
      <label className="mt-3 mb-2">{props.texto}</label>
      <input
        className="border border-purple-500 rounded-lg bg-white focus:outline-none px-2 py-2 text-black"
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}
