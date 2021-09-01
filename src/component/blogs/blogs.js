import React from 'react';
import Card from 'react-bootstrap/Card';


const Blog = ({ content, title, date }) => {

    let blog = "nothing is provided yet";

    if (title) {
        blog =

            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{new Date(date).toDateString()}</small>
                </Card.Footer>
            </Card>

    }

    return blog

}


export default Blog