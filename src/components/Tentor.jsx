import styled from "styled-components";
import Bg from "../img/bg-gray-dot.png";
import tentorss1 from "../img/tentor-SS1.png";
import tentorss2 from "../img/tentor-SS2.png";
import tentorss3 from "../img/tentor-SS3.png";
import tentorss4 from "../img/tentor-SS4.png";
import tentorss5 from "../img/tentor-SS5.png";
import tentorss6 from "../img/tentor-SS6.png";
import tentorss7 from "../img/tentor-SS7.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 360%;
}
`

const Box = styled.div`
  width: 90%;
  margin: 50px 0 45px;
`

const Image = styled.img`
position: relative;
  width: 80%;
  height: 112.5%;
  margin: 30px;
  bottom: 75px;
  @media (max-width: 480px) {
    width: 80%;
    height: 130%;
    bottom: 90px;
}
`

const CardsItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`

const Info = styled.div`
  padding: 20px 30px 30px;
`

const Card = styled.div`
  background: #0070ba;
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 25px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin: 20px;
`

const ImgContainer = styled.div`
  background-color: white;
  width: 95%;
  height: 90%;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 10px;
  @media (max-width: 480px) {
        width: 90%;
}
`

const Figure = styled.figure`
    position: absolute;
    border: 1px solid #fbb018;
    background-color: #fbb018;
    border-radius: 25px;
    color: white;
    width: 30%;
    padding: 5px;
    text-align: center;
    bottom: 120px;
    right: 15px;
    z-index: 1;
    @media (max-width: 480px) {
        width: 50%;
        bottom: 150px;
}
`

const CardTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 600;
  padding-top: 30px;
  margin-left: 20px;
  color: white;
  @media (max-width: 480px) {
    justify-content: center;
}
`

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0070ba;
`

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`

const Sub = styled.p`
  width: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`

const Tentor = () => {
  return (
    <Container>
      <MainText
        style={{
          backgroundImage: "url(" + Bg + ")",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "250px",
        }}
      >
        <Title>Belajar online makin seru bareng Tentor Smart Space</Title>
        <Sub>
          Kalian akan diberikan materi pelajaran oleh tentor-tentor Smart Space
          yang berkualitas dan berpengalaman dalam mengajar
        </Sub>
      </MainText>

      <Box>
        <Info>
          <CardsItem>
            <Card>
              <ImgContainer>
              <Figure>Tentor Kimia</Figure>
                <Image src={tentorss1} style={{bottom: "90px"}}/>
              </ImgContainer>
              <CardTitle>Muhammad Fahmi Ridlo</CardTitle>
            </Card>
            <Card>
              <ImgContainer>
              <Figure>Tentor Fisika</Figure>
                <Image src={tentorss2} style={{bottom: "90px"}}/>
              </ImgContainer>
              <CardTitle>Fifa Pransiska Indra Loseta</CardTitle>
            </Card>
            <Card>
              <ImgContainer>
              <Figure>Tentor Bahasa Indonesia</Figure>
                <Image src={tentorss3} style={{bottom: "90px"}}/>
              </ImgContainer>
              <CardTitle>Khusnia</CardTitle>
            </Card>
            <Card>
              <ImgContainer>
              <Figure>Tentor Matematika</Figure>
                <Image src={tentorss4} style={{bottom: "90px"}}/>
              </ImgContainer>
              <CardTitle>Sophia Maulidatul Adha</CardTitle>
            </Card>
          </CardsItem>

          <CardsItem>
            <Card>
              <ImgContainer>
              <Figure>Tentor IPS</Figure>
                <Image src={tentorss5} />
              </ImgContainer>
              <CardTitle>Nur Lailatul Maghfiroh</CardTitle>
            </Card>
            <Card>
              <ImgContainer>
              <Figure>Tentor Biologi</Figure>
                <Image src={tentorss6} />
              </ImgContainer>
              <CardTitle>Vania Nur Azizah</CardTitle>
            </Card>
            <Card>
              <ImgContainer>
              <Figure>Tentor Bahasa Inggris</Figure>
                <Image src={tentorss7} />
              </ImgContainer>
              <CardTitle>Nur Hamidatul Mauidloh</CardTitle>
            </Card>
          </CardsItem>
        </Info>
      </Box>
    </Container>
  );
};

export default Tentor;
