import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-14">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Hello, my name is
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text"> Danylo Humeniuk</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                I am a second-year Computer Science and Psychology Combined Major student at the University of Victoria!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-red-600 py-3 px-4 mx-3 rounded-md relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.9)]">
                    Contact me!
                </a>
            </div>
            <div className="flex mt-2 sm:mt-6 lg:mt-1 justify-center">
                <video autoPlay loop muted className="rounded-lg  w-1/2 sm:w-8/12 lg:w-6/12 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection