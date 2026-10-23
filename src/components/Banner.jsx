import Underline from '../components/Underline';

const Banner = () => {
  return (
    <div className="h-96 bg-black flex">
      <div className="m-auto w-2/3 md:w-5/12 text-center">
        <div className="flex flex-col items-center mb-[0.3em] text-white uppercase text-5xl xs:text-6xl sm:text-main-title font-extrabold leading-[1.1]">
          <span>Arath</span>
          <span>Velázquez</span>
        </div>
        <Underline />
        <div className="text-white font-main-title text-lg xs:text-xl sm:text-2xl">Full Stack Developer</div>
      </div>
    </div>
  )
}

export default Banner;
