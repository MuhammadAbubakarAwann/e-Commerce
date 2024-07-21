// components/NavLinks.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLinks = ({ vertical }) => {
  const router = useRouter();
  const links = [
    { name: 'Categories', path: '/categories' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Become a Seller', path: '/seller' }
  ];

  return (
    <nav className={`flex ${vertical ? 'flex-col space-y-4' : 'flex-wrap justify-center space-x-4 md:space-x-3 lg:space-x-12'}`}>
      {links.map(link => (
        <Link href={link.path} key={link.name} className={`text-lg font-semibold ${router.pathname === link.path ? 'text-white underline' : 'text-[#00AAC2] hover:text-white'}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
