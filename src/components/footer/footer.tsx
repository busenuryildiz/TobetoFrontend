import React from 'react'
export default function Footer() {
    return (
        <section className="py-3" style={{ backgroundColor: '#9933FF' }}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-6 col-lg-4 mb-lg-0 my-4">
                        <a className="d-block mobile-text-center navbar-brand" href="#">
                            <span>
                                <span >
                                    <img alt="" aria-hidden="true"
                                        width={100}
                                        height={21}
                                        src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75" />
                                </span>
                            </span></a></div>
                    <div className="col-6 col-lg-8 my-4 ">
                        <ul className="list-unstyled mb-0 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end" >
                            <li className=" mb-lg-0 " >
                                <a className="btn btn-light-light" href="iletisim" style={{ fontFamily:'sans-serif' ,color:'#000000', backgroundColor: '#FAFAF9' }}><strong>Bize Ulaşın</strong></a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <p className="d-lg-none small text-white text-center">© 2022 Tobeto </p>
                    </div>
                </div>
            </div>
        </section>
    )
}