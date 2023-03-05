function LoadList() {
    $.ajax({
        type: "GET",
        url: 'table.php',
        success: function (response) {

            $("#dvtable").empty();

            // Parse the json result
            var res = JSON.parse(response);

            var html = "";

            html += "<table class='table table-striped table-bordered table -sm' cellspacing='0' width='100%' id='tblstudent'> " +
                "<thead class='thead-dark'> " +
                "<tr>    " +
                "<th>S.NO</th>" +
                "<th>Institute_Name</th> " +
                "<th>states</th> " +
                "<th>Management</th>" +
                "<th>Intake</th>" +
                "<th>Annual_Fee</th>" +
                "<th>Website</th>" +
                "<th>Principal_Name</th>" +
                "<th>Principal_Email</th>" +
                "<th>Principal_Linkedin</th>" +
                "<th>principal_Contact</th>" +
                "<th>College_Contact</th>" +
                "<th>College_Email</th>" +
                "<th>Dean_Name</th>" +
                "<th>Dean_Email</th>" +
                "<th>Dean_Linkedin</th>" +
                "<th>Comments</th>" +
                "<th>Contact_Person</th>" +
                "<th>Designation</th>" +
                "<th>Contact_Number</th>" +
                "<th>College_Info</th>" +
                "</tr>    " +
                "</thead>    " +
                "<tbody id='tblbody'>";


            if (res.length > 0) {

                $.each(res, function (key, value) {
                    html += "<tr><td>" + value.SNO + "</td>" +
                        "<td>" + value.Institute_Name + "</td>" +
                        "<td>" + value.states + "</td>" +
                        "<td>" + value.Management + "</td>" +
                        "<td>" + value.Intake + "</td>" +
                        "<td>" + value.Annual_Fee + "</td>" +
                        "<td>" + value.Website + "</td>" +
                        "<td>" + value.Principal_Name + "</td>" +
                        "<td>" + value.Principal_Email + "</td>" +
                        "<td>" + value.Principal_Linkedin + "</td>" +
                        "<td>" + value.principal_Contact + "</td>" +
                        "<td>" + value.College_Contact + "</td>" +
                        "<td>" + value.College_Email + "</td>" +
                        "<td>" + value.Dean_Name + "</td>" +
                        "<td>" + value.Dean_Email + "</td>" +
                        "<td>" + value.Dean_Linkedin + "</td>" +
                        "<td>" + value.Comments + "</td>" +
                        "<td>" + value.Contact_Person + "</td>" +
                        "<td>" + value.Designation + "</td>" +
                        "<td>" + value.Contact_Number + "</td>" +
                        "<td>" + value.College_Info + "</td></tr>";
                });

            } else {

            }



            html += "</tbody></table>";
            $("#dvtable").append(html);

            $('#tblstudent').DataTable({

            });


        }
    });

    // var table = $('#tblstudent').DataTable({
    //     "paging": true,
    //     "lengthChange": true,
    //     "searching": true,
    //     "ordering": true,
    //     "info": true,
    //     "autoWidth": true,


    // });
}
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {

                    event.preventDefault()
                    event.stopPropagation()
                }
                else {
                    if (form.checkValidity()) {
                        submitdata();
                        alert("Submit Successfully..!");
                    }


                }

                form.classList.add('was-validated')
            }, false)
        })
})()


function resetForm() {
    $('#form').find('input:text').val('');
}


$(document).ready(function () {

    LoadList();

});


function submitdata() {
    var name = $('#institute_name').val();
    var area = $('#states').val();
    var management = $('#management').val();
    var intake = $('#intake').val();
    var annual_fee = $('#annual_fee').val();
    var website = $('#website').val();
    var principal_name = $('#principal_name').val();
    var principal_email = $('#principal_email').val();
    var principal_linkedin = $('#principal_linkedin').val();
    var principal_conntact = $('#principal_conntact').val();
    var college_contact = $('#college_contact').val();
    var college_email = $('#college_email').val();
    var dean_name = $('#dean_name').val();
    var dean_mail = $('#dean_mail').val();
    var dean_linkedin = $('#dean_linkedin').val();
    var comments = $('#comments').val();
    var contact_person = $('#contact_person').val();
    var designation = $('#designation').val();
    var contact = $('#contact').val();
    var college_info = $('#college_info').val();
    if (name != "" && area != "" && management != "" && intake != ""&& annual_fee != ""&& website != ""&& principal_name != ""&& principal_email != ""&& principal_linkedin != ""&& principal_conntact != ""&& college_contact != ""&& college_email != ""&& dean_name != ""&& dean_mail != ""&& dean_linkedin != ""&& comments != ""&& contact_person != ""&& designation != ""&& contact != ""&& college_info != "") {
        $.ajax({
            url: "connect.php",
            type: "POST",
            data: {
                Name: name,
                State: area,
                Management: management,
                Intake: intake,
                Annual_fee: annual_fee,
                Website: website,
                Principal_name: principal_name,
                Principal_email: principal_email,
                Principal_linkedin: principal_linkedin,
                Principal_conntact: principal_conntact,
                College_contact: college_contact,
                College_email: college_email,
                Dean_name: dean_name,
                Dean_mail: dean_mail,
                Dean_linkedin: dean_linkedin,
                Comments: comments,
                Contact_person: contact_person,
                Designation: designation,
                Contact: contact,
                College_info: college_info
            },
            cache: false,
            success: function (dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult == 200) {

                    $('#form').find('input:text').val('');

                }
                else {
                    alert("Error occured..!");
                }
                LoadList();
            }
        });
    }
    else {
        // alert('Please fill all the field !');

    }
    return false;
}

// login page





