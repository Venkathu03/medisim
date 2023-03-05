<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "collegemanagement";

    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_error) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    }

    $sql = "SELECT  ROW_NUMBER() over (ORDER BY ID desc)SNO, institute_name as Institute_Name,states AS states,management as Management,intake AS Intake,annual_fee as Annual_Fee,website as Website, principal_name as Principal_Name, principal_email as Principal_Email, principal_linkedin as Principal_Linkedin, principal_conntact as principal_Contact, college_contact as College_Contact, college_email as College_Email, dean_name as Dean_Name, dean_mail as Dean_Email, dean_linkedin as Dean_Linkedin, comments as Comments, contact_person as Contact_Person, designation as Designation, contact as Contact_Number, college_info as College_Info FROM details";

    $results = $mysqli->query($sql);

    $row = $results->fetch_all(MYSQLI_ASSOC);

    $results->free_result();

    $mysqli->close();

    echo json_encode($row);
?>


