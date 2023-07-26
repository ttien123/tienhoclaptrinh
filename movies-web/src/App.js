import './App.css';
import Nav from './component/Nav';
import AuthButtons from './component/AuthButtons';
import Header from './component/Header';
import Trending from './component/Trending';
function App() {
    return (
        <div className="grid md:grid-cols-5 ">
            <Nav />
            <main className="md:col-span-4 px-4 md:px-6 lg:px-12 py-6 bg-cyan-50 ">
                <AuthButtons />
                <Header />
                <Trending />
            </main>
        </div>
    );
}

export default App;
