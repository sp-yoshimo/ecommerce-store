import { Product } from "@/types";
import React from "react";
import Noresults from "@/components/ui/no-results";
import ProductCard from "./ui/product-card";


interface ProductListProps{
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
  return(
    <div className="space-y-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        {items.length === 0 && <Noresults />}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <ProductCard
                key={item.id}
                data={item}
                />
            ))}
        </div>
    </div>
  )
};

export default ProductList;
