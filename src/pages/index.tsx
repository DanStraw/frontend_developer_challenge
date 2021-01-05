import React from 'react';
import Hero from "../components/Hero";
import Header from "../components/Header";
import Info from "../components/Info";


function Home(data) {

    return (
        <div className="container border-8 border-black justify-center p-10 bg-gray-700">
            <div className="container flex justify-center bg-gray-700 border-r-4 border-l-4 border-t-4 border-white pt-20">
                <Hero src={data.data.src} />
            </div>

            <div className="container flex justify-center bg-gray-700 border-r-4 border-l-4 border-r-white pt-10">
                <Header data={data.data.header} />
            </div>
            <div className="container flex justify-center border-b-4 border-r-4 border-l-4 pt-20 pb-20">
                <Info message={data.data.message} coords={data.data.coords} date={data.data.content} location={data.data.cta} />
            </div>
        </div>



    )
}

export async function getStaticProps() {
    const apiURL = "http://localhost:3000/api/cms";
    const response = await fetch(apiURL);
    const data = await response.json();

    return {
        props: {
            data,
        },
    }
}

export default Home;