import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);

export default InputField;
