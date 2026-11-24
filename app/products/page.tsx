import type { Metadata } from 'next';
import ProductsPage from '@/components/Products/ProductsPage';

export const metadata: Metadata = {
    title: 'Products We Build and Operate | Accugile',
    description: 'Accugile designs, engineers and operates its own digital products. The experience of running live SaaS, marketplace and content platforms informs every client engagement.',
};

export default function Products() {
    return <ProductsPage />;
}
