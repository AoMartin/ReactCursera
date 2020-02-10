import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    render(){
        return(
            <div>

            <Button outline color="secondary" className="fa fa-pencil" type="submit">
            Submit Comment
            </Button>

            </div>
        );

    }
}

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        if(comments != null)
            return(
                <div>
                    <h4>Comments</h4>
                    {comments.map( comment => {
                        return(
                            <ul className="list-unstyled">
                                <li className='mt-3'>{comment.comment}</li>
                                <li className='mt-3'>-- {comment.author} , 
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                        .format(new Date(Date.parse(comment.date)))}
                                </li>
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

    const  DishDetail = (props) => {
      
        if (props.dish != null)
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <CommentForm/>
                </div>
            </div>
            </div>
        );
      else
          return(
              <div></div>
          );
  }


export default DishDetail;