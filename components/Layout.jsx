// components/Layout.jsx
import Header from './header/Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
);

export default Layout;
