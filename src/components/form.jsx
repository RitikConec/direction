import { useState, useEffect } from 'react';

function ReusableForm({ title, fields = [], onSubmit, submitText = "submit" }) {
  // initialize form data from fields (safe when fields is undefined)
  const makeInitialData = (flds) =>
    flds.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {});

  const [formData, setFormData] = useState(() => makeInitialData(fields));

  // reset form data when fields change
  useEffect(() => {
    setFormData(makeInitialData(fields));
  }, [fields]);

  function handleChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>{title}</h2>
      {fields.map((field) => (
        <div className='form-control' key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              id={field.name}
              type={field.type || "text"}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button type='submit'>{submitText}</button>
    </form>
  );
};

export default ReusableForm;