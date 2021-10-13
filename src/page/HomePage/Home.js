import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './Home.css'
import Item from '../../component/common/Item/Item';
const Home = () => {
    return (
        <main>
            <section>
                <Container>
                    <Row justify="center" >
                       
                        <Col className="col" sm={6} md={4} lg={3} xl={3}>
                          <Item/>
                          <Item/>
                          <Item/>
                          <Item/>
                          <Item/>
                        </Col>
                      
                    </Row>
                </Container>

            </section>
        </main>

    )
}

export default Home
