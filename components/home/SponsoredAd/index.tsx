"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SponsoredAd = () => {
    const [expanded, setExpanded] = useState(false);

    const moreParagraphs = [
        "ArmoredMart offers installation guides, expert tips, and in-depth product breakdowns so you can confidently choose the right accessories for your ride.",
        "Our support team is always available to help with fitment questions, compatibility checks, and warranty information to ensure a smooth ownership experience.",
        "Sign up for updates and exclusive offers to be the first to know about new arrivals, limited editions, and seasonal promotions.",
    ];

    return (
        <section className="w-full bg-[#31332C] text-white py-10">
            <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-[140px]">
                {/* Top Banner */}
                <div className="relative rounded-lg overflow-hidden mb-3">
                    <Link
                        href="https://princetontec.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="relative w-full h-[200px] lg:h-[152px]">
                            <Image
                                src="/sponsored/Group 362.jpg"
                                alt="Princeton Tec VIZZ 550 RGB Headlamp"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Link>
                    <div className="flex flex-row justify-between items-start mt-1 gap-3 mb-10 flex-wrap">
                        <p className="text-xs leading-relaxed flex-1">
                            <span
                                className="text-[#D35400] font-semibold"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Disclaimer:
                            </span>{" "}
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                }}
                            >
                                This is sponsored content. ArmoredMart assumes no responsibility
                                for the accuracy, validity, or claims presented herein.
                            </span>
                        </p>
                        <p
                            className="text-[#737373] ml-4 shrink-0 mt-0"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                        >
                            sponsored
                        </p>
                    </div>
                </div>

                {/* Disclaimer + Sponsored Row */}

                {/* Info Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 2xl:mt-[120px] xl:mt-[100px] mb-16">
                    {[
                        {
                            icon: "/icons/complaince.svg",
                            title: "COMPLIANCE BUILT IN",
                            text: "Global standards. Automatic protection.",
                        },
                        {
                            icon: "/icons/secure.svg",
                            title: "SECURE COMMERCE PLATFORM",
                            text: "Every transaction, fully encrypted.",
                        },
                        {
                            icon: "/icons/verified.svg",
                            title: "VERIFIED SELLERS & BUYERS",
                            text: "Only trusted partners allowed.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 p-4"
                        >
                            <div
                                className="relative bg-white/10 p-5"
                                style={{
                                    width: 70,
                                    height: 70,
                                }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h4 
                                    className="mb-1"
                                    style={{
                                        fontFamily: "Orbitron",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        textTransform: "uppercase"
                                    }}
                                >
                                    {item.title}
                                </h4>
                                <p 
                                    className="text-gray-300"
                                    style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                }}
                                >
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-gray-700 mb-10"></div>


                {/* Text Section */}
                <div
                    className="text-white font-[inter, sans-serif] font-[14px] 2xl:mt-20 xl:mt-16 text-sm space-y-4 leading-relaxed"
                    style={{ lineHeight: "20px" }}
                >
                    <p>
                        Perform preventive maintenance and make timely repairs, increase
                        horsepower and improve handling and braking for better overall
                        performance, and give your{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            car
                        </Link>
                        ,{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            truck
                        </Link>
                        , or{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            SUV
                        </Link>{" "}
                        the unique appearance that will have heads turning wherever you roll.
                        You can do it all with{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            parts and accessories
                        </Link>{" "}
                        from{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            Armed Mart
                        </Link>
                        . Unlike some online aftermarket vendors that have{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            repair parts
                        </Link>{" "}
                        but can’t help you dress up your ride, or{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            sell
                        </Link>{" "}
                        exterior accessories but don’t have the{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            wheels
                        </Link>{" "}
                        and tires you need to complete the look, we’re the one-stop
                        destination for all your automotive essentials.
                    </p>

                    <p>
                        Explore our extensive range of options with our{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            Shop by Product
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            Shop by Brand
                        </Link>{" "}
                        sections to find exactly what you need quickly and easily. No matter
                        what you want to do with your{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            vehicle
                        </Link>{" "}
                        or where you get your kicks — on the street, at the track, or
                        off-road — you’ll find quality,{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            name-brand parts and accessories
                        </Link>{" "}
                        on our digital shelves to turn your{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            automotive
                        </Link>{" "}
                        dreams into reality. And we’ve gathered all the vehicle-appropriate
                        products you’re looking for in our{" "}
                        <Link href="#" className="text-white font-bold underline cursor-pointer">
                            Jeep, Truck, and SUV
                        </Link>{" "}
                        shops.
                    </p>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setExpanded((prev) => !prev);
                        }}
                        className="inline-block mt-3 text-white hover:text-gray-400 font-inter font-semibold text-sm leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%]"
                        aria-expanded={expanded}
                    >
                        {expanded ? "Read Less" : "Read More"}
                    </button>

                    {/* Render additional dummy paragraphs downward when expanded */}
                    {expanded && (
                        <div className="mt-4 space-y-4">
                            {moreParagraphs.map((txt, i) => (
                                <p key={i}>{txt}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SponsoredAd;
