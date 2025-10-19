'use client'

import React from "react"

const Contact = () => {
    return (
        <div className="kontak mt-20 p-10 text-white rounded-2xl" id="contact">
            <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
            <p className="text-base/loose text-center mb-10 opacity-60">Lets Get Contact</p>
            <form action="https://formsubmit.co/edson.bennetgarcia@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-2xl" autoComplete="off">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Name</label>
                        <input type="text" name="nama" placeholder="Input Name..." className="border border-zinc-500 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold ">Email</label>
                        <input type="email" name="email" placeholder="Input Email..." className="border border-zinc-500 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-semibold">Message</label>
                        <textarea name="message" id="message" cols="45" rows="7" placeholder="Message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
                    </div>
                    <div className="text-center">
                       <button type="submit" className="bg-violet-700 rounded-md p-2 hover:bg-violet-600 w-full cursor-pointer">Send Message</button>
                    </div>
                </div>
            </form>
        </div>

    );
} 

export default Contact;