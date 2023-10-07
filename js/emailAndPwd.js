ui.start("#firebaseui-auth-container", {
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  // Other config options...
});

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
});
