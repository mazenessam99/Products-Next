
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';

async function getSingleProduct(id){
    const res=await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}

async function getAllProducts(){
    const res=await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function generateStaticParams(){
    const products=await getAllProducts();
    const ids=products.map(product=>{
        return{id: product.id.toString()}
    });
    return ids; 
}

export default async function ProductDetails({params}) {
    const {id}=await params;
    const product=await getSingleProduct(id)


    return (
        <div className="max-w-5xl mx-auto mt-10 p-6">
            <Link href='/products' className="text-purple-700 flex items-center gap-3 mb-3 transition hover:text-purple-600"> <FaArrowLeft/> back to products</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">

                <div className="flex items-center justify-center bg-gray-50 p-6 relative">
                    <img
                        className="w-full max-h-96 object-contain rounded-lg cursor-pointer transition duration-300 transform hover:scale-105"
                        src={product.image}
                        alt={product.title}
                        
                    />
                </div>

                
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {product.title}
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">
                            ${product.price}
                        </span>
                        <button className="px-5 py-2 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-500 cursor-pointer transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
