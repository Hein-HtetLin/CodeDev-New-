<template>
  <div class="container mx-auto mt-100">
  <!-- <div class="d-flex justify-content-center gap-4 my-5">
    <button class="btn text-white shadow">Home</button>
    <button class="btn btn-dark shadow">Login</button>
  </div> -->
  <div class="card shadow mb-3 mx-auto" style="max-width: 30rem">
    <div v-if="loginError" class="alert alert-danger alert-dismissible text-center fade show" role="alert">
        <strong>Password or Email is not correct</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    <h3 class="card-header text-center bold">Login</h3>
    <div class="card-body text-primary p-5">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Email"
          v-model="userData.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userData.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn text-white mt-4 shadow" @click="login()">Login</button>
    </div>
  </div>

  </div>
</template>

<script src="../js/login.js"></script>
