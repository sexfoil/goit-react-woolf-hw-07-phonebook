export const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = null;
};

export const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};
