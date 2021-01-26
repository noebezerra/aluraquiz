import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  /* padding-top: 45px; */
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Home = () => {
  const router = useRouter();
  const [play, setPlay] = React.useState(false);
  const [time, setTime] = React.useState(false);

  async function handleClick() {
    if (time) clearTimeout(time);
    setPlay(true);
    const time = setTimeout(() => {
      router.push('/quiz');
    }, 2500);
    setTime(time);
  }

  React.useEffect(() => {
    const ajogar = document.getElementById('ajogar');
    if (play) ajogar.play();
    setPlay(false);
  }, [play]);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Silvio & Faustão</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Má oi! Teste os seus conhecimentos com a gente. Vem pra cá!</p>
            <p>Ô loco, bixo! Brincadeira! Esta fera ai, meu!</p>
            <Input placeholder="Vem pra cá! Qual o seu nome?" />
            <Button onClick={handleClick}>Jogar</Button>
            <audio id="ajogar" src="../sound/perguntashowdomilhao.mp3"></audio>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Em breve</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/noebezerra" />
    </QuizBackground>
  );
};

export default Home;
