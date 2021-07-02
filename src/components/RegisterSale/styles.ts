import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterSaleContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  border-right: 1px solid #b7b5b5;
  padding: 10px;

  & h2 {
    text-align: center;
  }
`

export const SalesDashboard = styled.div`
  height: 100%;
  flex-grow: 2;
  padding: 10px;

  & h2 {
    text-align: center;
  }
`