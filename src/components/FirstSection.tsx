import React, { FC } from "react"
import styled from "styled-components"

import Image from "./Image"

const FirstSection: FC = props => {
  return (
    <Container>
      <Image />
      <Title>Hi, I am Ivan Lori</Title>
      <Subtitle>A Frontend Developer</Subtitle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  color: black;
`

const Title = styled.h1``

const Subtitle = styled.h3``

export default FirstSection
