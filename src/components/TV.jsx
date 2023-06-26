import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function TV(props) {
    const navigate = useNavigate();

    const onClickTVItem = () => {
        navigate(`/TV/${props.name}`, {
            state: props,
        });
    };

    return (
        <div className="tv-container" onClick={onClickTVItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="TV 프로그램 포스터" />
            <div className="TV-info">
                <h4>{props.name}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    );
}
