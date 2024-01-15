import React from 'react';
import { Container } from 'react-bootstrap';

function MainPage() {
    return (
        <div className="plaform-page" style={{ minHeight: '120vh' }}>
            <section className="py-5">
                <div className="position-relative mt-12">
                    <div className="vector" style={{marginLeft: '600px' }}>
                        <img
                            alt=""
                            src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="position-absolute inset-0 w-100 h-100"
                        />
                    </div>
                    <Container className="text-center">
                        <div className="mw-5xl mx-auto">
                            <h3 className="text-secondary">
                                TOBETO<span className="fw-normal text-info">'ya</span>{' '}
                                <span className="fw-normal text-info"> hoş geldin</span>
                            </h3>
                            <h4 className="fw-normal text-info mb-5">Buse</h4>
                            <p className="tobeto-slogan">
                                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!
                            </p>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
