import styled from 'styled-components'
import ArrowLeft from "../svg/arrowLeft.svg"
import Icon from './icon';

export default function Header() {
  return (
    <Container>
      <PartSection justify="start">
        <Icon props={{ icons: ArrowLeft, size: 32, color: "white" }}></Icon>
      </PartSection>
      <PartSection justify="center">
        <ProjectName>New Project</ProjectName>
      </PartSection>
      <PartSection justify="end">sss</PartSection>
    </Container >
  )
}

const Container = styled.article`
  width:100vw;
  display:flex;
  justify-content: space-between;
  background-color: #303438;
`
const PartSection = styled.section<{ justify: string }>`
  width:30%;
  display:flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`
const ProjectName = styled.h1`
  color:#FFFFFF;
  padding: 16px;
`