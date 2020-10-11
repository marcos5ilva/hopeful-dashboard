import React from 'react';
import BarChart from '../../components/BarChart'

import { Link } from 'react-router-dom';

import './styles.css'

const Donations = () => {
    return (
        <section class="large-card donations">
            <div class="donations-header">
                <h2>Donations</h2>
                <ul class="icons" id="icon-don">
                    <li class="icon-item"><a href="#"><span><i class="fas fa-plus"></i></span></a></li>
                    <li class="icon-item"><a href="#"><span><i class="fas fa-download"></i></span></a></li>
                    <li class="icon-item"><a href="#"><span><i class="fas fa-cog"></i></span></a></li>
                </ul>
            </div>
            <div class="chart-total">
                <h2>Total $70,000</h2>
            </div>
            <div class="chart-card">
                <BarChart />

            </div>
        </section>
    )
}

export default Donations;