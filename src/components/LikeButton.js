import React from 'react';

const handleLike = () => {
    let formData = new FormData();
        formData.append('id', '00042cf4-2ce4-11e6-bd70-0661aaff07f9');
    fetch('https://cors-anywhere.herokuapp.com/https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',{
        method: 'post',
        body: formData
    })
    .then(response => response.json())
    .then(data => alert(`You just liked the song with id ${data.id}`))
    .catch(error => console.error(error)
    )
}

const LikeButton = () => <button onClick={handleLike} className="f6 link dim ba ph3 pv2 mb2 black">Like</button>

export default LikeButton;