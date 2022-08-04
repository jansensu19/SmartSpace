import styled from "styled-components"
import goodsign from "../img/goodsign.png"
import smallbgwave from "../img/small-bg-wave.png"

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
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
    width: 100%;
}
`

const Box = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
    width: 100%;
}
`

const Image = styled.img`
    width: 250px;
    height: 250px;
    margin: 10px;
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
  margin: 20px;

  &:hover{
    color: white;
    background-color: #0070ba;
  }
`

const Ads3 = () => {
  return (
    <Container>
        <Wrapper style={{ backgroundImage: 'url(' + smallbgwave + ')', backgroundSize: 'auto' ,backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: 'cover'}}>
            <Box>
                <Image src={goodsign} />
                <Info>
                    <Title>Gali potensi diri bersama Kursus Smart</Title>
                    <Sub>Yuk cobain daftar kelas atau kursus singkat untuk meningkatkan kemampuan diri kamu. Segera daftar sekarang juga!</Sub>
                </Info>
                
            </Box>
            <Button>Daftar Sekarang</Button>
        </Wrapper>
    </Container>
  )
}

export default Ads3