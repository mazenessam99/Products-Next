import ProductList from '@/components/products/ProductList';
import Spinner from '@/components/ui/Spinner';
import{Suspense}from'react';

export const metadata={
    title:'Products',
    description:'show Products'
}

export default async function Products() {
    return (
        <section className="mt-8 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
                Our <span className="text-purple-700">Products</span>
            </h2>

            <Suspense fallback={<Spinner/>}>
                <ProductList/>
            </Suspense>

        
        </section>
    )
}
