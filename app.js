$('form').on('submit', function (e) {
  e.preventDefault();
  $('tbody').append(
    `<tr>
        <td>${$('#title').val()}</td>
        <td>${$('#rating').val()}</td>
        <td>
          <button class='button'>Delete</button>
        </td>
      </tr>`
  );
  $('#new-form').trigger('reset');
});

$('body').on('click', '.button', function () {
  $(this).parent().parent().remove();
});