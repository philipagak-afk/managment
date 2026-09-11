import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const collectionRef = collection(db, "categories");

                const snapshot = await getDocs(collectionRef);

                const categoriesData = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));

                setCategories(categoriesData);

            } catch (err) {
                console.error(err);

                setError("Failed to fetch categories");

            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, isLoading, error };
};