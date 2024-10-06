"use client";

import Slide from "@/components/Slide";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Typed } from "react-typed";

export default function Home() {
    const [typed1, setTyped1] = useState<Typed | undefined>();
    const [typed2, setTyped2] = useState<Typed | undefined>();
    const [typed3, setTyped3] = useState<Typed | undefined>();
    const [typed4, setTyped4] = useState<Typed | undefined>();
    const [typed5, setTyped5] = useState<Typed | undefined>();
    const [typed6, setTyped6] = useState<Typed | undefined>();
    const [typed7, setTyped7] = useState<Typed | undefined>();
    const [typed8, setTyped8] = useState<Typed | undefined>();
    const [typed9, setTyped9] = useState<Typed | undefined>();
    const [typed10, setTyped10] = useState<Typed | undefined>();
    const [typed11, setTyped11] = useState<Typed | undefined>();

    async function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function nextSlide(
        e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
    ) {
        e.currentTarget.parentElement?.classList.remove("page-in");
        e.currentTarget.parentElement?.nextElementSibling?.classList.remove(
            "page-out"
        );
        e.currentTarget.parentElement?.classList.add("page-out");
        e.currentTarget.parentElement?.nextElementSibling?.classList.add(
            "page-in"
        );

        await sleep(500);
        if (typed1) {
            typed1.reset(true);
        }
    }

    return (
        <>
            <div id="main-div">
                <div className="slide" style={{ zIndex: 100 }}>
                    <Image
                        className="slide-background-image"
                        src="/assets/arctic.webp"
                        alt="arctic"
                        fill={true}
                        style={{ filter: "brightness(40%)" }}
                    />
                    <Image
                        className="play-btn"
                        src="/assets/play.png"
                        alt="play-button"
                        width={200}
                        height={200}
                        onClick={(e) => nextSlide(e)}
                    />
                </div>
                <Slide
                    text="The Arctic - a land of endless ice and untamed wilderness, home
to one of the most unique ecosystems on Earth, is facing great changes."
                    imageUrl="/assets/arctic.webp"
                    typedArray={[typed2]}
                    setTyped={setTyped1}
                />
                <Slide
                    text="The life of a polar bear."
                    imageUrl="/assets/berloga.jpg"
                    typedArray={[typed1, typed3]}
                    setTyped={setTyped2}
                />
                <Slide
                    text="After waking up, I went to the usual hunting grounds."
                    imageUrl="/assets/background.jpg"
                    bearImageUrl="/assets/polar-bear-1.png"
                    typedArray={[typed2, typed4]}
                    setTyped={setTyped3}
                />
                <Slide
                    text="I’m looking for seals hiding under the ice. But with the ice melting, I have to swim further and search longer."
                    imageUrl="/assets/bear-hunting.jpg"
                    typedArray={[typed3, typed5]}
                    setTyped={setTyped4}
                />
                <Slide
                    text="Some time passes..."
                    typedArray={[typed4, typed6]}
                    setTyped={setTyped5}
                />
                <Slide
                    text="One day, I was searching for food, when I could not find anything, my hunting territory had decreased."
                    imageUrl="/assets/bear-is-looking-for-food.png"
                    typedArray={[typed5, typed7]}
                    setTyped={setTyped6}
                />
                <Slide
                    text="So I went searching, searching and searching..."
                    imageUrl="/assets/bear-jumping.png"
                    typedArray={[typed6, typed8]}
                    setTyped={setTyped7}
                />
                <Slide
                    text="After a long time passed, I went back to my den with no
 food."
                    imageUrl="/assets/bear-jumping-2.png"
                    typedArray={[typed7, typed9]}
                    setTyped={setTyped8}
                />
                <Slide
                    text="The next morning..."
                    typedArray={[typed8, typed10]}
                    setTyped={setTyped9}
                />
                <Slide
                    text="I looked around. There was no more ice."
                    imageUrl="/assets/bear-waking-up-without-home.jpg"
                    typedArray={[typed9, typed11]}
                    setTyped={setTyped10}
                />
                <Slide
                    text="Only a few floating chunks of ice remain of our home."
                    imageUrl="/assets/bear-family.jpg"
                    typedArray={[typed10]}
                    setTyped={setTyped11}
                />
            </div>
        </>
    );
}
