<template>
  <div id="app" class="m-grid m-grid--hor m-grid--root m-page">
    <!-- BEGIN: Header -->
    <NavApp v-show="$route.name == 'Dashboard'"/>
    <!-- END: Header -->
    <!-- begin::Body -->
    <router-view />
    <!-- end:: Body -->
    <!-- begin::Footer -->
    <FooterApp v-show="$route.name == 'Dashboard'"/>
    <!-- end::Footer -->
    <!-- begin::Scroll Top -->
    <div
      class="m-scroll-top m-scroll-top--skin-top"
      data-toggle="m-scroll-top"
      data-scroll-offset="500"
      data-scroll-speed="300"
    >
      <i class="la la-arrow-up"></i>
    </div>
    <!-- end::Scroll Top -->
  </div>
</template>

<script>
import NavApp from "@/components/NavApp";
import FooterApp from "@/components/FooterApp";
export default {
  name: "App",
  components: {
    NavApp,
    FooterApp
  }
};
</script>