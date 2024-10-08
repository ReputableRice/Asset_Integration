"use client"
//API Page Declaration
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(DATA_URL);
        console.log(response);
        const data = await response.json()
        setData(data)
    }

    const DisplayProducts = () => {
        if (data) {

            const productList = [];
            data.forEach((product, index) => {
                productList.push(
                    <li key={index}>{product.name}</li>
                )
            });
            
            return (
                <div className="border-4 border-black p-4 mb-4">
                    <ul >
                        {productList}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="border-4 border-black p-4 mb-4">
                    <ul >
                        Nothing
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className="p-4 bg-yellow-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcome to my Product Page</h1>
                <button
                    className="border-neutral-200 bg-white bh-black px-6"
                onClick={() => fetchData()}
                >Fetch Products</button>
            </header>
            Welcome to my API Page
            <DisplayProducts />
        </div>
    );
}

