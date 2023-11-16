import CredentialsInputs from "@/components/singind/CredentialsInputs";
import InitsInputs from "@/components/singind/InitsInputs";
import Image from "next/image";

export default function singin() {
    return (
      <div className="flex w-screen">
        <div className="h-screen w-1/3 bg-neutral-500">
          <Image src="" alt="" />
        </div>
        <main className="flex justify-center items-center w-2/3">
            <CredentialsInputs/>
        </main>
      </div>
    )
  }
  