import React from "react";

export default function FirstPage() {
  return (
    <div className="containerFirstPage">
      <div className="twitter">
        <h3>Twitter'da yeni misin?</h3>
        <p>Kişiselleştirilmiş zaman akışını almak için hemen kaydol!</p>
      </div>
      <div className="butonlar">
        <button className="girisYap">Giriş Yap</button>
        <button className="kayitOl">Kayıt Ol</button>
      </div>
    </div>
  );
}
