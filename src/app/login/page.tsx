import Image from "next/image";
import LoginInputs from "@/components/login/LoginInputs";

export default function login() {
    return (
      <div className="flex w-screen">
        <div className="h-screen w-1/3 bg-neutral-500">
          <Image src="" alt="" />
        </div>
        <main className="flex justify-center items-center w-2/3">
          <LoginInputs/>
        </main>
      </div>
    )
  }
  