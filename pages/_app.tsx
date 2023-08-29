import Layout from "@/components/layout";
import "./globals.css";


const MyApp = ({Component, pageProps}: {Component: any, pageProps:any}) => {
    return ( 
        <Layout>
            <Component {...pageProps} />
        </Layout>
     );
}
 
export default MyApp;