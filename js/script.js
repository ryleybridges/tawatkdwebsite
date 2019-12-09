$('.contactModalBtn').click(function(){
    $('#contactModal').modal('show');
});

$('#contactModal').submit(function(){
    const contactName = $('#contactName').value();
    const contactEmail = $('#contactEmail').value();
    const contactMessage = $('#contactMessage').value();
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMessage);
});
