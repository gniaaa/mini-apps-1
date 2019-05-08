
$('#main-form').on('submit', (e) => {
  e.preventDefault();
  $.ajax({
    url: '/upload_text',
    type: 'POST',
    data: $("#json_text").val(),
    contentType: 'application/json',
    success: (data) => {
      var blob = new Blob([data]);
      if (!document.getElementById('download-link')) {
        var link = document.createElement('a');
        link.id = 'download-link';
        link.innerText = 'download most recent csv file';
        $('body').append(link);
      } else {
        var link = document.getElementById('download-link');
      }
      link.href = window.URL.createObjectURL(blob);
      link.download = "default.csv";
      //link.click();
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
      if (!document.getElementById('download-link')) {
        var link = document.createElement('a');
        link.id = 'download-link';
        link.innerText = 'download most recent csv file';
        $('body').append(link);
      } else {
        var link = document.getElementById('download-link');
      }
      link.href = window.URL.createObjectURL(blob);
      link.download = "default.csv";
      //link.click();
    }
  });
});