import styled from "styled-components"
import pendaftarankampus from "../img/pendaftaran-kampus.png"
import carijurusan from "../img/cari-jurusan.png"
import carisekolah from "../img/cari-sekolah.png"
import carikampus from "../img/cari-kampus.png"
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
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    width: 45%;
    margin: 30px;
`

const Info = styled.div`
    display: flex;
    color: white;
    margin: 10px;
    @media (max-width: 480px) {
        width: 80%;
}
`

const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 100px;
    border: 1px solid white;
    background-color: white;
    text-align: center;
    margin: 20px;
    border-radius: 15px;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 120px;
        height: 200px;
        padding: 10px 30px;
}
`

const CardTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    color: black;
`

const Title = styled.h1`
    width: 50%;
    margin-left: 50px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
        margin-left: 0;
}
`

const Sub = styled.p`
    width: 100%;
    @media (max-width: 480px) {
        margin-left: 0;
}
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

const Ads1 = () => {
  return (
    <Container>
        <Wrapper style={{ backgroundImage: 'url(' + bgcoverads + ')', backgroundSize: 'auto' ,backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: 'cover'}}>
            <Box>
                <Info>
                    <Title>Udah cobain <br />Minat Smart kan ?</Title>
                    <Sub>Setelah menyelesaikan ketiga tes minat dan bakat bersama Smart Space, kamu akan langsung mendapat rekomendasi di mana kamu bisa melanjutkan studi kamu ke jenjang yang lebih tinggi. Atau mau langsung aja mempelajari ratusan kampus dan ribuan jurusan di Indonesia?</Sub>
                </Info>

                <Info>
                    <Card>
                        <Image src={carisekolah} />
                        <CardTitle>Cari Sekolah</CardTitle>
                        <Button>Coba Sekarang</Button>
                    </Card>
                    <Card>
                        <Image src={carikampus} />
                        <CardTitle>Cari Kampus</CardTitle>
                        <Button>Coba Sekarang</Button>
                    </Card>
                    <Card>
                        <Image src={carijurusan} />
                        <CardTitle>Cari Jurusan</CardTitle>
                        <Button>Coba Sekarang</Button>
                    </Card>
                    <Card>
                        <Image src={pendaftarankampus} />
                        <CardTitle>Pendaftaran Kampus</CardTitle>
                        <Button>Coba Sekarang</Button>
                    </Card>
                </Info>
                
            </Box>
        </Wrapper>
    </Container>
  )
}

export default Ads1