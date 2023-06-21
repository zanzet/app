import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: '14' | '16' | '18';
    children: ReactNode;
}