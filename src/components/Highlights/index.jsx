import React, { useContext, useState, useEffect } from 'react';
import fakeApi from '../../services/fakeApi';
import { Link } from 'react-router-dom';

import { UserContext } from "../../UserContext";
import './styles.css'

const Highlights = () => {


    const [userInfo, setUserinfo] = useState({ id: '', name: '', instagram: {} });
    const data = useContext(UserContext);

    const { id, name, socialmedia } = data || { id: '', name: '', instagram: {} }

    useEffect(() => {
        const data = fakeApi.getUserInfo();
        setUserinfo(data);
    }, [])




    return (
        <section class="large-card highlights">
            <div class="highlights-header">
                <h2>{name} Highlights</h2>
                <span><i class="fas fa-calendar-alt"></i> Last 7 days</span>

            </div>
            <p>Here's some highlights from the past week for you</p>
            <div>
                <div class="highlights-container">
                    <span><i class="far fa-lightbulb" id="lamp"></i></span>
                    <ul>
                        <li><span><i class="fab fa-facebook"></i></span>Views <span
                            id="highlight-percent-view">{socialmedia.instagram.likes}%</span>
                        </li>
                        <li><span><i class="fab fa-instagram-square"></i></span>Views <span
                            id="highlight-percent-view">73%</span></li>
                        <li><span><i class="fab fa-facebook"></i></span>Comments <span
                            id="highlight-percent">0%</span></li>
                        <li><span><i class="fab fa-instagram-square"></i></span>Comments <span id="highlight-percent">0%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Highlights