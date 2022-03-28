const notifyByEmail = (email) => {
  console.log(`email sent to: ${email}`);
};

const notifyByText = (phone) => {
  console.log(`text sent to: ${phone}`);
};

const notify = (phoneOrEmail, notifyingFunction) => {
  notifyingFunction(phoneOrEmail);
};

notify("nico@gmail.com", notifyByEmail);
notify("12345", notifyByText);
