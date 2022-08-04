import React from 'react'
import styled from 'styled-components'
import Logo from '../img/SmartSpace.png'

const Container = styled.div`
    z-index: 1;
    position: sticky;
    width: 100%;
    height: 100%;
    @media (max-width: 480px) {
        width: 360%;
}
`
const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
    padding: 20px 30px;
}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 10%;
    @media (max-width: 480px) {
    width: 10%;
}
`

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
`

const MenuItem = styled.div`
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 25px;
    &:hover{
        color: aqua;
    }
`

const Button = styled.button`
    width: 120px;
    color: white;
    background-color: #0070ba;
    border: 1px solid #044b7a;
    border-radius: 10px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
`

const Login = styled.button`
    width: 100px;
    color: #0070ba;
    background-color: white;
    border: 1px solid #0070ba;
    border-radius: 10px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: #0070ba;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Image src={Logo} />
            </Left>
            <Center>
                <MenuItem>BERANDA</MenuItem>
                <MenuItem>BLOG</MenuItem>
                <MenuItem>LAYANAN</MenuItem>
                <MenuItem>TENTANG KAMI</MenuItem>
                <MenuItem>FAQ</MenuItem>
            </Center>
            <Right>
                <MenuItem>
                    <Button>Follow Us</Button>
                </MenuItem>
                <MenuItem>
                    <Login>Login</Login>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar