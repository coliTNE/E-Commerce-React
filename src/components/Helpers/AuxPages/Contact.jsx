import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const initialValues = { name: "", email: "", mobile: "", comentary: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors(validate(formValues));
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title:
          "Pronto estaremos en contacto contigo, gracias por contactarnos!",
        toast: true,
        timer: 2000,
        timerProgressBar: true,
        position: "top",
        showConfirmButton: false,
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (!values.name || values.name.length <= 2) {
      errors.name = "Ingresa tu nombre!";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Este campo solo puede contener letras.";
    }
    if (!values.email) {
      errors.email = "Tu correo es necesario!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Correo no valido";
    }
    if (!values.mobile) {
      errors.mobile = "Ingresa tu numero de teléfono";
    } else if (!phoneRegex.test(values.mobile)) {
      errors.mobile =
        "Numero de teléfono invalido (formato valido : 10 digitos)";
    }
    if (!values.comentary) {
      errors.comentary = "Deja tu comentario porfavor.";
    }
    return errors;
  };
  return (
    <main className="main__contact">
      <div className="container desktop__container">
        <div className="about__form">
          <div className="about__title">
            <h2>Contáctenos</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form__label">
              Nombre
              <div className="form__inputContainer">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={formValues.name}
                  onChange={handleChange}
                  className={
                    !formErrors.name && formValues.name === ""
                      ? ""
                      : !formErrors.name
                      ? "form__successInput"
                      : "form__errorInput"
                  }
                />
                {!formErrors.name && formValues.name === "" ? (
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="form__icon"
                  />
                ) : !formErrors.name ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="form__icon form__successIcon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="form__icon form__errorIcon"
                  />
                )}
              </div>
              <p className="form__errorMessage">
                {formValues.name === ""
                  ? ""
                  : !formErrors.name
                  ? ""
                  : formErrors.name}
              </p>
            </label>

            <label htmlFor="email" className="form__label">
              Email
              <div className="form__inputContainer">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formValues.email}
                  onChange={handleChange}
                  className={
                    !formErrors.email && formValues.email === ""
                      ? ""
                      : !formErrors.email
                      ? "form__successInput"
                      : "form__errorInput"
                  }
                />
                {!formErrors.email && formValues.email === "" ? (
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="form__icon"
                  />
                ) : !formErrors.email ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="form__icon form__successIcon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="form__icon form__errorIcon"
                  />
                )}
              </div>
              <p className="form__errorMessage">
                {formValues.email === ""
                  ? ""
                  : !formErrors.email
                  ? ""
                  : formErrors.email}
              </p>
            </label>

            <label htmlFor="mobile" className="form__label">
              Teléfono
              <div className="form__inputContainer">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Ingresa tu numero de teléfono"
                  value={formValues.mobile}
                  onChange={handleChange}
                  className={
                    !formErrors.mobile && formValues.mobile === ""
                      ? ""
                      : !formErrors.mobile
                      ? "form__successInput"
                      : "form__errorInput"
                  }
                />
                {!formErrors.mobile && formValues.mobile === "" ? (
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="form__icon"
                  />
                ) : !formErrors.mobile ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="form__icon form__successIcon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="form__icon form__errorIcon"
                  />
                )}
              </div>
              <p className="form__errorMessage">
                {formValues.mobile === ""
                  ? ""
                  : !formErrors.mobile
                  ? ""
                  : formErrors.mobile}
              </p>
            </label>
            <label htmlFor="comentary" className="form__label">
              Comentario
              <div className="form__textTareaContainer">
                <textarea
                  name="comentary"
                  id="comentary"
                  value={formValues.comentary}
                  onChange={handleChange}
                  className={
                    !formErrors.comentary && formValues.comentary === ""
                      ? ""
                      : !formErrors.comentary
                      ? "form__successInput"
                      : "form__errorInput"
                  }
                />
              </div>
              <p className="form__errorMessage">
                {formValues.comentary === ""
                  ? ""
                  : !formErrors.comentary
                  ? ""
                  : formErrors.comentary}
              </p>
            </label>

            <button type="submit" className="form__btn">
              <span>Enviar</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
