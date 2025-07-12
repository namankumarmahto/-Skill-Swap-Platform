const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const getPublicProfiles = require("./services/getPublicProfiles");

exports.getPublicProfiles = functions.https.onCall(getPublicProfiles);
