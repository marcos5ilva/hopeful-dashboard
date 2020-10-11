import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Donations = () => {
    return (
        <section class="large-card donations">
            <div class="card-header">
                <h2>Donations</h2>
                <ul class="icons" id="icon-don">
                    <li class="icon-item"><a href="#"><span><i class="fas fa-plus"></i></span></a></li>
                    <li class="icon-item"><a href="#"><span><i class="fas fa-download"></i></span></a></li>
                    <li class="icon-item"><a href="#"><span><i class="fas fa-cog"></i></span></a></li>
                </ul>
            </div>
            <div class="chart-total">
                <h2>Total $0.0</h2>
            </div>
            <div class="chart-card">
                <span><i class="fas fa-chart-bar"></i></span>
            </div>
        </section>
    )
}

export default Donations;