import Header from './header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
