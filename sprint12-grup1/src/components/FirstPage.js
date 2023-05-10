import React from "react";
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="containerFirstPage">
      <div className="twitter">
        <img src="https://images-ext-1.discordapp.net/external/2hY0AempQUpfWTa5nl86F5NT2R6UYlOlf4UXWriRm-I/%3Fq%3Dtbn%3AANd9GcRdrkk_nCz_jDmG8cQJa5FauH8TyQU836j4RDeYngmgbiGNVtpWitDHbTBpXGBeJsvIsKE%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"></img>
        <h3>Buralarda yeni misin?</h3>
        <p>En son haberleri ve güncellemeleri kaçırmamak için hemen üye ol!</p>
      </div>

      <div className="butonlar">
        <Link to="/girisyap">
          {" "}
          <button className="girisYap">Giriş Yap</button>
        </Link>
        <Link to="/kayitol">
          {" "}
          <button className="kayitOl">Kayıt Ol</button>
        </Link>
      </div>
    </div>
  );
}
