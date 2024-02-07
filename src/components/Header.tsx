import Head from 'next/head';

function Header() {
    return (
        <Head>
            <title>Monitoring App</title>
            <meta name="description" content="Monitoring App for Monitoring Data Flow, Server issues and Server related information" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header