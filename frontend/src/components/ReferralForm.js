// import React, { useState } from 'react';
// import { addCandidate } from '../api';
// import './ReferralForm.css';

// const ReferralForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     jobTitle: '',
//     resume: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     await addCandidate(data);
//     alert('Candidate referred successfully!');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       jobTitle: '',
//       resume: null,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="referral-form">
//       <input
//         type="text"
//         placeholder="Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         required
//       />
//       <input
//         type="tel"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Job Title"
//         value={formData.jobTitle}
//         onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
//         required
//       />
//       <input
//         type="file"
//         accept=".pdf"
//         onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
//       />
//       <button type="submit">Refer Candidate</button>
//     </form>
//   );
// };

// export default ReferralForm;

import React, { useState } from 'react';
import { addCandidate } from '../api';
import './ReferralForm.css';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    resume: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('jobTitle', formData.jobTitle);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }
    try {
      await addCandidate(data);
      alert('Candidate referred successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        resume: null,
      });
    } catch (err) {
      alert('Error referring candidate: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="referral-form">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        required
      />
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
      />
      <button type="submit">Refer Candidate</button>
    </form>
  );
};

export default ReferralForm;