// react-bootstrap modülünden gerekli bileşenler alınır.
import { Row, Col, Card } from 'react-bootstrap';
// CSS dosyası import edilir.
import './Search.css';

// SearchResults bileşeni, arama sonuçlarını göstermek için kullanılır.
export default function SearchResults({ results }) {
    // Eğer sonuç yoksa, bileşen null döner.
    if (!results) {
        return null;
    }

    // Eğer sonuçlar boşsa, kullanıcıya "No results." mesajı gösterilir.
    if (results.length === 0) {
        return <p>No results.</p>;
    }

    // Sonuçlar varsa, her bir sonuç için bir Card bileşeni oluşturulur.
    return (
        <Row>
            {results.map((result) => (
                // Her bir sonuç için bir sütun (Col) oluşturulur.
                <Col xs={12} md={4} lg={3} key={result.id}>
                    {/* Card bileşeni, sanat eseri bilgilerini göstermek için kullanılır. */}
                    <Card className='card'>
                        {/* Card.Img bileşeni, sanat eserinin resmini göstermek için kullanılır. */}
                        <Card.Img
                            height={300}
                            variant='top'
                            src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
                            alt={result.thumbnail?.alt_text}
                        />
                        {/* Card.Body bileşeni, sanat eserinin başlığını içerir. */}
                        <Card.Body>
                            <Card.Title className='Text'>{result.title}</Card.Title>
                        </Card.Body>
                        {/* Favorilere Ekle butonu, kullanıcıya seçilen eseri favorilere eklemek için bir uyarı gösterir. */}
                        <button onClick={() => alert('Seçtiğiniz Eser Favorilere Eklendi!')} className='button1'>
                            Favorilere Ekle
                        </button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
