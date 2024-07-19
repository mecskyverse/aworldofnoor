import React from 'react';
import Link from 'next/link';
import './Recipe.css';
import { dishes } from './data';



const Recipe = ({ params }) => {
    const id = params.id
    const dish = dishes.find(dish => dish.id === parseInt(id));

    if (!dish) {
        return <div>Recipe not found</div>;
    }
    console.log('dish', dish)

    const heroImageStyle = {
        backgroundImage: `url(${dish.image})`,
        borderRadius: '30px',
        width: '90%',
        margin: '0 auto',
        display: 'block'
    };

    const instructionsImageStyle = {
        backgroundImage: `url(${dish.image})`,
        borderRadius: '30px',
        margin: '20px auto',
        display: 'block',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="recipe-container p-10 rounded-2xl bg-[#FEF9F5] w-[96%] min-h-screen mx-auto flex flex-col justify-center">

            <div className="recipe-header text-center mb-2.5">
                <h1 className="recipe-title text-4xl font-extrabold text-[#262522]">{dish.name}</h1>
            </div>

            <div className="recipe-description text-center mb-5 p-5">
                <p className="  text-[#26252283] text-lg">{dish.description}</p>
            </div>

            <div className="  text-[#262522b5] recipe-details flex justify-between px-12 py-2.5 w-fit mx-auto mb-2.5">
                <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-stopwatch"></i></strong> {dish.time}</p>

                <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-bag-shopping"></i></strong> {dish.difficulty}</p>
                <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-bell-concierge"></i></strong> {dish.servings}</p>

            </div>

            <div style={heroImageStyle} className="recipe-image h-125 object-cover rounded-2xl mx-auto block w-[80%] bg-cover bg-center mb-5" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

                <div className="ingredients-card bg-[#F0EBE1] p-6 rounded-lg shadow-md">

                    <div className="ingredients-card-inner bg-[#FFFBF2] rounded-2xl m-3 p-4">

                        <h2 className=" ingredients-title text-[#EE6352] text-2xl font-bold">Ingredients</h2>
                        <ul className=" text-black ingredients-list list-disc list-inside text-lg ">
                            {dish.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                    </div>

                    <div className="ingredients-card-inner bg-[#FFFBF2] rounded-xl m-3 p-4">
                        <h2 className="ingredients-title text-[#EE6352] text-2xl font-bold">Prep Hacks</h2>
                        <ul className=" text-[#262522] text-lg ingredients-list list-disc list-inside">
                            {dish.prepHacks.map((hack, index) => (
                                <li key={index}>{hack}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Yaha Pe krne h changes */}

                    <div className="ingredients-card-inner bg-[#FFFBF2] rounded-xl m-3 p-4">
                        <h2 className="ingredients-title text-[#EE6352] text-3xl font-bold">Noor’s Tips for Junior Chefs!</h2>
                        <ul className=" text-[#262522] text-lg ingredients-list list-disc list-inside">
                            {dish.NoorTips.map((hack, index) => (
                                <li key={index}>{hack}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="instructions-card bg-[#ffe2d2] p-5 rounded-lg shadow-md col-span-2">
                    <div className="instructions-card-inner mb-4">
                        <h2 className="instructions-title text-[#333333] text-4xl font-bold ml-2.5">Instructions</h2>
                        <ul className=" text-black recipe-instructions">
                            {dish.instructions.map((ingredient, index) => (
                                <li key={index}>{ingredient}
                                    <div style={instructionsImageStyle} className="instructions-image"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="back-button text-center mt-5">
                <Link href="/menu">
                    <button className="custom-button bg-[#f8b400] border-[#f8b400] text-black py-2.5 px-5 text-lg hover:text-[#262522] hover:border-black hover:bg-[#d7efd3]">Back to Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default Recipe;