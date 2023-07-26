import { moviesData } from './MoviesData';
import MovieCard from './MovieCard';

function Index() {
    return (
        <>
            <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
            <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                {moviesData.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn  hover:scale-125 transition ease-out duration-500 uppercase">Load more</button>
            </div>
        </>
    );
}

export default Index;
