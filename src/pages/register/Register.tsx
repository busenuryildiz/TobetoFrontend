import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterData, register } from "../../store/slices/authSlice";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";

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

    dispatch(register(userRegisterData)).then(() => {
      navigate("/login");
    });
    console.log("register", firstName, lastName, email, password);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ad*"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Soyad*"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Şifre*"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Şifreyi tekrarla*"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
