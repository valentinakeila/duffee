import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import LoginForm from './LoginForm';


function LoginPage({ onLogin }) {

  return (
    <div>
        <Navigation />
        <LoginForm onLogin={onLogin}/>
        <Footer />
    </div>
  )

}

export default LoginPage;