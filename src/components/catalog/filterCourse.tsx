import React, { useState, useEffect } from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import { BASE_API_URL } from '../../enviroment/enviroment';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını ekleyin
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SVG_PATH = "M5 7.5L10 12.5L15 7.5";
const PRICE_OPTIONS = ["Tüm Eğitimler", "Ücretli Eğitimler", "Ücretsiz Eğitimler"];
const EDUCATION_OPTIONS = ["Tüm Eğitimler", "Dijital Gelişim", "Profesyonel Gelişim"];

interface FilterCourseProps {
  onFilterComplete: (filteredData: Array<any>) => void;
}
const FilterCourse: React.FC<FilterCourseProps> = ({ onFilterComplete }) => {
  const [filter, setFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [educationFilter, setEducationFilter] = useState<string>('all');
  const [allAccordionData, setAllAccordionData] = useState<Array<any>>([]);
  const [filteredAccordionData, setFilteredAccordionData] = useState<Array<any>>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedEducation, setSelectedEducation] = useState<string>('');
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);


  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handlePriceFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(event.target.value);
  };
  const handleEducationFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducationFilter(event.target.value);
  };
  const toggleAccordion = (accordionKey: string) => {
    switch (accordionKey) {
      case 'price':
        setIsPriceOpen(!isPriceOpen);
        break;
      case 'education':
        setIsEducationOpen(!isEducationOpen);
        break;
      // Daha fazla accordion case ekleyebilirsiniz.
      default:
        break;
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:6280/api/Courses/GetList?PageSize=20`);
      const data = await response.json();
      setAllAccordionData(data);
      filterData(data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  const filterData = (data: Array<any>) => {
    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) &&
        (priceFilter === 'all' || item.price === priceFilter) &&
        (selectedPrice === '' || item.price === selectedPrice) &&
        (selectedEducation === '' || item.category === selectedEducation) &&
        (educationFilter === 'all' || item.category === educationFilter)
      // Daha fazla filtre koşulu ekleyebilirsiniz.
    );
    setFilteredAccordionData(filteredData);
    onFilterComplete(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, [filter, priceFilter, selectedPrice, selectedEducation, educationFilter]);

  return (
    <div className="col-lg-3 col-md-4 col-12 light">
      <div className="filter dm-none">
        <h2>Filtrele</h2>
        <hr className="mt-0" />

        <button
          className="mb-3 w-100"
          type="button"
          style={{
            border: '2px solid rgb(153, 51, 255)',
            borderRadius: '50px',
            padding: '8px 16px',
            color: 'rgb(24, 24, 24)',
            fontWeight: 600,
            textAlign: 'left',
            backgroundColor: 'white',
          }}
        >
          <div className="w-100">
            <span>Bana Özel</span>
          </div>
        </button>

        <Accordion defaultActiveKey="0" style={{ marginBottom: '-3px' }}>
          <Accordion.Button onClick={() => toggleAccordion('price')} style={{ marginLeft: '-8px', width: '112%', padding: '10px'}}>
            <div className="title w-100">
              <span>Kategori</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={SVG_PATH} stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Accordion.Button>
          <Accordion.Collapse in={isPriceOpen} eventKey="price">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Arama" onChange={handleFilterChange} list='datalistOptions' />
                <datalist id="datalistOptions">
                  {PRICE_OPTIONS.map(option => <option value={option} />)}
                </datalist>

              </Form.Group>
              <Form.Group className="mb-3">
                {PRICE_OPTIONS.map(option => (
                  <div>
                    <label>
                      <input type="radio" name="priceFilter" value={option} checked={priceFilter === option} onChange={handlePriceFilterChange} />
                      {option}
                    </label>
                  </div>
                ))}
              </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="0" >
          <Accordion.Button as={Card.Header} onClick={() => toggleAccordion('education')} style={{ marginLeft: '-8px', width: '112%', padding: '10px'}}>
            <div className=" title w-100">
              <span>Eğitimler</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={SVG_PATH} stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Accordion.Button>
          <Accordion.Collapse in={isEducationOpen} eventKey="education">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Arama" onChange={handleFilterChange} list='datalistOptions' />
                <datalist id="datalistOptions">
                  {EDUCATION_OPTIONS.map(option => <option value={option} />)}
                </datalist>

              </Form.Group>
              <Form.Group className="mb-3">
                {EDUCATION_OPTIONS.map(option => (
                  <div>
                    <label>
                      <input type="radio" name="educationFilter" value={option} checked={educationFilter === option} onChange={handleEducationFilterChange} />
                      {option}
                    </label>
                  </div>
                ))}
              </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterCourse;
