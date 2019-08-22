import React from 'react';

class CommentButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '00042cf4-2ce4-11e6-bd70-0661aaff07f9',
            type: 'song',
            comment: ''
        }
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.handleComment(event.target.value);
            event.target.value = '';
        }
    }

    handleComment = (comment) => {
        let formData = new FormData();
            formData.append('id', '00042cf4-2ce4-11e6-bd70-0661aaff07f9');
            formData.append('type', 'song');
            formData.append('comment', comment);
        fetch('https://cors-anywhere.herokuapp.com/https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',{
            method: 'post',
            body: formData
        })
        .then((response) => response.json())
        .then(data => alert(`You just commented on the ${this.state.type} with id ${data.id}: ${comment}`))
        .catch(error => console.error(error)
        )
    }
    
    render() {
        return (
            <div>
                <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" onKeyPress={this.handleEnter} aria-describedby="comment-desc" placeholder="Comment here and press Enter" />
            </div>
        );
    }
}


export default CommentButton;