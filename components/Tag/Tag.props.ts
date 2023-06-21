import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: '12' | '14' ;
    children: ReactNode;
    color?: 'green' | 'red' | 'goust' | 'primari' | 'blue';
    href?: string;
}