import Link from 'next/link';

const Quiz = () => {
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
      <h1>Quiz</h1>
      <Link href="/">Click aqui para voltar</Link>
    </div>
  );
};

export default Quiz;
