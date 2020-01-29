import React, { useContext, useEffect } from 'react';
import './index.css';
import { Card, Row, Col } from 'react-bootstrap';
import { WeatherContext } from '../../provider/weather/weather.provider';

function Main() {

    const { weather, hasError } = useContext(WeatherContext);

    if (hasError.hasError) {
        return (<div>Ocorre um erro ao obter as informações</div>)
    }

    return (
        <Card border="primary" style={{ width: '30rem' }}>
            <Card.Header>
                <Row>
                    <Col>{weather && weather.location.region}</Col>
                    <Col>{weather && weather.location.localtime}</Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <p>AGORA 18:23</p>
                        <p className="temperature">{weather && weather.current.temperature}</p>
                        <p className="extras">Sensação térmica {weather && weather.current.feelslike}</p>
                        <p className="extras">Precipitação {weather && weather.current.precip}%</p>
                    </Col>
                    <Col className="description">
                        <img src={weather && weather.current.weather_icons[0]} alt={weather && weather.current.weather_descriptions} width="70%" />
                        <p>{weather && weather.current.weather_descriptions}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Main;