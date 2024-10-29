
import Header from './main-section/header/Header';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      {children}
    </div>
    
  </div>
);

export default Layout;
