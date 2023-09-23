import { createContext, useState, useEffect } from "react";
import { apiEndPoint } from "../../environment";

const CategoryContext = createContext();

export { CategoryContext };

const CategoryProvider = ({ children }) => {

    const [category, setCategory] = useState([]);
    const [error, setErrors] = useState("");
    const [loading, setLoading] = useState(false);

    const getCategory = () => {
        setLoading(true);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}categories`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCategory(result);
                setLoading(false);
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
                setLoading(false);
            });
    };

    useEffect(() => {
        getCategory()
    }, [])

    const contextData = {
        categoryName: category,
        error: error,
        loading: loading,
    };

    return (
        <CategoryContext.Provider value={contextData}>
            {loading ? null : children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;
