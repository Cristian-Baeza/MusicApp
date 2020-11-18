import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>CBI
        <a href={'https://github.com/Cristian-Baeza/MusicApp'} target={"_blank"}>
          <FontAwesomeIcon
            icon={faGithub}
          />
        </a>
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}

export default Nav