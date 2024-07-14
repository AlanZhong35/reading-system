import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatForm from './StatForm';
const Dashboard = () => {

    return(
        <>
        <Container>
            <Row>
              <h1>Alan's Machine Learning App</h1>
        </Row>
        <Row>
          <StatForm></StatForm>
        </Row>
      </Container>
        </>
    )
}

export default Dashboard;
