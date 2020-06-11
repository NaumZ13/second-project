<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/design.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    <title>The Ultimate CV - Design</title>
</head>

<body>

    <div class="container-fluid">
        <div class="col-md-8" id="boxCV">
            <div class="row">
                <div class="col-md-3 col-md-offset-1">
                    <button type="button" id="btnCV" class="btn threeBtn  btn-block focus">CV</button>
                </div>
                <div class="col-md-3">
                    <button type="button" id="btnLinkedin" class="btn threeBtn  btn-block ">Linkedin</button>
                </div>
                <div class="col-md-3">
                    <button type="button" id="btnWeAreLaika" class="btn threeBtn  btn-block">Wearelaika.com</button>
                </div>
                <div class="col-md-2 ">
                    <button type="button" id="editBtn" class="btn btn-default  pull-right">Edit</button>
                </div>
            </div>
            <div id="linkedin" class="linkedinAdvice">
                <?php require_once 'linkedin.php' ?>
            </div>

            <div id="laika" class="laikaAdvice">
                <?php require_once 'laika.php' ?>
            </div>

            <div class="row" id="designCVPdf">
                <div class="col-md-8" id="cv">
                    <div class="row">
                        <div class="col-md-7" style="border: 1px solid black; height: 200px;" id="box">
                            <div class="row">
                                <div class="col-md-10" style="margin-top: 13%; margin-left: 5%;">
                                    <textarea id="name" style="text-transform: uppercase;font-size: 26px;font-weight: bold; letter-spacing: 8px;" disabled placeholder="Kiril Nikolovski"></textarea>
                                    <input type="text" id="name-input" style="display:none;">
                                </div>
                                <div class="col-md-10" style="margin-left: 5%;">
                                    <span style="font-size: 19px; color: lightgray; letter-spacing: 6px;"> Graphic Designer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row motivationalAdvice">
                        <div class="col-md-8" style="margin-bottom:5%; margin-left: 25px;">
                            <textarea id="myStory" style="width:89%;" disabled rows="5" placeholder="Graphic Designer with expertise in branding and logo design, packing design,typography, creative  direction and illustration. Oriented into helping small businesses realize their unique vision."></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7 ">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12 jobAdvice">
                                            <h5 style="font-weight: bold; margin-left: 25px;">WORK EXPERIENCE</h5>
                                        </div>
                                        <div class="col-md-11 col-padding dateAdvice" style="margin-left: 25px; margin-top: 3%;">
                                            <input id="date" disabled type="text" style="font-weight: bold;" placeholder="02.2019 -">
                                        </div>
                                        <div class="col-md-11 jobAdvice" style="margin-top: 1%;margin-left: 30px;">
                                            <input id="companyName" disabled type="text" style="font-size: 13.5px;" placeholder="Brainster.co, Skopje.Junior Graphic Designer">
                                            </span>
                                        </div>
                                        <div class="col-md-10 jobAdvice" style="margin-top: 2%;  font-size: 13px;margin-left: 30px;">
                                            <textarea id="jobDescription" disabled rows="7" placeholder="Creating visual concepts to communicate ideas that inspire, inform and captivate consumers. Developing overall layout and production design for ads, brochures,magazines and corporate digital marketing content."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="margin-top: 2%;">
                                <div class="col-md-12 col-padding">
                                    <div class="row">
                                        <div class="col-md-11 input_fields_wrap jobAdvice">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 text-right addButtonDisplay">
                                    <i class="fa fa-plus addButton"> Add Job</i>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-10" id="workExp">
                                    <div class="col-md-11" style="margin-left: 10px;">
                                        <input class="bold" placeholder="2016-2019">
                                    </div>
                                    <div class="col-md-11" style="padding:0; font-size: 13px; margin-left: 25px;">
                                        <input type="text" placeholder="Upwork" disabled>
                                        <input type="text" disabled placeholder="Freelance Graphic Designer">
                                        <textarea style="margin-top:2%;" rows="7" disabled placeholder="Working with international clients and helping  them get their ideas cut in a workable way.  Conceptualizing visuals based on their requirements.Shaping the visuals aspects of brand identities,product packaging, book covers, magazines, brochures, posters and many more."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="row educationAdvice">
                                <div class="col-md-12 ">
                                    <h5 style="font-weight: bold">EDUCATION</h5>
                                </div>
                            </div>
                            <div class="row educationAdvice">
                                <div class="col-md-12" style="margin-bottom: 2%;">
                                    <input id="educationDate" type="text" placeholder="2018-2019" disabled>
                                </div>
                                <div class="col-md-12" style="font-size: 13px;">
                                    <input id="educationName" type="text" disabled placeholder="Brainster Academy of Design">
                                </div>
                            </div>

                            <!-- Dynamclly adding/removing education fields -->
                            <div class="row" style="margin-top: 2%;">
                                <div class="col-md-12 col-padding">
                                    <div class="row" style="margin-top: 3%;">
                                        <div class="col-md-12 education_fields_wrap educationAdvice">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 text-right addButtonEducation">

                                    <i class="fa fa-plus addEducation"> Add Education</i>
                                </div>
                            </div>

                            <!-- end of the dinamycally adding/removing -->
                            <div class="row educationAdvice" id="secondEducation">
                                <div class="col-md-12" style="margin-top: 10%;margin-bottom: 2%;">
                                    <input type="text" placeholder="2016-2019" disabled>
                                </div>
                                <div class="col-md-12">
                                    <textarea rows="5" disabled placeholder="Ss. Cyril and Methodus University  Faculty of Mechanical Engineering Industrial Design"></textarea>
                                </div>
                            </div>
                            <div class="row skillsAdvice">
                                <div class="col-md-12" id="skills">
                                    <div class="col-md-12">
                                        <h5 style="font-weight: bold;">SKILLS</h5>
                                    </div>
                                    <div class="col-md-12" style="font-size:13px;">
                                        <input type="text" id="skillZero" disabled placeholder="Adobe Photoshop">

                                        <!-- Dynamclly adding/removing skills input fields -->

                                        <div class="row" style="margin-top: 3%;">
                                            <div class="col-md-12 skills_fields_wrap">
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 text-right addButtonSkills">

                                                <i class="fa fa-plus addSkills"> Add Skill</i>
                                            </div>
                                        </div>

                                        <!-- end of the dinamycally adding/removing -->
                                        <div id="skillsDisplayNone">
                                            <input type="text" disabled placeholder="Adobe inDesign">
                                            <input type="text" disabled placeholder="Adobe Premiere Pro">
                                            <input type="text" disabled placeholder="Adobe After Effects">
                                            <input type="text" disabled placeholder="Adobe Xd">
                                            <input type="text" disabled placeholder="MS Office">
                                            <input type="text" disabled placeholder="SolidWokrs">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="padding-bottom: 10%;
                padding-top: 7%;">
                        <div class="col-md-12">
                            <h5 style="font-weight: bold;margin-left: 5%">CONTACT</h5>
                        </div>
                        <div class="col-md-6 infoAdvice" style="margin-left: 5%; font-size: 13px;">
                            <div class="row">
                                <div class="col-md-10">
                                    <input id="phone" type="text" disabled placeholder="Phone Number">
                                </div>
                                <div class="col-md-1 removeContact">
                                    <i class="glyphicon glyphicon-remove"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <input id="email" type="text" disabled placeholder="kiril.nikolovskxx@gmail.com">
                                </div>
                                <div class="col-md-1 removeContact">
                                    <i class="glyphicon glyphicon-remove"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <input id="linkedinAcc" type="text" disabled placeholder="linkedin.com/in/kiril-nikolovski">

                                </div>
                                <div class="col-md-1 removeContact">
                                    <i class="glyphicon glyphicon-remove"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <input id="cityCountry" type="text" disabled placeholder="Skopje, Macedonia">
                                </div>
                                <div class="col-md-1 removeContact">
                                    <i class="glyphicon glyphicon-remove"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-right" style="padding-bottom: 2%;">
                    <button type="button" class="btn" disabled id="downloadBtn" data-toggle="modal" data-target="#myModal">Download</button>
                    <!-- Modal -->
                    <div class="modal fade modalStyle" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog customModalStyle" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row ">
                                                <div class="col-md-8">
                                                    <p class="modalHeading">Did you finish all three? Way to go!</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <p class="modalSpan">Good luck on your next job! If you need help,counseling or just want to leave suggestion, contact us at <a href="">hello@wearelaika.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 modalBackground">
                                            <img src="img/popup.png" class="img-responsive" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer modalDisplaFlex">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Go Back</button>
                                    <button type="button" class="btn btn-success" id="pdfDownloader">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1 " id="rectangle">
            <p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo
                and it gives you tips on how it should look like.</p>
        </div>
    </div>
    <footer>
        <p id="footer-paragraph" class="text-center">Created with &lt;3 by the <a href="https://brainster.co/" target="_blank">Brainster Coding Academy</a> students and <a href="https://www.wearelaika.com/" target="_blank">wearelaika.com</a> </p>
    </footer>
    <div class="container-fluid baner">
        <div class="row">
            <div class="col-md-6 text-right visit-brainsterDiv">
                <p class="footerParagraph">Do you want to learn hands-on digital skills?</p> <button id="visitBrainster" class="btn">Visit Brainster</button>
            </div>
            <div class="col-md-6 text-right visit-laikaDiv">
                <p class="footerParagraph">Do you want to recieve job offers by IT Companies? </p> <button id="visitLaika" class="btn">Visit Laika</button>
            </div>
        </div>
    </div>







    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="js/session.js"></script>
    <script src="js/design.js"> </script>
</body>

</html>