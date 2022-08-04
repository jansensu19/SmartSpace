import styled from "styled-components"

const CopyrightTitle = styled.div`
    padding: 30px;
    background: radial-gradient(circle at -15% 115%,#1069a5,#0f4392 140%);
    background-color: rgba(0,0,0,0.13);
    color: white;
    @media (max-width: 480px) {
      width: 360%;
    padding: 20px;
    text-align: center;
}
`

const Copyright = () => {
  return (
    <CopyrightTitle>
        © 2022 Zexious. All Rights Reserved
    </CopyrightTitle>
  )
}

export default Copyright