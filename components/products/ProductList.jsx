import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default async function  ProductList() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
  return (
    <div className="container grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2.5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <a href="#">
                            <div className="relative w-full h-56 bg-gray-50">
                                <Image
                                className=" object-contain p-4  transition duration-300 transform hover:scale-105"
                                src={product.image}
                                alt={product.title}
                                fill
                            />
                            </div>
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                                {product.title}
                            </h5>
                            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-purple font-bold text-lg">
                                    ${product.price}
                                </span>
                                <Link
                                    href={`/products/${product.id}`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition"
                                >
                                    Read more
                                    <svg
                                        className="w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
  )
}
