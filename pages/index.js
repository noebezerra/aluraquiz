import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Head from '../src/components/Head';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  max-width: 350px;
  margin: 0 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  svg {
    margin: 0;
  }
`;

const Home = () => {
  const router = useRouter();
  const [play, setPlay] = React.useState(false);
  const [time, setTime] = React.useState(null);
  const [nome, setNome] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nome) return;
    if (time) clearTimeout(time);
    setPlay(true);
    let timeOut = setTimeout(() => {
      router.push({ pathname: '/quiz', query: { nome } });
    }, 2500);
    setTime(timeOut);
  }

  React.useEffect(() => {
    const ajogar = document.getElementById('ajogar');
    if (play) ajogar.play();
    setPlay(false);
  }, [play]);

  return (
    <>
      <Head db={{ ...db }} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Silvio & Faustão</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Má oi! Teste os seus conhecimentos com a gente. Vem pra cá!</p>
              <p>Ô loco, bixo! Brincadeira! Esta fera ai, meu!</p>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Vem pra cá! Qual o seu nome?"
                  onChange={({ target }) => setNome(target.value)}
                />
                {nome && <Button type="submit">Jogar</Button>}
              </form>
              <audio
                id="ajogar"
                src="../sound/perguntashowdomilhao.mp3"
              ></audio>
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
    </>
  );
};

export default Home;
