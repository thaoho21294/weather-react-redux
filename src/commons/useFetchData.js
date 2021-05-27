import { useState, useEffect } from 'react'

export const useFetchData = (url, initialData = [], dependencies = []) => {
    const [data, setData] = useState({
        loading: true,
        error: null,
        data: initialData
    })

    useEffect(() => {
        const fetchData = async () => {
            setData((prevState) => ({
                ...prevState,
                loading: true,
            }))
            try {
                const response = await fetch(url)
                const convertedResponse = await response.json()
                setData((prevState) => ({
                    ...prevState,
                    loading: false,
                    data: convertedResponse.data
                }))
            } catch (err) {
                setData((prevState) => ({
                    ...prevState,
                    loading: false,
                    error: err
                }))
            }
        }
        fetchData()
    }, dependencies)
    return data
}
export default useFetchData