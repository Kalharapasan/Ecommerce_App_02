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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569" />
                        </svg>
                        <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                    </div>

                    <label htmlFor="message" className="font-semibold mt-4 text-slate-700">Message</label>
                    <textarea rows="4" className="w-full mt-2 p-3 border border-slate-300 bg-[#e8ebea] rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all" placeholder="Enter your message" required></textarea>

                    <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                        Submit Form
                        <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff" />
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact

