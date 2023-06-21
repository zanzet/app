import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { ProductItem } from "@/interfase/products.interface";

import { ProductPageComponent } from "@/components";
import { CategoriesInterfase } from "@/interfase/categori.interface";


function ProductPage({ product, categori }: ProductCategoriProps): JSX.Element {

    return (
        <ProductPageComponent product={product} categori={categori} />

    );
}

export default withLayout(ProductPage);

export const getStaticProps: GetStaticProps<ProductCategoriProps> = async () => {
    try {
        const { data: categori } = await axios.get<CategoriesInterfase>(process.env.NEXT_PUBLIC_DOMAIN + 'products/categories');
        const { data: product } = await axios.get<ProductItem>(process.env.NEXT_PUBLIC_DOMAIN + 'products');

        return {
            props: {
                categori,
                product,
            },
        };
    } catch {
        return {
            notFound: true
        };
    }
};

export interface ProductCategoriProps {
    categori: CategoriesInterfase;
    product: ProductItem;
}
