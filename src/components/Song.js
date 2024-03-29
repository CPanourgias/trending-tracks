import React from 'react';
import AudioCard from 'audiocard'
// import './Song.css'

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';

class Song extends React.Component {
    
    render() {
        return (
            <article className="fl w-100 w-50-m w-25-ns pa5-ns bw2 shadow-5">
                <h2 className="f6 fw4 tracked">{this.props.name}</h2>
                <div className="aspect-ratio aspect-ratio--1x1">
                <img src={this.props.thumbnail} alt="Thumbnail" className="db bg-center cover aspect-ratio--object" />
                </div>
                <div className="ph2 ph0-ns pb3 db">
                    <AudioCard
                        source={this.props.audio}
                        skipBackSeconds={10}
                        skipForwardSeconds={10}
                    />
                </div>
                <div className="ph2 ph0-ns pb3 db">
                    <span>
                     <LikeButton />
                     <CommentButton />
                    </span>
                </div>
            </article>
            );
        }
    }
    
    
    
    export default Song;
    
    
    
    
    