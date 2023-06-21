import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "@/context/context";
import { HomeProps } from "@/pages";
import { ProductCategoriProps } from "@/pages/product/index";
import { ProductProps } from "@/pages/product/[id]";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends HomeProps & ProductProps & IAppContext & ProductCategoriProps>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

