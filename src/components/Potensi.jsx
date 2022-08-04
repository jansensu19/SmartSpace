import styled from "styled-components";
import tesgayabelajar from "../img/tes-gaya-belajar.png";
import teskepribadian from "../img/tes-kepribadian.png";
import tespenjurusan from "../img/tes-penjurusan.png";
import teskemampuan from "../img/tes-kemampuan.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 480px) {
    width: 300%;
}
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const Image = styled.img`
  width: 45%;
  margin: 30px;
`

const MainInfoText = styled.div`
    margin: 20px;
    @media (max-width: 480px) {
      width: 200%;
      text-align: center;
}
`

const MainTitle = styled.h1`
  width: 100%;
  margin-bottom: 20px;
  color: #0070ba;
  @media (max-width: 480px) {
      width: 65%;
      text-align: center;
}
`

const MainSub = styled.p`
    font-size: 20px;
    width: 60%;
    line-height: 30px;
    @media (max-width: 480px) {
      width: 60%;
      margin: 20px;
      text-align: center;
}
`

const InfoText = styled.div`
  margin: 50px;
  text-align: center;
  @media (max-width: 480px) {
      width: 100%;
      margin-left: 200px;
}
`

const Info = styled.div`
  display: flex;
  margin: 10px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 100px;
  margin: 20px;
  text-align: center;

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    margin-left: 400px;
}
  
  &:hover {
    border: 1px solid white;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
    background-color: white;
    border-radius: 15px;
    cursor: pointer;
  }
`

const CardTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`

const Title = styled.h1`
  width: 100%;
  margin-bottom: 20px;
`

const Sub = styled.p``;

const Button = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: #f1a300;
  background: none;
  text-decoration: underline;
  cursor: pointer;
`

const Potensi = () => {
  return (
    <Container>
      <Box>
        <MainInfoText>
          <MainTitle>Yuk Ikutan Event Smart Space !</MainTitle>
          <MainSub>
            Event ini gratis loh sobat ! Yuk ikutin semua event yang ada biar
            pengetahuan kamu luas. Jangan sampai ketinggalan ya sobat!
          </MainSub>
        </MainInfoText>

        <InfoText>
          <Title>Ingin mengenali potensi diri kamu lebih dalam?</Title>
          <Sub>
            Ayo mulai dengan nyobain rangkaian tes minat bakat secara komplit di
            fitur <b>MINAT SMART:</b>
          </Sub>
        </InfoText>

        <Info>
          <Card>
            <Image src={teskepribadian} />
            <CardTitle>Tes Kepribadian</CardTitle>
            <Button>Coba Sekarang</Button>
          </Card>
          <Card>
            <Image src={tespenjurusan} />
            <CardTitle>Tes Penjurusan</CardTitle>
            <Button>Coba Sekarang</Button>
          </Card>
          <Card>
            <Image src={teskemampuan} />
            <CardTitle>Tes Kemampuan</CardTitle>
            <Button>Coba Sekarang</Button>
          </Card>
          <Card>
            <Image src={tesgayabelajar} />
            <CardTitle>Tes Gaya Belajar</CardTitle>
            <Button>Coba Sekarang</Button>
          </Card>
        </Info>
      </Box>
    </Container>
  );
};

export default Potensi;
