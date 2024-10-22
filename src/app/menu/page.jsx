'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import { dishes } from './RecipeData';
import Hero from './Hero';
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, GlobeIcon, ChevronDownIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function Menu() {
    const [sortMethod, setSortMethod] = useState('alphabetical');
    const [selectedCountry, setSelectedCountry] = useState('All');

    const countries = ['All', ...new Set(dishes.map(dish => dish.country))];

    const sortedDishes = dishes.sort((a, b) => {
        if (sortMethod === 'alphabetical') {
          return a.name.localeCompare(b.name);
        } else {
          return a.country.localeCompare(b.country);
        }
      }).filter(dish => selectedCountry === 'All' || dish.country === selectedCountry);
    

    return (
        <div className="bg-[#e8f5e9] flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
            <Hero/>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 mt-10 flex flex-col items-center space-y-2"
      >
        <h1 className="text-[#262522] md:text-6xl text-4xl font-extrabold">
          RECIPES
        </h1>
        <p className="text-[#262522] mb-5 md:w-[50%] md:text-xl">
          Cooking is an adventure in learning about the world!<br/>
          Our recipes are tailored for parent and child – with tips on what to prep in advance and how to take safety precautions! Look through the recipes alphabetically or by country to start discovering spices and flavors and foods from countries near and far!
        </p>
        <div className="flex space-x-4 pt-4">
          <Button
            variant={sortMethod === 'alphabetical' ? "default" : "outline"}
            onClick={() => setSortMethod('alphabetical')}
            className="flex items-center space-x-2"
          >
            <ArrowDownAZ className="w-4 h-4" />
            <span>Alphabetical</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={sortMethod === 'country' ? "default" : "outline"} className="flex items-center space-x-2">
                <GlobeIcon className="w-4 h-4" />
                <span>{selectedCountry}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {countries.map((country) => (
                <DropdownMenuItem
                  key={country}
                  onClick={() => {
                    setSelectedCountry(country);
                    setSortMethod('country');
                  }}
                >
                  {country}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          {sortedDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#f7f2ec] rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-[#262522] text-lg font-extrabold mb-2">{dish.name}</h2>
                    <p className="text-[#262522] text-sm mb-2">{dish.description}</p>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-[#26252280] mt-4">
                    <ul className="list-disc flex gap-5">
                      <li>{dish.time}</li>
                      <li>{dish.difficulty}</li>
                      <li>{dish.servings}</li>
                    </ul>
                    <Link
                      href={`/menu/${dish.id}`}
                      className="text-xs font-semibold bg-[#f7f2ec] text-[#262522] border border-[#262522] rounded-full px-3 py-1 transition-all hover:bg-[#ac967a] hover:text-[#262522]"
                    >
                      VIEW RECIPE
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Menu;








