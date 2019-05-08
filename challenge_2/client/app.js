
$('#main-form').on('submit', (e) => {
  e.preventDefault();
  $.ajax({
    url: '/upload_text',
    type: 'POST',
    data: $("#json_text").val(),
    contentType: 'application/json',
    success: (data) => {
      var blob = new Blob([data]);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "default.csv";
      link.click();
    }
  });
});

$('#file-picker').on('submit', (e) => {
  e.preventDefault();
  var form = $('#file-picker')[0];
  var formData = new FormData(form);

  $.ajax({
    url: '/upload_json',
    type: 'POST',
    data: formData,
    enctype: 'multipart/form-data',
    contentType: false,
    processData: false,
    cache: false,
    success: (data) => {
      console.log('uploaded file successfully');
      var blob = new Blob([data]);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "default.csv";
      link.click();
    }
  });
});