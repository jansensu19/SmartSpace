import styled from "styled-components"
import conference from "../img/conference.png"
import bgcoverads from "../img/bg-cover-ads.png"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media (max-width: 480px) {
    width: 360%;
}
`
const Wrapper = styled.div`
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Box = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 25%;
    margin: 30px;
`

const Info = styled.div`
    color: white;
    margin: 10px;
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const Sub = styled.p`
    width: 90%;
`

const Button = styled.button`
  border: 1px solid white;
  padding: 10px;
  font-size: 20px;
  color: #0070ba;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 800;
  margin: 10px;

  &:hover{
    color: white;
    background-color: #0070ba;
  }

  @media (max-width: 480px) {
        margin: 30px;
}
`

const Ads2 = () => {
  return (
    <Container>
        <Wrapper style={{ backgroundImage: 'url(' + bgcoverads + ')', backgroundSize: 'auto' ,backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: 'cover'}}>
            <Box>
                <Image src={conference} />
                <Info>
                    <Title>Belajar seru dan berinteraksi bersama Sobat Smart di seluruh Indonesia lainnya di Ruang Smart</Title>
                    <Sub>Gabung di Ruang Smart yuk untuk mendapatkan pengalaman belajar yang lebih interaktif bersama para tentor pintar di Smart Space. Tingkatkan semangat belajar Sobat dalam meraih cita-cita bersama Smart Space dan manfaatkanlah Ruang Smart sebaik-baiknya ya!</Sub>
                    <Button>Coba Sekarang</Button>
                </Info>
                
            </Box>
        </Wrapper>
    </Container>
  )
}

export default Ads2