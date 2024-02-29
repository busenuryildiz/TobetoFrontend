import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik'; // formik importunu ekleyin

interface PhoneNumberValidationProps {
  phoneNumber: string;
  onChange: (value: string) => void;
  formik: any; // veya FormikProps<FormikValues> türüne göre ayarlayın
}

const PhoneNumberValidation: React.FC<PhoneNumberValidationProps> = ({ phoneNumber, onChange, formik }) => {
  const [valid, setValid] = useState(true);

  const handleChange = (value: any) => {
    onChange(value);
    formik.setFieldValue('phoneNumber', value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <label>
        <label className="input-label-text">Telefon Numaranız*</label>
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
        />
      </label>
      {!valid && <p>Please enter a valid phone number.</p>}
    </div>
  );
};

export default PhoneNumberValidation;
