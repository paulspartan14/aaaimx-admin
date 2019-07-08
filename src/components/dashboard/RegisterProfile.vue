<template>
  <!--begin::Modal-->
  <div
    class="modal fade"
    id="m_modal_new_author"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">New Author</h1>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>Enter author info</h5>
          <p>
            Fill data fields and
            <a
              href="#"
              data-toggle="m-tooltip"
              class="tooltip-test"
              title="Other fields not considerated in this form"
            >extra data</a>
            that necesaries.
          </p>
          <hr />
          <!--begin::Form-->
          <form class="m-form" @submit.prevent="save(this)">
            <div class="form-group m-form__group">
              <label for="example_input_full_name">Name:</label>
              <input
                type="text"
                name="name"
                class="form-control m-input"
                required
                v-model="author.name"
                placeholder="Enter full name"
              />
              <span class="m-form__help">Please enter Author's full name(s)</span>
            </div>
            <div class="form-group m-form__group">
              <label for="example_input_full_name">Lastname:</label>
              <input
                type="text"
                name="lastname"
                v-model="author.lastname"
                class="form-control m-input"
                required
                placeholder="Enter lastnames"
              />
              <span class="m-form__help">Please enter Author's full lastname(s) separeted by -</span>
            </div>
            <div class="form-group m-form__group">
              <label for="exampleInputEmail1">Email address:</label>
              <input
                type="email"
                name="email"
                class="form-control m-input"
                v-model="author.email"
                placeholder="Enter email"
              />
              <span class="m-form__help">We'll never share your email with anyone else</span>
            </div>
            <div v-if="role == 'Other'" class="form-group m-form__group">
              <label for="exampleInputEmail1">Role:</label>
              <input
                type="text"
                name="role"
                v-model="author.role"
                class="form-control m-input"
                required
                placeholder="Enter other role"
              />
              <span class="m-form__help">Please especify</span>
            </div>
            <div v-else class="form-group m-form__group">
              <label for="exampleSelect1">Role</label>
              <select v-model="role" class="form-control m-input" required id="exampleSelect1">
                <option>Researcher</option>
                <option>Student</option>
                <option>Teacher</option>
                <option>Graduated</option>
                <option>Other</option>
              </select>
            </div>
            <div class="m-form__group form-group">
              <label for>Adscripción:</label>
              <div class="m-radio-list">
                <label class="m-radio">
                  <input type="radio" required v-model="author.adscription" name="adscription" value="Instituto Tecnológico de Mérida" />
                  Instituto Tecnológico de Mérida
                  <span></span>
                </label>
                <label class="m-radio">
                  <input type="radio" required v-model="author.adscription" name="adscription" value="CentroGEO" />
                  CentroGEO
                  <span></span>
                </label>
                <label class="m-radio">
                  <input type="radio" required v-model="author.adscription" name="adscription" value="CIMAT" />
                  CIMAT
                  <span></span>
                </label>
              </div>
            </div>
            <button style="display: none !important" type="submit" id="btn-author-save"></button>
          </form>
          <!--end::Form-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <Circle8 v-show="loading"/>
          <label for="btn-author-save" v-show="!loading" class="btn btn-primary">Save changes</label>
        </div>
      </div>
    </div>
  </div>
  <!--end::Modal-->
</template>

<script>
import CircleDefault from "vue-loading-spinner/src/components/Circle";
import Circle8 from "vue-loading-spinner/src/components/Circle8";
import Google from "vue-loading-spinner/src/components/Google";
import Circle10 from "vue-loading-spinner/src/components/Circle10";
export default {
  data() {
    return {
      role: "Researcher",
      loading: false,
      author: {
        email: "",
        name: "",
        lastname: "",
        extra: "",
        role: "",
        adscription: ""
      }
    };
  },
  components: {
    Circle10,
    Google,
    CircleDefault,
    Circle8,
  },
  methods: {
    save(form) {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log(this.author);
          if (this.role != 'Other') {
            this.author.role = this.role
          }
          this.loading = true
          this.$http.post("/profiles", this.author).then(res => {
            $(".m_datatable").mDatatable("reload");
            swal({
                position: 'top-right',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
            this.author.email = ""
            this.author.name = ""
            this.author.lastname = ""
            this.author.extra = ""
            this.author.role = ""
            this.author.adscription = ""
            this.loading = false
          }, err => {
            console.log(err)
          });
        }
      });
    }
  }
};
</script>

