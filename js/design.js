
$(document).ready(function () {

    $.each(window.sessionStorage, function (index, value) {
        $('#' + index).val(value).change();
    });


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
        $("#name")

        let textarea = $("textarea")
        textarea.attr("disabled", false)
        textarea.css("border", "1.5px dashed #ddda")

        let input = $("input")

        input.attr("disabled", false)
        input.css("border-bottom", "1.5px inset #ddd")
        let workExp = $("#workExp")
        workExp.css("display", "none")


        function textAreaResize() {
            $('textarea').on('input', function () {
                $(this)
                    .height(50)
                    .height(this.scrollHeight);
            });
        }

        textAreaResize();
        var addButtonDisplay = $(".addButtonDisplay")
        addButtonDisplay.css("display", "block")
        var addButton = $(".addButton");
        var wrapper = $(".input_fields_wrap");
        var x = 1;

        $(addButton).click(function (e) {
            e.preventDefault;
            $(wrapper).append(`
            <div class="col-md-12 col-padding" style="margin-left: 10px;">
                                     <i class="fas fa-trash-alt remove_field pull-right"> Remove Job</i>
                                    <input class="bold" placeholder="Date">
                                    <input type="text" placeholder="Workplace/Company" >
                                    <input type="text" placeholder="Title/Position">
                                    <textarea style="margin-top:2%;" 
                                        placeholder="Job Description"></textarea>
                                </div>
                                
            `)
            $("input").css("border-bottom", "1.5px inset #ddd")
            $("textarea").css("border", "1.5px dashed #ddda")
            textAreaResize();
            let removeField = $(".remove_field")
            removeField.css("border", "none")
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

        })

        let secondEducation = $("#secondEducation")
        secondEducation.css("display", "none")
         
        var addButtonEducation = $(".addButtonEducation")
        addButtonEducation.css("display", "block")
        var addEducation = $(".addEducation");
        var wrapperEducation = $(".education_fields_wrap");
        var x = 1;

         $(addEducation).click(function (e) {
            e.preventDefault;
            $(wrapperEducation).append(`
            <div class="col-md-12" style="padding-left:0;">
                                     <i class="fas fa-trash-alt remove_education pull-right"></i>
                                    <input class="bold" placeholder="Date">
                                    <textarea style="margin-top:2%;" 
                                        placeholder="Where did you study?"></textarea>
                                </div>
                                
            `)
            $("input").css("border-bottom", "1.5px inset #ddd")
            $("textarea").css("border", "1.5px dashed #ddda")
            textAreaResize();
            let removeField = $(".remove_education")
            removeField.css("border", "none")
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

        })
        let skills = $("#skills")
        skills.css("margin-top", "14%")

        let skillsDisplayNone = $("#skillsDisplayNone")
        skillsDisplayNone.css("display", "none")

        var addButtonSkills = $(".addButtonSkills")
        addButtonSkills.css("display", "block")
        var addSkills = $(".addSkills");
        var wrapperSkills = $(".skills_fields_wrap");
        var x = 1;

        $(addSkills).click(function (e) {
            e.preventDefault;
            $(wrapperSkills).append(`
            <div class="col-md-12" style="padding-left:0;">
            <i class="fas fa-trash-alt remove_skills pull-right"></i>
                      <input type="text" placeholder="Add More Skills">
                                </div>
                                
            `)
            $("input").css("border-bottom", "1.5px inset #ddd")
            let removeField = $(".remove_skills")
            removeField.css("border", "none")
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

        })

      let removeContact = $(".removeContact")
      removeContact.css("display", "block")
       
      removeContact.click(function(e){
        e.preventDefault(); $(this).parent("div").remove();

      })



      let downloadBtn = $("#downloadBtn");
      downloadBtn.attr("disabled", false);

      $("#pdfDownloader").click(function () {
          html2canvas(document.getElementById("designCVPdf"), {
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
        //   $("button").hide();
        addButtonDisplay.hide();
          $("i").hide();
          $("#myModal").remove();
          $(".modal-backdrop").remove();
      });

      $(window).bind('beforeunload', function(){
        if(this){
            sessionStorage.clear();
        }
        return 'Are you sure you want to leave?';

      });

    $('#cv').on('keyup', function (e) {
        sessionStorage.setItem('design', $('#cv').html())
    })
      
 
    })
    $('input').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });
    $('textarea').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });

    
    $(".motivationalAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign">Write a short intro that truly represents you – not a cheesy quote, but something you truly believe in.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".jobAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign">Describe every job experience with a few words about your most relevant responsibilities and projects
           connected to the title you’re applying for.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".dateAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign">Dates are a time frame in which you have been on a certain job title. If you are still working there, leave
           a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the
           reader to see what he needs to about your experience right away.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".educationAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign">List relevant education, including workshops or lectures you have visited. If you have a bachelor in
           Sports, and now you are applying as a designer because you finished a course, the course should be the
           highest in your “education” section. Don’t put in high and elementary school.
    `)

        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".skillsAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign mouseoverSkills">List all the skills, tools and technologies that you know well.
    `)
        $(".mouseoverSkills").css("margin-top", "400px")
        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".infoAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign mouseoverInfo">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
           professional email address, preferably on Gmail. Your city of living is an information that interests your
           potential employers. Don’t leave your home address.
           Leave a link to your LinkedIn profile, or Behance/Dribbble/WiX. Make sure it’s clickable, and shorten it.
    `)
        $(".mouseoverInfo").css("margin-top", "400px")
        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".linkedinAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesign mouseoverDesignLinkedin"> Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that
           you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.
           Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
           inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
           your job title, which technologies and tools did you use etc. Under education, list all the formal and non-formal education you have, with focus on the education
           that is relevant to your current title. List all the modules and projects you have worked on. Make sure to list your major and
           bachelor/master/doctor thesis subject under the university education. Put in the skills you are most experienced in, so you can be endorsed from other people.</p>
      </div>
    `)
            $('.mouseoverDesignLinkedin').css({ "text-align": "justify"})
        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".laikaAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverDesignLaika mouseoverDesign ">Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
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
            $('.mouseoverDesignLaika').css({
                "text-align": "justify",
            })
        }, mouseleave: function () {
            $(".mouseoverDesign").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
});