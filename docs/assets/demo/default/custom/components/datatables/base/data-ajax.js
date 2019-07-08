//== Class definition

var DatatableRemoteAjaxDemo = function () {
  //== Private functions

  // basic demo
  var demo = function () {

    var datatable = $('.m_datatable').mDatatable({
      // datasource definition
      data: {
        type: 'remote',
        source: {
          read: {
            // sample GET method
            method: 'GET',
            //url: 'http://localhost:3000/profiles',
            url: 'https://aaaimx-api.herokuapp.com/profiles',
            map: function (raw) {
              // sample data mapping
              console.log(raw)
              return raw.rows;
            },
          },
        }
      },

      // layout definition
      layout: {
        scroll: false,
        footer: false
      },

      // column sorting
      sortable: true,

      pagination: true,

      toolbar: {
        // toolbar items
        items: {
          // pagination
          pagination: {
            // page size select
            pageSizeSelect: [10, 20, 30, 50, 100],
          },
        },
      },

      search: {
        input: $('#generalSearch'),
      },

      // columns definition
      columns: [
        {
          field: 'uuid',
          title: '#',
          sortable: false, // disable sort for this column
          width: 100,
          selector: false,
          textAlign: 'left',
          template: function (row) {
            return '<a href="#" data-toggle="modal" data-target="#' + row.uuid + '">' + row.uuid + '</a>'
          },
        }, {
          field: 'name',
          title: 'Nombre',
          // sortable: 'asc', // default sort
          filterable: false, // disable or enable filtering
          width: 150,
          // basic templating support for column rendering,
          template: '<strong>{{lastname}}, {{name}}</strong>',
        }, {
          field: 'email',
          title: 'Email',
          width: 200,
          template: '<small>{{email}}</small>',
        }, {
          field: 'role',
          title: 'Role principal',
          // callback function support for column rendering
          template: function (row) {
            var roles = ['Researcher', 'Student', 'Teacher'];
            var status = {
              'Researcher': { 'title': 'Researcher', 'class': 'm-badge--warning' },
              'Other': { 'title': 'Other', 'class': ' m-badge--metal' },
              'Teacher': { 'title': 'Teacher', 'class': ' m-badge--primary' },
              'Student': { 'title': 'Student', 'class': ' m-badge--success' },
              5: { 'title': 'Info', 'class': ' m-badge--info' },
              6: { 'title': 'Danger', 'class': ' m-badge--danger' },
              7: { 'title': 'Warning', 'class': ' m-badge--warning' },
            };
            var badge = ''
            if (roles.includes(row.role)) {
              badge = '<span class="m-badge ' + status[row.role].class + ' m-badge--wide">' + status[row.role].title + '</span>';
            } else {
              badge = '<span class="m-badge ' + status['Other'].class + ' m-badge--wide">' + row.role + '</span>';
            }
            return badge
          },
        }, {
          field: 'adscription',
          title: 'Adscripción',
          template: '<a href="#"><span class="m--font-bold m--font-primary">{{adscription}}</span></a>',
        }, {
          field: 'Actions',
          width: 110,
          title: 'Actions',
          sortable: false,
          overflow: 'visible',
          template: function (row, index, datatable) {
            var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
            return '\
            <a href="/#/'+row.uuid +'" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="See contributions">\
              <i class="flaticon-medical"></i>\
            </a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
          },
        }],
    });

    $('#m_form_status').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'adscription');
    });

    $('#m_form_type').on('change', function () {
      datatable.search($(this).val().toLowerCase(), 'role');
    });

    $('#m_form_status, #m_form_type').selectpicker();

  };

  return {
    // public functions
    init: function () {
      demo();
    },
  };
}();

jQuery(document).ready(function () {
  DatatableRemoteAjaxDemo.init();
});