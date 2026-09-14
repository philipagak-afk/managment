import { useEffect, useState } from "react";
import { db } from "../firebase";
import {.
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch categories
    useEffect(() => {

        const fetchCategories = async () => {
            try {
                setIsLoading(true);

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


    // Create category
    const createCategory = async (category) => {
        try {
            const collectionRef = collection(db, "categories");

            const docRef = await addDoc(collectionRef, category);

            setCategories((prev) => [
                ...prev,
                {
                    ...category,
                    id: docRef.id
                }
            ]);

        } catch (err) {
            console.error(err);
            setError("Failed to create category");
        }
    };


    // Update category
    const updateCategory = async (id, category) => {
        try {
            const docRef = doc(db, "categories", id);

            await updateDoc(docRef, category);

            setCategories((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, ...category }
                        : item
                )
            );

        } catch (err) {
            console.error(err);
            setError("Failed to update category");
        }
    };


    // Delete category
    const deleteCategory = async (id) => {
        try {
            const docRef = doc(db, "categories", id);

            await deleteDoc(docRef);

            setCategories((prev) =>
                prev.filter((item) => item.id !== id)
            );

        } catch (err) {
            console.error(err);
            setError("Failed to delete category");
        }
    };


    return {
        categories,
        isLoading,
        error,
        createCategory,
        updateCategory,
        deleteCategory
    };
};