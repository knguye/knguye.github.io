import headshot from '../img/Headshot.png';

export default function LandingTW() {
    return (
        <div className="bg-gray-800">
          <div className="sm:px-8 py-8 sm:py-16 lg:px-8 w-full ">
            <div className="relative isolate overflow-hidden flex bg-gray-900 px-4 shadow-2xl max-lg:flex-col max-lg:justify-center max-lg:mx-4 max-lg:pt-8  lg:items-center lg:gap-x-5 lg:px-16 xl:gap-x-10 xl:px-24 xl:pt-0 ">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-3/4 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-2/3 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle cx={512} cy={720} r={1080} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.4" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#164e63" />
                    <stop offset={1} stopColor="#0891b2" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="relative mb-4">
                <img
                    className="relative lg:hidden max-lg:visible top-0 max-lg:m-auto  max-lg:w-10/12 rounded-md bg-white/5 ring-1 ring-white/10"
                    src={headshot}
                    alt="App screenshot"
                    width={1000}
                    height={500}
                    loading="lazy"
                    />
              </div>
              <div className=" lg:w-1/2 text-center py-8 lg:mx-0  xl:py-12 lg:text-left grow">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Kev Nguyen
                </h2>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Actor, Filmmaker, Comedian
                </h3>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Almost too approachable.
                </p>
                <p className="mt-6 text-[0.5rem] leading-8 text-gray-300">
                  Wait, where are you going?
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="projects/films"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    My Projects
                  </a>
                  <a href="/about" className="text-sm font-semibold leading-6 text-white">
                    About me <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              
              {/*
              <div className="relative max-sm:hidden sm:visible md:visible mt-16 h-80 lg:mt-8">
                <img
                  className="absolute relative left-0 max-lg:top-0 max-lg:w-[16rem] lg:top max-xl:w-[22rem] xl:left-1/4 xl:w-5/12 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={still}
                  alt="App screenshot"
                  width={500}
                  height={500}
                />
                <img
                  className="absolute lg:top-48 lg:left-12 max-lg:left-1/3 max-lg:top-16 max-lg:w-[16rem] max-xl:w-[22rem]  xl:left-1/3 xl:top-[15rem] xl:w-5/12 max-w-none  rounded-md bg-white/5 ring-1 ring-white/10"
                  src={still2}
                  alt="App screenshot"
                  width={500}
                  height={500}
                />
                <img
                  className="absolute lg:left-72 lg:top-[5rem] lg:w-[22rem] max-lg:left-2/3 max-lg:top-32 max-lg:w-[16rem] xl:left-2/3 xl:top-[5rem] xl:w-5/12 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={headshot}
                  alt="App screenshot"
                  width={250}
                  height={500}
                /> </div>
                */}
                <div className="flex justify-end items-center w-full max-lg:hidden lg:visible py-8 shrink">
                    <img
                    className="rounded-lg mx-auto relative lg w-11/12 max-w-none bg-white/5 ring-6 ring-white/10"
                    src={headshot}
                    alt="My headshot"
                    width={250}
                    height={500}
                    /> 
              </div>
            </div>
          </div>
        </div>
      )
  }