import * as React from 'react'

const ThemeContext = React.createContext()

export function ThemeProvider({ children, ...props }) {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light'
        }
        return 'light'
    })

    React.useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.add('light')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const value = React.useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            <div {...props}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = React.useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
