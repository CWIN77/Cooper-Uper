import styled from 'styled-components'
import Header from '../components/header'
export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`