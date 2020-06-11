$(document).ready(function () {
    

    let visitBrainster = $("#visitBrainster");
    visitBrainster.on('click',function(){
        window.location.href = 'https://brainster.co/'
    })
    let visitLaika = $("#visitLaika");
    visitLaika.on('click',function(){
        window.location.href = 'https://www.wearelaika.com/'
    })
   

    $.each(window.sessionStorage, function (index, value) {
        if (index != "imgInputDevelopment") {

            $('#' + index).val(value).change();
        }
    });

    $("#customImg").attr("src", sessionStorage.getItem("imgInputDevelopment"));

    $("#btnCV").on("click", function () {
        $("#cv").show();
        $("#boxCV").css("box-shadow", "0px 0px 10px grey");
        $("#editBtn").show();
        $("#downloadBtn").show();
        $('#btnLinkedin').removeClass('focus');
        $("btnWeAreLaika").removeClass('focus');
        $("#btnCV").addClass("focus");
        $("#linkedin").css("display", "none");
        $("#laika").css("display", "none");
    });

    $('#btnLinkedin').on("click", function () {
        $("#btnCV").removeClass('focus');
        $("#btnWeAreLaika").removeClass('focus');
        $(this).addClass('focus');
        $('#cv').css("display", "none");
        $('#editBtn').css("display", "none");
        $('#downloadBtn').css("display", "none");
        $("#boxCV").css("box-shadow", "none");
        $("#linkedin").css("display", "block");
        $("#laika").css("display", "none");
    });

    $("#btnWeAreLaika").on("click", function () {
        $("#btnCV").removeClass('focus');
        $("#btnLinkedin").removeClass('focus');
        $(this).addClass('focus');
        $("#cv").css("display", "none");
        $("#boxCV").css("box-shadow", "none");
        $("#editBtn").css("display", "none");
        $("#downloadBtn").css("display", "none");
        $("#linkedin").css("display", "none");
        $("#laika").css("display", "block");
    })


    $("#editBtn").on("click", function () {

        let formImgDisplayNone = $("#formImgDisplayNone");
        formImgDisplayNone.css("display", "block");
        $('.elon').hide();
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgDevelopment').attr('src', e.target.result);
                    $('#imgDevelopment').attr('elon');
                    $('.img').hide();
                }
                $('#imgDevelopment').on('click', function () {
                    $('.img').show();
                })
                reader.readAsDataURL(input.files[0]);
            }
        }
        $('#form1').show();
        $("#imgInputDevelopment").change(function () {
            readURL(this);
        });

        

        let name = $("#name")
        name.attr("disabled", false)
        name.css("border-bottom", "1.5px solid #2a343e")
        if (name.length > 20) {
            name.css("font-size", "13px")
        }

        let jobField = $(".jobField");
        jobField.attr("disabled", false);
        jobField.css("border-bottom", "1.5px solid #2a343e");

        let infoInputs = $(".infoInputs")
        infoInputs.attr("disabled", false)
        infoInputs.css("border-bottom", "1px solid #2a343e")
        let company = $(".companyName");
        company.attr("disabled", false);
        company.css("border-bottom", "1.5px solid grey");
        company.css("margin-top", "3%");
        let date = $(".date").attr("disabled", false);
        let place = $(".placeRight").attr("disabled", false);
        place.css("border-bottom", "1.5px solid #2fbdad");
        date.css("border-bottom", "1.5px solid #2fbdad");

        let textArea = $("textarea");
        textArea.attr("disabled", false);
        textArea.css("border-bottom", "1px solid #2a343e");

        let dateWorkExp = $(".dateWorkExp")
        dateWorkExp.css("margin-left", "0")

        let achievemnets = $(".achievemnets");
        achievemnets.attr("disabled", false);
        achievemnets.css("border-bottom", "1.5px solid #2a343e");

        let more = $(".addMore");
        more.css("display", "none");

        let achievementsNone = $(".achievements-none");
        achievementsNone.css("display", "none");


        function textAreaResize() {
            $('textarea').on('input', function () {
                $(this)
                    .height(50)
                    .height(this.scrollHeight);
            });
        }

        textAreaResize();


        let liDisplayNone = $(".liDisplayNone");
        liDisplayNone.css("display", "none");

        let remove_fieldFirst = $("#remove_fieldFirst");
        remove_fieldFirst.css("display", "block");

        $(remove_fieldFirst).on("click", function (e) {
            e.preventDefault(); $(this).parent().parent("div").remove();
        });

        var addButtonDisplay = $(".addButtonDisplay")
        var addButton = $(".addButton");
        addButtonDisplay.css("display", "block")
        addButton.css("display", "block")
        var wrapper = $(".wrapper");
        var x = 1;

        $(addButton).click(function (e) {
            e.preventDefault;
            $(wrapper).append(`
               <i class="fas fa-trash-alt remove_fieldLi" style="color:#2fbdad;"></i>
               <li>
                  <textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" name="" style="width:100%;"></textarea>
                          </li>`)
            $("textarea").css("border-bottom", "1px solid #2a343e")
            $("textarea").css("place")
            textAreaResize();
            let removeFieldLi = $(".remove_fieldLi")
            removeFieldLi.css("border", "none")
            $(removeFieldLi).on("click", function (e) {
                e.preventDefault(); $(this).next("li").remove(); x--;
                e.preventDefault(); $(this).remove(); x--;
            });
        });
        let firstRowOfWorkExp = $("#firstRowOfWorkExp");
        firstRowOfWorkExp.css("display", "none");


        var addWorkButtonDisplay = $(".addWorkButtonDisplay");
        addWorkButtonDisplay.css("display", "block");
        var addWorkButton = $(".addWorkButton");
        var job_fields_wrap = $(".job_fields_wrap");
        var x = 1;

        $(addWorkButton).click(function (e) {
            e.preventDefault;
            $(job_fields_wrap).append(`
            <div class="row">
            <div class="col-md-1" style="padding-left:0">
                    <div style="border:1px solid #2fbdad; background-color: #2fbdad;margin-right: 5px; height:50px; width:30px;"
                        class="pull-right"></div>
                </div>
        <div class="col-md-11 col-padding ">
        <i class="fas fa-trash-alt pull-right remove_fieldDynamically" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
       
            <input class="jobField"  type="text"
                style="font-size: 14px; font-weight: bold; width: 100%;"
                placeholder="Founder, CEO &amp; Lead Designer"> <br>
            <!-- </div> -->
            <input style="font-size: 14px;" class="companyName"  type="text" id=""
                placeholder="SpaceX - Space Exploration Technologies">
        </div>
        <div class="col-md-12 dateAndPlace"
            style="display: flex; justify-content: space-between; color: #2fbdad; margin-left:8px;">
            <input type="text" class="date"  placeholder="06/2002-Present" style="margin-left: 15px; width:100%"> <input type="text"  class="placeRight" style="width:100%" placeholder="Howtorne,USA">
        </div>
        <div class="col-md-12" style="padding-right: 0;">
            <span style="color: #2fbdad;margin-left: 15px;">Achievements/Tasks</span>
            <ul style="padding: 0; margin-left: 4%;" class="square">
                <li>
                    <textarea  rows="6"
                        placeholder="Succsessfully launched Falcon Heavy, the most powerful operational rocket in the world by a factor of two, with the ability to lift into orbit nearly 64 metric tons (141,000 lb) -- a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel."
                        class="textArea" name="" id="" style="width:100%"></textarea>
                </li>
                <ul class="wrapperUl" ></ul>
                <div style="margin-top: 4%; display:block;" class="addButtonDisplayDynamically">
                 <i class="fa fa-plus addButtonDynamically pull-right" style="color:#2fbdad;" ></i>
               </div>  
         </ul>
        </div>
    </div>
                                
            `)

         
            var addButtonDisplayDynamically = $(".addButtonDisplayDynamically")
            var addButtonDynamically = $(".addButtonDynamically");
            addButtonDisplayDynamically.css("display", "block")
            var wrapperUl = $(".wrapperUl");
            var x = 1;

            $(addButtonDynamically).click(function (e) {
                e.preventDefault;
                $(wrapperUl).append(`
                    <i class="fas fa-trash-alt remove_fieldLiDynamically" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
            <li>
            <textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" name="" style="width:100%;"></textarea>
            </li>
                                
            `)
                $("textarea").css("border-bottom", "1px solid #2a343e")
                $("textarea").css("place")
                textAreaResize();
                let remove_fieldLiDynamically = $(".remove_fieldLiDynamically")
                remove_fieldLiDynamically.css("border", "none")
                $(remove_fieldLiDynamically).on("click", function (e) {
                    e.preventDefault(); $(this).next("li").remove(); x--;
                    e.preventDefault(); $(this).remove(); x--;
                });

            });
            $("input").css("border-bottom", "1.5px solid #2fbdad")
            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();
            let remove_fieldDynamically = $(".remove_fieldDynamically")
            remove_fieldDynamically.css("border", "none")
            $(remove_fieldDynamically).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent().parent("div").remove();
            })
        });

        skillsContainer = $("#skillsContainer");
        skillsContainer.css("display", "none");

        let tagContainer = $(".tag-container");
        tagContainer.css("display", "block");

        var $skillsInput = $("#skillsInput"),
            $appendHere = $(".tagHere"),
            oldKey = 0, newKey

        $skillsInput.focus();


        $skillsInput.keydown(function (e) {

            if (e.keyCode == 13) {
                if (e.preventDefault) {
                    e.preventDefault();
                    if ($(this).val() == '' || $(this).val() == ' ') {
                        return false;
                    }
                    addTag($(this));
                }
                return false;
            }

            if ($(this).val() == '' && e.keyCode === 8) {
                $(".tag:last-child").remove();
            }

        })

        function addTag(element) {
            var $tag = $("<div />"), $a = $("<a href='#' />"), $span = $("<span />");
            $tag.addClass('tag');
            $('<i class="fa fa-times" aria-hidden="true"></i>').appendTo($a);
            $span.text($(element).val());
            $a.bind('click', function () {
                $(this).parent().remove();
                $(this).unbind('click');
            });
            $a.appendTo($tag);
            $span.appendTo($tag);
            $tag.appendTo($appendHere);
            $(element).val('');
        }


        var addButtonAchievements = $(".addButtonAchievements")
        addButtonAchievements.css("display", "block")
        var addAchievements = $(".addAchievements");
        var achievements_fields_wrap = $(".achievements_fields_wrap");
        var x = 1;

        $(addAchievements).click(function (e) {
            e.preventDefault;
            $(achievements_fields_wrap).append(`
            <div class="col-md-12" style="padding-left:0;">
            <i class="fas fa-trash-alt remove_skills pull-right"></i>
                      <textarea class="achievementsDynamically" style="width:100%; margin-top: 1%;" type="text" placeholder="Add More Achievements &amp; Certificates"></textarea>
                                </div>
                                
            `)

            $('.achievementsDynamically').each(function (i) {
                $(this).attr("id", "developmentAchievements" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index + i).val(value).change();
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                })
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });


            textAreaResize();
            $("textarea").css("border-bottom", "1.5px solid #468f99")
            let removeField = $(".remove_skills")
            removeField.css("border", "none")
            removeField.css("color", "#2fbdad")
            removeField.css("cursor", "pointer")
            $(removeField).on("click", function (e) { 
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

        })

        let interests = $("#interests")
        interests.css("display", "none")

        var addButtonInterests = $(".addButtonInterests")
        addButtonInterests.css("display", "block")
        var addInterests = $(".addInterests");
        var interests_fields_wrap = $(".interests_fields_wrap");
        var x = 1;

        $(addInterests).click(function (e) {
            e.preventDefault;
            $(interests_fields_wrap).append(`
              <div class="col-md-12" style="padding-left:0;">
              <i class="fas fa-trash-alt remove_skills pull-right"></i>
                        <input class="interestsDynamically" style="margin-top: 1%; width:100%;" type="text" placeholder="Add Interest">
                                  </div>
                                  
              `)
              $('.interestsDynamically').each(function (i) {
                $(this).attr("id", "developmentInterests" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index + i).val(value).change();
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                })
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });

            $("input").css("border-bottom", "1.5px solid #468f99")
            let remove_skills = $(".remove_skills")
            remove_skills.css("border", "none")
            remove_skills.css("color", "#2fbdad")
            remove_skills.css("cursor", "pointer")
            remove_skills.css({ "margin-top": "3%" })
            $(remove_skills).on("click", function (e) { 
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

        })

        $(window).bind('beforeunload', function(){
            if(this){
                sessionStorage.clear();
            }
            return 'Are you sure you want to leave?';

          });

        let downloadBtn = $("#downloadBtn")
        downloadBtn.css("margin-top", "5%")

        $('#cv').on('keyup', function (e) {
            sessionStorage.setItem('development', $('#cv').html())
        })

            downloadBtn.attr("disabled", false);
     
             $("#pdfDownloader").click(function () {
                 html2canvas(document.getElementById("cv"), {
                     onrendered: function (canvas) {
                         var imgData = canvas.toDataURL('image/png');
                         console.log('Report Image URL: ' + imgData);
                         var doc = new jsPDF('p', 'mm', [297, 360]); //210mm wide and 297mm high
                         doc.addImage(imgData, 'PNG', 10, 10);
                         doc.save('sample.pdf');
                     }
                 });
     
                 $("input").css("border", "none")
                 $("textarea").css("border", "none")
                 $("#app").css("border", "none")
                //  $("button").hide();
                 $("i").hide();
                 $("#myModal").remove();
                 $(".modal-backdrop").remove();
     
             });
            
    });

   
    $('input').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });
    $('textarea').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });


    $(".photo").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
           you seem unserious.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".shortIntro").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
           Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".jobAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Write your previous job experience and if you’re currently working, your current job titles. Explain your
           responsibilities and projects and list the tech stack and products/projects you worked on. If you were
           working in a team, let the recruiter know what your role was.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"

            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".techStack").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Showcase your tech stack. List the stack under every previous project you have worked on, or showcase
           your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you
           have worked on. Another way is to showcase your projects on GitHub.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".achievements-advice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Education is an important section – but be sure to select only what is relevant to the job you’re applying
           for. Write about your university degrees, relevant courses and if you have any publications, but skip the
           high and elementary school..</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".infoAboutYouAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
           professional email address, preferably on Gmail. Your city of living is an information that interests your
           potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
           have proof of your previous job experiences online, link that too.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".dateAndPlace").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopment"> Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
           hyphen ( - ). Leave your most recent experience first, and the oldest ones last.</p>
      </div>
    `)
            $('.mouseoverDevelopment').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "initial"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".linkedinAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopmentLinkedin"> Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that
           you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.
           Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
           inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
           your job title, which technologies and tools did you use etc. Under education, list all the formal and non-formal education you have, with focus on the education
           that is relevant to your current title. List all the modules and projects you have worked on. Make sure to list your major and
           bachelor/master/doctor thesis subject under the university education. Put in the skills you are most experienced in, so you can be endorsed from other people.</p>
      </div>
    `)
            $('.mouseoverDevelopmentLinkedin').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "justify"
            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".laikaAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDevelopmentLaika">Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
            Facebook, Stack Overflow, GitHub, your personal website etc.)
            Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know
            whether you are suitable for the position on the long run.Be honest about the motivation behind looking for a new opportunity. This will help us and the
            companies searching for new employees.
            Work experience is not mandatory, but it helps companies know what kind of experience and in which
            industry you have. Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you
            desired salary is in accordance to your experience.
            Education is also not mandatory, but it adds weight to your portfolio if you have any academic
            knowledge.</p>
      </div>
    `)
            $('.mouseoverDevelopmentLaika').css({
                "color": "#abb2ba", "width": "100%", "font-size": "20px",
                "margin-top": "77px",
                "font-weight": "bold",
                "cursor": "pointer",
                "text-align": "justify",
              

            })
        }, mouseleave: function () {
            $(".mouseoverDevelopment").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
});





