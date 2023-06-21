import { ParagraphProps } from "./paragraph.props";
import styles from "./paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({ size = '16',className, children, ...props }: ParagraphProps) => {
    return(
        <p
            className={cn(styles.p, className,{
                [styles.size_14]: size == '14',
                [styles.size_16]: size == '16',
                [styles.size_18]: size == '18', 
            })}
            {...props}
        >{children}</p>
    );
};