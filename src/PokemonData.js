import React from 'react';
import {Container, Row, Col, Card, ProgressBar} from 'react-bootstrap';

const PokemonData = (props) =>{
    return(
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <h3>{props.name} {props.id}</h3>
                            <img src={props.sprite} alt={props.name}></img>
                        </Card.Header>
                        <Card.Body>
                            <h4>Abilities</h4>
                            {(props.abilities).map((ability, key)=>(
                                <div key={key}>
                                    <span>{ability.ability.name}</span>
                                </div>
                            ))}
                            <h4>Types</h4>
                            {(props.types).map((type, key)=>(
                                <div key={key}>
                                    <span>{type.type.name}</span>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <h3>Base Stats</h3>
                            {props.stats.map((stat, key)=>(
                                <div key={key}>
                                    <strong>{stat.stat.name}</strong>
                                    <ProgressBar label={stat.base_stat} now={stat.base_stat} max={255}></ProgressBar>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PokemonData;