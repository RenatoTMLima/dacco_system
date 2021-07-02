import { FC, useState } from 'react'

import { Header } from '../Header'

export const MainPage: FC = () => {
  const [menuOption, setMenuOption] = useState('registrarVendas')

  return (
    <>
      <Header setMenuOption={setMenuOption} />
      <div>Menu: {menuOption}</div>
    </>
  )
}