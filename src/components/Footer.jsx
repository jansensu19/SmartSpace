import {
  Facebook,
  WhatsApp,
  Instagram,
  MailOutline,
  YouTube,
  MusicNote,
  LinkedIn,
} from "@material-ui/icons";
import styled from "styled-components";
import Logo from "../img/SmartSpace.png";

const Container = styled.div`
  background: radial-gradient(circle at -15% 115%, #067bc8, #2457a6 140%);
  display: flex;
  @media (max-width: 480px) {
    width: 360%;
}
`;

const Left = styled.div`
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 10px;
}
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 480px) {
    width: 100%;
}
`;

const Desc = styled.p`
  width: 200px;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  color: white;
  flex: 1;
  display: flex;
  padding: 20px;
  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    padding: 10px;
}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  color: white;
  flex: 1;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 10px;
}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
  :nth-last-child(1){
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 180%;
}
`;

const Right = styled.div`
  color: white;
  flex: 1;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 10px;
}
`;

const Information = styled.div`
  color: white;
  flex: 1;
  padding: 20px;
  list-style: none;
`;

const Item = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Image src={Logo} />
        <Desc>
          Smart Space adalah perusahaan teknologi informasi yang bergerak
          dibidang pendidikan, nama perusahaan kami adalah PT. Smart Space
          Indonesia
        </Desc>
      </Left>

      <Center>
        <Title>Kontak Kami</Title>
        <List>
          <ListItem>
            <WhatsApp style={{ marginRight: "10px" }} /> +62 812 3101413
          </ListItem>
          <ListItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            official@smartspace.id
          </ListItem>
          <ListItem>
            Grand Misisipi Tower Lt. 13 Jl. S. Purnama Kav 11-11 Jakarta Utara
          </ListItem>
        </List>
      </Center>

      <Right>
        <Title>Layanan</Title>
        <Item>Universitas</Item>
        <Item>Siswa</Item>
      </Right>

      <Information>
        <Title>Informasi</Title>
        <ListItem>Kebijakan Privasi</ListItem>
        <ListItem>Syarat dan Ketentuan</ListItem>
        <ListItem>Karir</ListItem>
      </Information>

      <SocialContainer>
        <Title>Ikuti Kami</Title>
        <SocialIcon color="3B5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <YouTube />
        </SocialIcon>
        <SocialIcon color="E60023">
          <MusicNote />
        </SocialIcon>
        <SocialIcon color="B40023">
          <LinkedIn />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
}

export default Footer;
