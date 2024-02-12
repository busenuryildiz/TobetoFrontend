import React, { useState } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { registerUser } from "../../store/actions/authActions";
import { AppDispatch } from "../../store/index";
=======
import { RegisterData, register } from "../../store/slices/authSlice";
import { AppDispatch } from "../../store/store";
>>>>>>> 5aa6d5c9ddac2e0aee3a010a39f609f9084c1bed
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
