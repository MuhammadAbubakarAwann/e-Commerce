
import Head from 'next/head';
import "../../src/app/globals.css";
import SignUp from '../../components/auth/SignUp';

const Sign_Up = () => (
  <>
    <Head>
      <title>user-signin</title>
    </Head>
    <main >
      <SignUp/>
    </main></>
);

export default Sign_Up;
