import { FC, useState } from 'react'
import { ContentContainer } from './styles'

import { Header } from '../Header'
import { RegisterSale } from '../RegisterSale'

export const MainPage: FC = () => {
  const [menuOption, setMenuOption] = useState('registrarVendas')

  return (
    <>
      <Header setMenuOption={setMenuOption} menuOption={menuOption} />
      <ContentContainer>
        {menuOption === 'registrarVendas' && <RegisterSale />}
        {menuOption === 'vendasMensal' && <div>vendasMensal</div>}
        {menuOption === 'gerarRecibo' && <div>gerarRecibo</div>}
      </ContentContainer>
    </>
  )
}