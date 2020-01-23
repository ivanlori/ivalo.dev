import React, { FC } from "react"
import styled from "styled-components"

const Image: FC = props => {
  return (
    <Wrapper>
      <img src="#" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: grey;
`

export default Image
