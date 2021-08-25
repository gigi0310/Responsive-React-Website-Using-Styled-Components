import React,{useState} from 'react'
import styled from 'styled-components'
import How from '../img/service.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'

const Container = styled.div`
    display:flex;
    height: 100%;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        margin-top: 30px;
    }
`
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
const Image = styled.img`
   display: ${props => props.isOpen && "none"};
   width: 100%;
`
const Video = styled.video`
    display: ${props => !props.isOpen && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`
    
const Right = styled.div`
   width: 50%;
   
   @media only screen and (max-width: 480px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
   
    @media only screen and (max-width: 480px){
       padding: 20px;
    }
`
const Title = styled.h1`
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-between;

`
const Button = styled.button`
    width: 180px;
    border-radius: 10px;
    background-color: #df758c;
    color: white;
    cursor: pointer;
    margin-top: 30px;
    padding: 15px;
    border: none;
    font-size: 20px;
    display: flex;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
    
`

const Service = () => {
    const [isOpen, setIsOpen] = useState (false)

    return (
        <Container>
            <Left>
                <Image isOpen={isOpen} src={How}/>
                <Video 
                    isOpen={isOpen} 
                    autoPlay 
                    loop 
                    controls 
                    src="https://www.youtube.com/watch?v=EngW7tLk6R8"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process to start</Title> 
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe sunt maxime cupiditate tempore, architecto minus quod, sapiente fugit, aliquid commodi. Dignissimos dolorem porro dolore eveniet adipisci dolores voluptatem fugiat?</Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button onClick={()=>setIsOpen(!isOpen)}><Icon src={Play}/>How it works</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default Service
