import styled from "styled-components"
import bgkomunitassmart from "../img/bg-komunitas-smart.png"
import komunitassmart from "../img/komunitas-smart.png"

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
    justify-content: center;
`

const Image = styled.img`
    width: 30%;
    margin: 30px;
`

const Info = styled.div`
    width: 50%;
    margin: 10px;
`

const Title = styled.h1`
    font-weight: 900;
    margin-bottom: 20px;
`

const Sub = styled.p`
    line-height: 25px;
    font-weight: 400;
`

const Button = styled.button`
  border: 1px solid #0070ba;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #0070ba;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 800;
  margin: 20px;

  &:hover{
    color: #0070ba;
    background-color: white;
  }
`

const Friends = () => {
  return (
    <Container>
        <Wrapper style={{ backgroundImage: 'url(' + bgkomunitassmart + ')', backgroundSize: 'auto' ,backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: 'cover'}}>
            <Box>
                <Info>
                    <Title>Cari teman baru, berdiskusi, dan berbagi informasi dengan sesama Sobat Smart melalui fitur Komunitas Smart.</Title>
                    <Sub>Ingin mencari teman baru yang memiliki ketertarikan dalam bidang yang sama? Atau ingin tau info-info terkini dalam dunia pendidikan? Kamu bisa mencobanya di Komunitas smart! Di sini kamu bisa bertukar pikiran dengan sesama Sobat smart, mendapat rekomendasi kanal (channel) yang sekiranya menarik perhatianmu, dan yang istimewanya, kamu dapat belajar secara fun melalui artikel dan video dari setiap kanalnya. Topiknya bermacam-macam, ada belajar bahasa asing seperti bahasa Jepang, bahasa Inggris, bahasa Korea, ada seputar sejarah, ada seputar sastra, ada seputar make-up, ada seputar musik, ada juga seputar sains, dan yang lainnya. Kamu bisa menemukan berbagai topik tersebut di fitur Komunitas smart dalam aplikasi Smart Space, ya!</Sub>
                    <Button>Coba Sekarang</Button>
                </Info>
                <Image src={komunitassmart} />
            </Box>
        </Wrapper>
    </Container>
  )
}

export default Friends