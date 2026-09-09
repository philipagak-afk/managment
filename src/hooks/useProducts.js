import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore"

export const useProducts = ()=>{
    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{

        const fetchProducts = async()=>{
            try {
                const collectionRef = collection(db, "products")

                const snapshot = await getDocs(collectionRef)

                const productsData = snapshot.docs.map((doc)=>({
                    ...doc.data(), id: doc.id
                }))

                setProducts(productsData)


            } catch (err) {
                console.error(err);

                setError("Failed to fetch products")
                
            } finally{
                setIsLoading(false)
            }
        }

        fetchProducts()
    },[])

    return {products, isLoading, error}
}