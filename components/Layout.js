import { Navbar, navbar } from "./Navbar";
import { Footer } from './footer';

export const Layout = ( {children} ) => {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
         </>

    )

}