import {Button, ShoeCard} from "../components"
import {arrowRight} from "../assets/icons";
import {statistics, shoes} from "../constants";
import {bigShoe1} from "../assets/images";

import {useState} from "react";


const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    const title = "The New Arrival Nike Shoes";
    const description = "Discover stylish Nike arrivals, quality comfort, and innovation for your active life";
    const tag = "Our Summer Collections";
    return (
        <section id="home"
            className="w-full flex flex-col md:flex-row justify-between min-h-screen gap-10 text-slate-950 p-2 "
        >
            <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full mt-20 md:mt-10">
                <p className="text-orange-500 text-xl font-montserrat">{tag}</p>
                <h1 className="text-7xl xl:text-8xl max-sm:text-5xl font-bold mt-10">

                    <span className="lg:bg-white lg:whitespace-nowrap z-10 relative">The New Arrival</span>
                    <br />
                    <span className="text-orange-600 mt-3 inline-block">Nike</span>
                    <span> Shoes</span>
                </h1>
                <p className="text-slate-400 text-lg mt-6 mb-14 sm:max-w-sm">{description}</p>
                <Button label="Shop Now" iconURL={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="leading-7 text-slate-400">{stat.label}</p>
                        </div>
                    ))}                    
                </div>
            </div>
            <div className="bg-blue-100 flex flex-col justity-center items-center xl:min-h-screen">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    className="mt-10 w-120 mt-20 pr-7"
                />
                <div className="flex absolute gap-4 sm:gap-6 -bottom-[3%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard 
                                imgURL={shoe} 
                                changeBigShoeImage={(shoe) =>{setBigShoeImg(shoe)}}
                                bigShoeImg={bigShoeImg}

                            />

                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Hero;
