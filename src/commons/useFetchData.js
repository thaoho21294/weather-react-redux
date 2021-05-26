import { useState, useEffect } from 'react'

export const useFetchData = (url, initialData = [], dependence) => {
    const [data, setData] = useState({
        loading: true,
        error: null,
        data: initialData
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const convertedResponse = await response.json()
                setData((prevState) => ({
                    ...prevState,
                    loading: false,
                    data: convertedResponse.data
                }))
            } catch (e) {
                setData((prevState) => ({
                    ...prevState,
                    loading: false,
                    error: e
                }))
            }
        }

        fetchData()
    }, dependence)

    return data
}
export default useFetchData