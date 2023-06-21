import { ProductArray } from '@/interfase/products.interface';
import styles from './CartArrayRender.module.css';
import { Paragraph, Raiting } from '../index';
import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '../index';
import { useContext, MouseEvent } from 'react';
import { AppContext } from '@/context/context';

interface CartArrayProp {
    props: ProductArray;
    initial?: boolean;
}

export const CartArrayRender: FC<CartArrayProp> = ({ props, initial }): JSX.Element => {
    const { id, title, price, rating, thumbnail } = props;
    const { newProduct, deleteProduct } = useContext(AppContext);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        !initial ? newProduct && newProduct(id) : deleteProduct && deleteProduct(id);
    };
    return (
        <Link href={`/product/${id}`}>
            <div className={styles.item}>
                <img src={thumbnail} alt={title} className={styles.img} />
                <Paragraph size='18'>{title.length > 20 ? `${title.slice(0, 19)}...` : title}</Paragraph>
                <div className={styles.prise__wrapp}>
                    <div className={styles.item__prise}>
                        <Paragraph size='14'>{price}$</Paragraph>
                        <Raiting raiting={Math.floor(rating)} isEditable={false} />
                    </div>
                    <Button
                        appearanse='goust'
                        arrow='rigth'
                        onClick={handleClick}>
                        {initial ? 'delete' : 'Buy'}</Button>
                </div>
            </div>
        </Link>
    );
};