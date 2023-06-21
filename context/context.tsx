import { ProductArray } from "@/interfase/products.interface";
import { FC, ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";

// Создаем интерфейс для контекста
interface IAppContext {
    product: ProductArray[];
    newProduct?: (id: number) => void;
    deleteProduct?: (id: number) => void;
}

// Создаем контекст
export const AppContext = createContext<IAppContext>({
    product: [],
});

// Создаем провайдер контекста
export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [product, setProductState] = useState<ProductArray[]>([]);

    // Функция для сохранения продукта в сессионное хранилище
    const saveProductToSessionStorage = (updatedProduct: ProductArray[]) => {
        sessionStorage.setItem("product", JSON.stringify(updatedProduct));
    };

    // Функция для загрузки продукта из сессионного хранилища
    const loadProductFromSessionStorage = (): ProductArray[] => {
        const storedProduct = sessionStorage.getItem("product");
        return storedProduct ? JSON.parse(storedProduct) : [];
    };

    useEffect(() => {
        // Загружаем продукт из сессионного хранилища при монтировании компонента
        const storedProduct = loadProductFromSessionStorage();
        setProductState(storedProduct);
    }, []);
    //функция добавления продукта в стор и контекст
    const newProduct: IAppContext["newProduct"] = async (id: number) => {
        if (!product.some((item) => item.id === id)) {
            const { data } = await axios.get<ProductArray>(
                process.env.NEXT_PUBLIC_DOMAIN + "products/" + id
            );

            const updatedProduct = [...product, data];
            setProductState(updatedProduct);
            saveProductToSessionStorage(updatedProduct);
        }
    };
     //функция удаления продукта в стор и контекст
    const deleteProduct: IAppContext["deleteProduct"] = (id: number) => {
        const updatedProduct = product.filter((item) => item.id !== id);
        setProductState(updatedProduct);
        saveProductToSessionStorage(updatedProduct);
    };

    return (
        <AppContext.Provider value={{ product, newProduct, deleteProduct }}>
            {children}
        </AppContext.Provider>
    );
};























