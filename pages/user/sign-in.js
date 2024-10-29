
import Head from 'next/head';
import "../../src/app/globals.css";
import SignIn from '../../components/auth/SignIn';

const Sign_In = () => (
  <>
    <Head>
      <title>user-signin</title>
    </Head>
    <main >
      <SignIn/>
    </main></>
);

export default Sign_In;
