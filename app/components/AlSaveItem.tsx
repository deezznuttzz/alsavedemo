"use client";
import React from 'react';
import Image from 'next/image'; // Use optimized image component

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

const AlSaveItem: React.FC<AlSaveItemProps> = ({
  name,
  type,
  place,
  foodorgroc,
  from,
  till,
  before,
  after,
  imagepath,
}) => {
  return (
    <div className="card">
      <Image src={imagepath} alt={name} width={300} height={300} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Category: {foodorgroc}</p> {/* Ensuring it's used */}
      <p>Store: {place}</p>
      <p>From: {from}</p>
      <p>Till: {till}</p>
      <p>Price before: ${before}</p>
      <p>Price after: ${after}</p>
    </div>
  );
};

export default AlSaveItem;
