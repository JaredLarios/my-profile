import React from 'react'
import resume from '../../Data/Resume.json'
import {Header, Slider} from './style'
import FacebookIcon from '@mui/icons-material/Facebook';

const Head = (props) => {
  return (
      <Header>
          <Slider></Slider>
          <h1>{resume.personal.myName}</h1>
          <p>{resume.personal.description}</p>
          <h2>Personal information:</h2>
          <ul>
            <li><strong>Fecha de nacimiento:</strong> {resume.personal.birhtDate}</li>
            <li><strong>Phone:</strong> {resume.personal.phone}</li>
            <li><strong>Correo:</strong> {resume.personal.email}</li>
            <li><a href={resume.personal.facebook}> <FacebookIcon></FacebookIcon> </a></li>
          </ul>
      </Header>
  )
}

export default Head;