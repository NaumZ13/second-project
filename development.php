<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    <link rel="stylesheet" href="style/development.css">


    <title>The Ultimate CV - Web Development</title>
</head>

<body>

    <div class="container-fluid" id="development-background">
        <div class="col-md-8" id="boxCV">
            <div class="row">
                <div class="col-md-3 col-md-offset-1" id="firstMouseover">
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
                <div class="row  margin-topThree">
                    <div class="col-md-1 margin-leftInfoBox">
                        <div class="darkBox pull-right"></div>
                    </div>
                    <div class="col-md-4 col-padding">
                        <textarea rows="1" disabled id="name" class="name" name="name" placeholder="Nikola Zdravkov"></textarea>
                        <textarea disabled class="whatAmI" id="jobs" placeholder="Entrepreneur, Engineer,Inventor, and Investor"></textarea>
                        <div class="shortIntro">
                            <textarea class="motivationalText" id="myStory" disabled rows="5" placeholder="Aiming to reduce global warming through sustainable energy production and consumption.Planing to reduce the risk of human extinction by making life multi-planetary and setting up a human colony on Mars."></textarea>
                        </div>
                    </div>
                    <div class="col-md-2 col-padding img-div ">
                        <img src="img/greatscott_april27_300110427100210.jpg" alt="" class="img-circle img-style elon">
                        <div id="formImgDisplayNone">
                            <form id="form1" runat="server" style='display:none;'>
                                <img id="imgDevelopment" class="img-responsive img-circle" src="#" alt="your image" />
                                <input type='file' id="imgInputDevelopment" class="img" />
                            </form>
                        </div>
                    </div>
                    <div class="col-md-3 infoAboutYouAdvice">
                        <div class="row ">
                            <div class="col-md-10 text-right margin-topThree">
                                <input class="infoInputs" id="email" disabled type="text" placeholder="elon@teslamotors.com"> <i class="glyphicon glyphicon-envelope"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 text-right margin-topThree">
                                <input class="infoInputs" id="phone" disabled type="text" placeholder="620-681-5000"> <i class="glyphicon glyphicon-phone"></i>
                            </div>
                        </div>
                        <div class="row margin-topThree">
                            <div class="col-md-10 text-right">
                                <input class="infoInputs" id="city" disabled type="text" placeholder="Los Angeles,USA"> <i class="glyphicon glyphicon-map-marker"></i>
                            </div>
                        </div>
                        <div class="row margin-topThree">
                            <div class="col-md-10 text-right">
                                <input class="infoInputs" id="twitter" disabled type="text" placeholder="@elonmusk"> <i class="glyphicon glyphicon-user"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-11">
                        <hr class="hr-style">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-padding  first-colMargin">
                        <div class="row margin-zero">
                            <div class="col-md-12 col-padding margin-leftWorkExpDiv">
                                <h4 class="workExp-heading">Work Experience</h4>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-1">
                                <div class="pull-right lightBlue-box"></div>
                            </div>
                            <div class="col-md-11 col-padding jobAdvice ">
                                <i class="fas fa-trash-alt pull-right " id="remove_fieldFirst"></i>
                                <input class="jobField jobAdvice" id="jobField" disabled type="text" placeholder="Founder, CEO &amp; Lead Designer"> <br>
                                <input class="companyName jobAdvice" id="companyName" disabled type="text" placeholder="SpaceX - Space Exploration Technologies">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date dateWorkExp" id="date" disabled placeholder="06/2002-Present"> <input type="text" id="city-Place" disabled class="placeRight" placeholder="Howtorne,USA">
                            </div>
                            <div class="col-md-12 padding-rightZero">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="square workExp-ul techStack">
                                    <li>
                                        <textarea disabled rows="6" id="techStackFirst" placeholder="Succsessfully launched Falcon Heavy, the most powerful operational rocket in the world by a factor of two, with the ability to lift into orbit nearly 64 metric tons (141,000 lb) -- a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel." class="textArea"></textarea>
                                    </li>
                                    <ul class="wrapper"></ul>
                                    <div class="addButtonDisplay">
                                        <i class="fa fa-plus addButton pull-right"></i>
                                    </div>
                                    <li class="liDisplayNone">Plans to reduce space transportation costs to enable
                                        people to colonize Mars.
                                    </li>
                                    <li class="liDisplayNone">Developed the Falcon 9 spacecraft which replaced the space
                                        shuttle when it
                                        retired in 2011.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row job_fields_wrap"></div>
                        <div class="row">
                            <div class="col-md-12 text-right addWorkButtonDisplay">
                                <i class="fa fa-plus addWorkButton"> Add Job</i>
                            </div>
                        </div>
                        <div class="row addMore">
                            <div class="col-md-1">
                                <div class="pull-right lightBlue-box"></div>
                            </div>
                            <div class="col-md-11 col-padding jobAdvice">
                                <input class="jobField" disabled placeholder="Founder"> <br>
                                <input class="companyName" disabled placeholder="The Boring Company">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date dateWorkExp" disabled placeholder="12/2016-Present"> <input type="text" disabled class="placeRight" placeholder="Howtorne,USA">
                            </div>
                            <div class="col-md-12">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle workExp-ul techStack">
                                    <li>Raised &dollar;10m by selling 20,000 flamethrowers in 4 days.
                                    </li>
                                    <li>Raised &dollar;1m by selling 50,000 baseball caps.</li>
                                    <li>Hyperloop -- an ultra high-speed underground public transportation system in
                                        which passengers
                                        are transported on autonomous electric pods travelling at 600+ miles per hour in
                                        a pressurized cabin.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row addMore">
                            <div class="col-md-1">
                                <div class="pull-right lightBlue-box"></div>
                            </div>
                            <div class="col-md-11 col-padding jobAdvice">
                                <input disabled class="jobField" placeholder="CEO and Product Architect"> <br>
                                <input disabled class="companyName" placeholder="Tesla Inc.">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date dateWorkExp" disabled placeholder="2004-Present"> <input type="text" disabled class="placeRight" placeholder="San Mateo,USA">
                            </div>
                            <div class="col-md-12">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle workExp-ul techStack">
                                    <li>Global sales passed 250,000 units in September 2017.
                                    </li>
                                    <li>Consumer Reports named Tesla as the top American car brand and ranked it 8th
                                        among global carmakers in February 2017.</li>
                                    <li>Topped Consumer Reports Annual Owner Satisfaction Survey at 91% in 2016.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row addMore">
                            <div class="col-md-1">
                                <div class="pull-right lightBlue-box"></div>
                            </div>
                            <div class="col-md-11 col-padding jobAdvice">
                                <input disabled class="jobField" placeholder="Co-founder and Former Chairman"> <br>
                                <input disabled class="companyName" placeholder="SolarCity(subsidiary of Tesla Inc.)">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date dateWorkExp" disabled placeholder="06/2006 - Present"> <input type="text" disabled class="placeRight" placeholder="San Mateo,USA">
                            </div>
                            <div class="col-md-12">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle workExp-ul techStack">
                                    <li>Merged the company with Tesla Inc. and now offers energy storage services
                                        through Tesla, including a turnkey
                                        residential battery backup service that incorporates Tesla's Powerwall.
                                    </li>
                                    <li>In 2015, installed 870MW of solar power, approximatelly 28% of non-utility solar
                                        installation in the U.S. that year.</li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row addMore">
                            <div class="col-md-1">
                                <div class="pull-right lightBlue-box"></div>
                            </div>
                            <div class="col-md-11 col-padding">
                                <input disabled class="jobField" placeholder="Founder &amp; CEO"> <br>
                                <input disabled class="companyName" placeholder="Neurolink">
                            </div>
                            <div class="col-md-12 dateAndPlace">
                                <input type="text" class="date dateWorkExp" disabled placeholder="07/2016 - Present">
                                <input type="text" disabled class="placeRight" placeholder="San Francisco,USA">
                            </div>
                            <div class="col-md-12">
                                <span class="achievements-span">Achievements/Tasks</span>
                                <ul class="circle workExp-ul">
                                    <li>A company aims to make devices to treat serious brain diseases in the
                                        short-term, with the eventual goal
                                        of human enhancment.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-success" id="addMoreWorkExp">Add More</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 second-colStyle">
                        <div class="col-md-12 col-padding">
                            <h4 class="skills-heading">Skills &amp; Competencies</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="tag-container">
                                    <div id="app">
                                        <div class="tagHere">
                                        </div>
                                        <input type="text" id="skillsInput" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row" id="skillsContainer">

                            <div class="col-md-12 skillsSpanNone">
                                <span class="skillsSpan">Thinking through first
                                    principles</span> <span class="skillsSpan">Marketing</span>
                            </div>
                            <div class="col-md-12 skillsSpanNone skills-marginTop">
                                <span class="skillsSpan">Micromanagement</span> <span class="skillsSpan">Goal Oriented</span>
                            </div>
                            <div class="col-md-12 skillsSpanNone skills-marginTop">
                                <span class="skillsSpan">Resiliency</span> <span class="skillsSpan">Future
                                    focused</span> <span class="skillsSpan">Leadership</span>
                            </div>
                            <div class="col-md-12 skillsSpanNone skills-marginTop">
                                <span class="skillsSpan">Creativity</span> <span class="skillsSpan">Time
                                    Management</span> <span class="skillsSpan">Persitance</span>
                            </div>
                            <div class="col-md-12 skillsSpanNone skills-marginTop">
                                <span class="skillsSpan">Turning ideas into companies</span>
                            </div>
                            <div class="col-md-12 skillsSpanNone skills-marginTop">
                                <span class="skillsSpan">Long-term thinking</span>
                            </div>
                        </div>



                        <div class="row achievements-advice" id="achievementsDevelopemnt">
                            <div class="col-md-12">
                                <h4 class="achievements-heading ">Achievements &amp;
                                    Certificates
                                </h4>
                            </div>

                            <div class="row margin-topThree">
                                <div class="col-md-12 achievements_fields_wrap">
                                </div>
                            </div>
                            <div class="col-md-12 text-right addButtonAchievements ">
                                <i class="fa fa-plus addAchievements"> Achievements &amp; Certificates</i>
                            </div>
                            <div class="col-md-12 achievements-none">
                                <input type="text" disabled class="achievemnets" placeholder="53rd Richest person in the world - Forbes(2018)">

                            </div>

                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>21st on the Forbes list of The World's Most Powerful People (2016)</span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>IEEE Honorary Membership (2015)</span><br>
                                <span class="achivements-spanStyle">Given to people who have rendered service to
                                    humanity in the IEEE's designated fields of interests</span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>Business person of The Year by Fortune Magazine (2013) <i class="fas fa-external-link-alt externalLink-style"></i></span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>FAI Gold Space Medal (2010)</span> <br>
                                <span class="achivements-spanStyle">One of the highest honors in the aerospace
                                    industry
                                    shared with praminent personalities like Neil Armstrong and John Glenn.</span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>Honorary Doctorate in Design from the Art Center College of Design</span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>Honorary Doctorate (DUniv) in Aerospace Engineering from the University of
                                    Surrey.</span>
                            </div>
                            <div class="col-md-10 achievements-none margin-topFour">
                                <span>Honorary Doctorate of Engineering and Technology from Yale Universty</span>
                            </div>
                            <div class="col-md-12 col-achievementsAdd">
                                <div class="row" id="achievementsAdd">

                                </div>
                            </div>
                        </div>

                        <div class="row row-interests">
                            <div class="col-md-12">
                                <h4 class="interests-heading">Interests</h4>
                            </div>
                            <div class="row margin-topThree">
                                <div class="col-md-12 interests_fields_wrap">
                                </div>
                            </div>
                            <div class="col-md-12 text-right addButtonInterests">
                                <i class="fa fa-plus addInterests"> Add Interests</i>
                            </div>
                            <div class="row" id="interests">
                                <div class="col-md-5 col-padding">
                                    <div class="row">
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-atom font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Physics</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-mountain font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Sustainability</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-baby font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Philanthropy</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fab fa-twitter font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Twitter</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fab fa-reddit-alien font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Extraterrestrial Life</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="row" class="interestDefault">
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-asterisk font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Alternative Energy</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-rocket font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Engineering</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-book font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Reading</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fas fa-gamepad font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">Video Games</span>
                                        </div>
                                        <div class="col-md-12 col-padding font-awesome-margin">
                                            <i class="fab fa-android font-awesome fontAwesome-marginLeft"></i> <span class="span-interestsMargin">AI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-right downloadBtn-colStyle">
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
        <div class="col-md-1 text-center" id="rectangle">
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
    <script src="js/development.js"> </script>
</body>

</html>