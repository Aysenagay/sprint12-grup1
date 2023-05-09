import React from "react";

export default function GirisYap() {
  return (
    <div className="containerGirisYap">
      <div className="twitterbaslik">
        <img src="data:image/png;base64,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"></img>
        <h2>Twittera'a Giriş Yap</h2>
      </div>
      <div className="kullaniciadi">
        <h3>Kullanıcı Adı veya E-posta</h3>
      </div>
      <div className="sifre">
        <h3>Şifre</h3>
      </div>
      <div className="girisyap">
        <button className="butongiris">Giriş Yap</button>
      </div>
    </div>
  );
}
