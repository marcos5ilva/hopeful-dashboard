import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from "../../UserContext";
import './styles.css'

const Metrics = () => {

    const userInfo = useContext(UserContext);

    return (
        <section class="large-card metrics">

            <div class="metrics-header">
                <h2>Metrics at a glance</h2>
                <ul class="icons">
                    <li class="icon-item"><a href="#"><span><i class="fas fa-plus"></i></span></a></li>
                    <li class="icon-item"><a href=""><span><i class="fas fa-download"></i></span></a></li>
                    <li class="icon-item"><a href=""><span><i class="fas fa-cog"></i></span></a></li>
                </ul>
            </div>

            <div class="time-frame">
                <span><i class="fas fa-calendar-alt"></i> Last 7 days</span>
            </div>

            <div class="metrics-container">
                <div id="metrics-left">
                    <h3>Metrics</h3>
                    <ul>
                        <li><input type="radio" />Likes</li>
                        <li><input type="radio" />Views</li>
                        <li><input type="radio" />Comments</li>
                    </ul>
                </div>

                <div id="metrics-center">
                    <strong>0 likes</strong>
                </div>

                <div id="metrics-right">
                    <h3>Views</h3>
                    <ul>
                        <li><span><i class="fas fa-circle" id="dot-orange"></i></span> 0% <span><i
                            class="fab fa-facebook"></i></span> {userInfo.name}</li>
                        <li> <span><i class="fas fa-circle" id="dot-green"></i></span> 0% <span><i
                            class="fab fa-instagram-square"></i></span> Hopeful Inc</li>

                    </ul>
                </div>

            </div>

        </section>

    );
}

export default Metrics;