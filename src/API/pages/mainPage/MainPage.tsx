import React from 'react';
import { Container } from 'react-bootstrap';

function MainPage() {
    return (
        <div className="plaform-page" style={{ minHeight: '120vh'}}>
            <section className="py-5">
                <div className="position-relative mt-12">
                    <div className="vector">
                        <img
                            alt=""
                            src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="position-absolute inset-0 w-100 h-100"
                            style={{paddingLeft:'650px' }}
                        />
                    </div>
                    <Container className="text-center">
                        <div className="mw-5xl mx-auto">
                            <h3 className="text-danger">
                                TOBETO<span className="fw-normal text-secondary">'ya</span>{' '}
                                <span className="fw-normal text-secondary"> hoş geldin</span>
                            </h3>
                            <h4 className="fw-normal text-secondary mb-5">Buse</h4>
                            <p className="tobeto-slogan h5">
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
