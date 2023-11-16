import NavBar from "@/components/home/Navbar"
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <main className="flex justify-center items-center h-screen">
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit, reiciendis ex
          corporis voluptas dolores quod enim
          ipsa vero debitis quibusdam molestiae voluptates sapiente saepe laudantium eius consequatur nisi itaque?
        </p>
      </main>
    </div>
  )
}
