export default function Jsx() {

const titulo = <h1>JSX e um conceito central" </h1>

function subtitulo() {
    return <h2> {"Muito Legal".toUpperCase()}</h2>
}


return (

    <div>
        {titulo}
        {subtitulo()}
        <p>
            {JSON.stringify({nome: "Breno", idade: 19})}
        </p>
    </div>
)
}