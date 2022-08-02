gitimport React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';


const Logout = props => {
  const router = useRouter();
  const handleLogout = () => {
    router.push('/')
  }
  return (
    <div>
        <h1>Deseja SAIR?</h1>
        <button onClick={handleLogout}>Deslogar</button>
    </div>
  );
};

export default Logout;
Footer
