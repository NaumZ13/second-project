<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    <link rel="stylesheet" href="fonts/Circular Std Font.otf">
    <link rel="stylesheet" href="style/data-science.css">
    <title>The Ultimate CV - Data Science</title>
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
                <div class="col-md-1 col-md-offset-1 text-right ">
                    <button type="button" id="editBtn" class="btn btn-default  pull-right">Edit</button>
                </div>

            </div>
            <div id="linkedin" class="linkedinAdvice">
                <?php require_once 'linkedin.php' ?>
            </div>

            <div id="laika" class="laikaAdvice">
                <?php require_once 'laika.php' ?>
            </div>

            <div id="cv">
                <div class="row margin-topThree">
                    <div class="col-md-2 text-center img-div photo pdfDataScience">
                        <img src="img/David_Brent_111.jpg" alt="" class="img-circle img-style elon">
                        <form id="form1" runat="server" style='display:none;'>
                            <img id="imgDataScience" class="img-responsive img-circle" src="#" alt="your image" />
                            <input type='file' id="img-inputDataScience" class="img" />
                        </form>
                    </div>
                    <div class="col-md-7 col-padding meMargin pdfDataScience">
                        <input disabled id="name" placeholder="David Brent">
                        <br>
                        <span class="dataScientist">Data Scientist</span> <br>
                        <textarea disabled id="myStory" rows="3" class="data-scientitMotivational" placeholder="Highly accurate and experienced Data Scientists adept at collecting, analyzing, and interpreting large datasets, developing new forecasting models, and performing data management tasks"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9 col-md-offset-1">
                        <div class="panel panel-default dataScientist-panel infoAdvice pdfDataScience">
                            <div class="panel-body text-center">
                                <span class="marginInfo-email"> <i class="glyphicon glyphicon-envelope"></i> <input id="email" class="margin-leftOne" disabled placeholder="david.brent@gmail.com"> </span>
                                <span class="marginInfo-phone"><i class="glyphicon glyphicon-phone"></i> <input id="phone" class="margin-leftOne" disabled placeholder="XXXXXX"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-5 first-colMargin">
                        <div class="row jobAdvice">
                            <div class="col-md-12 col-padding-left">
                                <h3 class="workExp-heading">Work Experience</h3>
                            </div>
                        </div>
                        <div class="row workExp_fields_wrap jobAdvice">
                        </div>
                        <div class="row workExp_fileds_wrap_dynamically jobAdvice"></div>
                        <div class="row">
                            <div class="col-md-12 text-right addWorkExpButton">
                                <i class="fa fa-plus addButtonGlyphicon"> Add Work Experience</i>
                            </div>
                        </div>
                        <div class="row workExpDisplayNone ">
                            <div class="col-md-11 jobAdvice">
                                <input class="jobField" id="jobField" type="text" disabled placeholder="Data Scientist"> <br>
                                <input class="companyName" id="companyName" type="text" disabled placeholder="Rocket Corp">
                            </div>
                            <div class="col-md-11 dateAndPlace dateAdvice">
                                <input type="text" id="date" disabled placeholder="11/2019-Present" class="dateInput">
                                <input type="text" id="place-city" disabled placeholder="Skopje" class="placeRight dateInput">
                            </div>
                            <div class="col-md-11 jobAdvice">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle col-padding">
                                    <li>Collecting, analyzing, and interpreting raw data from various websites.
                                    </li>
                                    <li>Collaborating with the Operations and Technology Department on the development
                                        of new
                                        automated data management/analysis software which increases the overall
                                        productivity and cut unnecessary costs.
                                    </li>
                                    <li>Maintaining and managing company's MS SQL server</li>
                                </ul>
                            </div>

                        </div>
                        <div class="row workExpDisplayNone secondRow-workExp">
                            <div class="col-md-11">
                                <span class="jobField">Data Scientist Intern</span> <br>
                                <span class="companyName">Random Co.</span>
                            </div>
                            <div class="col-md-11 dateAndPlace">
                                <span>07/2019-10/2019</span> <span>Skopje</span>
                            </div>
                            <div class="col-md-11">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle col-padding ">
                                    <li>Reported actionable, statistical, and analytical insightsto executives for
                                        effective
                                        strategic positioning in the marketplace
                                    </li>
                                    <li>Shadowed data scientists and assist in developing algorithms for predictive
                                        modeling</li>
                                    <li>Analyzed and processed sophisticated data sets using SAS, MYSQL and EXCEL</li>
                                    <li>Wrote python scripts to automate everyday tasks</li>
                                </ul>
                            </div>
                        </div>


                        <div class="row  educationRow educationAdvice">
                            <div class="col-md-12 paddingLeft-zero">
                                <h3 class="education-heading">Education</h3>
                            </div>
                            <div class="row education_fields_wrap">
                            </div>
                            <div class="row">
                                <div class="col-md-11 text-right addEducationButton">
                                    <i class="fa fa-plus addEducationGlyphicon"> Add Education</i>
                                </div>
                            </div>
                            <div class="col-md-12 educationDisplayNone">
                                <span class="educationSubject">Data Science Academy</span> <br>
                                <span class="educationPlace">Brainster</span>
                            </div>
                            <div class="col-md-11 educationDisplayNone educationDateAndPlace">
                                <span>01/2019-01/2020</span><span>Skopje</span>
                            </div>
                            <div class="col-md-12 educationDisplayNone secondEducation">
                                <span class="educationSubject">Financial management</span> <br>
                                <span class="educationPlace">Faculty of Economy,University "St.Cyril and
                                    Methodus"</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="col-md-12 col-padding">
                            <h3 class="skills-heading">Skills</h3>
                        </div>
                        <div class="row skills_fields_wrap">
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right addSkillsButton">
                                <i class="fa fa-plus addSkillsGlyphicon"> Add Skills</i>
                            </div>
                        </div>
                        <div class="row skillsRow  skillsAdvice">
                            <div class="col-md-9 skillsDisplay-flex">
                                <span>Python</span>
                                <div>
                                    <input type="radio" class="radioBtn"> <span class="check" class="radioBtn"></input> <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                        <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                </div>
                            </div>
                            <div class="col-md-9 skillsDisplay-flexWithMargin">
                                <span>MySQL</span>
                                <div>
                                    <input type="radio" class="radioBtn"> <span class="check" class="radioBtn"></Collecting,> <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                        <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">

                                </div>
                            </div>
                            <div class="col-md-9 skillsDisplay-flexWithMargin">
                                <span>PHP</span>
                                <div>
                                    <input type="radio" class="radioBtn"> <span class="check" class="radioBtn"></span> <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                    <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                </div>
                            </div>
                            <div class="col-md-9 skillsDisplay-flexWithMargin">
                                <span>R</span>
                                <div>
                                    <input type="radio" class="radioBtn"> <span class="check" class="radioBtn"></span> <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                    <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                </div>
                            </div>
                            <div class="col-md-9 skillsDisplay-flexWithMargin">
                                <span>C</span>
                                <div>
                                    <input type="radio" class="radioBtn"> <span class="check" class="radioBtn"></span> <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                    <input type="radio" class="radioBtn"> <input type="radio" class="radioBtn">
                                </div>
                            </div>
                        </div>
                        <div class="row margin-topFour projectsAdvice">
                            <div class="col-md-12">
                                <h3 class="certificates-heading">Certificates</h3>
                            </div>
                            <div class="row certificates_fields_wrap">
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-right addCertificatesButton">
                                    <i class="fa fa-plus addCertificatesGlyphicon"> Add Certificates</i>
                                </div>
                            </div>

                            <div class="col-md-10 certificatesDisplayNone">
                                <span>Data Analysis
                                </span>
                            </div>
                            <div class="col-md-10 certificatesDisplayNone">
                                <span>Machine Learning
                                </span>
                            </div>
                        </div>
                        <div class="row margin-topLanguages languageAdvice">
                            <div class="col-md-12">
                                <h3 class="languages-heading">Languages</h3>
                            </div>
                            <div class="row language_fields_wrap">
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-right addLanguageButton">
                                    <i class="fa fa-plus addLanguageGlyphicon"> Add Language</i>
                                </div>
                            </div>
                            <div class="col-md-12 languageDisplayNone">
                                <span>English</span> <br>
                                <span class="languageSkill">Full Professional Proficiency</span>
                            </div>
                        </div>
                        <div class="row margin-infernalEducation informalEducationAdvice">
                            <div class="col-md-12">
                                <h3 class="informalEducation-heading">Informal Education</h3>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="tag-container">
                                        <div id="app">
                                            <div class="tagHere">
                                            </div>
                                            <input type="text" id="skillsInput" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 informalEducationDisplayNone">
                                <span class="informalEducation-tag">Artificial Intelligence Webinar</sp`an>
                            </div>
                            <div class="col-md-12 informalEducationDisplayNone margin-topFour">
                                <span class="informalEducation-tag">Buisiness Analytics Course</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-right downloadButton-col">
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
            <p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>
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
    <script src="js/data-science.js"></script>
</body>

</html>