import s from "./FormControls.module.css";
import React from "react";
import { Field} from 'redux-form';

export const Input = ({ input, meta: {touched, error}, ...props }) => {
  const hesError = touched && error;
  return (
    <div className={hesError && s.formControl + " " + s.error}>
      <div>
        <input {...input} {...props} />
      </div>
      {hesError && <span className={s.spError}>{error}</span>}
    </div>
  );
};

export const createForm = (placeholder, name, validate, component, props = {}, text = '') => (
  <div>
    <Field
    placeholder={placeholder}
    name={name}
    validate={validate}
    component={component}
    {...props}
    />{text}
  </div>
);
