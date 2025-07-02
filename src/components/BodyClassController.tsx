import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const BodyClassController: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('landing-page');

    if (location.pathname === '/' || location.pathname === '/dashboard') {
      document.body.classList.add('landing-page');
    }
  }, [location]);

  return null;
};

export default BodyClassController;
