import Carousel from "./carousel"

const HartForEveryone = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl sm:text-6xl flex justify-center text-white font-semibold px-4 text-center sm:text-left">There's a HART for everyone
            </h3>
            <p className="text-[#9da6b2] text-lg sm:text-xl max-w-4xl text-center my-4 px-4">Entrepreneur or an Athlete, busy mom or content creator! HART is there to support you!</p>
        </div>
        <Carousel />
    </div>
  )
}

export default HartForEveryone