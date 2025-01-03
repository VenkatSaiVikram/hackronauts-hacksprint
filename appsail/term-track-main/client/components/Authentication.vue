<script setup>
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
</script>

<template>
    <h1>Authentication</h1>
    <!-- <div id="g_id_onload"
         data-client_id="660177062157-jn09lmc11gbgk4sl29va8q7g47np3cbs"
         data-ux_mode="redirect"
         data-login_uri="http://localhost:3001">
    </div>
    <div class="g_id_signin" data-type="standard"></div> -->
</template>