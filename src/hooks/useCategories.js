import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

export const useCategories = ()=>{
    const [categories, setCategories] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
// firebase.firestore().collection("categories")..orderBy("updatedOn", "desc")onSnapshot((snapshot)=>{})
        const q = query(collection(db,"categories"), orderBy("updatedOn", "desc"))

        const unsubscribe = onSnapshot(q,(snapshot)=>{
const categoriesData = snapshot.docs.map((doc)=>({
    ...doc.data(), id:doc.id
}))

setCategories(categoriesData)
        })

        return ()=> unsubscribe()

        
    },[])

    return {categories, isLoading, error}
}