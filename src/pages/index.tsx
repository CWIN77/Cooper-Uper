import styled from 'styled-components'
import Header from '../components/header'
export default function Home() {
  const getData = () => {
    fetch("https://express-mongodb-eta.vercel.app/goal")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  const createUser = () => {
    fetch("http://localhost:9000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((response) => console.log(response));
  }
  return (
    <Container>
      <Header />
      <button onClick={getData}>데이터 가져오기</button>
      <button onClick={createUser}>유저 만들기</button>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`