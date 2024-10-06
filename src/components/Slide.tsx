"use client";

import Image from "next/image";
import { MouseEvent, Dispatch, SetStateAction } from "react";
import { ReactTyped, Typed } from "react-typed";

export default function Slide({
    imageUrl,
    text,
    bearImageUrl,
    typedArray,
    setTyped,
}: {
    imageUrl?: string;
    text: string;
    bearImageUrl?: string;
    typedArray: (Typed | undefined)[];
    setTyped: Dispatch<SetStateAction<Typed | undefined>>;
}) {
    async function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function previousSlide(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) {
        e.currentTarget.parentElement?.parentElement?.classList.remove(
            "page-in"
        );
        e.currentTarget.parentElement?.parentElement?.previousElementSibling?.classList.remove(
            "page-out"
        );
        e.currentTarget.parentElement?.parentElement?.classList.add("page-out");
        e.currentTarget.parentElement?.parentElement?.previousElementSibling?.classList.add(
            "page-in"
        );

        await sleep(500);
        if (typedArray.length > 1 && typedArray[0] !== undefined) {
            typedArray[0].reset(true);
        } else if (typedArray.length === 1 && typedArray[0] !== undefined) {
            typedArray[0].reset(true);
        }
    }

    async function nextSlide(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) {
        e.currentTarget.parentElement?.parentElement?.classList.remove(
            "page-in"
        );
        e.currentTarget.parentElement?.parentElement?.nextElementSibling?.classList.remove(
            "page-out"
        );
        e.currentTarget.parentElement?.parentElement?.classList.add("page-out");
        e.currentTarget.parentElement?.parentElement?.nextElementSibling?.classList.add(
            "page-in"
        );

        await sleep(500);
        if (typedArray.length > 1 && typedArray[1] !== undefined) {
            typedArray[1].reset(true);
        } else if (typedArray.length === 1 && typedArray[0] !== undefined) {
            typedArray[0].reset(true);
        }
    }

    return (
        <div className="slide">
            <div className="slide-container">
                {imageUrl ? (
                    <>
                        <Image
                            src={imageUrl}
                            alt="arctic"
                            className="slide-background-image"
                            fill={true}
                        />
                        {bearImageUrl ? (
                            <div className="polar-bear-container">
                                <Image
                                    src={bearImageUrl}
                                    alt="bear"
                                    className="bear-img"
                                    fill={true}
                                />
                            </div>
                        ) : null}
                        <div className="text-container">
                            <ReactTyped
                                typedRef={setTyped}
                                strings={[text]}
                                typeSpeed={40}
                                className="text"
                            />
                        </div>
                    </>
                ) : (
                    <ReactTyped
                        typedRef={setTyped}
                        strings={[text]}
                        typeSpeed={40}
                        className="text"
                    />
                )}

                <div className="playBut" onClick={(e) => previousSlide(e)}>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="130px"
                        height="130px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                    >
                        <polygon
                            className="triangle"
                            id="XMLID_18_"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="
        73.5,62.5 148.5,105.8 73.5,149.1 "
                        />

                        <circle
                            className="circle"
                            id="XMLID_17_"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                        />
                    </svg>
                </div>
                <div className="playBut" onClick={(e) => nextSlide(e)}>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="130px"
                        height="130px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                    >
                        <polygon
                            className="triangle"
                            id="XMLID_18_"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="
        73.5,62.5 148.5,105.8 73.5,149.1 "
                        />

                        <circle
                            className="circle"
                            id="XMLID_17_"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
