function submitRequest() {
  const offered = document.getElementById("offered").value;
  const wanted = document.getElementById("wanted").value;
  const message = document.getElementById("message").value;

  db.collection("requests").add({
    from: auth.currentUser.uid,
    offered, wanted, message,
    status: "Pending",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert("Request sent!");
    window.location.href = "/swap-request.html";
  });
}
