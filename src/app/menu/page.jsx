import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dishes } from './RecipeData';

function Menu() {
    return (
        <div className="bg-[#e8f5e9] py-10 flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
            <div className="text-center mb-8">
                <div className="bg-[#EE6352] text-[#e8f5e9] text-sm rounded-full inline-block px-4 py-1">
                    RECIPES
                </div>
                <h1 className=" text-[#262522] text-6xl font-extrabold my-2">
                    EMBARK ON A <br />
                    JOURNEY
                </h1>
                <p className="text-[#262522] mb-5">
                    With our diverse collection of recipes we have something to
                    <br />
                    satisfy every palate.
                </p>
                <div className="flex justify-center gap-2">
                    <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
                        ALL
                    </button>
                    <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
                        SEASON
                    </button>
                    <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
                        LUNCH
                    </button>
                    <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
                        DESSERT
                    </button>
                    <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
                        QUICK BITE
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 justify-center">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
                            {console.log('dish image', dish.image)}

                            <div className="bg-[#f7f2ec] rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h2 className=" text-[#262522] text-lg font-extrabold mb-2">{dish.name}</h2>
                                        <p className="  text-[#262522] text-sm mb-2">{dish.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-semibold text-[#26252280] mt-4">
                                        <ul className="list-disc flex gap-5">
                                            <li>{dish.time}</li>
                                            <li>{dish.difficulty}</li>
                                            <li>{dish.servings}</li>
                                        </ul>
                                        <Link
                                            href={`/menu/${dish.id}`}
                                            className="text-xs font-semibold bg-[#f7f2ec] text-[#262522] border border-[#262522] rounded-full px-3 py-1 transition-all hover:bg-[#ac967a]
                      hover:text-[#262522]"
                                        >
                                            VIEW RECIPE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;








