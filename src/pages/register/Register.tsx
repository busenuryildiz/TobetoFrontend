import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/authActions";
import { AppDispatch } from "../../store/index";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navi2";

const Register = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Varsayılan değerleri tanımla
  const defaultBirthDate = new Date(); // Örnek: Şu anki tarih
  const defaultPhoneNumber = ""; // Boş string
  const defaultImagePath = ""; // Boş string
  const defaultNationalIdentity = "";

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Şifreler eşleşmiyor!");
      return; // Şifreler eşleşmiyorsa kayıt işlemine devam etmeyi durdur
    }

    interface RegisterData {
      firstName: string;
      lastName: string;
      email: string;
      imagePath: string;
      password: string;
      nationalIdentity: string;
      birthDate: any;
      phoneNumber: string;
    }

    const userRegisterData: RegisterData = {
      firstName,
      lastName,
      email,
      password,
      // Varsayılan değerleri kullanarak diğer bilgileri doldur
      birthDate: defaultBirthDate,
      phoneNumber: defaultPhoneNumber,
      imagePath: defaultImagePath,
      nationalIdentity: defaultNationalIdentity,
    };

    dispatch(registerUser(userRegisterData)).then(() => {
      navigate("/login");
    });
    console.log("register", firstName, lastName, email, password);
  };
  return (
    <div>
      <Navbar />
      <section className="position-relative py-lg-20 bg-light-light py-sm-10 mt-5">
        <div className="container mt-5 text-center">
          <div className="row justify-content-center">
            <div className="col-md-5 mt-5">
              <div className="btn-rainbow-card text-center">
                <div className="py-4 px-sm-0 px-md-12 text-center">
                  <div className="d-flex flex-column align-items-center mt-4">
                    <img
                      alt="Tobeto Logo"
                      src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                      style={{ display: 'block', maxWidth: '30%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
                    />
                    <form className="mt-5" onSubmit={onSubmit}>
                      <input className="form-control mt-6 " type="text" placeholder="Ad*" onChange={(e) => setFirstName(e.target.value)} />
                      <input className="form-control mt-6 " type="text" placeholder="Soyad*" onChange={(e) => setLastName(e.target.value)}/>
                      <input className="form-control mt-6 " type="text" placeholder="E-Posta*" onChange={(e) => setEmail(e.target.value)} />
                      <input className="form-control mt-6 " type="password" placeholder="Şifre*" onChange={(e) => setPassword(e.target.value)} />
                      <input className="form-control mt-6" type="password" placeholder="Şifre Tekrar*"  onChange={(e) => setConfirmPassword(e.target.value)} />
                      <button className="btn btn-primary w-100 mt-6" type="submit">Kayıt Ol</button>
                      
                    </form>
                    <div className="col-12 mt-6">
                      <label>
                        <small>
                          Zaten bir hesabın var mı?
                          <a className="text-decoration-none text-muted fw-bold" href="/login">
                            {' '}
                            Giriş Yap
                          </a>
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 btn-rainbow-card-ik mt-5">
              <div className="ik-banner-big h-100">
                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', marginLeft: '150px', padding: '0px', position:'relative', maxWidth: '90%' }}>
                  <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '90%' }}>
                    <img
                    className="d-flex w-100 flex-column justify-content-center align-items-center"
                      alt=""
                      aria-hidden="true"
                      src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                      style={{
                        display: 'block',
                        maxWidth: '60%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px'
                      }}
                    />
                  </span>
                </span>
                <span className="greenLine2"></span>
                <div>
                  <span className="text-blue fw-bold ">Aradığın "İş" Burada!</span>
                </div>
                <div className="d-flex w-100 flex-column justify-content-center align-items-center">
                <a href="istanbul-kodluyor"><button className="btn  d-md-inline-block btn-primary mt-3">Başvur</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
