"use client";

import React from 'react';
import AlSaveItem from './AlSaveItem'; // Adjust the path if needed

interface AlSaveItemProps {
  name: string;
  type: string;
  place: string;
  foodorgroc: string;
  from: string;
  till: string;
  before: number;
  after: number;
  imagepath: string;
}

interface StoreScrollerProps {
  place: string;
  specials: AlSaveItemProps[];
}

export default function StoreScroller({ place, specials }: StoreScrollerProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">{place}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
        {specials.map((special, index) => (
          <div key={index} className="min-w-[200px] flex-shrink-0">
            <AlSaveItem
              name={special.name}
              type={special.type}
              place={special.place}
              foodorgroc={special.foodorgroc}
              from={special.from}
              till={special.till}
              before={special.before}
              after={special.after}
              imagepath={special.imagepath}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
