"use client";
const { useField } = require("formik");

const Input = ({ label, ...props }: { label: string }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 "
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-error text-xs font-medium my-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
