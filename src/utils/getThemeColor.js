const getThemeColor = () => {
    const theme = typeof window !== 'undefined' && window.__theme
    
    if(theme === 'light') return "#c3d5c4"
    if(theme === 'dark') return "#080b08"
}

export default getThemeColor