$(document).ready(function () {
    $('.displayForm').click(function (){ 
      $('.form-data').toggle("slow");
    });
    displaydata();
});


$("#submit").click(async  function(event){
    event.preventDefault();
      let userdata =   await  $.ajax({
           type: "get",
           url:  "https://65e15faaa8583365b3163756.mockapi.io/form/form",
           data: "userdata",
           dataType: "json",
           success: function (response) {}   
  }); 
    let name = $('#name').val();
    let email = $('#email').val();
    let number = $('#number').val();
    let gender = $('.gender:checked').val();
    let city = $('#city').val();
    userdata = ({
      name,
       email,
      number,
      gender,
      city
  })
  console.log(userdata)
//   $.ajax({
//         type: "post",
//         url: "https://65e15faaa8583365b3163756.mockapi.io/form/form",
//         data: "userData",
//         dataType: "dataType",
//         success: function (response) {
//             alert("villiyausd")
//            console.log("response")
//         }
//     });
    // displaydata();

})
async function displaydata(){
    let userdata =   await  $.ajax({
           type: "get",
           url:  "https://65e15faaa8583365b3163756.mockapi.io/form/form",
           data: "data",
           dataType: "json",
           success: function (response) {
              alert("successfully data get !");
              response.forEach((element , index) => {
                $('#tbody').append(`<tr>
                  <td>${element.name}</td>
                  <td>${element.email}</td>
                  <td>${element.phone}</td>
                  <td>${element.gender}</td>
                  <td>${element.city}</td>
                  <td><a onClick = "onedit(${index})" id="onedit"><i class="fa-solid fa-pen-to-square"></i></td>
                  <td><a onClick = "ondelete(${index})" id="ondelete"><i class="fa-solid fa-trash-can-arrow-up"></i></td>
              </tr>`);
              });
          }   
  }); 
 }



