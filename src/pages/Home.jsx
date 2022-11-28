import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import img from './Foto.jpeg'
import './about/About.scss'

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>

                <div className="about" >
                    <div className="about-app">
                        <h1>About APP</h1><br />
                        <h2>This application will show you anykind of movies.</h2>
                        <h2>This application gives you something more valuable.</h2>
                        <h2>Your time will be precious if you watch from our app.</h2>
                        <h2>There no such things as too late.</h2><br />
                        <h3>Enjoy it</h3><br />
                    </div>
                    <div className="about-dev">
                        <h1> About Me </h1>

                    </div>
                    <div className="dev-pro">
                        <img src={img} alt="" />
                        <div className="dev-id">
                            <div className="a">
                                <h4>Name </h4><br />
                                <h4>NIM </h4><br />
                                <h4>University </h4><br />
                                <h4>Faculty </h4><br />
                                <h4>Major </h4>
                            </div>
                            <div className="b">
                                <h4>: M. Fitra Ariasaputra</h4><br />
                                <h4>: 21120120140160</h4><br />
                                <h4>: Diponegoro University</h4><br />
                                <h4>: Faculty of Engineering</h4><br />
                                <h4>: Computer Engineering</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
