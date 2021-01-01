import React from 'react';
import {Link} from 'react-router-dom';
import RMDBLog from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper,Content,TMDBLogoImg,LogoImg} from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLog} alt="rmdb-logo" />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
            </Content>
        </Wrapper>
    )
}

export default Header;
