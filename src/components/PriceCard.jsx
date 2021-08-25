import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    @media only screen and (max-width: 480px){
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width: 480px){
        font-size: 20px;
    }

`
const Type = styled.button`
    color: crimson;
    border-radius: 20px;
    border: 1.5px solid crimson;
    background-color: white;
    padding: 10px;
    margin: 10px 0;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width: 480px){
        margin: 12px;
        font-size: 12px;
    }
`
const Button = styled.button`
    
    background-color: #df758c;
    color: white;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

`


const PriceCard = ({price, type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>
            </List>
            <Button>Join Now</Button>
            
        </Container>
    )
}

export default PriceCard
