<template>
  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
    <!-- BEGIN: Left Aside -->
    <button class="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn">
      <i class="la la-close"></i>
    </button>
    <div id="m_aside_left" class="m-grid__item m-aside-left m-aside-left--skin-dark">
      <!-- BEGIN: Aside Menu -->
      <AsideApp />
      <!-- END: Aside Menu -->
    </div>

    <div class="m-grid__item m-grid__item--fluid m-wrapper">
      <!-- BEGIN: Subheader -->
      <div class="m-subheader">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <h3 class="m-subheader__title">Dashboard</h3>
          </div>
          <div>
            <span class="m-subheader__daterange">
              &nbsp;&nbsp;
              <i class="flaticon-calendar-2"></i>&nbsp;
              <span>{{date.toDateString()}}</span>
              &nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
      <!-- END: Subheader -->
      <div class="m-content">
        <!--Begin::Section-->
        <div class="m-portlet">
          <div class="m-portlet__body m-portlet__body--no-padding">
            <div class="row m-row--no-padding m-row--col-separator-xl">
              <div class="col-xl-6">
                <!--begin:: Widgets/Stats2-1 -->
                <div class="m-widget1">
                  <div class="m-widget1__item">
                    <div class="row m-row--no-padding align-items-center">
                      <div class="col">
                        <h3 class="m-widget1__title">Articles</h3>
                        <span class="m-widget1__desc">Awerage Weekly Profit</span>
                      </div>
                      <div class="col m--align-right">
                        <span class="m-widget1__number m--font-brand">+$17,800</span>
                      </div>
                    </div>
                  </div>
                  <div class="m-widget1__item">
                    <div class="row m-row--no-padding align-items-center">
                      <div class="col">
                        <h3 class="m-widget1__title">Authors</h3>
                        <span class="m-widget1__desc">Weekly Customer Orders</span>
                      </div>
                      <div class="col m--align-right">
                        <span class="m-widget1__number m--font-danger">+1,800</span>
                      </div>
                    </div>
                  </div>
                  <div class="m-widget1__item">
                    <div class="row m-row--no-padding align-items-center">
                      <div class="col">
                        <h3 class="m-widget1__title">Website Visits</h3>
                        <span class="m-widget1__desc">System bugs and issues</span>
                      </div>
                      <div class="col m--align-right">
                        <span class="m-widget1__number m--font-success">-27,49%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end:: Widgets/Stats2-1 -->
              </div>
              <div class="col-xl-6">
                <!--begin:: Widgets/Profit Share-->
                <div class="m-widget14">
                  <div class="m-widget14__header">
                    <h3 class="m-widget14__title">Profit Share</h3>
                    <span class="m-widget14__desc">Profit Share between customers</span>
                  </div>
                  <div class="row align-items-center">
                    <div class="col">
                      <div
                        id="m_chart_profit_share"
                        class="m-widget14__chart"
                        style="height: 160px"
                      >
                        <div class="m-widget14__stat">45</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="m-widget14__legends">
                        <div class="m-widget14__legend">
                          <span class="m-widget14__legend-bullet m--bg-accent"></span>
                          <span class="m-widget14__legend-text">37% Ponencias</span>
                        </div>
                        <div class="m-widget14__legend">
                          <span class="m-widget14__legend-bullet m--bg-warning"></span>
                          <span class="m-widget14__legend-text">47% Tesis</span>
                        </div>
                        <div class="m-widget14__legend">
                          <span class="m-widget14__legend-bullet m--bg-brand"></span>
                          <span class="m-widget14__legend-text">19% Others</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end:: Widgets/Profit Share-->
              </div>
            </div>
          </div>
        </div>
        <!--End::Section-->
        <!--Begin::Section-->
        <AuthorsDataTable />
        <!--End::Section-->
      </div>
    </div>
    <!-- END: Left Aside -->
  </div>
</template>

<script>
import AsideApp from "@/components/AsideApp";
import AuthorsDataTable from "@/components/dashboard/AuthorsDataTable";
export default {
  name: "Dashboard",
  components: {
    AsideApp,
    AuthorsDataTable
  },
  data() {
    return {
      date: new Date()
    };
  },
  created() {
    console.log(navigator);
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
    toastr.success("Latest updates ready", "Welcome, Admin");
    $(".m_datatable").mDatatable("reload");
  }
};
</script>
