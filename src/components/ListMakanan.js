import React from 'react';
import { Col,Card, Button,Container,Row } from 'react-bootstrap';
import { numberWithDots } from '../utils/utils';

const ListMakanan = ({ makanan }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
            <Card className="shadow">
                <Card.Img variant="top" src={
            "asset/img/" +
            makanan.gambar_makanan
          } />
                <Card.Body>
                    
                    <Card.Text>
                      Rp.{numberWithDots(makanan.harga_makanan)}
                    </Card.Text>
                    <Card.Title>{ makanan.nama_makanan } ({makanan.kode_makanan})</Card.Title>
                    <Button variant="primary">Tambah Ke Keranjang</Button>
                </Card.Body>
            </Card>
          </Col>
  )
}

export default ListMakanan;
