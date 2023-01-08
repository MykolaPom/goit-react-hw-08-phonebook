import { HomeContainer, HomeTitle } from './styled/Home.styled'
import { FaGithubSquare } from 'react-icons/fa';
import {HomeList} from './styled/Home.styled'

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to Phonebook application webpage
      </HomeTitle>
          <h2>Developed by Mykola Pomazanov</h2>
          <HomeList>
            <li>
              <a href="https://github.com/MykolaPom"><FaGithubSquare size={40}/></a>
            </li>
          </HomeList>

        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
    </HomeContainer>
  );
}
