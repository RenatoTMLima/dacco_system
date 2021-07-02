import { useCallback, FC } from 'react'

import { Container, LogoContainer, Logo, MenuItemContainer, MenuItem } from './styles'

import logoIcon from '../../../assets/logo-icon.png'
import logoText from '../../../assets/logo-text.png'

interface HeaderProps {
  setMenuOption: Function;
  menuOption: string;
}

export const Header: FC<HeaderProps> = ({ setMenuOption, menuOption }) => {

  const handleMenuChange = useCallback((menu: string) => {
    setMenuOption(menu)
  }, [setMenuOption])
  
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoIcon} />
        <Logo src={logoText} />
      </LogoContainer>
      <MenuItemContainer>
        <MenuItem onClick={() => handleMenuChange('registrarVendas')} selected={menuOption === 'registrarVendas'} >Registrar vendas</MenuItem>
        <MenuItem onClick={() => handleMenuChange('vendasMensal')} selected={menuOption === 'vendasMensal'} >Vendas mensal</MenuItem>
        <MenuItem onClick={() => handleMenuChange('gerarRecibo')} selected={menuOption === 'gerarRecibo'} >Gerar recibo</MenuItem>
      </MenuItemContainer>
    </Container>
  )
}