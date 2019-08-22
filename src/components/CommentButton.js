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
    //When the user presses enter, stores the comment
    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.handleComment(event.target.value);
            event.target.value = '';
        }
    }

    // Handle the user's comment that comes from handleEnter function
    handleComment = (comment) => {
        // Post form data to JAM API
        let formData = new FormData();
            formData.append('id', '00042cf4-2ce4-11e6-bd70-0661aaff07f9');
            formData.append('type', 'song');
            formData.append('comment', comment);
        fetch('https://cors-anywhere.herokuapp.com/https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',{
            method: 'post',
            body: formData
        }).then((response) => {
            //Check if response was successful
        if (response.status !== 200) {
            console.log(response.status);
            alert('Problem in fetching, check your console');
            return;
          }
        //   Alert the user's comment
          console.log(response.status);
          response.json().then((data) => {
            alert(`Your request was successful! You just commented on the ${this.state.type} with id ${data.id}: ${comment}`);
          })
        }).catch(error => console.error(error))
    }
    
    render() {
        return (
            <div>
                {/* Area where the user can comment */}
                <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb3 pb3" onKeyPress={this.handleEnter} aria-describedby="comment-desc" placeholder="Comment here and press Enter" />
            </div>
        );
    }
}


export default CommentButton;