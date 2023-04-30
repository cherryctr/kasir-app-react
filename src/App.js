// import logo from './logo.svg';
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import { API_URL } from "./utils/constanst";
import axios from "axios";
import { Hasil, ListCategori, NavbarComponent , ListMakanan}  from './components';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      
    };
  }

  componentDidMount() {
    axios.get(API_URL + '/makanan')
    .then((res) => {
      const makanans = res.data;
      this.setState({ makanans });
    })
    .catch((error) => {
      console.log("Error yaa ", error);
    });
  }

  render() {
    const { makanans } = this.state;
    console.log(makanans)
     return (
      
      <div className="App">
      <NavbarComponent />
      <div className="mt-2">
          <Container fluid>
            <Col>
                <Row>
                    <ListCategori />
                    <Col>
                      <h4><strong>Daftar Produk</strong></h4>
                      <hr />

                      <Row className="overflow-auto">
                        {makanans &&
                          makanans.map((makanan) => (
                          <ListMakanan 
                            key={makanan.id}
                            makanan={makanan}
                          />
                        ))}
                      </Row>
                    </Col>
                    <Hasil />
                </Row>
            </Col>
          </Container>
      </div>
    </div>
    )
  }
}

