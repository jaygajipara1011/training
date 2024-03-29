$(document).ready(function () {
  //!keyup event for name field
  $("#username").keyup(function () {
    validationName();
  });
  //validation of name field
  function validationName() {
    $(".errorName").hide();
    let usernameValue = $("#username").val();
    if (usernameValue == "") {
      $(".errorName").show().html(`Please Enter the Username`);
      return false;
    } else if (usernameValue.length < 3) {
      $(".errorName").show().html(`Length must be minimum 3`);
      return false;
    } else {
      $(".errorName").hide();
    }
    return true;
  }

  //!key up event for email
  $("#email").keyup(function () {
    validationEmail();
  });
  //validation of email
  function validationEmail() {
    $(".errorEmail").hide();
    let useremailValue = $("#email").val();
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (useremailValue == "") {
      $(".errorEmail").show().html(`Please Enter the Email`);
      return false;
    } else {
      if (regex.test(useremailValue)) {
        return true;
      } else {
        $(".errorEmail").show().html(`Email is Invalid`);
        return false;
      }
    }
  }


  //!key up event for password
  $("#password").keyup(function () {
    validationPassword();
  });
  //function of password

  function validationPassword() {
    let userPassword = $("#password").val();
    $(".errorPassword").hide();
    if (userPassword == "") {
      $(".errorPassword").show().html(`Please Enter the password`);
      return false;
    } else if (userPassword.length < 8 || userPassword.length > 20) {
      $(".errorPassword")
        .show()
        .html(`--Length of the pasword between 8 to 20`);
      return false;
    } else {
      return true;
    }
  }

  // //!key up event for Confirm password
  $("#confirmPassword").keyup(function () {
    validateConfirmPassword();
  });

  // function of confirm password

  function validateConfirmPassword() {
    $(".errorconfirm").hide();
    let confirmPasswordValue = $("#confirmPassword").val();
    let passwordValue = $("#password").val();
    if (confirmPasswordValue != passwordValue) {
      $(".errorconfirm").show().html(`Password doesn't match`);
      return false;
    }else if(confirmPasswordValue == ''){
      $(".errorconfirm").show().html(`Please enter the confirm passford`);
    }
  }
  // //!key up event for yourself input
  $("#yourself").keyup(function () {
    yourself();
  });

  //function for yourself input
  function yourself() {
    $(".errorSelfInput").hide();
    let userSelf = $("#yourself").val();
    if (userSelf == "") {
      $(".errorSelfInput")
        .show()
        .html(`Please Enter the one line of yourself`);
      return false;
    }
  }
  //!first name
  $("#firstName").keyup(function () {
    validationFirstName();
  });
  //validation of name field
  function validationFirstName() {
    $(".errorFname").hide();
    let usernameFValue = $("#firstName").val();
    if (usernameFValue == "") {
      $(".errorFname").show().html(`Please Enter the first name`);
      return false;
    }
    return true;
  }
  //!last name
  $("#lastName").keyup(function () {
    validationLastName();
  });
  //validation of name field
  function validationLastName() {
    $(".errorLname").hide();
    let usernameValue = $("#lastName").val();
    if (usernameValue == "") {
      $(".errorLname").show().html(`Please Enter the last name`);
      return false;
    }
    return true;
  }
  
  //!About you 
  $("#textarea").keyup(function () {
    validationAbout();
  });
  //validation of name field
  function validationAbout() {
    $(".errorAbout").hide();
    let usernameValue = $("#textarea").val();
    if (usernameValue == "") {
      $(".errorAbout").show().html(`Please Enter some line about you`);
      return false;
    }
    return true;
  }

// ! radio
function radio(){
  let radio = $('input[name="fruits"]:checked').val();
    if(radio){
      // $(".errorAbout").show().html(`--Please Enter some line about you`);
    }else{
      $(".errorRedio").show().html(`Please select fruits`);
    }
}
  

  //!checkbox
  function checkbox(){
    let checkbox = $('input[name="books"]:checked').val();
      if(checkbox){
        // $(".errorAbout").show().html(`--Please Enter some line about you`);
      }else{
        $(".errorCheckbox").show().html(`Please select books`);
      }
  }

// !rating
// design rating
$('#star1').click(function(){
    $('.starrate1').css({color:"var(--darkgray)"});
    $('#star1').css({color:"yellow"});
    $('.selectData').html(`<b>1/5</b>`);
});
$('#star2').click(function(){
  $('.starrate1').css({color:"var(--darkgray)"});
  $('#star2,#star1').css({color:"yellow"});
  $('.selectData').html(`<b>2/5</b>`);
});
$('#star3').click(function(){
    $('.starrate1').css({color:"var(--darkgray)"});
    $('#star3,#star2,#star1').css({color:"yellow"})
    $('.selectData').html(`<b>3/5</b>`);
});
$('#star4').click(function(){
    $('.starrate1').css({color:"var(--darkgray)"});
    $('#star4,#star3,#star2,#star1').css({color:"yellow"});
    $('.selectData').html(`<b>4/5</b>`);
});
$('#star5').click(function(){
    $('.starrate1').css({color:"var(--darkgray)"});
    $('#star5,#star4,#star3,#star2,#star1').css({color:"yellow"});
    $('.selectData').html(`<b>5/5</b>`);
});

//information rating 
$('#rate1').click(function(){
    $('.startRate').css({color:"var(--darkgray)"});
    $('#rate1').css({color:"yellow"});
    $('.selectworts').html('<b>1/5</b>');
});
$('#rate2').click(function(){
    $('.startRate').css({color:"var(--darkgray)"});
    $('#rate2,#rate1').css({color:"yellow"});
    $('.selectworts').html('<b>2/5</b>');
    
});
$('#rate3').click(function(){
    $('.startRate').css({color:"var(--darkgray)"});
    $('#rate3,#rate2,#rate1').css({color:"yellow"})
    $('.selectworts').html('<b>3/5</b>');
});
$('#rate4').click(function(){
    $('.startRate').css({color:"var(--darkgray)"});
    $('#rate4,#rate3,#rate2,#rate1').css({color:"yellow"})
    $('.selectworts').html('<b>4/5</b>');
});
$('#rate5').click(function(){
    $('.startRate').css({color:"var(--darkgray)"});
    $('#rate5,#rate4,#rate3,#rate2,#rate1').css({color:"yellow"})
    $('.selectworts').html('<b>5/5</b>');
});


  //!on submit event
  $("#submit").click(function (event) {
    event.preventDefault();
    
    validationName();
    validationEmail();
    validationPassword();
    validateConfirmPassword();
    yourself();
    validationFirstName();
    validationLastName();
    validationAbout();
    radio();
    checkbox();
    $('#form')[0].reset();
    $('.rating')[1].reset();
    
  });
  $('#submit').on('click', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values using jQuery
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    var yourself = $('#yourself').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var textarea = $('#textarea').val();
  
    // Display form data in the DOM
    $('#userData').html(
        `<p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Confirm Password: ${confirmPassword}</p>
        <p>Yourself: ${yourself}</p>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Textarea: ${textarea}</p>`
    );
  });
  
  // Event listener for rating stars
  $('.ratignStar i').on('click', function() {
    $(this).addClass('checked').prevAll().addClass('checked');
    $(this).nextAll().removeClass('checked');
  });
  
});

