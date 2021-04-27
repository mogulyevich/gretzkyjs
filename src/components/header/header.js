import React from "react"
import {useState, useCallback } from "react"
import styled from "styled-components"

import Top from "./top"
import NavMenu from "./navMenu"
import MobileMenu from "./mobileMenu"

export default function Header(initialValue = false) {
    const [isNotActive, menuIsActive] = useState(initialValue);
    const useMenu = useCallback(() => menuIsActive((isNotActive) => !isNotActive), []);

    const Overlay = styled.div`
        display: ${({ isNotActive }) => isNotActive ? 'none' : 'visible' };
    `

    const BurgerToX = styled.div`
        span {
            background-color: ${({ isNotActive }) => isNotActive ? '#000' : 'transparent' };
        }

        span::before {
            top: ${({ isNotActive }) => isNotActive ? '10px' : '0' };
            transform: ${({ isNotActive }) => isNotActive ? 'translate3d(0, 0, 0) rotate(0)' : 'translate3d(0, 0px, 0) rotate(45deg)' };
        }

        span::after {
            top: ${({ isNotActive }) => isNotActive ? '20px' : '0' };
            transform: ${({ isNotActive }) => isNotActive ? 'translate3d(0, 0, 0) rotate(0)' : 'translate3d(0, 0px, 0) rotate(-45deg)' };
        }
    `

    return (
        <>
            <Overlay isNotActive={isNotActive} onClick={useMenu}>
                <MobileMenu>{ isNotActive ? 'notActive' : 'Active' }</MobileMenu>
            </Overlay>
            <Top />
            <BurgerToX isNotActive={isNotActive} onClick={useMenu}>
                <NavMenu>{ isNotActive ? 'notActive' : 'Active' }</NavMenu>
            </BurgerToX>
        </>
    )
}