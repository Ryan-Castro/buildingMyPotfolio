import { User, GraduationCap } from "lucide-react"
export default function CredentialsInputs(){
    return (
        <div className="flex flex-col w-3/5 bg-neutral-950 p-6 rounded-3xl shadow-lg">
            <h1 className="text-3xl">Informações adicionais</h1>
            <h2 className="text-1xl mb-3 mt-2">Preencha com Suas informações</h2>
            <div className="flex items-center justify-between my-7 ">
                <div className="flex justify-center items-center w-1/2">
                    <User className="bg-neutral-900 w-40 h-40 p-4 rounded-full"/>
                </div>
                <div className="w-1/2">
                    <h3 className="text-2xl mb-5 mt-2">Foto de Perfil</h3>
                    <label htmlFor="InputPhoto" className="bg-blue-900 px-7 py-2 rounded-md">Escolha Uma foto</label>
                    <input type="file" name="" id="InputPhoto"  className="hidden"/>
                </div>
            </div>
            <label htmlFor="inputNick" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <User/>
                <input type="text" id="inputNick" placeholder="Apelido" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <label htmlFor="inputWork" className="bg-neutral-900 flex p-3 gap-4 items-center my-2">
                <GraduationCap/>
                <input type="text" id="inputWork" placeholder="Profissão" className="bg-transparent w-full h-full outline-none"/>
            </label>
            <input type="button" value="Criar minha Conta" className="my-5 bg-green-800 py-4 rounded-lg"/>
        </div>
    )
}
  