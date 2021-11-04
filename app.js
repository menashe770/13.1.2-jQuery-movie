$('body').on('click', function (e) {
  $(e.target.parent().remove());
});

$('form').on('submit', function (e) {
  e.preventDefault();
  $('table').append(
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
