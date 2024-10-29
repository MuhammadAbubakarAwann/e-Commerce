// components/Icons.jsx


const Icons = ({ vertical }) => {
  const iconPaths = {
    heart: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    "shopping-cart": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h14M7 13l4 6m0-6l2-6m0 0h5m-5 0l-2 6",
    user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
  };

  const iconLabels = {
    heart: "Wishlist",
    "shopping-cart": "Cart",
    user: "Profile"
  };

  return (
    <div className={`flex ${vertical ? 'flex-col space-y-4' : 'space-x-6'}`}>
      {Object.keys(iconPaths).map((icon, index) => (
        <a href="#" key={icon} className={`text-[#00AAC2] hover:text-white flex ${vertical ? 'items-center' : 'flex-col items-center'} ${vertical ? '' : `${index !== 0 ? 'relative pl-6' : ''}`}`}>
          {index !== 0 && !vertical && (
            <span className="absolute left-0 h-6 border-l border-white hidden md:block"></span>
          )}
          <svg className="w-7 h-7 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPaths[icon]}
            />
          </svg>
          {vertical ? (
            <span className="ml-2">{iconLabels[icon]}</span>
          ) : (
            <span className="block text-xs mt-1">{iconLabels[icon]}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default Icons;
