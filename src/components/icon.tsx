import styled from 'styled-components'

export default function IconComp({ props }: { props: { icons: any, size: string | number, color: string } }) {
  const MainSvg = styled.svg`
    *{
      fill:${props.color};
    }
  `
  return (
    <MainSvg width={props.size} height={props.size}>
      <props.icons />
    </MainSvg>
  )
}