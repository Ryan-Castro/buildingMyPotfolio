import Link from "next/link"

export default function NavBar() {
    return(
        <nav className="flex justify-between items-center p-5 bg-neutral-950">
            <div className="text-3xl">logo</div>
            <ul className="flex items-center gap-6">
                <li>
                    <Link href="/singin">Criar conta</Link>
                </li>
                <li className="bg-green-800 p-2 px-5 rounded-md">
                    <Link href="login">Entrar</Link>
                </li>
            </ul>
        </nav>
    )
}