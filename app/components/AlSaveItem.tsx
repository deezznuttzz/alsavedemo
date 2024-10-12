// AlSaveItem.tsx
"use client";
import React from 'react';

// Define the props interface for AlSaveItem
interface AlSaveItemProps {
  name: string;       // Special name
  type: string;
  place: string;      // Store name
  foodorgroc: string;
  from: string;
  till: string;
  before: number;
  after: number;
  imagepath: string;
}

const AlSaveItem: React.FC<AlSaveItemProps> = ({
  name,
  type,
  place,  // Ensure this is accepted as a prop
  foodorgroc,
  from,
  till,
  before,
  after,
  imagepath,
}) => {
  return (
    <div className="card">
      <img src={imagepath} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Store: {place}</p> {/* Make sure 'place' is used here */}
      <p>From: {from}</p>
      <p>Till: {till}</p>
      <p>Price before: ${before}</p>
      <p>Price after: ${after}</p>
    </div>
  );
};

export default AlSaveItem;
