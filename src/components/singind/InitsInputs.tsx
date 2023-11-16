import { Mail, Lock, LockKeyhole} from "lucide-react"


export default function InitsInputs() {
    return (
        <div className="flex flex-col w-3/5 bg-neutral-950 p-6 rounded-3xl shadow-lg">
            <h1 className="text-3xl">Criar minha conta</h1>
            <h2 className="text-1xl mb-7 mt-2">Preencha com seu E-mail e Senha</h2>
            <label htmlFor="inputEmail" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <Mail/>
                <input type="text" id="inputEmail" placeholder="E-mail" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <label htmlFor="inputPassword" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <LockKeyhole/>
                <input type="password" id="inputPassword" placeholder="Senha" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <label htmlFor="inputConfirmPassword" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <Lock/>
                <input type="text" id="inputConfirmPassword" placeholder="Confirme sua senha" className="bg-transparent w-full h-full outline-none"/>
            </label> 
            <input type="button" value="Continuar" className="my-5 bg-green-800 py-4 rounded-lg"/>
        </div>
    )
}
  