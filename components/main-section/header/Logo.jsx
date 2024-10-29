
// components/Logo.jsx
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

const Logo = () => (
  <div className="flex items-center justify-center">
    <Image src={logo} alt="SmileShop Logo" width={250} height={50} />
  </div>
);

export default Logo;
