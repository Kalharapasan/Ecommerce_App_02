import React from 'react'
import { assets } from "../assets/data";
const Contact = () => {
    return (
        <section className="bg-[#f2f4f3] pt-24 pb-20 px-4 min-h-[calc(100vh-180px)]">
            <form className="flex flex-col items-center text-sm text-slate-800 max-w-xl mx-auto">
                <p className="text-xs bg-black/80 text-white font-medium px-4 py-1 rounded-full">Contact Us</p>
                <h1 className="text-[52px] leading-[1.06] font-bold py-4 text-center max-md:text-5xl max-sm:text-[42px]">Let’s Get In Touch.</h1>
                <p className="text-base pb-10 text-center text-slate-600">
                    Or just reach out manually to us at <a href="mailto:hello@vogues.com" className="text-indigo-600 hover:underline">hello@vogues.com</a>
                </p>

                <div className="max-w-96 w-full px-2">
                    <label htmlFor="name" className="font-semibold text-slate-700">Full Name</label>
                    <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-slate-300 bg-[#e8ebea] rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                        <img src={assets.user} alt="" width={19} className="invert-50"/>
                        <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
                    </div>

                    <label htmlFor="email-address" className="font-semibold mt-4 text-slate-700">Email Address</label>
                    <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-slate-300 bg-[#e8ebea] rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                        <img src={assets.mail} alt="" width={19} className="invert-50"/>
                        <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                    </div>

                    <label htmlFor="message" className="font-semibold mt-4 text-slate-700">Message</label>
                    <textarea rows="4" className="w-full mt-2 p-3 border border-slate-300 bg-[#e8ebea] rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all" placeholder="Enter your message" required></textarea>

                    <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                        Submit Form
                        <img src={assets.right} alt="" className="invert"/>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact

