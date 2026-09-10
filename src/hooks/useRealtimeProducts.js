import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

export const useRealtimeProducts = ()=>{
    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
// firebase.firestore().collection("products")..orderBy("updatedOn", "desc")onSnapshot((snapshot)=>{})
        const q = query(collection(db,"products"), orderBy("updatedOn", "desc"))

        const unsubscribe = onSnapshot(q,(snapshot)=>{
const productsData = snapshot.docs.map((doc)=>({
    ...doc.data(), id:doc.id
}))

setProducts(productsData)
        })

        return ()=> unsubscribe()

        
    },[])

    return {products, isLoading, error}
}