import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

  }

  renderDish(dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(comments){
        if(comments != null)
            return(
                <div>
                    <h4>Comments</h4>
                    {comments.map( comment => {
                        let date = new Date(comment.date);
                        return(
                            <ul className="list-unstyled">
                                <li className='mt-3'>{comment.comment}</li>
                                <li className='mt-3'>-- {comment.author} , {date}</li>
                            </ul>
                        );
                    })}
                </div>
            );
        else
            return(
                <div></div>
            );
    }

  render() {
      
        if (this.props.dish != null)
          return(
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                  </div>
              </div>
          );
      else
          return(
              <div></div>
          );
  }
}

export default DishDetail;