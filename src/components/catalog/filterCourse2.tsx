import React, { useEffect, useState } from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Course } from './courses';
import axios from 'axios';
 
const SVG_PATH = "M5 7.5L10 12.5L15 7.5";
const PRICE_OPTIONS = ["Tüm Eğitimler", "Ücretli Eğitimler", "Ücretsiz Eğitimler"];
const EDUCATION_OPTIONS = ["Tüm Eğitimler", "Dijital Gelişim", "Profesyonel Gelişim"];
const COURSE_LEVEL_OPTIONS = ["Tüm Seviyeler", "Başlangıç", "Orta", "İleri"];

interface FilterCourseProps {
  onFilterComplete: (filteredData: Array<Course>) => void;
  course: Course[];
}

const FilterCourse: React.FC<FilterCourseProps> = ({ onFilterComplete,course }) => {
  const [courses, setCourses] = useState<Array<Course>>([]); 
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [educationFilter, setEducationFilter] = useState<string>('all');
  const [courseLevelFilter, setCourseLevelFilter] = useState<string>('all');

  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);
  const [isCourseLevelOpen, setIsCourseLevelOpen] = useState<boolean>(false);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:6280/api/Courses/GetList?PageSize=20');
        setCourses(response.data);
      } catch (error) {
        console.error('Kursları yüklerken bir hata oluştu:', error);
      }
    };

    fetchCourses();
  }, []);

  const filterCourses = () => {
    let filteredCourses = courses;
    if (priceFilter !== 'all') {
      filteredCourses = filteredCourses.filter(course => {
        if (priceFilter === 'Ücretli Eğitimler') {
          return course.price > 0;
        } else if (priceFilter === 'Ücretsiz Eğitimler') {
          return course.price === 0;
        } else {
          return true;
        }
      });
    }

    if (educationFilter !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.category === educationFilter);
    }

    if (courseLevelFilter !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.courseLevel === courseLevelFilter);
    }
    onFilterComplete(filteredCourses);
  };

  const handlePriceFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(event.target.value);
    filterCourses();
  };
  const handleEducationFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducationFilter(event.target.value);
    filterCourses();
  };

  const handleCourseLevelFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseLevelFilter(event.target.value);
    filterCourses();
  };

  const toggleAccordion = (accordionKey: string) => {
    switch (accordionKey) {
      case 'price':
        setIsPriceOpen(!isPriceOpen);
        break;
      case 'education':
        setIsEducationOpen(!isEducationOpen);
        break;
      case 'courseLevel':
        setIsCourseLevelOpen(!isCourseLevelOpen);
        break;
      // Daha fazla accordion case ekleyebilirsiniz.
      default:
        break;
    }
  };

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
          <Accordion.Button onClick={() => toggleAccordion('price')} style={{ marginLeft: '-8px', width: '112%', padding: '10px' }}>
            <div className="title w-100" >
              <span>Kategori</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={SVG_PATH} stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Accordion.Button>
          <Accordion.Collapse in={isPriceOpen} eventKey="price">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Arama" onChange={handlePriceFilterChange} list='datalistOptions' />
                <datalist id="datalistOptions">
                  {PRICE_OPTIONS.map(option => <option value={option} key={option} />)}
                </datalist>

              </Form.Group>
              <Form.Group className="mb-3">
                {PRICE_OPTIONS.map(option => (
                  <div key={option}>
                    <label>
                      <input type="radio" className="form-check-input" name="priceFilter" style={{ marginRight: '13px', width: '16px', height: '16px' }} value={option} checked={priceFilter === option} onChange={handlePriceFilterChange} />
                      {option}
                    </label>
                  </div>
                ))}
              </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="0" >
          <Accordion.Button as={Card.Header} onClick={() => toggleAccordion('education')} style={{ marginLeft: '-8px', width: '112%', padding: '10px' }}>
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
                <Form.Control type="text" placeholder="Arama" onChange={handleEducationFilterChange} list='datalistOptions2' />
                <datalist id="datalistOptions2">
                  {EDUCATION_OPTIONS.map(option => <option value={option} key={option} />)}
                </datalist>

              </Form.Group>
              <Form.Group className="mb-3">
                {EDUCATION_OPTIONS.map(option => (
                  <div key={option}>
                    <label>
                      <input type="radio" name="educationFilter" value={option} style={{ marginRight: '13px', width: '16px', height: '16px' }} checked={educationFilter === option} onChange={handleEducationFilterChange} />
                      {option}
                    </label>
                  </div>
                ))}
              </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Button as={Card.Header} onClick={() => toggleAccordion('courseLevel')} style={{ marginLeft: '-8px', width: '112%', padding: '10px' }}>
            <div className="title w-100">
              <span>Kurs Seviyeleri</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={SVG_PATH} stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Accordion.Button>
          <Accordion.Collapse in={isCourseLevelOpen} eventKey="courseLevel">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Arama" onChange={handleCourseLevelFilterChange} list='datalistOptions3' />
                <datalist id="datalistOptions3">
                  {COURSE_LEVEL_OPTIONS.map(option => <option value={option} key={option} />)}
                </datalist>
              </Form.Group>
              <Form.Group className="mb-3">
                {COURSE_LEVEL_OPTIONS.map(option => (
                  <div key={option}>
                    <label>
                      <input type="radio" name="courseLevelFilter" value={option} style={{ marginRight: '13px', width: '16px', height: '16px' }} checked={courseLevelFilter === option} onChange={handleCourseLevelFilterChange} />
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
