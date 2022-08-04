import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from 'react'
import styled from "styled-components"
import {sliderItems} from '../data'

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 360%;
    height: 70vh;
}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media (max-width: 480px) {
    left: ${props=> props.direction === "left" && "30px"};
  right: ${props=> props.direction === "right" && "30px"};
}
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  @media (max-width: 480px) {
    transform: translateX(${props=>props.slideIndex * -360}vw);
}
`

const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  background: ${props => `url(${props.bg}) no-repeat top center`};
  @media (max-width: 480px) {
    width: 360vw;
}
`

const ImgContainer = styled.div`
  height: 70%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const Image2 = styled.img`
  height: 40%;
  padding: 100px;
  @media (max-width: 480px) {
    padding: 0px;
}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
  @media (max-width: 480px) {
    padding: 20px 60px;
}
`

const Title = styled.h1`
   color: white;
  font-size: 70px;
`

const Desc = styled.p`
color: white;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`

const Button = styled.button`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
  border: 1px solid white;
  padding: 10px;
  font-size: 20px;
  color: #0070ba;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 800;

  &:hover{
    color: white;
    background-color: #0070ba;
  }
`

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 6)
    } else {
      setSlideIndex(slideIndex < 6 ? slideIndex +1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
        <Slide bg={item.bg}>
          <Image2 src={item.img2}/>
          <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>COBA SEKARANG</Button>
        </InfoContainer>
        <ImgContainer>
          <Image src={item.img}/>
        </ImgContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Banner