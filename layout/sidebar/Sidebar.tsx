import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import Logo from './logo.svg';
import { useContext } from "react";
import { AppContext } from "@/context/context";
import { useRouter } from "next/router";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  const { product } = useContext(AppContext);
  const router = useRouter();
  interface linkProps {
    name: string;
    link: string;
  }
  const link: linkProps[] = [
    {
      name: 'Product',
      link: '/product',
    },
    {
      name: 'Basket',
      link: '/basket',
    },
    {
      name: 'Coments',
      link: '/coments',
    }
  ];

  return (
    <>
      <div {...props}>
        <Link href={'/'}><Logo /></Link>
        <div className={styles.category__wrap}>
          {link.map(item => {
            return (
              <Link key={item.name} href={item.link}><div className={cn(styles.category__link, {
                [styles.categori__active]: item.link == router.asPath
              }
              )}>{item.name} {item.name == "Basket" ? product.length : null}</div></Link>
            );
          })}

        </div>
      </div>
    </>
  );
};