
import Head from 'next/head';
import "../../src/app/globals.css";
import SignIn from '../../components/auth/SignIn';

const Furniture = () => (
  <>
    <Head>
      <title>user-signin</title>
    </Head>
    <main >
      <SignIn/>
    </main></>
);

export default Furniture;
