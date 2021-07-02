import { useCallback, FC } from 'react'

import { MenuItem } from './styles'

import logo from '../../../assets/logo.png'

interface HeaderProps {
  setMenuOption: Function
}

export const Header: FC<HeaderProps> = ({ setMenuOption }) => {

  const handleMenuChange = useCallback((menu: string) => {
    setMenuOption(menu)
  }, [setMenuOption])
  
  return (
    <div>
      <img src={logo} />
      <MenuItem onClick={() => handleMenuChange('registrarVendas')} >Registrar vendas</MenuItem>
      <MenuItem onClick={() => handleMenuChange('vendasMensal')} >Vendas mensal</MenuItem>
      <MenuItem onClick={() => handleMenuChange('gerarRecibo')} >Gerar recibo</MenuItem>
    </div>
  )
}