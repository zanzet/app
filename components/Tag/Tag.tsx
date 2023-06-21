import { ParagraphProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({ size, className, color = 'primari', href, children, ...props }: ParagraphProps) => {
    return (
        <p
            className={cn(styles.tag, className, {
                [styles.size_12]: size == '12',
                [styles.size_14]: size == '14',
                [styles.goust]: color == 'goust',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.primari]: color == 'primari',
                [styles.blue]: color == 'blue',
            })}
            {...props}
        >
            {
                href ? <a target="_blank" href={href}>{children}</a> : <>{children}</>
            }
        </p>
    );
};