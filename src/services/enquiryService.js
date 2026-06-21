export const enquiryService = {
  saveEnquiry: (enquiry) => {
    try {
      const enquiries = JSON.parse(localStorage.getItem('cnc_enquiries')) || [];
      const newEnquiry = {
        ...enquiry,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      enquiries.push(newEnquiry);
      localStorage.setItem('cnc_enquiries', JSON.stringify(enquiries));
      return newEnquiry;
    } catch (error) {
      console.error('Error saving enquiry:', error);
      throw error;
    }
  },

  getEnquiries: () => {
    try {
      return JSON.parse(localStorage.getItem('cnc_enquiries')) || [];
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      return [];
    }
  },

  deleteEnquiry: (id) => {
    try {
      const enquiries = JSON.parse(localStorage.getItem('cnc_enquiries')) || [];
      const filtered = enquiries.filter(e => e.id !== id);
      localStorage.setItem('cnc_enquiries', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting enquiry:', error);
      throw error;
    }
  },

  clearAll: () => {
    try {
      localStorage.removeItem('cnc_enquiries');
      return true;
    } catch (error) {
      console.error('Error clearing enquiries:', error);
      throw error;
    }
  }
};
