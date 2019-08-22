import React from 'react';
import Song from './Song';

const SongList = ({ tracks }) => {
    return (
        <section className="cf w-100 pa2-ns ma2 pa2">
            { tracks.map((data, i) => {
                return (
                    <Song
                        key={i}
                        name={tracks[i].name}
                        thumbnail={tracks[i].cover_image_path}
                        audio={tracks[i].music_file_path}
                    />
                );
            })
        }
        </section>
    );
}

export default SongList;
