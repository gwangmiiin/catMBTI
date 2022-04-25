import React, { Component } from 'react'
import styled from 'styled-components'
import {ProgressBar, Button , ButtonGroup} from 'react-bootstrap'
import { QuestionData } from '../asset/data/qustionData'

const Question = () => {
    return (
        <Wrapper>
          <ProgressBar striped variant="danger" now={80} style = {{marginTop : '20px'}} />
          <Title>{QuestionData[0].title}</Title>
          <ButtonGroup>
            <Button style = {{width : '40%', minHeight : '200px', fontSize : '20px'}}>{QuestionData[0].answera}</Button>
            <Button style = {{width : '40%', minHeight : '200px', fontSize : '20px', marginLeft : '20px'}}>{QuestionData[0].answerb}</Button>
          </ButtonGroup>
        </Wrapper>
    )
}

export default Question

const Wrapper = styled.div`
  height : 100vh;
  text-align : center;
  font-family: "SimKyungha";
`
const Title = styled.div`
  font-size : 30pt;
`
// const ButtonGroup = styled.div`
//   display : flex;
//   justify-content : center;
//   align-items : center;
// `