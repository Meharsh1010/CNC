import React, { createContext, useState, useCallback } from 'react';
import { enquiryService } from '../services/enquiryService';

export const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState(() => enquiryService.getEnquiries());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitEnquiry = useCallback((enquiryData) => {
    setLoading(true);
    setError(null);
    try {
      const result = enquiryService.saveEnquiry(enquiryData);
      setEnquiries(prev => [...prev, result]);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEnquiry = useCallback((id) => {
    try {
      enquiryService.deleteEnquiry(id);
      setEnquiries(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const clearAllEnquiries = useCallback(() => {
    try {
      enquiryService.clearAll();
      setEnquiries([]);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const value = {
    enquiries,
    loading,
    error,
    submitEnquiry,
    deleteEnquiry,
    clearAllEnquiries,
    totalEnquiries: enquiries.length
  };

  return (
    <EnquiryContext.Provider value={value}>
      {children}
    </EnquiryContext.Provider>
  );
};
