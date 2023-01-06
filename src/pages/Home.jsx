import {HomeContainer, HomeTitle} from './styled/Home.styled'

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        Phonebook application welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
}
