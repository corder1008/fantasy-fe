"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

const gravity = 0.1;

interface Emoji {
  x: number;
  y: number;
  dx: number;
  dy: number;
  rotate: number;
  speed: number;
}

const getRandomInt = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const EmojisComponent: React.FC = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const interval = useRef<NodeJS.Timeout | null>(null);
  const mousedown = useRef<boolean>(false);
  const caller = useRef<boolean>(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (interval.current !== null) {
      clearInterval(interval.current);
    }
    if (mousedown.current == true) {
      if (!caller.current) {
        caller.current = true;
        setTimeout(() => {
          caller.current = false;
          if (mousedown.current == true) {
            handleClick(e);
          }
        }, 100);
      }
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    mousedown.current = true;
    interval.current = setInterval(() => {
      handleClick(e);
    }, 100);
  }, []);

  const handleMouseUp = useCallback(() => {
    mousedown.current = false;
    if (interval.current !== null) {
      clearInterval(interval.current);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref && ref.current) {
      const x = e.clientX - ref.current.getClientRects()[0].left;
      const y = e.clientY - ref.current.getClientRects()[0].top;
      const tempEmojis: Emoji[] = [];
      const dx = getRandomInt(0.1, 1.5);
      const dy = getRandomInt(0.1, 2);
      for (let i = 0; i < 5; ++i) {
        tempEmojis.push({
          x,
          y,
          dx: Math.random() > 0.5 ? -dx : dx,
          dy: Math.random() > 0.5 ? -dy : dy,
          rotate: 1,
          speed: getRandomInt(2, 6),
        });
      }
      setEmojis((prevEmojis) => [...prevEmojis, ...tempEmojis]);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(startInterval, 10);
    return () => clearInterval(intervalId);
  }, []);
  const startInterval = useCallback(() => {
    setEmojis((prevEmojis) =>
      prevEmojis
        .filter((emoji) => emoji.x < 2200 && emoji.y < 700 && emoji.x > 0)
        .map((emoji) => ({
          ...emoji,
          x: emoji.x + emoji.dx * emoji.speed,
          y: emoji.y + emoji.dy * emoji.speed,
          dy: emoji.dy + gravity,
        }))
    );
  }, []);
  return (
    <div
      className="absolute w-full h-full z-10 top-0 left-0"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={ref}
    >
      {emojis &&
        emojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute w-[30px] h-[30px] rounded-full bg-transparent select-none"
            style={{
              left: emoji.x,
              top: emoji.y,
            }}
          >
            <Image
              width={30}
              height={30}
              alt="logo"
              src={"./images/logo.svg"}
            />
          </div>
        ))}
    </div>
  );
};

export default EmojisComponent;
