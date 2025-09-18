import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Bade Bhaiya</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mr-4">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white mr-4">Login</Link>
          <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;