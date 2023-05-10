import React from "react";
import { useForm } from "react-hook-form";

export default function GirisYap() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="containerGirisYap">
      <div className="twitterbaslik">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrkk_nCz_jDmG8cQJa5FauH8TyQU836j4RDeYngmgbiGNVtpWitDHbTBpXGBeJsvIsKE&usqp=CAU"></img>
        <h2>Bohemian Rhapsody'e Giriş Yap</h2>
      </div>
      <div className="inputkullaniciadi">
        <div className="kullaniciadi">
          <h3>Kullanıcı Adı: </h3>
          <form>
            <label>
              <input
                type="text"
                name="kullaniciadi"
                placeholder="Kullanıcı Adın"
                {...register("kullaniciadi", {
                  required: true,
                  maxLength: 16,
                  minLength: 8,
                })}
              ></input>
              {errors.kullaniciadi &&
                errors.kullaniciadi.type === "required" && (
                  <span className="error">Kullanıcı Adı Gerekli!</span>
                )}
              {errors.kullaniciadi &&
                errors.kullaniciadi.type === "maxLength" && (
                  <span className="error">
                    Kullanıcı Adı en fazla 16 karakter olabilir
                  </span>
                )}
              {errors.kullaniciadi &&
                errors.kullaniciadi.type === "minLength" && (
                  <span className="error">
                    Kullanıcı adı en az 6 karakter olmalı.
                  </span>
                )}
            </label>
          </form>
        </div>
        <div className="sifre">
          <h3>Şifre:</h3>
          <form>
            <label>
              <input
                type="password"
                name="password"
                placeholder="Şifreyi giriniz"
                {...register("password", {
                  required: true,
                  maxLength: 16,
                  minLength: 8,
                })}
              ></input>
              {errors.password && errors.password.type === "required" && (
                <span className="error">Şifre zorunludur!</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="error">Şifre en az 8 karakter olmalıdır.</span>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <span className="error">
                  Şifre en fazla 16 karakter olmalıdır.
                </span>
              )}
            </label>
          </form>
        </div>
      </div>
      <div className="girisbuton">
        <button className="butongiris">Giriş Yap</button>
      </div>
    </div>
  );
}
