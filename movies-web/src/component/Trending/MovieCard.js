import { BiTime } from 'react-icons/bi';
// import { moviesData } from './MoviesData';

function Index({ movie }) {
    const { src, title, main, runtime } = movie;
    return (
        <div className="card">
            <img src={src} alt="" className="w-full" />
            <div className="p-4 text-white">
                <h4>{title}</h4>
                <p>{main}</p>
            </div>
            <div className="badge">
                <BiTime />
                <p>{runtime}</p>
            </div>
        </div>
    );
}

export default Index;
