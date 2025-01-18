const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <span className="text-xl font-semibold">My App</span>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4 hover:text-gray-300">
          Home
        </a>
        <a href="#" className="mr-4 hover:text-gray-300">
          About
        </a>
        <a href="#" className="mr-4 hover:text-gray-300">
          Contact
        </a>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
};