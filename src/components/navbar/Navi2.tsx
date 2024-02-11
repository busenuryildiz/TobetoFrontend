import React from "react";
import { Link } from "react-router-dom";

function Navi2() {
  return (
    <nav>
      <div className="left-section">
        {/* Logo */}
        <img src="../Assets/image/tobeto-logo.png" alt="Logo" className="logo" />
        {/* Sol kısımdaki içerikler */}
        <Link to="/">Ana Sayfa</Link>
        <Link to="/about-us">Hakkımızda</Link>
        <Link to="/platform-katalog">Katalog</Link>
        <Link to="/codeacademy">Codeacademy</Link>
        <Link to="/takvim">Tobeto'da bu Ay</Link>
      </div>
      <div className="right-section">
        {/* Sağ kısımdaki giriş yap ve üye ol bağlantıları */}
        <Link to="/login">Giriş Yap</Link>
        <Link to="/register">Ücretsiz Üye Ol</Link>
      </div>
    </nav>
  );
}

export default Navi2;