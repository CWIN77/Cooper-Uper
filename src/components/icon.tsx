import styled from 'styled-components'

export default function IconComp({ props }: { props: { icon: any, size: string | number, color: string } }) {
  const MainSvg = styled.svg`
    width:${props.size}px;
    height:${props.size}px;
    *{
      fill:${props.color};
    }
  `
  return (
    <MainSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <props.icon />
    </MainSvg>
  )
}