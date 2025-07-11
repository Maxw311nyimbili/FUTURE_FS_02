// AuthCheck/AuthCheck.js
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthCheck = ({ children, user, requireAuth = false }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (requireAuth && !user) {
      // Redirect to login if authentication is required but user is not logged in
      navigate('/auth/login');
    }
  }, [user, requireAuth, navigate]);

  // If auth is required but user is not logged in, don't render children
  if (requireAuth && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-[#636270] mb-4">Please log in to access this page</p>
          <button 
            onClick={() => navigate('/auth/login')}
            className="bg-[#029fae] text-white px-4 py-2 rounded-lg hover:bg-[#027a85] transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default AuthCheck;