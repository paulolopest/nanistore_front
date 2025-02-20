import React from 'react'

const useMediaQuery = (media) => {
    const [match, setMatch] = React.useState(false)

    React.useEffect(() => {
        const changeMatch = () => {
            const { matches } = window.matchMedia(media)

            setMatch(matches)
        }

        changeMatch()

        window.addEventListener('resize', changeMatch)

        return () => {
            window.removeEventListener('resize', changeMatch)
        }
    }, [media])
    return match
}

export default useMediaQuery
