import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://cycle-tools-server-production.up.railway.app/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [setProducts])
    return [products, setProducts];
}
export default useProducts;