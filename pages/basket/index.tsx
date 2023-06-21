import { CartArrayRender, Htag, Paragraph, Tag } from "@/components";
import { AppContext } from "@/context/context";
import { withLayout } from "@/layout/Layout";
import { useContext } from "react";


function Basket(): JSX.Element {
    const { product } = useContext(AppContext);
    const renderCart = () => {
        const item = product.map((i) => (
            <li key={i.id}>
                <CartArrayRender props={i} initial={true} />
            </li>

        ));
        return (
            <ul className="ul__list">
                {item}
            </ul>
        );
    };
    return (
        <>
            <Htag tag={"h2"}>Basket</Htag>
            <Paragraph size="18">Selected goods:</Paragraph>
            {renderCart()}
            <Tag size="14" color="green">Plase an order</Tag>
        </>
    );
}

export default withLayout(Basket);