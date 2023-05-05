import headshot from '../img/Headshot.png';
import still from '../img/stills/cutting-onions/1.png';
import fitness from '../img/fitness.png';

export default function About() {
    return (
        <div className="bg-gray-800">
            <div className="sm:px-8 py-8 sm:py-16 lg:px-8 w-full ">
                <div className="flex max-lg:flex-col">

                    <div className="relative isolate overflow-hidden flex bg-gray-900 px-4 shadow-2xl items-center lg:gap-x-5 lg:px-8 xl:gap-x-10  ">

                        <div className="text-left py-8 lg:mx-0  xl:py-12 lg:text-left grow">
                            <h2 className="text-4xl font-bold tracking-tight text-white ">
                                The man, the myth, the legend (?)
                            </h2>
                            <p className="mt-2 text-xs leading-8 text-gray-100">
                                For some reason, a lot of people randomly approach me on the street. 
                                Maybe it's the smile, maybe it's the personality - maybe it's the shirt I'm wearing that says "approach me". We'll never know.
                                <br></br> <br></br>
                                I graduated from Western University in London (not the fish and chips one - the poutine one), Ontario with a Bachelors in Electrical Engineering.
                                <br></br> <br></br>
                                As with a lot of people, I found out in my mid-twenties that my first career choice wasn't exactly my calling. Since I was a kid, I've always enjoyed making people laugh and had the urge to share good times with others.
                                <br></br><br></br>
                                I started this career change in early 2023 with a background role in Pachinko, an Apple TV Korean Drama, after I realized I loved being on set. So now I'm moving forward with my goal to entertain people, through many means: Acting, directing, filmmaking, stand-up comedy, you name it.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900 shadow-2xl flex">
                        <div className="flex flex-col place-content-start xl:place-content-between">
                            <div className="relative mb-4 px-2 py-4">
                                <img
                                    className="relative top-0"
                                    src={headshot}
                                    alt="App screenshot"
                                    width={1000}
                                    height={500}
                                    />
                            </div>

                            <div className="relative mb-4 px-2">
                                <img
                                    className="relative top-0"
                                    src={still}
                                    alt="App screenshot"
                                    width={1000}
                                    height={500}
                                    />
                            </div>
                        </div>
                            <div className="relative mb-4 pr-4 pl-2 pt-4">
                                <img
                                    className="relative top-0"
                                    src={fitness}
                                    alt="App screenshot"
                                    width={1000}
                                    height={500}
                                    />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}