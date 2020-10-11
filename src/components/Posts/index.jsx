import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Posts = () => {
    return (
        <section class="large-card posts">
            <div class="post-header">
                <h2>Top Posts</h2>
                <ul class="icons">
                    <li class="icon-item"><a href="#"><span><i class="fas fa-plus"></i></span></a></li>
                    <li class="icon-item"><a href=""><span><i class="fas fa-download"></i></span></a></li>
                    <li class="icon-item"><a href=""><span><i class="fas fa-cog"></i></span></a></li>
                </ul>
            </div>

            <div class="post-container">
                <div class="social-card">
                    <div class="social-title">
                        <span><i class="fab fa-instagram-square" id="title-icon"></i></span>
                        <h4>Hopeful Inc</h4>
                    </div>
                    <div class="social-img">
                        <span><i class="fas fa-laptop" id="social-img-icon"></i></span>
                    </div>
                    <ul>
                        <li><span><i class="fas fa-heart"></i></span>Likes:<span id="post-likes">0</span>
                        </li>
                        <li><span><i class="fas fa-eye"></i></span>Views:<span id="post-views">0</span></li>
                        <li><span><i class="fas fa-comment"></i></span>Comments:<span id="post-comments">0</span>
                        </li>
                    </ul>
                </div>

                <div class="social-card">
                    <div class="social-title">
                        <span><i class="fab fa-linkedin" id="title-icon"></i></span>
                        <h4>Hopeful Inc</h4>
                    </div>
                    <div class="social-img">
                        <span><i class="fas fa-laptop" id="social-img-icon"></i></span>
                    </div>
                    <ul>
                        <li><span><i class="fas fa-heart"></i></span>Likes:<span id="post-likes">0</span>
                        </li>
                        <li><span><i class="fas fa-eye"></i></span>Views:<span id="post-views">0</span></li>
                        <li><span><i class="fas fa-comment"></i></span>Comments:<span id="post-comments">0</span>
                        </li>
                    </ul>
                </div>
                <div class="social-card">
                    <div class="social-title">
                        <span><i class="fab fa-facebook" id="title-icon"></i></span>
                        <h4>Hopeful Inc</h4>
                    </div>
                    <div class="social-img">
                        <span><i class="fas fa-laptop" id="social-img-icon"></i></span>
                    </div>
                    <ul>
                        <li><span><i class="fas fa-heart"></i></span>Likes:<span id="post-likes">0</span>
                        </li>
                        <li><span><i class="fas fa-eye"></i></span>Views:<span id="post-views">0</span></li>
                        <li><span><i class="fas fa-comment"></i></span>Comments:<span id="post-comments">0</span>
                        </li>
                    </ul>
                </div>
                <div class="social-card">
                    <div class="social-title">
                        <span><i class="fab fa-twitter" id="title-icon"></i></span>
                        <h4>Hopeful Inc</h4>
                    </div>
                    <div class="social-img">
                        <span><i class="fas fa-laptop" id="social-img-icon"></i></span>
                    </div>
                    <ul>
                        <li><span><i class="fas fa-heart"></i></span>Likes:<span id="post-likes">0</span>
                        </li>
                        <li><span><i class="fas fa-eye"></i></span>Views:<span id="post-views">0</span></li>
                        <li><span><i class="fas fa-comment"></i></span>Comments:<span id="post-comments">0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Posts;