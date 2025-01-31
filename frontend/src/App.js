import React, { useState, useEffect } from 'react';
import { fetchCandidates, updateStatus } from './api';
import CandidateCard from './components/CandidateCard';
import ReferralForm from './components/ReferralForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    const getCandidates = async () => {
      const { data } = await fetchCandidates();
      setCandidates(data);
      setFilteredCandidates(data);
    };
    getCandidates();
  }, []);

  const handleSearch = (query) => {
    const filtered = candidates.filter(
      (candidate) =>
        candidate.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        candidate.status.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };

  const handleStatusChange = async (id, status) => {
    await updateStatus(id, status);
    const updatedCandidates = candidates.map((candidate) =>
      candidate._id === id ? { ...candidate, status } : candidate
    );
    setCandidates(updatedCandidates);
    setFilteredCandidates(updatedCandidates);
  };

  return (
    <div className="App">
      <h1>Candidate Referral System</h1>
      <ReferralForm />
      <SearchBar onSearch={handleSearch} />
      <div className="candidate-list">
        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default App;