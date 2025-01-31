import React from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidate, onStatusChange }) => {
  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p><strong>Job Title:</strong> {candidate.jobTitle}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Phone:</strong> {candidate.phone}</p>
      <p><strong>Status:</strong> {candidate.status}</p>
      <select
        value={candidate.status}
        onChange={(e) => onStatusChange(candidate._id, e.target.value)}
        className="status-dropdown"
      >
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>
    </div>
  );
};

export default CandidateCard;