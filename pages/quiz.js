import Link from 'next/link';
import { useRouter } from 'next/router';

const Quiz = ({ query }) => {
  const router = useRouter();
  const { nome } = router.query;

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}
    >
      <h1>Olá {nome}</h1>
      <Link href="/">Click aqui para voltar</Link>
    </div>
  );
};

export default Quiz;
