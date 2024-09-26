import axios from 'axios'
import React from 'react'

const useAxios = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const get = React.useCallback(async (url, config) => {
        try {
            setError(null)
            setLoading(true)

            const res = await axios.get(url, config)

            setData(res.data)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const post = React.useCallback(async (url, body, config) => {
        try {
            setError(null)
            setLoading(true)

            await axios.post(url, body, config)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const postWithRes = React.useCallback(async (url, body, config) => {
        try {
            setError(null)
            setLoading(true)

            const res = await axios.post(url, body, config)

            setData(res.data)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const put = React.useCallback(async (url, body, config) => {
        try {
            setError(null)
            setLoading(true)

            await axios.put(url, body, config)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const putWithRes = React.useCallback(async (url, body, config) => {
        try {
            setError(null)
            setLoading(true)

            const res = await axios.put(url, body, config)

            setData(res.data)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const deleteReq = React.useCallback(async (url, body, config) => {
        try {
            setError(null)
            setLoading(true)

            await axios.delete(url, config)
        } catch (err) {
            setData(null)
            setError(err.data)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        data,
        error,
        loading,
        setData,
        setError,
        setLoading,
        get,
        post,
        postWithRes,
        put,
        putWithRes,
        deleteReq,
    }
}

export default useAxios
