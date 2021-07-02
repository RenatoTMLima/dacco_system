import styled, { css } from 'styled-components'

interface MenuItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #b7b5b5;
  border-bottom: 1px solid #b7b5b5;
  box-shadow: 0px 2px 17px -8px rgba(0,0,0,0.73);
  margin-bottom: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`

export const Logo = styled.img`
  height: 20px;

  & + img {
    margin-left: 20px;
  }
`

export const MenuItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const MenuItem = styled.a<MenuItemProps>`
  height: 100%;
  line-height: 80px;
  font-family: 'Lora', 'Lora Italic';
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }

  ${props => props.selected && css`
    font-weight: 600;
    color: #ECB948;
    border-bottom: 5px solid #ECB948;
  `}
`