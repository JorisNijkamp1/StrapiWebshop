import {useEffect} from 'react';
import withRedux from "next-redux-wrapper";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import Helmet from "react-helmet";

import Layout from '~/components/layout';

import makeStore from "~/store";
import {demoActions} from '~/store/demo';

import '../styles/globals.css'
import "~/public/sass/style.scss";
import {AuthProvider} from "~/context/AuthContext";

const App = ({Component, pageProps, store}) => {
    useEffect(() => {
        document.getElementById('__next').classList.add('riode-rounded-skin');
        if (store.getState().demo.current !== "26") {
            store.dispatch(demoActions.refreshStore("26"));
        }
    }, [])

    return (
        <Provider store={store}>
            <AuthProvider>
                <PersistGate
                    persistor={store.__persistor}
                    loading={<div className="loading-overlay">
                        <div className="bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                            <div className="bounce4"></div>
                        </div>
                    </div>}>
                    <Helmet>
                        <meta charSet="UTF-8"/>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                        <title>E-commerce webshop</title>
                        <meta name="keywords" content="E-commerce webshop"/>
                        <meta name="description" content="E-commerce webshop"/>
                        <meta name="author" content="WebShop"/>
                    </Helmet>

                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </AuthProvider>
        </Provider>
    );
}

export default withRedux(makeStore)(App);
