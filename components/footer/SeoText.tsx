"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type SeoTextProps = {
	expandable?: boolean;
	moreParagraphs?: string[];
	readMoreHref?: string;
	className?: string;
};

const defaultMore: string[] = [
	'ArmoredMart offers installation guides, expert tips, and in-depth product breakdowns so you can confidently choose the right accessories for your ride.',
	'Our support team is always available to help with fitment questions, compatibility checks, and warranty information to ensure a smooth ownership experience.',
	'Sign up for updates and exclusive offers to be the first to know about new arrivals, limited editions, and seasonal promotions.',
];

export default function SeoText({
	expandable = false,
	moreParagraphs = defaultMore,
	readMoreHref = '#',
	className = '',
}: SeoTextProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			className={`text-white font-[inter, sans-serif] font-[14px] 2xl:mt-20 xl:mt-16 text-sm space-y-4 leading-relaxed ${className}`}
			style={{ lineHeight: '20px' }}
		>
			<p>
				Perform preventive maintenance and make timely repairs, increase horsepower and
				improve handling and braking for better overall performance, and give your{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					car
				</Link>
				,{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					truck
				</Link>
				, or{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					SUV
				</Link>{' '}
				the unique appearance that will have heads turning wherever you roll. You can do it
				all with{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					parts and accessories
				</Link>{' '}
				from{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					Armed Mart
				</Link>
				. Unlike some online aftermarket vendors that have{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					repair parts
				</Link>{' '}
				but can’t help you dress up your ride, or{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					sell
				</Link>{' '}
				exterior accessories but don’t have the{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					wheels
				</Link>{' '}
				and tires you need to complete the look, we’re the one-stop destination for all your
				automotive essentials.
			</p>

			<p>
				Explore our extensive range of options with our{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					Shop by Product
				</Link>{' '}
				and{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					Shop by Brand
				</Link>{' '}
				sections to find exactly what you need quickly and easily. No matter what you want to
				do with your{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					vehicle
				</Link>{' '}
				or where you get your kicks — on the street, at the track, or off-road — you’ll find
				quality,{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					name-brand parts and accessories
				</Link>{' '}
				on our digital shelves to turn your{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					automotive
				</Link>{' '}
				dreams into reality. And we’ve gathered all the vehicle-appropriate products you’re
				looking for in our{' '}
				<Link href="#" className="text-white font-bold underline cursor-pointer">
					Jeep, Truck, and SUV
				</Link>{' '}
				shops.
			</p>

			{expandable ? (
  <>
    {/* Always show the main paragraphs */}

    {expanded && (
      <div className="mt-4 space-y-4">
        {moreParagraphs.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    )}

    {/* BUTTON BELOW THE EXTRA CONTENT */}
    <button
      onClick={(e) => {
        e.preventDefault();
        setExpanded((p) => !p);
      }}
      className="inline-block mt-3 text-white hover:text-gray-400 font-inter font-semibold text-sm leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%]"
      aria-expanded={expanded}
    >
      {expanded ? 'Read Less' : 'Read More'}
    </button>
  </>
) : (
  <Link
    href={readMoreHref}
    className="inline-block mt-3 text-white hover:text-gray-400 font-inter font-semibold text-sm leading-[100%] tracking-[0%] underline decoration-solid underline-offset-[0%] decoration-[0%]"
  >
    Read More
  </Link>
)}

		</div>
	);
}
