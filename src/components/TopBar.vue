<template>
  <div id="m_header_topbar" class="m-topbar m-stack m-stack--ver m-stack--general">
    <div class="m-stack__item m-topbar__nav-wrapper">
      <ul class="m-topbar__nav m-nav m-nav--inline">
        <li
          class="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width"
          data-dropdown-toggle="click"
          data-dropdown-persistent="true"
        >
          <a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
            <span class="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span>
            <span class="m-nav__link-icon">
              <i class="flaticon-music-2"></i>
            </span>
          </a>
          <div class="m-dropdown__wrapper">
            <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
            <div class="m-dropdown__inner">
              <div
                class="m-dropdown__header m--align-center"
                style="background: url(assets/app/media/img/misc/notification_bg.jpg); background-size: cover;"
              >
                <span class="m-dropdown__header-title">9 New</span>
                <span class="m-dropdown__header-subtitle">User Notifications</span>
              </div>
              <div class="m-dropdown__body">
                <div class="m-dropdown__content">
                  <ul class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                    <li class="nav-item m-tabs__item">
                      <a
                        class="nav-link m-tabs__link active"
                        data-toggle="tab"
                        href="#topbar_notifications_notifications"
                        role="tab"
                      >Alerts</a>
                    </li>
                    <li class="nav-item m-tabs__item">
                      <a
                        class="nav-link m-tabs__link"
                        data-toggle="tab"
                        href="#topbar_notifications_events"
                        role="tab"
                      >Events</a>
                    </li>
                    <li class="nav-item m-tabs__item">
                      <a
                        class="nav-link m-tabs__link"
                        data-toggle="tab"
                        href="#topbar_notifications_logs"
                        role="tab"
                      >Logs</a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane active"
                      id="topbar_notifications_notifications"
                      role="tabpanel"
                    >
                      <div
                        class="m-scrollable"
                        data-scrollable="true"
                        data-max-height="250"
                        data-mobile-max-height="200"
                      >
                        <div class="m-list-timeline m-list-timeline--skin-light">
                          <div class="m-list-timeline__items">
                            <div class="m-list-timeline__item">
                              <span
                                class="m-list-timeline__badge -m-list-timeline__badge--state-success"
                              ></span>
                              <span class="m-list-timeline__text">12 new users registered</span>
                              <span class="m-list-timeline__time">Just now</span>
                            </div>
                            <div class="m-list-timeline__item">
                              <span class="m-list-timeline__badge"></span>
                              <span class="m-list-timeline__text">
                                System shutdown
                                <span
                                  class="m-badge m-badge--success m-badge--wide"
                                >pending</span>
                              </span>
                              <span class="m-list-timeline__time">14 mins</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          class="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light"
          data-dropdown-toggle="click"
        >
          <a href="#" class="m-nav__link m-dropdown__toggle">
            <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
            <span class="m-nav__link-icon">
              <i class="flaticon-share"></i>
            </span>
          </a>
          <div class="m-dropdown__wrapper">
            <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
            <div class="m-dropdown__inner">
              <div
                class="m-dropdown__header m--align-center"
                style="background: url(assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;"
              >
                <span class="m-dropdown__header-title">Quick Actions</span>
                <span class="m-dropdown__header-subtitle">Shortcuts</span>
              </div>
              <div class="m-dropdown__body m-dropdown__body--paddingless">
                <div class="m-dropdown__content">
                  <div
                    class="m-scrollable"
                    data-scrollable="false"
                    data-max-height="380"
                    data-mobile-max-height="200"
                  >
                    <div class="m-nav-grid m-nav-grid--skin-light">
                      <div class="m-nav-grid__row">
                        <a href="#" class="m-nav-grid__item">
                          <i class="m-nav-grid__icon flaticon-file"></i>
                          <span class="m-nav-grid__text">Generate Report</span>
                        </a>
                        <a href="#" class="m-nav-grid__item">
                          <i class="m-nav-grid__icon flaticon-time"></i>
                          <span class="m-nav-grid__text">Add New Event</span>
                        </a>
                      </div>
                      <div class="m-nav-grid__row">
                        <a href="#" class="m-nav-grid__item">
                          <i class="m-nav-grid__icon flaticon-folder"></i>
                          <span class="m-nav-grid__text">Create New Task</span>
                        </a>
                        <a href="#" class="m-nav-grid__item">
                          <i class="m-nav-grid__icon flaticon-clipboard"></i>
                          <span class="m-nav-grid__text">Completed Tasks</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
          data-dropdown-toggle="click"
        >
          <a href="#" class="m-nav__link m-dropdown__toggle">
            <span class="m-topbar__userpic">
              <img
                src="assets/app/media/img/logos/aaai-transpeps.png"
                class="m--img-rounded m--marginless m--img-centered"
                alt
              />
            </span>
            <span class="m-topbar__username m--hide">Nick</span>
          </a>
          <div class="m-dropdown__wrapper">
            <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
            <div class="m-dropdown__inner">
              <div
                class="m-dropdown__header m--align-center"
                style="background: url(assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;"
              >
                <div class="m-card-user m-card-user--skin-dark">
                  <div class="m-card-user__pic">
                    <img
                      src="assets/app/media/img/logos/aaaimx-transparent.png"
                      class="m--img-rounded m--marginless"
                      alt
                    />
                  </div>
                  <div class="m-card-user__details">
                    <span class="m-card-user__name m--font-weight-500">Administrador</span>
                    <a
                      href
                      class="m-card-user__email m--font-weight-300 m-link"
                    >contact@aaaimx.org</a>
                  </div>
                </div>
              </div>
              <div class="m-dropdown__body">
                <div class="m-dropdown__content">
                  <ul class="m-nav m-nav--skin-light">
                    <li class="m-nav__section m--hide">
                      <span class="m-nav__section-text">Section</span>
                    </li>
                    <li class="m-nav__item">
                      <a href="header/profile.html" class="m-nav__link">
                        <i class="m-nav__link-icon flaticon-profile-1"></i>
                        <span class="m-nav__link-title">
                          <span class="m-nav__link-wrap">
                            <span class="m-nav__link-text">Profile</span>
                            <span class="m-nav__link-badge">
                              <span class="m-badge m-badge--success">2</span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="m-nav__separator m-nav__separator--fit"></li>

                    <li class="m-nav__item">
                      <a href="header/profile.html" class="m-nav__link">
                        <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                        <span class="m-nav__link-text">Settings</span>
                      </a>
                    </li>
                    <li class="m-nav__separator m-nav__separator--fit"></li>
                    <li class="m-nav__item">
                      <button
                        @click="logout()"
                        href="#"
                        class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder"
                      >Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
      toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: true,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    };
    toastr.error("See you soon...", "Goodbye, Admin!");
    }
  }
};
</script>
