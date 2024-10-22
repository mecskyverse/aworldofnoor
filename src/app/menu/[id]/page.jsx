import React from 'react';
import Link from 'next/link';
import { dishes } from './data';

const Recipe = ({ params }) => {
    const id = params.id;
    const dish = dishes.find(dish => dish.id === parseInt(id));

    if (!dish) {
        return <div>Recipe not found</div>;
    }

    const heroImageStyle = {
        backgroundImage: `url(${dish.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="p-5 sm:p-10 md:p-20 rounded-3xl bg-[#FEF9F5] w-[96%] min-h-screen mx-auto my-5 inline-flex flex-col justify-center">

            {/* Header Section */}
            <div className="text-center mb-2.5">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-[#262522]">
                    {dish.name}
                </h1>
            </div>

            {/* Description */}
            <div className="text-center mb-5 p-5">
                <p className="text-[#262522]/50 text-base sm:text-lg">
                    {dish.description}
                </p>
            </div>

            {/* Recipe Details */}
            <div className="flex flex-wrap justify-center sm:justify-between px-4 sm:px-12 py-2.5 w-full sm:w-fit mx-auto mb-2.5 text-[#333333]/65">
                <p className="mx-2.5 my-1 sm:my-2.5 font-semibold">
                    <i className="fa-solid fa-stopwatch mr-1 text-base"></i> {dish.time}
                </p>
                <p className="mx-2.5 my-1 sm:my-2.5 font-semibold">
                    <i className="fa-solid fa-bag-shopping mr-1 text-base"></i> {dish.difficulty}
                </p>
                <p className="mx-2.5 my-1 sm:my-2.5 font-semibold">
                    <i className="fa-solid fa-bell-concierge mr-1 text-base"></i> {dish.servings}
                </p>
            </div>

            {/* Hero Image */}
            <div 
                style={heroImageStyle} 
                className="h-48 sm:h-96 md:h-[500px] rounded-3xl mx-auto block w-full sm:w-4/5 mb-5 bg-cover bg-center"
            />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                {/* Ingredients Section */}
                <div className="bg-[#F0EBE1] p-4 sm:p-6 rounded-xl shadow-md my-5 lg:my-0">
                    {/* Ingredients List */}
                    <div className="bg-[#FFFBF2] rounded-2xl m-3 p-4">
                        <h2 className="text-[#EE6352] text-xl sm:text-2xl font-bold">Ingredients</h2>
                        <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
                            {dish.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Prep Hacks */}
                    <div className="bg-[#FFFBF2] rounded-xl m-3 p-4">
                        <h2 className="text-[#EE6352] text-xl sm:text-2xl font-bold">Prep Hacks</h2>
                        <ul className="text-[#262522] text-base sm:text-lg list-disc list-inside space-y-2">
                            {dish.prepHacks.map((hack, index) => (
                                <li key={index}>{hack}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Noor's Tips */}
                    <div className="bg-[#FFFBF2] rounded-xl m-3 p-4">
                        <h2 className="text-[#EE6352] text-xl sm:text-2xl md:text-3xl font-bold">
                            Noor's Tips for Junior Chefs!
                        </h2>
                        <ul className="text-[#262522] text-base sm:text-lg list-disc list-inside space-y-2">
                            {dish.NoorTips.map((hack, index) => (
                                <li key={index}>{hack}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Instructions Section */}
                <div className="bg-[#ffe2d2] p-5 rounded-xl shadow-md lg:col-span-2">
                    <div className="mb-4">
                        <h2 className="text-[#333333] text-2xl sm:text-3xl md:text-4xl font-bold ml-2.5">
                            Instructions
                        </h2>
                        <ul className="space-y-4 mt-4 pl-2.5 whitespace-pre-line">
                            {dish.instructions.map((instruction, index) => (
                                <li key={index} className="text-base sm:text-lg">
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-5">
                <Link href="/menu">
                    <button className="bg-[#f8b400] border border-[#f8b400] text-black py-2.5 px-5 text-base sm:text-lg 
                        hover:text-black hover:border-black hover:bg-[#d7efd3] rounded-lg transition-all duration-300">
                        Back to Menu
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Recipe;