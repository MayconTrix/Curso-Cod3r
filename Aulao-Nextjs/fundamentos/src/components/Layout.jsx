import Link from 'next/link'

export default function Layout(props) {
    console.log(props)
    return (
        <div>
            <Link href='/'>Voltar</Link>
            {props.children}
        </div>
    )
}