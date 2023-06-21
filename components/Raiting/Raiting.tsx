import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import StarIcon from './star.svg';
import cn from "classnames";
import { useEffect, useState, KeyboardEvent } from "react";

export const Raiting = ({ isEditable = false, raiting, setRaiting, ...props }: RaitingProps) => {

    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructorRaiting(raiting);
    }, [raiting]);

    const constructorRaiting = (curentRaiting: number) => {
        const updateArray = raitingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filed]: i < curentRaiting,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeStar(i + 1)}
                    onMouseLeave={() => changeStar(raiting)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon

                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handlSpase(i + 1, e)}
                    />
                </span>
            );
        });
        setRaitingArray(updateArray);
    };

    const changeStar = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructorRaiting(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRaiting) {
            return;
        }
        setRaiting(i);
    };
    const handlSpase = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRaiting) {
            return;
        }
        setRaiting(i);
    };
    return (
        <div {...props}>
            {raitingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};