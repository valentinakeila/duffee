import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import LoginForm from './LoginForm';


function LoginPage() {
  return (
    <div>
        <Navigation />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default LoginPage;