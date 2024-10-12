"use client";

import React, { useEffect, useState } from 'react';
import MyAlSaveItem from './MyAlSaveItem'; // Adjust the path if necessary
import FavPlaceButton from './FavPlaceButton';

interface FavPlaceButtonProps {
  userId: number;
  fplacename: string;
}

interface MyAlSaveItemProps {
  name: string;       // Special name
  type: string;
  place: string;      // Store name
  foodorgroc: string;
  from: string;       // <-- Add the `from` property here
  till: string;
  before: number;
  after: number;
  imagepath: string;
}

interface MyStoreScrollerProps {
  place: string;  // Store name
  specials: MyAlSaveItemProps[];
}

const MyStoreScroller = ({ place, specials }: MyStoreScrollerProps) => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      const parsedUserId = parseInt(storedUserId, 10);
      if (!isNaN(parsedUserId)) {
        setUserId(parsedUserId);
      }
    }
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">
        {place}
        {userId !== null && (
          <FavPlaceButton userId={userId} fplacename={place} />
        )}
      </h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
        {specials.map((special, index) => (
          <div key={index} className="min-w-[200px] flex-shrink-0">
            <MyAlSaveItem
  name={special.name}
  type={special.type}
  place={special.place}
  foodorgroc={special.foodorgroc}
  till={special.till}  // Removed `from`
  before={special.before}
  after={special.after}
  imagepath={special.imagepath}
/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStoreScroller;
