"use client";

import React from 'react';

interface MyAlSaveItemProps {
  name: string;
  type: string;
  place: string;
  foodorgroc: string;
  from: string;  // Ensure this property is included
  till: string;
  before: number;
  after: number;
  imagepath: string;
}

const MyAlSaveItem = ({
  name,
  type,
  place,
  foodorgroc,
  from,
  till,
  before,
  after,
  imagepath,
}: MyAlSaveItemProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>Type: {type}</p>
      <p>Place: {place}</p>
      <p>Food or Grocery: {foodorgroc}</p>
      <p>Valid From: {from}</p>
      <p>Valid Till: {till}</p>
      <p>Before Price: {before}</p>
      <p>After Price: {after}</p>
      <img src={imagepath} alt={name} className="w-full h-auto mt-2" />
    </div>
  );
};

export default MyAlSaveItem;
