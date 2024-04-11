"use client"

import { Clash } from "../fonts"

export default function Landing() {

    return (
        <div className={Clash.className}>
            <div className={`flex flex-col lg:items-center`}>
                <header className="bg-black lg:container lg:h-[700px] lg:bg-contain bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/H_BG.webp)' }}>
                    <div className="navbar bg-black">
                        <div className="navbar-start ">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                                    <li><a>Personal Account</a></li>
                                    <li><a>Business Account</a></li>
                                    <li><a>Company</a></li>
                                </ul>
                            </div>
                            <a href="#" className="text-xl cursor-pointer hidden lg:flex">
                                <img alt="logo" src="/images/logo.webp" className="w-52"></img>
                            </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg gap-6">
                                <li><a className="btn btn-lg hover:bg-[#444444] btn-ghost">Personal Account</a></li>
                                <li><a className="btn btn-lg hover:bg-[#444444] btn-ghost">Business Account</a></li>
                                <li><a className="btn btn-lg hover:bg-[#444444] btn-ghost">Company</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end flex gap-4">
                            <button className="btn  border-1 border-white rounded-full">Log in</button>
                            <button className="btn border-none  bg-[#195399] rounded-full">Sign Up</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:mt-16 mt-8 text-center" >
                        <button className="btn btn-sm bg-white rounded-full text-black">Crypto Exchange</button>
                        <h1 className="leading-relaxed mt-16 w-1/2 text-4xl">Explore the world of cryptocurrency with HelloMe Money's crypto exchange.</h1>
                        <h1 className="leading-relaxed w-2/3 text-4xl mt-0">Buy, sell, and trade various cryptocurrencies securely, all within the <span className="text-5xl font-semibold">HelloMe Money</span> platform.</h1>
                        <button className="btn btn-lg hover:bg-white hover:text-black bg-white rounded-3xl border-none mt-16 text-black">Get Started <img src="/images/Gold.png" /></button>
                    </div>
                </header>
                <div className="lg:container mt-16 px-6">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
                        <div>
                            <div className="flex gap-2">
                                <h1 className="text-4xl font-bold">Secure Transactions:</h1>
                                <img alt="logo" src="/images/safe.png" width={50} height={50}></img>
                            </div>
                            <p className="leading-relaxed text-2xl font-thin ml-8 mr-16 mt-6">
                                Explore the world of cryptocurrency with confidence on HelloMe Money's secure platform. Buy, sell, and trade various cryptocurrencies knowing that your transactions are protected by advanced security measures.
                            </p>
                        </div>
                        <img alt="logo" src="/images/trading.webp" className="w-full"></img>
                    </div>
                    <div className="flex lg:flex-row flex-col-reverse gap-6 items-center mt-24">
                        <img alt="logo" src="/images/transaction.webp" className="lg:w-1/2 w-full"></img>
                        <div className="lg:ml-16">
                            <div className="flex gap-4">
                                <h1 className="text-4xl font-bold">Convenient Trading:</h1>
                                <img alt="logo" src="/images/arrow.png" width={50} height={50}></img>
                            </div>
                            <p className="leading-relaxed text-2xl font-thin ml-8 mr-8 mt-6">
                                Trade cryptocurrencies seamlessly within the HelloMe Money platform. Our user-friendly interface and intuitive tools make buying, selling, and trading digital assets a hassle-free experience.
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="w-full flex flex-col justify-between  px-16 lg:pt-24 pt-8 mt-24 lg:h-[450px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/F_BG.png)', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <div className="flex lg:flex-row flex-col justify-between">
                        <div className="text-center">
                            <h1 className="text-white text-3xl my-3 font-semibold">Who we are</h1>
                            <h1 className="my-3">About us</h1>
                            <h1 className="my-3">Code of Conduct</h1>
                            <h1 className="my-3">Partner with us</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-white text-3xl my-3 font-semibold">Legal</h1>
                            <h1 className="my-3">Terms & Conditions</h1>
                            <h1 className="my-3">Privacy Policy</h1>
                        </div>
                        <div className="lg:text-left text-center lg:w-1/6">
                            <h1 className="text-white text-3xl my-3 font-semibold">Contact us</h1>
                            <h1 className="my-3"><span className="font-thin">United Kingdom Office:</span><br></br>
                                2nd Floor, 30 Churchill Pl, London
                                E14 5EU United Kingdom</h1>
                            <h1 className="my-3"><span className="font-thin">Canada Office:</span><br>
                            </br>
                                44322 YALE RD UNIT 3B #203
                                CHILLIWACK, BC, CANADA V2R4H1</h1>
                        </div>
                    </div>
                    <p className="flex justify-center mb-4">Copyright © 2024 HelloMe Money. All Rights Reserved.</p>
                </footer>

            </div>
        </div>
    )
}