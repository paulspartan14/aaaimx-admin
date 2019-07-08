<template>
  <div class="row">
    <div class="col-xl-12">
      <!--begin::Portlet-->
      <div class="m-portlet m-portlet--mobile">
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">Autores</h3>
            </div>
          </div>
          <div class="m-portlet__head-tools">
            <ul class="m-portlet__nav">
              <li class="m-portlet__nav-item">
                <div
                  class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
                  data-dropdown-toggle="hover"
                  aria-expanded="true"
                >
                  <a
                    href="#"
                    class="m-portlet__nav-link btn btn-lg btn-secondary m-btn m-btn--icon m-btn--icon-only m-btn--pill m-dropdown__toggle"
                  >
                    <i class="la la-ellipsis-h m--font-brand"></i>
                  </a>
                  <div class="m-dropdown__wrapper">
                    <span
                      class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"
                    ></span>
                    <div class="m-dropdown__inner">
                      <div class="m-dropdown__body">
                        <div class="m-dropdown__content">
                          <ul class="m-nav">
                            <li class="m-nav__section m-nav__section--first">
                              <span class="m-nav__section-text">Quick Actions</span>
                            </li>
                            <li class="m-nav__item">
                              <a href class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-share"></i>
                                <span class="m-nav__link-text">Create Post</span>
                              </a>
                            </li>
                            <li class="m-nav__item">
                              <a href class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-chat-1"></i>
                                <span class="m-nav__link-text">Send Messages</span>
                              </a>
                            </li>
                            <li class="m-nav__item">
                              <a href class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-multimedia-2"></i>
                                <span class="m-nav__link-text">Upload File</span>
                              </a>
                            </li>
                            <li class="m-nav__section">
                              <span class="m-nav__section-text">Useful Links</span>
                            </li>
                            <li class="m-nav__item">
                              <a href class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-info"></i>
                                <span class="m-nav__link-text">FAQ</span>
                              </a>
                            </li>
                            <li class="m-nav__item">
                              <a href class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                <span class="m-nav__link-text">Support</span>
                              </a>
                            </li>
                            <li class="m-nav__separator m-nav__separator--fit m--hide"></li>
                            <li class="m-nav__item m--hide">
                              <a
                                href="#"
                                class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm"
                              >Submit</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-portlet__body">
          <!--begin: Search Form -->
          <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
            <div class="row align-items-center">
              <div class="col-xl-8 order-2 order-xl-1">
                <div class="form-group m-form__group row align-items-center">
                  <div class="col-md-4">
                    <div class="m-form__group m-form__group--inline">
                      <div class="m-form__label">
                        <label>Adscripción:</label>
                      </div>
                      <div class="m-form__control">
                        <select class="form-control m-bootstrap-select" id="m_form_status">
                          <option value>Todos</option>
                          <option value="Instituto Tecnológico de Mérida">ITM</option>
                          <option value="CentroGEO">CentroGEO</option>
                          <option value="CIMAT">CIMAT</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-md-none m--margin-bottom-10"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="m-form__group m-form__group--inline">
                      <div class="m-form__label">
                        <label class="m-label m-label--single">Role:</label>
                      </div>
                      <div class="m-form__control">
                        <select class="form-control m-bootstrap-select" id="m_form_type">
                          <option value>Todos</option>
                          <option value="Researcher">Investigador</option>
                          <option value="Teacher">Maestro</option>
                          <option value="Student">Alumno</option>
                          <option value="Graduated">Egresado</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-md-none m--margin-bottom-10"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="m-input-icon m-input-icon--left">
                      <input
                        type="text"
                        class="form-control m-input"
                        placeholder="Search..."
                        id="generalSearch"
                      />
                      <span class="m-input-icon__icon m-input-icon__icon--left">
                        <span>
                          <i class="la la-search"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 order-1 order-xl-2 m--align-right">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#m_modal_new_author"
                  class="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill"
                >
                  <span>
                    <i class="la la-user-plus"></i>
                    <span>Nuevo autor</span>
                  </span>
                </a>
                <div class="m-separator m-separator--dashed d-xl-none"></div>
              </div>
            </div>
          </div>
          <!--end: Search Form -->
          <!--begin: Datatable -->
          <div class="m_datatable" id="ajax_data"></div>
          <!--end: Datatable -->
          <ModalAuthor />
        </div>
      </div>
      <!--end::Portlet-->
    </div>
  </div>
</template>

<script>
import ModalAuthor from "@/components/dashboard/RegisterProfile";
export default {
  data() {
    return {
      profiles: []
    };
  },
  components: {
    ModalAuthor
  },
  computed: {
    authors() {
      return this.profiles;
    }
  },
  methods: {
    update() {
      $(".m_datatable").mDatatable("reload");
    }
  },
  created() {
    this.$http.get("/profiles").then(res => {
      console.log(res.data.rows);
      this.profiles = res.data.rows;
    });
  }
};
</script>
