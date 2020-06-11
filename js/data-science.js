$(document).ready(function () {


    $.each(window.sessionStorage, function (index, value) {
        if (index != "img-inputDataScience") {

            $('#' + index).val(value).change();
        }
    });
    let visitBrainster = $("#visitBrainster");
    visitBrainster.on('click', function () {
        window.location.href = 'https://brainster.co/'
    })
    let visitLaika = $("#visitLaika");
    visitLaika.on('click', function () {
        window.location.href = 'https://www.wearelaika.com/'
    })
    $("#customImg").attr("src", sessionStorage.getItem("img-inputDataScience"));

    $("#btnCV").on("click", function () {
        $('#btnLinkedin').removeClass('focus');
        $("btnWeAreLaika").removeClass('focus');
        $("#cv").show();
        $("#boxCV").css("box-shadow", "0px 0px 10px grey");
        $("#editBtn").show();
        $("#downloadBtn").show();
        $(this).addClass("focus");
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


        $('.elon').hide();
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgDataScience').attr('src', e.target.result);
                    $('#imgDataScience').attr('elon');
                    $('.img').hide();
                }
                $('#imgDataScience').on('click', function () {
                    $('.img').show();
                })
                reader.readAsDataURL(input.files[0]);
            }
        }
        $('#form1').show();
        $("#img-inputDataScience").change(function () {
            readURL(this);
        });

        let input = $("input");
        input.attr("disabled", false);
        input.css("border-bottom", "1.5px solid #2a343e ");

        let placeRight = $(".placeRight");
        placeRight.css("border-left", "1px solid #2a343e");


        let textarea = $("textarea");
        textarea.attr("disabled", false);
        textarea.css("border-bottom", "1.5px solid #2a343e");
        function textAreaResize() {
            $('textarea').on('input', function () {
                $(this)
                    .height(50)
                    .height(this.scrollHeight);
            });
        }
        textAreaResize();

        let workExpDisplayNone = $(".workExpDisplayNone");
        workExpDisplayNone.css("display", "none");


        var workExp_fields_wrap = $(".workExp_fields_wrap");
        var x = 1;
        $(workExp_fields_wrap).append(`
            <div class="col-md-11">
            <i class="fas fa-trash-alt pull-right remove_field" style="color:#2a343e; margin-bottom:2%; margin-top:5%;"></i>
               <input type="text" id="jobFieldDS"  style="font-size: 16px; font-weight: bold; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer" placeholder="Data Scientist"> <br>
               <input type="text" style="font-size: 16px; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer"  placeholder="Rocket Corp">
          </div>
          <div class="col-md-11" style="display: flex; justify-content: space-between; color: #a7a7a7;">
               <input type="text"  placeholder="11/2019-Present" style="border-bottom: 1px solid #2a343e; cursor:pointer;width:100%;  ">
                <input type="text"   placeholder="Skopje" class="placeRight" style="border-bottom: 1px solid #2a343e; border-left: 1px solid #2a343e; cursor:pointer;width:100%;">
                 </div>
               <div class="col-md-11">
               <span style="color: #a7a7a7;">Achievements/Tasks</span>
               <ul style="padding: 0;" class="circle">
              <li>
            <textarea  style="width: 100%; cursor:pointer;" placeholder="Collecting, analyzing, and interpreting raw data from various websites."></textarea>
                </li>
                <ul class="wrapper circle" style="padding-left: 0px;" ></ul>
                <div style="margin-top: 4%; display:block;" class="addButtonDisplay">
                 <i class="fa fa-plus addButton pull-right" style="color:#2a343e;" ></i>
               </div>
       </div>

               `
        )



        var addButtonDisplay = $(".addButtonDisplay")
        var addButton = $(".addButton");
        addButtonDisplay.css("display", "block")
        var wrapper = $(".wrapper");
        var x = 1;

        $(addButton).click(function (e) {
            e.preventDefault();
            $(wrapper).append(`
            <i class="fas fa-trash-alt remove_field" style="color:#2a343e;"></i>
                
          <li><textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" style="width:100%;"></textarea></li>  


            `)
            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();
            let removeField = $(".remove_field")
            removeField.css("border", "none")
            $(removeField).on("click", function (e) {
                e.preventDefault(); $(this).next("textarea").remove(); x--;
                e.preventDefault(); $(this).remove(); x--;
            });
        });

        $("textarea").css("border-bottom", "1px solid #2a343e")
        textAreaResize();
        let removeField = $(".remove_field")
        removeField.css("border", "none")
        $(removeField).on("click", function (e) { //user click on remove text
            e.preventDefault(); $(this).parent().parent("div").remove();
        })

        var addWorkExpButton = $(".addWorkExpButton");
        addWorkExpButton.css("display", "block");
        var addButtonGlyphicon = $(".addButtonGlyphicon");
        let workExp_fileds_wrap_dynamically = $(".workExp_fileds_wrap_dynamically")
        var x = 1;

        $(addButtonGlyphicon).click(function (e) {
            e.preventDefault();
            $(workExp_fileds_wrap_dynamically).append(`
        <div class="col-md-11 ">
        <i class="fas fa-trash-alt pull-right remove_Workfield" style="color:#2a343e; margin-bottom:2%; margin-top:5%;"></i>
       <div class="col-md-12 jobAdvice">
       <input type="text"  style="font-size: 16px; font-weight: bold; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer" placeholder="Data Scientist"> <br>
       <input type="text" style="font-size: 16px; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer"  placeholder="Rocket Corp">
        </div>
      <div class="col-md-12 dateAdvice" style="display: flex; justify-content: space-between; color: #a7a7a7;">
           <input type="text"  placeholder="11/2019-Present" style="border-bottom: 1px solid #2a343e; cursor:pointer;width:100%;  ">
            <input type="text"   placeholder="Skopje" class="placeRight" style="border-bottom: 1px solid #2a343e; border-left: 1px solid #2a343e; cursor:pointer;width:100%;">
             </div>
           <div class="col-md-12 jobAdvice">
           <span style="color: #a7a7a7;">Achievements/Tasks</span>
           <ul style="padding: 0;" class="circle">
          <li>
        <textarea  style="width: 100%; cursor:pointer;" placeholder="Add More Achievements/Tasks"></textarea>
            </li>
            <ul class="wrapperDynamically circle" style="padding-left: 0px;" ></ul>
            <div style="margin-top: 4%; display:block;" class="addButtonDisplayDynamically">
             <i class="fa fa-plus addButtonDynamycally pull-right" style="color:#2a343e;" ></i>
           </div>
   </div>
   </div>
           `
            )

            let remove_Workfield = $(".remove_Workfield")
            remove_Workfield.css("border", "none")
            $(remove_Workfield).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });
            var addButtonDisplayDynamically = $(".addButtonDisplayDynamically")
            var addButtonDynamycally = $(".addButtonDynamycally");
            addButtonDisplayDynamically.css("display", "block")
            var wrapperDynamically = $(".wrapperDynamically");
            var x = 1;

            $(addButtonDynamycally).click(function (e) {
                e.preventDefault();
                $(wrapperDynamically).append(`
            <i class="fas fa-trash-alt remove_fieldDynamically" style="color:#2a343e;"></i>
            <li>
            <textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" style="width:100%;"></textarea>
            </li>


            `)
                $("textarea").css("border-bottom", "1px solid #2a343e")
                $("textarea").css("place")
                textAreaResize();
                let remove_fieldDynamically = $(".remove_fieldDynamically")
                remove_fieldDynamically.css("border", "none")
                $(remove_fieldDynamically).on("click", function (e) {
                    e.preventDefault(); $(this).next("textarea").remove(); x--;
                    e.preventDefault(); $(this).remove(); x--;
                });
            });

            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();

        });

        let educationDisplayNone = $(".educationDisplayNone");
        educationDisplayNone.css("display", "none");

        var addEducationButton = $(".addEducationButton")
        addEducationButton.css("display", "block")
        var addEducationGlyphicon = $(".addEducationGlyphicon");
        var education_fields_wrap = $(".education_fields_wrap");
        var x = 1;

        $(addEducationGlyphicon).click(function (e) {
            e.preventDefault;
            $(education_fields_wrap).append(`
                  <div class="col-md-11" style="margin-top: 8%;">
                  <i class="fas fa-trash-alt remove_education pull-right" style="color:#2a343e;"></i>
                  <input style="font-size: 16px; font-weight: bold; width: 100%;" rows="1" placeholder="Data Science Academy"> <br>
                  <input style="font-size: 15px; width: 100%;" rows="1" placeholder="Brainster">
              <div style="display: flex; justify-content: space-between; color: #a7a7a7;">
              <input type="text"  placeholder="11/2019-Present" style="border-bottom: 1px solid #2a343e; cursor:pointer; width:100%;">
              <input type="text"   placeholder="Skopje" class="placeRight" style="border-bottom: 1px solid #2a343e; border-left: 1px solid #2a343e; cursor:pointer">
              </div>
              </div>


                  `)
            textAreaResize();
            let removeField = $(".remove_education");
            removeField.css("border", "none");
            removeField.css("cursor", "pointer");
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });

        });


        let certificatesDisplayNone = $(".certificatesDisplayNone");
        certificatesDisplayNone.css("display", "none");

        var addCertificatesButton = $(".addCertificatesButton")
        addCertificatesButton.css("display", "block")
        var addCertificatesGlyphicon = $(".addCertificatesGlyphicon");
        var certificates_fields_wrap = $(".certificates_fields_wrap");
        var x = 1;

        $(addCertificatesGlyphicon).click(function (e) {
            e.preventDefault;
            $(certificates_fields_wrap).append(`
                 <div class="col-md-10 cerificatesMargin">
                 <i class="fas fa-trash-alt remove_certificates pull-right" style="color:#2a343e;"></i>
                 <textarea style="font-size: 16px; font-weight: bold; width: 100%;" rows="1" placeholder="Data Science Academy"></textarea> <br>
                 <textarea style="font-size: 15px; width: 100%;" rows="1" placeholder="Brainster"></textarea>
             <div style="display: flex; justify-content: space-between; color: #a7a7a7;">
             <input type="text"  placeholder="11/2019-Present" style="border-bottom: 1px solid #2a343e; cursor:pointer; width:100%;">
             <input type="text"   placeholder="Skopje" class="placeRight" style="border-bottom: 1px solid #2a343e; border-left: 1px solid #2a343e; cursor:pointer">
             </div>
             </div>


                 `)


            textAreaResize();
            $("textarea").css({ "border-bottom": "1px solid #2a343e" })
            $(".cerificatesMargin").css({ 'margin-top': '3%' })
            let removeField = $(".remove_certificates");
            removeField.css("border", "none");
            removeField.css("cursor", "pointer");
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });

        });


        let languageDisplayNone = $(".languageDisplayNone");
        languageDisplayNone.css("display", "none");

        var addLanguageButton = $(".addLanguageButton")
        addLanguageButton.css("display", "block")
        var addLanguageGlyphicon = $(".addLanguageGlyphicon");
        var language_fields_wrap = $(".language_fields_wrap");
        var x = 1;

        $(addLanguageGlyphicon).click(function (e) {
            e.preventDefault;
            $(language_fields_wrap).append(`
                 <div class="col-md-10 lagnuageMargin">
                 <i class="fas fa-trash-alt remove_certificates pull-right" style="color:#2a343e;"></i>
                 <input style="font-size: 16px; font-weight: bold; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer;"  placeholder="Language"> <br>
                 <input style="font-size: 15px; width: 100%; border-bottom: 1px solid #2a343e; cursor:pointer;"  placeholder="Full Professional Proficiency">
             </div>

                 `)
            textAreaResize();
            $(".lagnuageMargin").css({ "margin-top": "3%" })
            let removeField = $(".remove_certificates");
            removeField.css("border", "none");
            removeField.css("cursor", "pointer");
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });

        });

        let informalEducationDisplayNone = $(".informalEducationDisplayNone");
        informalEducationDisplayNone.css("display", "none");

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

        let skillsRow = $(".skillsRow");
        skillsRow.css("display", "none");

        var addSkillsButton = $(".addSkillsButton")
        addSkillsButton.css("display", "block")
        var addSkillsGlyphicon = $(".addSkillsGlyphicon");
        var skills_fields_wrap = $(".skills_fields_wrap");
        var x = 1;

        $(addSkillsGlyphicon).click(function (e) {
            e.preventDefault;
            $(skills_fields_wrap).append(`
                 <div class="col-md-11" style="margin-top: 8%;">
                 <i class="fas fa-trash-alt remove_skill pull-right" style="color:#2a343e;"></i>
             <div style="display: flex; justify-content: space-between;">
             <input type="text"  placeholder="Choose Language/Skill" style="border-bottom: 1px solid #2a343e;cursor:pointer; width:70%; font-size:17px;">
             <div style="width:50%; margin-left:50px;">
             <input type="radio" class="radioBtn"> <span class="check"   class="radioBtn"></input> <input type="radio"  class="radioBtn"> <input type="radio"  class="radioBtn"> <input type="radio"  class="radioBtn"> <input type="radio"  class="radioBtn">
             </div>
             </div>
             </div>


                 `)
            textAreaResize();
            let removeField = $(".remove_skill");
            removeField.css("border", "none");
            removeField.css("cursor", "pointer");
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });

        });

        $('#cv').on('keyup', function (e) {
            sessionStorage.setItem('data-science', $('#cv').html())
        })

        let downloadBtn = $("#downloadBtn");
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
            // $("button").hide();
            $("i").hide();
            $("#myModal").remove();
            $(".modal-backdrop").remove();

            // $("#myModal").remove();

        });

        $(window).bind('beforeunload', function () {
            if (this) {
                sessionStorage.clear();
            }
            return 'Are you sure you want to leave?';

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
           <p class="mouseoverDataScience">Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
           you seem unserious.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })


    $(".jobAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience">Write your previous job experience, and if you’re currently working, your current job title. Explain your
           responsibilities and projects and list the tech stack and products/projects you worked on. If you were
           working in a team, let the recruiter know what your role was.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".educationAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverEducation">Let the recruiter know about your education, but only write the important parts – skip the high school
           and elementary, stick to the university degrees and courses relevant to the job you’re applying for.</p>
      </div>
    `)
            $(".mouseoverEducation").css("margin-top", "400px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".projectsAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverCertificates">In the tech industry, the focus should be on
           what you have created. Include data analysis projects, machine learning projects, and if possible,
           published scientific articles or tutorials.
           Pick projects with relevance and connection to the job you’re applying for. They should demonstrate
           your technical skills and how they are applicable to solving real problems.</p>
      </div>
    `)
            $(".mouseoverCertificates").css("margin-top", "200px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".skillsAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverSkills">Be specific about the skills, tech and tools you used, and what your role was if you’re listing group
           projects. Specify coding languages, libraries etc.
           Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your
           CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited,
           so don’t waste t on soft skills like leadership or communication.</p>
      </div>
    `)
            $(".mouseoverSkills").css("margin-top", "100px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".infoAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverSkills">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
           professional email address, preferably on Gmail. Your city of living is an information that interests your
           potential employers. Don’t leave your home address.</p>
      </div>
    `)
            $(".mouseoverSkills").css("margin-top", "100px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".languageAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverLanguage">All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
           expressions such as “fluent in”, “speaking level of”, “native language” and similar.</p>
      </div>
    `)
            $(".mouseoverLanguage").css("margin-top", "400px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".dateAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience ">Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
           hyphen ( - ). Leave your most recent experience first, and the oldest ones last. We want to enable the
           reader to see what he needs to about your experience right away. Describe every job title with a few
           words about your most relevant experiences connected to the title you’re applying for.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
    $(".informalEducationAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverInformal">Don’t be afraid to include a “Informal education” where you can list all the courses, conferences,
           workshops and webinars that you used to teach yourself about digital marketing. Don’t include
           everything – just the education that is relevant and necessary for the position you are applying for.</p>
      </div>
    `)
            $(".mouseoverInformal").css("margin-top", "400px")
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".linkedinAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScience mouseoverDataScienceLinkedin"> Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that
           you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.
           Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
           inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
           your job title, which technologies and tools did you use etc. Under education, list all the formal and non-formal education you have, with focus on the education
           that is relevant to your current title. List all the modules and projects you have worked on. Make sure to list your major and
           bachelor/master/doctor thesis subject under the university education. Put in the skills you are most experienced in, so you can be endorsed from other people.</p>
      </div>
    `)
            $('.mouseoverDevelopmentLinkedin').css({ "text-align": "justify" })
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".laikaAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDataScienceLaika mouseoverDataScience ">Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
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
            $('.mouseoverDataScienceLaika').css({
                "text-align": "justify",
            })
        }, mouseleave: function () {
            $(".mouseoverDataScience").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
});