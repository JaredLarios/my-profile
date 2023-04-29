import resume from '../../Data/Resume.json'
import {Header, Slider, PersonalCard} from './style'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import slider900 from '../../images/banner.jpg'
import slider500 from '../../images/banner.jpg'
import slider100 from '../../images/banner.jpg'
import photoPorfile from '../../images/photo.jpg'


const Head = (props) => {

  return (
      <Header>
          <Slider>
          <img 
              src={slider900}
              srcSet={`
                ${slider100} 300w,
                ${slider500} 768w,
                ${slider900} 1280w
                `}
                alt='slider'
              />
            
            <div></div>
          </Slider>
          <PersonalCard>
            <div>
              <img src={photoPorfile} alt='me' />
            </div>
            <section className='intro'>
              <h1>{resume.personal.myName}</h1>
              <p>{resume.personal.description}</p>
            </section>
            <section className='p-info'>
            {/* <h2>Personal information:</h2> */}
              <ul>
                <li><strong>Fecha de nacimiento:</strong> {resume.personal.birhtDate}</li>
                <li><strong>Phone:</strong> {resume.personal.phone}</li>
                <li><strong>Correo:</strong> {resume.personal.email}</li>
                <li>
                  <a href={resume.personal.facebook}> 
                  <FacebookIcon 
                    fontSize='large'
                    className='social'
                    ></FacebookIcon> 
                  </a> 
                  <a href={resume.personal.linkedInn} className='social'> 
                  <LinkedInIcon 
                    fontSize='large'
                    className='social'
                    ></LinkedInIcon> 
                  </a>
                </li>
              </ul>
            </section>
          </PersonalCard>
      </Header>
  )
}

export default Head;