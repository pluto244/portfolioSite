import './App.css';
import { Header } from './layout/header/Header';
import { Portfolio } from './layout/section/portfolio/Portfolio';
import { Main } from './layout/section/main/Main';
import { Desc } from './layout/section/desc/Desc';
import { Footer } from './layout/section/footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Desc />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
