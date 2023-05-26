import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = 'https://cycle-tools-server-production.up.railway.app/products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [setProducts])
    return [products, loading, setProducts];
}
export default useProducts;