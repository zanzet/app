import { Button, Htag, Paragraph, Raiting, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";
import axios from "axios";
import { GetStaticProps, } from "next";
import { ProductItem } from "@/interfase/products.interface";

function Home({ product }: HomeProps): JSX.Element {
  const [reating, setReating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Привет</Htag>
      <Button appearanse='goust' arrow='rigth'>click</Button>
      <Button appearanse='primari' arrow='down'>click</Button>
      <Paragraph> Medium</Paragraph>
      <Paragraph size='18'> Big</Paragraph>

      <Tag size="12" color="red">hello</Tag>
      <Tag size="14" color="blue" href="www.google.com.ua">hello</Tag>
      <Tag size="14" color="green">hello</Tag>
      <Raiting raiting={reating} isEditable={true} setRaiting={setReating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  try {
    const { data: products } = await axios.get<ProductItem>(process.env.NEXT_PUBLIC_DOMAIN + 'products?skip=40&limit=10');
    return {
      props: {
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

export interface HomeProps extends Record<string, unknown> {
  products: ProductItem
}



