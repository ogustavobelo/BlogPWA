import React, { useState, useEffect } from 'react'

import Icons from './Icons'
import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor'

const MenuBar = () => {

    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark'
    const isListMode = display === 'list'

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink paintDrip duration={0.5} hex={getThemeColor()} to="/" title="Voltar para Home">
                    <S.MenuBarItem>
                        <Icons.Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink paintDrip duration={0.5} hex={getThemeColor()} to="/search/" title="Pesquisar">
                    <S.MenuBarItem>
                        <Icons.Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema"
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                    }}
                    className={theme} >
                    <Icons.Light />
                </S.MenuBarItem>
                <S.MenuBarItem
                    title="Mudar visualização"
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? "grid" : "list")
                    }}
                    className="display"
                >
                    {isListMode ? <Icons.Grid /> : <Icons.List />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo" onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                    <Icons.Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar