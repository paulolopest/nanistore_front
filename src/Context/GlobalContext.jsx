import React from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = React.createContext('')

const GlobalStorage = ({ children }) => {
    const [theme, setTheme] = React.useState('start')
    const [cartDropDown, setCartDropDown] = React.useState(false)
    const [searchDropDown, setSearchDropDown] = React.useState(false)
    const [profileDropDown, setProfileCartDropDown] = React.useState(false)

    const openDropDown = (dropDown) => {
        if (dropDown === 'cart') {
            setCartDropDown(!cartDropDown)
            setSearchDropDown(false)
            setProfileCartDropDown(false)
        } else if (dropDown === 'search') {
            setSearchDropDown(!searchDropDown)
            setCartDropDown(false)
            setProfileCartDropDown(false)
        } else if (dropDown === 'profile') {
            setProfileCartDropDown(!profileDropDown)
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
                theme,
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
