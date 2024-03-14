export const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = null;
};

export const handleRejected = ({ contacts }, { error }) => {
  contacts.isLoading = false;
  contacts.error = error.message;
};
