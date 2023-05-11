import React from "react";
import { useForm } from "react-hook-form";

export default function GirisYap() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="containerGirisYap">
      <div className="twitterbaslik">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrkk_nCz_jDmG8cQJa5FauH8TyQU836j4RDeYngmgbiGNVtpWitDHbTBpXGBeJsvIsKE&usqp=CAU"></img>
        <h2>Bohemian Rhapsody'e Giriş Yap</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputkullaniciadi">
          <div className="kullaniciadi">
            <label>
              <h3>Email:</h3>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="error">*Email zorunludur.</span>
            )}
          </div>
          <div className="sifre">
            <label>
              <h3>Şifre:</h3>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Şifreyi buraya giriniz"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="error">Şifre zorunludur</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="error">Şifre en az 8 karakter olmalıdır.</span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className="error">
                Şifre en fazla 16 karakter olmalıdır.
              </span>
            )}
          </div>
        </div>
      </form>
      <div className="girisbuton">
        <button className="butongiris">Giriş Yap</button>
      </div>
    </div>
  );
}
