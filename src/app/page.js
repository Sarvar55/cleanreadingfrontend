export default function Home() {
  return (
    <div>
      <ul>
        <li> {process.env.NEXT_SERVER_TEST_1} </li>{' '}
        <li> {process.env.NEXT_PUBLIC_TEST_1} </li>{' '}
        <li> {process.env.NEXT_STATIC_TEST_1} </li>{' '}
      </ul>{' '}
    </div>
  );
}
