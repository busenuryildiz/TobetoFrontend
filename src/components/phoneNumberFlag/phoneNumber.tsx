import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneNumberValidationProps {
    phoneNumber: string;
    onChange: (value: string) => void;
  }

const PhoneNumberValidation:React.FC<PhoneNumberValidationProps>  = ({ phoneNumber, onChange }) => {
  const [valid, setValid] = useState(true);

  const handleChange = (value: any) => {
    onChange(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber:string) => {
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
      {!valid && (
        <p>Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;