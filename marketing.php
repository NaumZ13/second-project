<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    <link rel="stylesheet" href="style/marketing.css">

    <title>The Ultimate CV - Marketing</title>
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
                    <div class="col-md-2 text-center col-imgStyle photo">
                        <img src="img/David_Brent_111.jpg" alt="" class="img-circle img-style elon">
                        <form id="form1" runat="server" style='display:none;'>
                            <img id="imgMarketing" class="img-responsive img-circle" src="#" alt="your image" />
                            <input type='file' id="img-inputMarketing" class="img" />
                        </form>
                    </div>
                    <div class="col-md-6 col-padding">
                        <textarea rows="1" class="name" name="name" disabled id="name" placeholder="Michael Scott"></textarea>
                        <br>
                        <div class="motivationalAdvice">
                            <input id="whatAmI" disabled placeholder="Digital Marketer"> <br>
                            <textarea class="marketing-motivational" disabled id="marketingMotivational" placeholder="Fascinated by the power of communication and media. Quick lerner. Endlessly curious and keen to know more."></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9 col-md-offset-1">
                        <div class="panel panel-default marketing-panel infoAdvice">
                            <div class="panel-body text-center">
                                <span class="FirstPanelSpan"> <i class="glyphicon glyphicon-envelope"></i> <input id="emailMarketing" class="panelInput" disabled placeholder="michael.scott@gmail.com"> </span>
                                <span class="SecondPanelSpan"><i class="glyphicon glyphicon-phone"></i> <input id="phoneMarketing" class="panelInput" disabled placeholder="Phone Number"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 first-colMargin">
                        <div class="col-md-12">
                            <h3 class="workExp-heading">Work Experience</h3>
                        </div>
                        <div class="row workDisplayNone ">
                            <div class="col-md-12 jobAdvice">
                                <i class="fas fa-trash-alt pull-right remove_fieldFirst" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
                                <input style="font-size: 16px; font-weight: bold; width: 100%;" type="text" disabled placeholder="Digital Marketer">
                                <input type="text" disabled placeholder="Laika" style="font-size: 16px; width: 100%;">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date" disabled placeholder="07/2019-Present"> <input type="text" disabled class="placeRight" placeholder="Skopje, Macedonia">
                            </div>
                            <div class="col-md-12 jobAdviceList">
                                <span style="color: #468f99;">Achievements/Tasks</span>
                                <ul style="padding: 0; margin-left: 4%;" class="circle circleFirstOne">
                                    <li>content writting</li>
                                    <li>social media advertising</li>
                                    <li>lead generation</li>
                                    <li>conversion rate optimisation</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row job_fields_wrap" style="margin-top: 2%;"></div>
                        <div class="row job_fields_wrapDynamically" style="margin-top: 2%;"></div>
                        <div class="row">
                            <div class="col-md-12 text-right addWorkButtonDisplay">
                                <i class="fa fa-plus addWorkButton"> Add Job</i>
                            </div>
                        </div>
                        <div class="row workDisplayNone" style="padding-top: 8%;">
                            <div class="col-md-12">
                                <span class="glyphicon glyphicon-minus"></span> <span style="font-size: 16px; font-weight: bold;">Project Coordinator</input> <br>
                                    <span style="margin-left: 6%; font-size: 16px;">Radio MOF</span>
                            </div>
                            <div class="col-md-12" style="display: flex; justify-content: space-between; color: #468f99;">
                                <span>12/2017-02/2019</span> <span>Skopje, Macedonia</span>
                            </div>
                            <div class="col-md-12">
                                <span style="color: #468f99;">Achievements/Tasks</span>
                                <ul style="padding: 0; margin-left: 4%;" class="circle">
                                    <li>Editing, writting, planning and reporting for the projects of radio mof</li>
                                    <li>Maintaining social media profiles, web content and statistics of www.radiomof.mk
                                        through Google Analytics</li>
                                    <li>Editing and proofreading of content on www.radiomof.mk</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row workDisplayNone" style="padding-top: 8%;">
                            <div class="col-md-12">
                                <span class="glyphicon glyphicon-minus"></span> <span style="font-size: 16px; font-weight: bold;">Journalist</span> <br>
                                <span style="margin-left: 6%; font-size: 16px;">Radio MOF</span>
                            </div>
                            <div class="col-md-12" style="display: flex; justify-content: space-between; color: #468f99;">
                                <span>09/2015-12/2017</span> <span>Skopje, Macedonia</span>
                            </div>
                            <div class="col-md-12">
                                <span style="color: #468f99;">Achievements/Tasks</span>
                                <ul style="padding: 0; margin-left: 4%;" class="circle">
                                    <li>Content writting and reporting for Radio MOF</li>
                                    <li>Reports and articles for radio shows</li>
                                    <li>Hosting trainings for Civil and Digital Journalism</li>
                                </ul>
                            </div>

                        </div>

                        <div class="row educationAdvice" style="margin-top: 10%;margin-left: 1px;">
                            <div class="col-md-12">
                                <h3 style="text-transform: uppercase; color: #468f99;">Education</h3>
                            </div>
                            <div class="row education_fields_wrap" style="margin-top: 5%;"></div>
                            <div class="row education_wrapDynamically" style="margin-top: 5%;"></div>
                            <div class="row">
                                <div class="col-md-12 text-right addEducationButton">
                                    <i class="fa fa-plus addEducationGlyphicon"> Add Education</i>
                                </div>
                            </div>
                            <div class="row educationDisplayNone">
                                <div class="col-md-11">
                                    <input type="text" disabled placeholder="Brainster Digital Marketing Academy" style="font-size: 16px; font-weight: bold;">
                                </div>
                                <div class="col-md-11 dateAndPlace" style="display: flex; justify-content: space-between; color: #468f99;">
                                    <input type="text" disabled placeholder="04/2019-09/2019">
                                </div>
                                <div class="col-md-12">
                                    <span style="color: #468f99;">Courses</span>

                                </div>
                                <div class="col-md-12" style="display: flex;">
                                    <ul style="padding: 0; margin-left: 4%;" class="circle">
                                        <li>Integrated Marketing <br> Communication</li>
                                        <li>Unpaid &amp; Paid Social Media</li>
                                        <li>Lead Generation</li>
                                        <li>Google Analytics</li>
                                        <li>Segmentation</li>
                                    </ul>
                                    <ul style="padding-left: 30px;" class="circle">
                                        <li>Funnel Marketing</li>
                                        <li>Sales</li>
                                        <li>Google Ads</li>
                                        <li>Growth Hacking</li>
                                        <li>SEO</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5" style="padding: 0; margin-left: 1%;">
                        <div class="col-md-12" style="padding: 0;">
                            <h3 style="text-transform: uppercase; color: #468f99;">Skills</h3>
                        </div>
                        <div class="row skillsAdvice">
                            <div class="col-md-9">
                                <div class="tag-container">
                                    <div id="app">
                                        <div class="tagHere">
                                        </div>
                                        <input type="text" id="skillsInput" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row skillDisplayNone skillsAdvice" style="font-size: 12px;">
                            <div class="col-md-12">
                                <span style="border: 1px solid #468f99;" class="skillsSpan">Google Ads</span> <span class="skillsSpan">Facebook Ads Manager</span>
                            </div>
                            <div class="col-md-12" style="margin-top: 5%;">
                                <span class="skillsSpan">Google Analytics</span> <span class="skillsSpan">Google Data
                                    Studio</span> <span class="skillsSpan">Wordpress</span>
                            </div>
                            <div class="col-md-12" style="margin-top: 5%;">
                                <span class="skillsSpan">Canva</span> <span class="skillsSpan">Adobe Premiere</span>
                                <span class="skillsSpan">Content Writting</span>
                            </div>
                        </div>
                        <div class="row achievementsAdvice" style="margin-top: 14%;">
                            <div class="col-md-12">
                                <h3 style="text-transform: uppercase; color: #468f99;">Achievements</h3>
                            </div>
                            <div class="col-md-10">
                                <textarea disabled class="textareaAchievements" id="marketingAchievementsFirst" placeholder="First Award for Professional reporting of the refugee crisis in 2017 by UNHCR and MYLA."></textarea>
                            </div>
                            <div class="col-md-10 achievements_fields_wrap">
                            </div>
                            <div class="col-md-10 text-right addButtonAchievements">
                                <i class="fa fa-plus addAchievements">Achievements</i>
                            </div>
                            <div class="col-md-10 achievementsDisplayNone">
                                <p>This award for Best journalistic story from the Macedonian Council of Ethics in Media
                                </p>
                            </div>
                        </div>
                        <div class="row languaceAdvice" style="margin-top: 10%;">
                            <div class="col-md-12">
                                <h3 style="text-transform: uppercase; color: #468f99;">Languages</h3>
                            </div>
                            <div class="col-md-10">
                                <input type="text" disabled placeholder="English"><br>
                                <input type="text" disabled placeholder="Full Professional Proficiency" class="languageInput">
                            </div>
                            <div class="row language_fields_wrap">
                            </div>
                            <div class="row">
                                <div class="col-md-10 text-right addLanguageButton">
                                    <i class="fa fa-plus addLanguageGlyphicon"> Add Language</i>
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
    <script src="js/marketing.js"></script>

</body>

</html>