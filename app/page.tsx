import DropdownOptions from '@/components/DropdownOptions'
import InputBox from '@/components/InputBox'
import Button from '@/components/Buttons'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center 
                        bg-gradient-to-br from-purple-600 via-pink-500 
                        to-yellow-400 animate-fade-in p-6"
    >

      <h1 
        className="text-white text-center text-4xl md:text-5xl lg:text-6xl 
                    font-extrabold mb-8 animate-fade-in-down drop-shadow-lg"
      >
        Welcome to the <span className="text-yellow-300">Cerevox</span> 🎉
      </h1>

      <section 
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl 
                    w-full md:w-2/3 p-10 transition-transform duration-300 
                    hover:scale-[1.02] animate-fade-in-up"
      >

        <div className="mb-6">
          <InputBox />
        </div>

        <div className="mb-6">
          <DropdownOptions />
        </div>

        <div className="flex justify-center">
            <Button />
        </div>

      </section>
    </section>
  )
}

