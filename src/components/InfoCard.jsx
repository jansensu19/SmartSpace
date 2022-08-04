import styled from "styled-components";
import { services } from "../data"
import InfoCardItem from "./InfoCardItem"

const CardsWrapper = styled.div`
    display: flex;
    border-radius: 10px;
`

const InfoTitleCon = styled.div`
    width: 100%;
    margin: 10px;
    @media (max-width: 480px) {
      margin-left: 650px;
}

`


const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-size: 25px;
    @media (max-width: 480px) {
      
}

`

const SubTitle = styled.h1`
    text-align: center;
    font-size: 25px;
    @media (max-width: 480px) {
}
`

function InfoCard() {
  return (
    <>
    <InfoTitleCon>
    <Title>Apa yang sobat cari?</Title>
    <SubTitle>Yuk lihat layanan yang mungkin sesuai dengan kebutuhan kamu!</SubTitle>
    </InfoTitleCon>
    <CardsWrapper>
      {services.map(services => (
        <InfoCardItem services={services} key={services.id} />
      ))}
    </CardsWrapper></>
  );
}

export default InfoCard;
