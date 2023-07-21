import {  useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUserByEmail, isValidEmail } from "../utils/auth";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { isGoodPassword } from "../utils/crypto";
import { UserContext } from "../contexts/UserContext";


export default function AuthComponent() {
  const params = useParams();
  const [isLoginMode, setIsLoginMode] = useState(params.authMode === "login");
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);
  useEffect(() => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.disabled = isLoading));
  }, [isLoading]);

  const breakSubmission = (msg, type = toast.TYPE.ERROR) => {
    setIsLoading(false);
    return toast(msg, { type });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //TODO : Controle la validité du formulaire
    //-> verifier egalite de password
    if (!isLoginMode && e.target.password.value !== e.target.password_confirm)
      return breakSubmission("Les mots de passe ne concordent pas");
    //->verifier le pattern de l'email
    if (!isValidEmail(e.target.email.value))
      return breakSubmission("L'email n'est pas valide");

    const user = await getUserByEmail(e.target.email.value);
    if (isLoginMode) {
      if (!user) breakSubmission("Adresse mail incorrecte");
      if (!isGoodPassword(e.target.password.value, user.password))
        breakSubmission("Mot de passe incorecte");

      //
    }

    // enregistrer en base de donnée
    setIsLoading(false);
  };

  return (
    <>
      <div id="auth-component">
        <div id="auth-component-content">
          <div className="auth-mode">{isLoginMode ? "Login" : "Signup"}</div>
          <div className="get-started">to get started</div>
          <form onSubmit={(e) => submitForm(e)} id="auth-form" method="post">
            <inputr
              type="text"
              className={"form-field " + (isLoginMode ?? "hidden")}
              required
              name="name"
              placeholder="Your name"
            />
            <input
              type="text"
              className={"form-field " + (isLoginMode ?? "hidden")}
              required
              name="surname"
              placeholder="Your surname"
            />

            <input
              type="date"
              name="birthday"
              className={"form-field " + (isLoginMode ?? "hidden")}
              required
              placeholder="Your Birthday"
            />
            <input
              type="email"
              name="email"
              className="form-field"
              required
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="form-field"
              required
              placeholder="Your password"
            />

            <input
              type="password"
              name="password_confirm"
              className={"form-field " + (isLoginMode ?? "hidden")}
              required
              placeholder="Retype your password"
            />

            <p>
              <input type="checkbox" name="terms" id="terms" /> Agree to Our
              terms and conditions
            </p>

            <div className={isLoading ? "loading-spinner" : "hidden"}>
              <ColorRing />
            </div>
            <button type="submit" id="submit-button">
              Continue
            </button>

            <div className="change-auth">
              {isLoginMode ? " New User ? " : "Already registered ? "}
              <NavLink
                className="change-auth-mode"
                onClick={() => setIsLoginMode(!isLoginMode)}
                to={"/auth/" + (isLoginMode ? "register" : "login")}
              >
                {isLoginMode ? "Signup" : "Login "}
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
