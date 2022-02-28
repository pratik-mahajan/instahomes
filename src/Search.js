import React from 'react';
import { useState } from 'react';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';

const Search = (props) =>
{   
    const [search, setSearch] = useState('');

    return(
        <div>
            <Container>
            <h1>Pokemon Search</h1>
                <Form className="mt-2">
                    <Row className="align-items-center">
                        <Col  sm={9} className="my-1">
                            <Form.Control
                            onChange={(e)=>{setSearch(e.target.value)}}
                            placeholder="Search for Pokemon" />
                        </Col>
                        <Col  sm={3} className="my-1">
                            <Button disabled={search===''} block variant="danger" onClick={(e)=>{props.getPokemon(search)}}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Search;