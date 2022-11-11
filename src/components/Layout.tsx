import Titulo from './Titulo'

interface LayoutProps {
  titulo: string
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-gray-800 text-white
            rounded-md
        `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  )
}
