<template>
  <header
    class="m-grid__item m-header"
    data-minimize-offset="200"
    data-minimize-mobile-offset="200"
  >
    <div class="m-container m-container--fluid m-container--full-height">
      <div class="m-stack m-stack--ver m-stack--desktop">
        <!-- BEGIN: Brand -->
        <div class="m-stack__item m-brand m-brand--skin-dark">
          <div class="m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-stack__item--middle m-brand__logo">
              <a href="index.html" class="m-brand__logo-wrapper">
                <img alt width="75px" src="assets/app/media/img/logos/aaaimx-transparent.png" />
              </a>
            </div>
            <div class="m-stack__item m-stack__item--middle m-brand__tools">
              <!-- BEGIN: Left Aside Minimize Toggle -->
              <a
                href="javascript:;"
                id="m_aside_left_minimize_toggle"
                class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block"
              >
                <span></span>
              </a>
              <!-- END -->
              <!-- BEGIN: Responsive Aside Left Menu Toggler -->
              <a
                href="javascript:;"
                id="m_aside_left_offcanvas_toggle"
                class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block"
              >
                <span></span>
              </a>
              <!-- END -->
              <!-- BEGIN: Topbar Toggler -->
              <a
                id="m_aside_header_topbar_mobile_toggle"
                href="javascript:;"
                class="m-brand__icon m--visible-tablet-and-mobile-inline-block"
              >
                <i class="flaticon-more"></i>
              </a>
              <!-- BEGIN: Topbar Toggler -->
            </div>
          </div>
        </div>
        <!-- END: Brand -->
        <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
          <!-- BEGIN: Horizontal Menu -->
          <button
            class="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark"
            id="m_aside_header_menu_mobile_close_btn"
          >
            <i class="la la-close"></i>
          </button>
          <!-- END: Horizontal Menu -->
          <!-- BEGIN: Topbar -->
          <TopBar />
          <!-- END: Topbar -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar
  }
};
</script>

