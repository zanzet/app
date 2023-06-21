import { ProductArray } from '@/interfase/products.interface';
import styles from './SinglePage.module.css';
import { Paragraph, Raiting, Htag, Button } from '../index';
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { AppContext } from "@/context/context";

interface CartArrayProp {
    props: ProductArray
}

export const SinglePageRender: FC<CartArrayProp> = ({ props }): JSX.Element => {
    const { title, price, rating, thumbnail, brand, description, images, id } = props;

    const { product,newProduct } = useContext(AppContext);
 
    return (

        <div className={styles.item}>
            <div className={styles.item__img}>
                <img src={thumbnail} alt={title} className={styles.img__preve} />
                <div className={styles.img__wrap}>
                    {images.map((foto: string, i: number) => <img src={foto} key={i} alt={title} className={styles.img__smoll} />)}
                </div>
            </div>
            <div className={styles.item__wrap__descrp}>
                <div className={styles.title}>
                    <Htag tag='h3'>{brand}</Htag>
                    <Htag tag='h2'>{title}</Htag>
                </div>

                <div className={styles.item__prise}>
                    <Paragraph size='16'>{price}$</Paragraph>
                    <Raiting raiting={Math.floor(rating)} isEditable={false} />
                    <Paragraph size='14'>{description}</Paragraph>
                </div>
                <div className={styles.item__button}>
                    <Button
                        appearanse='goust'
                        arrow='rigth'
                        onClick={() => { newProduct && newProduct(id);}}
                    >
                        Buy
                    </Button>
                    <Button appearanse='goust' arrow='rigth'>Selected</Button>
                </div>

            </div>
            <div className={styles.item__back}>
                <Link href={`/product`}><Paragraph size='14'>Back to Catalog</Paragraph></Link>
            </div>

        </div>

    );
};