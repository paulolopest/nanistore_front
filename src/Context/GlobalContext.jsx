import React from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '../Hooks/useMediaQuery'

export const GlobalContext = React.createContext('')

const GlobalStorage = ({ children }) => {
    const [theme, setTheme] = React.useState('start')
    const [cartDropDown, setCartDropDown] = React.useState(false)
    const [searchDropDown, setSearchDropDown] = React.useState(false)
    const [profileDropDown, setProfileDropDown] = React.useState(false)

    const smScreen = useMediaQuery('(max-width: 541px)')
    const mdScreen = useMediaQuery('(max-width: 769px)')
    const lgScreen = useMediaQuery('(max-width: 1025px)')
    const xlScreen = useMediaQuery('(max-width: 1281px)')

    const openDropDown = (dropDown) => {
        if (dropDown === 'cart') {
            setCartDropDown(!cartDropDown)
            setSearchDropDown(false)
            setProfileDropDown(false)
        } else if (dropDown === 'search') {
            setSearchDropDown(!searchDropDown)
            setCartDropDown(false)
            setProfileDropDown(false)
        } else if (dropDown === 'profile') {
            setProfileDropDown(!profileDropDown)
            setSearchDropDown(false)
            setCartDropDown(false)
        }
    }

    const changeTheme = () => {
        setTheme(!theme)
        window.localStorage.setItem('theme', theme)
    }

    return (
        <GlobalContext.Provider
            value={{
                setTheme,
                changeTheme,
                openDropDown,
                setSearchDropDown,
                setProfileDropDown,
                theme,
                smScreen,
                mdScreen,
                lgScreen,
                xlScreen,
                cartDropDown,
                searchDropDown,
                profileDropDown,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

GlobalStorage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalStorage
