const admin = require("firebase-admin");

module.exports = async () => {
  const snapshot = await admin.firestore().collection("users")
    .where("isPublic", "==", true).get();

  const users = [];
  snapshot.forEach(doc => {
    users.push(doc.data());
  });

  return users;
};
