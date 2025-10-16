import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                Sign Up
            </h1>
            <form className="space-y-4">
                <label className="text-purple-600 mb-2">Enter your FirstName</label>
                <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
                />

                <label className="text-purple-600 mb-2">Enter your LastName</label>
                <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
                />

                <label className="text-purple-600 ">Enter your Email</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border border-gray-300 p-3 mb-2 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
                />
                <label className="text-purple-600 ">Enter your Password</label>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full border border-gray-300 p-3 mb-2 rounded-lg text-black focus:ring-2 focus:ring-purple-600 outline-none"
                />
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 rounded-lg cursor-pointer hover:bg-purple-600 transition"
                >
                    Sign Up
                </button>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-purple-700 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}
