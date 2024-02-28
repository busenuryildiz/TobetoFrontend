import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-secondary py-5">
    <Container>
      <div className="row justify-content-between align-items-center">
        <div className="col-6 col-lg-4 mb-lg-0 my-4">
          <a className="d-block mobile-text-center navbar-brand" href="/">
            <img
              alt=""
              width={100}
              height={21}
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75"
              srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75 1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75 2x"
            />
          </a>
        </div>
        <div className="col-6 col-lg-8 my-4">
          <ul className="list-unstyled mb-0 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
            <li className="mb-lg-0">
              <Link className="btn btn-light-light" to="/iletisim">
                Bize Ulaşın
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <p className="d-lg-none small text-white text-center">© 2022 Tobeto</p>
        </div>
      </div>
    </Container>
  </section>
  
  )
}