import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, } from "next";
import { ProductItem, ProductArray } from "@/interfase/products.interface";
import { ParsedUrlQuery } from "node:querystring";
import { SinglePageRender } from "@/components";



function SinglePage({ product }: { product: ProductArray }): JSX.Element {
    return (
        <SinglePageRender props={product} />
    );
}

export default withLayout(SinglePage);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get<ProductItem>(process.env.NEXT_PUBLIC_DOMAIN + 'products');
    const paths = data.products.map(item => ({
        params: { id: item.id.toString() }
    }));

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    try {
        const { data: product } = await axios.get<ProductArray>(process.env.NEXT_PUBLIC_DOMAIN + 'products/' + params.id);
        return {
            props: {
                product
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

export interface ProductProps extends Record<string, unknown> {
    product: ProductArray;
}
