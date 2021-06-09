<template>
<v-app>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/mainpages/info" class="nav-link">Info Page</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/mainpages/teilnehmen" class="nav-link" href="#">Teilnehmen</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/mainpages/studienverwaltung" class="nav-link" href="#">Studienverwaltung</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/mainpages/benutzerverwaltung" class="nav-link" href="#">Benutzerverwaltung</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/mainpages/konto" class="nav-link" href="#">Mein Profil</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Nuxt />
</v-app>
</template>