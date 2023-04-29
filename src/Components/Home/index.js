import Head from './Header'
import Body from './Body'
import Menu from '../Menu'
import {MainContianer} from './style'

const Home = () => {

  return (
    <MainContianer>
      <Menu></Menu>
      <Head></Head>
      <Body></Body>
    </MainContianer>
  )
}

export default Home;