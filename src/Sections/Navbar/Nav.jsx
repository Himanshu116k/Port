const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="text-white h-[1em] w-full bg-black"></div>
      
      <div className="w-full flex gap-0">
        <div className="w-[9%] h-[11vh] bg-black flex justify-center items-center" style={{ borderBottomRightRadius: '15px' }}>
          <svg width="120" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="black" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, Arial, sans-serif" fontSize="120" fill="white">H</text>
          </svg>
        </div>
        <div className="w-[91%] h-[11vh] bg-transparent"></div>
      </div>
    </div>
  );
};

export default Nav;
