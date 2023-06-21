import axios from "axios";
import { ProductItem } from "../../interfase/products.interface";
import { CartArrayRender, Tag } from "@/components";
import { useState } from "react";
import styles from './ProdectPageComponent.module.css';
import cn from 'classnames';
import { useContext } from "react";
import { AppContext } from "@/context/context";

interface ProductProps {
    categori: string[];
    product: ProductItem;
}

export function ProductPageComponent({ product, categori }: ProductProps): JSX.Element {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductItem>(product);
    // const { newProduct } = useContext(AppContext);

    const onLoading = async (categori: string) => {
        const { data: filterCategori } = await axios.get<ProductItem>(
            process.env.NEXT_PUBLIC_DOMAIN + `products/category/${categori}`
        );
        setFilteredProducts(filterCategori);
    };

    const handleCategoryClick = (item: string) => {
        setSelectedCategory(item);
        if (item) {
            onLoading(item);
        } else {
            setFilteredProducts(product);
        }
    };

    return (
        <div className={styles.page__product}>
            <ul className="ul__list">
                {categori.map((item, i) => (
                    <li
                        className={cn(styles.categori__item, {
                            [styles.selected]: item === selectedCategory
                        })}
                        key={i}
                        onClick={() => handleCategoryClick(item)}
                    >
                        <Tag>{item}</Tag>
                    </li>
                ))}
            </ul>
            <ul className="ul__list">
                {filteredProducts.products.map((item) => (
                    <li key={item.id}>
                        <CartArrayRender props={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}