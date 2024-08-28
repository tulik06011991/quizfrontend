import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage'dagi barcha ma'lumotlarni tozalash
    localStorage.clear();
    // Foydalanuvchini tizimdan chiqarganlik uchun login sahifasiga yo'naltirish
    navigate('/');
  };

  return (
    <header className="w-full py-4 bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Quiz Bot</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Quizzes</a></li>
            {/* Profil tugmasini chiqish tugmasi bilan almashtirish */}
            <li>
              <button 
                onClick={handleLogout} 
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
