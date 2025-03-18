import Me from "../assets/Me.jpg"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-6 lg:mt-14">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 min-h-[0.5px] lg:min-h-[1px] w-full mt-11"></div>
        <div className="flex flex-row lg:flex-row items-center lg:items-start justify-between w-2/3 gap-14">
        {/* Left Side - Text */}
            <div className="lg:w-2/3 w-full text-left text-neutral-400 tracking-wide">
                <h2>
                    Hi, I’m a Computer Science & Psychology combined major student at the University of Victoria with a passion for frontend development. My unique background in psychology helps me understand user behavior, allowing me to create intuitive, engaging, and user-friendly digital experiences. I love blending creativity, technology, and human-centered design to build aesthetic, accessible, and functional websites. My approach focuses on user experience (UX), front-end development, and problem-solving to craft meaningful digital interactions.
                </h2>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/3 w-full flex justify-center">
                <img src="/Me.jpg" alt="My Photo" className="w-full max-w-xs rounded-lg shadow-lg" />
            </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-red-600 min-h-[0.5px] lg:min-h-[1px] w-full "></div>
        
    </div>
  )
}

export default About