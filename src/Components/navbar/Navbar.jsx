// import images
import githubImage from '../../../public/github.png'
import instagramImage from '../../../public/instagram.png'
import linkedinImage from '../../../public/linkedin.webp'
import stackoverflowImage from '../../../public/stackoverflow.png'

import './navbar.scss'

export default function Navbar() {
  return (
	<>
    <div className="navbar">
      {/* slidebar */}
      <div className="wrapper">
        <span>filan</span>
        <div className='social'>
          <a href=""><img src={githubImage} alt="github" /></a>
          <a href=""><img src={instagramImage} alt="instagram" /></a>
          <a href=""><img src={linkedinImage} alt="linkedin" /></a>
          <a href=""><img src={stackoverflowImage} alt="stackoverflow" /></a>
        </div>
      </div>
    </div>
	</>
  )
}
