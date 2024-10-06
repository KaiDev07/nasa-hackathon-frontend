"use client";

import Image from "next/image";

export default function Questionnaire() {
    return (
        <div className="quest-container">
            <Image
                src="/assets/star.png"
                alt="star"
                width={56}
                height={56}
                style={{ position: "absolute", top: "-50px" }}
            />
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                width={330}
                height={180}
                style={{
                    position: "absolute",
                    right: "-10px",
                    transform: "rotate(180deg) scale(3)",
                    top: "-100px",
                }}
            />
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                width={330}
                height={180}
                style={{
                    position: "absolute",
                    left: "-10px",
                    transform: "scale(3)",
                    top: "400px",
                }}
            />
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                width={330}
                height={180}
                style={{
                    position: "absolute",
                    right: "-10px",
                    transform: "rotate(180deg) scale(3)",
                    top: "900px",
                }}
            />
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                width={330}
                height={180}
                style={{
                    position: "absolute",
                    left: "-10px",
                    transform: "scale(3)",
                    top: "1400px",
                }}
            />
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                width={330}
                height={180}
                style={{
                    position: "absolute",
                    right: "-10px",
                    transform: "rotate(180deg) scale(3)",
                    top: "1900px",
                }}
            />
            <h1
                style={{
                    fontSize: "70px",
                    color: "#A6A6A6",
                    margin: "100px 0 0 50px",
                }}
            >
                Interactive Questions
            </h1>
            <h2
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#FFFFFF",
                    filter: "brightness(75%)",
                    marginTop: "20px",
                    fontSize: "40px",
                    textAlign: "center",
                }}
            >
                What do you think is the current population of polar bears?
            </h2>
            <Image
                src="/assets/first-q.png"
                alt=""
                width={550}
                height={350}
                style={{ display: "block", margin: "0 auto" }}
            />
            <div
                style={{
                    display: "flex",
                    margin: "0 auto",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    style={{
                        padding: "10px",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                    }}
                />
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0077FF",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        const answer = document.querySelector("#first");
                        if (answer) {
                            answer.classList.add("show-answer");
                        }
                    }}
                >
                    <Image
                        src="/assets/arrow-right.png"
                        alt=""
                        width={10}
                        height={18}
                    />
                </div>
            </div>
            <p
                style={{
                    opacity: 0,
                    transition: "all .5s",
                    fontSize: "24px",
                    textAlign: "center",
                    color: "white",
                }}
                id="first"
            >
                21-30k
            </p>
            <h2
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#FFFFFF",
                    filter: "brightness(75%)",
                    marginTop: "50px",
                    fontSize: "40px",
                    textAlign: "center",
                }}
            >
                How many tons of Antarctic ice melt do you think every year?
            </h2>
            <Image
                src="/assets/second-q.png"
                alt=""
                width={550}
                height={350}
                style={{ display: "block", margin: "0 auto" }}
            />
            <div
                style={{
                    display: "flex",
                    margin: "0 auto",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    style={{
                        padding: "10px",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                    }}
                />
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0077FF",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        const answer = document.querySelector("#second");
                        if (answer) {
                            answer.classList.add("show-answer");
                        }
                    }}
                >
                    <Image
                        src="/assets/arrow-right.png"
                        alt=""
                        width={10}
                        height={18}
                    />
                </div>
            </div>
            <p
                style={{
                    opacity: 0,
                    transition: "all .5s",
                    fontSize: "24px",
                    textAlign: "center",
                    color: "white",
                }}
                id="second"
            >
                219 million tons
            </p>
            <h2
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#FFFFFF",
                    filter: "brightness(75%)",
                    marginTop: "50px",
                    fontSize: "40px",
                    textAlign: "center",
                }}
            >
                By how many degrees celcius do you think Antarctica’s
                temperature rose in the past 30 years?
            </h2>
            <Image
                src="/assets/third-q.png"
                alt=""
                width={550}
                height={350}
                style={{ display: "block", margin: "0 auto" }}
            />
            <div
                style={{
                    display: "flex",
                    margin: "0 auto",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    style={{
                        padding: "10px",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                    }}
                />
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0077FF",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        const answer = document.querySelector("#third");
                        if (answer) {
                            answer.classList.add("show-answer");
                        }
                    }}
                >
                    <Image
                        src="/assets/arrow-right.png"
                        alt=""
                        width={10}
                        height={18}
                    />
                </div>
            </div>
            <p
                style={{
                    opacity: 0,
                    transition: "all .5s",
                    fontSize: "24px",
                    textAlign: "center",
                    color: "white",
                }}
                id="third"
            >
                3*C
            </p>
            <h2
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#FFFFFF",
                    filter: "brightness(75%)",
                    marginTop: "50px",
                    fontSize: "40px",
                    textAlign: "center",
                }}
            >
                By how much has the ppm of CH4 in the Arctic risen in the last
                40 years?
            </h2>
            <Image
                src="/assets/fourth-q.png"
                alt=""
                width={550}
                height={350}
                style={{ display: "block", margin: "0 auto" }}
            />
            <div
                style={{
                    display: "flex",
                    margin: "0 auto",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    style={{
                        padding: "10px",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                    }}
                />
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0077FF",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        const answer = document.querySelector("#fourth");
                        if (answer) {
                            answer.classList.add("show-answer");
                        }
                    }}
                >
                    <Image
                        src="/assets/arrow-right.png"
                        alt=""
                        width={10}
                        height={18}
                    />
                </div>
            </div>
            <p
                style={{
                    opacity: 0,
                    transition: "all .5s",
                    fontSize: "24px",
                    textAlign: "center",
                    color: "white",
                    marginBottom: "100px",
                }}
                id="fourth"
            >
                100
            </p>
        </div>
    );
}
