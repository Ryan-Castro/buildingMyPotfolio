import { Mail, Lock, LockKeyhole} from "lucide-react"
import Image from "next/image"


export default function LoginInputs() {
    return (
        <div className="flex flex-col w-3/5 bg-neutral-950 p-6 rounded-3xl shadow-lg">
            <h1 className="text-3xl">Entre com sua conta</h1>
            <h2 className="text-1xl mb-7 mt-2">Preencha com E-mail e Senha</h2>
            <label htmlFor="inputEmail" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <Mail/>
                <input type="text" id="inputEmail" placeholder="E-mail" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <label htmlFor="inputPassword" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <LockKeyhole/>
                <input type="password" id="inputPassword" placeholder="Senha" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <input type="button" value="Continuar" className="my-5 bg-green-800 py-4 rounded-lg"/>
            <hr />
            <button className="px-4 py-3 flex gap-2 rounded-lg hover:text-slate-300 hover:shadow transition duration-150 mt-4 bg-neutral-900">
                <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" width={200} height={200} loading="lazy" alt="google logo"/>
                <span>Entrar com Google</span>
            </button>
        </div>
    )
}

                