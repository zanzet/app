import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcom from './arrow.svg';

export const Button = ({ appearanse, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
            
    return( 
            <button className={cn(styles.button, className,{
                [styles.primari]:appearanse == 'primari',
                [styles.goust]: appearanse == 'goust',
            })}
            {...props}
            
            >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow,{
                [styles.down]:arrow == 'down'
            })}>
                <ArrowIcom/></span>
            }
            </button>
    );

};