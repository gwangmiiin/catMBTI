import React, { Component } from 'react'
//css-in-js
import styled from 'styled-components'
import CatImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ResultData } from '../asset/data/resultdata'
import { Navigate } from 'react-router-dom'

const Result = () => {
    const navigate = useNavigate()
    return (
       <Wrapper>
           <Header>예비집사 판별기</Header>
           <Contnents>
             <Title >결과 보기</Title>
             <LogoImage>
               <img src={ResultData[0].image}  className = "rounded-circle" width={350} height={350}/>
             </LogoImage>
             <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
             <Button style={{fontFamily : 'SimKyungha'}} onClick = {() => navigate('/')}>테스트 다시하기</Button>
           </Contnents>
       </Wrapper>
    )
}

export default Result

const Contnents =styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`
const Wrapper = styled.div`
  height : 100vh;
  font-family: "SimKyungha";
`
const Header = styled.div`
  font-size : 40pt;
  display : flex;
  justify-content : center;
  align-items : center
`
const Title = styled.div`
  font-size : 30pt;
  margin-top : 40pt;
`
const LogoImage = styled.div`
  margin-top : 10px;
`
const Desc = styled.div`
  font-size : 20pt;
  margin-top : 20px;
` 