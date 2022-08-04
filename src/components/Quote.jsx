import styled from "styled-components"
import Bg from "../img/bg-gray-dot.png"
import QuoteImg from '../img/quote.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #0070ba;
    width: 100%;
    @media (max-width: 480px) {
        width: 360%;
}
`

const Image = styled.img`
    width: 50px;
    margin-bottom: 10px;
`

const Quotes = styled.h2`
    text-align: center;
    font-size: 25px;
`

const Highlight = styled.span`
    color: #f1a300;
`

const Quote = () => {
  return (
    <Container style={{ backgroundImage: 'url(' + Bg + ')', backgroundSize: 'auto' ,backgroundRepeat: 'no-repeat', height: '250px'}}>
        <Image src={QuoteImg} />
        <Quotes>Bersama <Highlight>Smart Space</Highlight> temukan jurusan kuliah yang tepat <br /> sesuai <Highlight>minat dan bakatmu.</Highlight></Quotes>
    </Container>
  )
}

export default Quote