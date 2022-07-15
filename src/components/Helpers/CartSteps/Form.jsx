import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faBagShopping,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Form({ createOrder }) {
  const initialValues = { name: "", email: "", mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      createOrder(formValues);
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
    return errors;
  };

  return (
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
              !isSubmit
                ? ""
                : !formErrors.name
                ? "form__successInput"
                : "form__errorInput"
            }
          />
          {!isSubmit ? (
            <FontAwesomeIcon icon={faCircleMinus} className="form__icon" />
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
          {!isSubmit ? "" : !formErrors.name ? "" : formErrors.name}
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
              !isSubmit
                ? ""
                : !formErrors.email
                ? "form__successInput"
                : "form__errorInput"
            }
          />
          {!isSubmit ? (
            <FontAwesomeIcon icon={faCircleMinus} className="form__icon" />
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
          {!isSubmit ? "" : !formErrors.email ? "" : formErrors.email}
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
              !isSubmit
                ? ""
                : !formErrors.mobile
                ? "form__successInput"
                : "form__errorInput"
            }
          />
          {!isSubmit ? (
            <FontAwesomeIcon icon={faCircleMinus} className="form__icon" />
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
          {!isSubmit ? "" : !formErrors.mobile ? "" : formErrors.mobile}
        </p>
      </label>

      <button type="submit" className="form__btn">
        <div>
          <span>Comprar</span>
        </div>
      </button>
    </form>
  );
}
