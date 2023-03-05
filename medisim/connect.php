<?php

    $name = $_POST['Name'];
    $state = $_POST['State'];
    $management = $_POST['Management'];
    $intake = $_POST['Intake'];
    $annual_fee = $_POST['Annual_fee'];
    $website = $_POST['Website'];
    $principal_name = $_POST['Principal_name'];
    $principal_email = $_POST['Principal_email'];
    $principal_linkedin = $_POST['Principal_linkedin'];
    $principal_conntact = $_POST['Principal_conntact'];
    $college_contact = $_POST['College_contact'];
    $college_email = $_POST['College_email'];
    $dean_name = $_POST['Dean_name'];
    $dean_mail = $_POST['Dean_mail'];
    $dean_linkedin = $_POST['Dean_linkedin'];
    $comments = $_POST['Comments'];
    $contact_person = $_POST['Contact_person'];
    $designation = $_POST['Designation'];
    $contact = $_POST['Contact'];
    $college_info = $_POST['College_info'];


    
    $conn = new mysqli('localhost', 'root','', 'collegemanagement');
    if($conn->connect_error){
        die('connection Failed :' .$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into details(institute_name,state,management,intake,annual_fee,website,principal_name,principal_email,principal_linkedin,principal_contact,college_contact,college_email,dean_name,dean_email,dean_linkedin,comments,contact_person,designation,contact,college_info)values(?,?,?,?)");
        $stmt->bind_param("sssssssssiisssssssis",$name, $state, $management,$intake,$annual_fee,$website, $principal_name, $principal_email,$principal_linkedin,$principal_conntact,$college_contact,$college_email,$dean_name,$dean_mail,$dean_linkedin, $comments,$contact_person,$designation, $contact,$college_info);
         $stmt->execute();
         echo "200";
         $stmt->close();
         $conn->close();

    }

?>