import React from 'react';
import {calcTime,convertMoney} from '../../helpers';
import {Wrapper,Content} from './MovieInfoBar.styles';

const MovieInfoBar = ({time,budged,revenue}) => {
    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Running Time : {calcTime(time)}</p>
                </div>

                <div className="column">
                    <p>Budget : {convertMoney(budged)}</p>
                </div>

                <div className="column">
                    <p>Revenue : {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}

export default MovieInfoBar;
