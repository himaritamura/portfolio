import meImg from '../assets/me_cropped.svg'
import nameLogo from '../assets/name_logo.svg'


export default function About() {
  return (
    <>
      <div className="intro">
              <img className="me_img" src={meImg} alt="Me"/>

              <div className="intro-text">
                  {/* <h4>Hello World!</h4> */}
                  <h2>MY NAME IS</h2>
                  <div className="name-row">
                      <img src={nameLogo} alt="Himari Tamura" className="name-logo" draggable="false"/>
                  </div>
              </div>
          </div>

          <div className="summary1">
              <div className="iama">
                  <h3>I AM A...</h3>
                  <ul>
                      <li>senior, studying</li>
                      <ul className="studying">
                          <li>Computer Science</li>
                          <li>UX Design</li>
                      </ul>
                      <li>synchronized skater</li>
                  </ul>
              </div>
              <h3 className="umich">@ THE UNIVERSITY OF MICHIGAN</h3>
          </div>

          <div className="summary2">
              <h3>Welcome to my personal website! I am currently pursuing a career in software development.</h3>
          </div>
    </>
  )
}
