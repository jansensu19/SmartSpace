import styled from "styled-components";
import belajarsmart from "../img/belajar-smart.png";
import danasmart from "../img/dana-smart.png";
import infosmart from "../img/info-smart.png";
import komunitassmart from "../img/komunitas-smart2px.png";
import konselingsmart from "../img/konseling-smart.png";
import kursussmart from "../img/kursus-smart.png";
import ruangsmart from "../img/ruang-smart.png";
import tessmart from "../img/tes-smart.png";
import beasiswasmart from "../img/beasiswa-smart.png";
import smarthi from "../img/smart-hi.png";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1700px;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 360%;
}
`;
const Box = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const BigImage = styled.img`
  width: 25%;
  margin: 30px;
`;

const Image = styled.img`
  width: 15%;
  margin: 30px;
`;

const MainTitle = styled.h1`
  width: 120%;
  margin-top: 300px;
  color: #0070ba;
  text-align: center;
`;

const CardsItem = styled.div`
    display: flex;
    margin-bottom: 24px;
`

const Info = styled.div`
  padding: 20px 30px 30px;
`;

const Card = styled.div`
    display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  justify-content: center;
  padding-bottom: 20px;
`

const CardEmpty = styled.div`
    display: flex;
  flex-flow: column;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  justify-content: center;
  padding-bottom: 20px;
`

const Label = styled.label`
    background: #f96464;
    padding: 5px 15px;
    border-radius: 25px;
    color: #fff;
    width: fit-content;
    border-radius: 20px 0px;
`

const CardTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  margin-left: 20px;
`

const CardSub = styled.p`
  margin-bottom: 10px;
  margin-left: 20px;
`;

const Button = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: #f1a300;
  background: none;
  text-decoration: underline;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Box> 
        <Info>

        <CardsItem>
            <BigImage src={smarthi} alt="Illustration by https://icons8.com/illustrations/author/zD2oqC8lLBBAIcons 8 from https://icons8.com/illustrations"/>
            <MainTitle>Yuk cobain Fitur-fitur yang ada di dalam aplikasi Smart Space</MainTitle>
          <Card style={{width: "100%", height: "100%", marginTop: "250px"}}>
            <Label>Baru</Label>
            <Image src={ruangsmart} />
            <CardTitle>Ruang Smart</CardTitle>
            <CardSub>Tingkatkan produktivitasmu dan belajar bersama di Ruang Smart</CardSub>
            <Button>Belajar sekarang</Button>
          </Card>
          </CardsItem>

          <CardsItem>
          <Card>
            <Label>Baru</Label>
            <Image src={kursussmart} />
            <CardTitle>Kursus Smart</CardTitle>
            <CardSub>Cari program kelas atau kursus singkat di Kursus Smart</CardSub>
            <Button>Cari sekarang</Button>
          </Card>
          <Card>
            <Label>Baru</Label>
            <Image src={komunitassmart} />
            <CardTitle>Komunitas Smart</CardTitle>
            <CardSub>Berdiskusi dan berbagi informasi bersama sobat Smart lainnya</CardSub>
            <Button>Bergabung dengan komunitas</Button>
          </Card>
          <Card>
            <Label>Baru</Label>
            <Image src={konselingsmart} />
            <CardTitle>Konseling Smart</CardTitle>
            <CardSub>Temukan solusi terbaik untuk perjalanan pendidikanmu sekarang!</CardSub>
            <Button>Konsultasi sekarang</Button>
          </Card>
          </CardsItem>

            <CardsItem>
          <Card>
          <Label>Baru</Label>
            <Image src={belajarsmart} />
            <CardTitle>Belajar Smart</CardTitle>
            <CardSub>Dapatkan akses menuju materi pelajaran SMP & SMU yang lengkap</CardSub>
            <Button>Lihat materi pelajaran</Button>
          </Card>
          <Card>
          <Label>Baru</Label>
            <Image src={tessmart} />
            <CardTitle>Tes Smart</CardTitle>
            <CardSub>Tes Smart memfasilitasi kamu dengan beragam Tryout sampai simulasi ujian masuk PT</CardSub>
            <Button>Ikuti tes</Button>
          </Card>
          <Card>
          <Label>Baru</Label>
            <Image src={beasiswasmart} />
            <CardTitle>Beasiswa Smart</CardTitle>
            <CardSub>Dapatkan Info Beasiswa dengan mudah dan bisa langsung daftar</CardSub>
            <Button>Lihat selengkapnya</Button>
          </Card>
          </CardsItem>

          <CardsItem>
          <Card>
          <Label>Baru</Label>
            <Image src={danasmart} />
            <CardTitle>Dana Smart</CardTitle>
            <CardSub>Membantu mendanai studi kamu melalui pinjaman dengan bunga ringan</CardSub>
            <Button>Pelajari lebih lanjut</Button>
          </Card>
          <Card>
          <Label>Baru</Label>
            <Image src={infosmart} />
            <CardTitle>Info Smart</CardTitle>
            <CardSub>Selalu dapatkan berita terbaru seputar dunia pendidikan</CardSub>
            <Button>Baca selengkapnya</Button>
          </Card>
          <CardEmpty>
            
          </CardEmpty>

          </CardsItem>
        </Info>
      </Box>
    </Container>
  );
};

export default Feature;
