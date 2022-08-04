import styled from 'styled-components';

const Row = styled.div`
    margin: 0 -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Col = styled.div`
    width: 50%;
    margin-bottom: 30px;
    padding-top: 40px;
    flex-direction: column;
    @media (max-width: 480px) {
    width: 100%;
}
`

const CardsWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    border-radius: 5px;
    padding: 25px;
    
    @media (max-width: 480px) {
    width: 70%;
    margin: 10px 80px;
    padding: 10px 13px;
}

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const Image = styled.img`
    border-radius: 5px 5px 0 0;
    margin-bottom: 10px;
`

const Info = styled.div`
    padding: 2px 16px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    
`

const InfoText = styled.h3`
    color: #252e48;
    margin-bottom: 10px;
`

const SubText = styled.p`
    color: #252e489c;
    font-size: 14px;
    line-height: 24px;
    margin: 10px;
`

const Button = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: #f1a300;
  background: none;
  text-decoration: underline;
  cursor: pointer;
`

function InfoCardItem({services}) {
    return (
        <Row>
            <Col>
                <CardsWrapper>
                        <Info>
                            <Image src={services.img} />
                                <InfoText>{services.text}</InfoText>
                                <SubText>{services.sub}</SubText>
                                <Button>Selengkapnya</Button>
                        </Info>    
                </CardsWrapper>
            </Col>
        </Row>
    );
}

export default InfoCardItem;