import { FC } from 'react'

import { Container, RegisterSaleContainer, SalesDashboard } from './styles'

export const RegisterSale: FC = () => {
  return (
    <Container>
      <RegisterSaleContainer>
        <h2>Registro de venda</h2>
      </RegisterSaleContainer>
      <SalesDashboard>
        <h2>Vendas de hoje</h2>
      </SalesDashboard>
    </Container>
  )
}