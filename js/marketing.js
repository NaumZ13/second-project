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
        if (index != "img-inputMarketing") {

            $('#' + index).val(value).change();
        }
    });

    $("#customImg").attr("src", sessionStorage.getItem("img-inputMarketing"));

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

        $('.elon').hide();
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgMarketing').attr('src', e.target.result);
                    $('#imgMarketing').attr('elon');
                    $('.img').hide();
                }
                $('#imgMarketing').on('click', function () {
                    $('.img').show();
                })
                reader.readAsDataURL(input.files[0]);
            }
        }
        $('#form1').show();
        $("#img-inputMarketing").change(function () {
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

        let panelInput = $(".panelInput");
        panelInput.css({ "background-color": "#468f99", "border-bottom": "1px solid white", "cursor": "pointer" });


        let workDisplayNone = $(".workDisplayNone");
        workDisplayNone.css("display", "none");
        // here starts the code for dynamically added job fileds section

        var job_fields_wrap = $(".job_fields_wrap");
        var x = 1;
        $(job_fields_wrap).append(`
                  
                        <div class="col-md-12">
                        <i class="fas fa-trash-alt pull-right remove_field" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
                        <div class="row">
                        <div class="col-md-12">
                        <input id="jobTitle" style="font-size: 16px; font-weight: bold; width: 100%;" type="text" placeholder="Digital Marketer">
                        <input type="text" id="jobFieldIdontknow"  placeholder="Laika"  style="font-size: 16px; width: 100%;">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12 dateAndPlace">
                            <input type="text" class="date"  placeholder="07/2019-Present"
                                    > <input type="text"  class="placeRight"
                                    placeholder="Skopje, Macedonia">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                        <span style="color: #468f99;">Achievements/Tasks</span>
                        <ul style="padding: 0; margin-left: 4%;" class="circle circleFirstOne">
                            <li >  <textarea   placeholder="Add Achievements/Tasks" rows="1" class="textArea" style="width:100%"></textarea></li>
                            <ul class="wrapperUl" ></ul>
                            <div style="margin-top: 4%; display:block;" class="addButtonDisplay">
                             <i class="fa fa-plus addButton pull-right" style="color:#2fbdad;" ></i>
                           </div>  
                     </ul>
                        </ul>
                    </div>
                        </div>
                  </div>
                                
            `);

        $("input").css("border-bottom", "1.5px solid #2fbdad")
        $("textarea").css("border-bottom", "1px solid #2a343e")
        textAreaResize();

        var addButtonDisplay = $(".addButtonDisplay")
        var addButton = $(".addButton");
        addButtonDisplay.css("display", "block")
        var wrapperUl = $(".wrapperUl");
        var x = 1;

        $(addButton).click(function (e) {
            e.preventDefault();
            $(wrapperUl).append(`
                <i class="fas fa-trash-alt remove_fieldLi" style="color:#2fbdad;"></i>
                <li>
                <textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" name="" style="width:100%;"></textarea>
                </li>
                `)

            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();
            let remove_fieldLi = $(".remove_fieldLi")
            remove_fieldLi.css("border", "none")
            $(remove_fieldLi).on("click", function (e) {
                e.preventDefault(); $(this).next("li").remove(); x--;
                e.preventDefault(); $(this).remove(); x--;
            });


        });


        let removeFieldWork = $(".remove_field")
        removeFieldWork.css("border", "none")
        $(removeFieldWork).on("click", function (e) { //user click on remove text
            e.preventDefault(); $(this).parent("div").remove(); x--;
        });



        var addWorkButtonDisplay = $(".addWorkButtonDisplay");
        addWorkButtonDisplay.css("display", "block");
        var addWorkButton = $(".addWorkButton");
        var job_fields_wrapDynamically = $(".job_fields_wrapDynamically");
        var x = 1;

        $(addWorkButton).click(function (e) {
            e.preventDefault();
            $(job_fields_wrapDynamically).append(`
                      
                <div class="col-md-12">
                <i class="fas fa-trash-alt pull-right removeFieldWorkDynamically" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
                <div class="row">
                <div class="col-md-12">
                <input style="font-size: 16px; font-weight: bold; width: 100%;" type="text" placeholder="Digital Marketer">
                <input type="text"  placeholder="Laika"  style="font-size: 16px; width: 100%;">
                </div>
                </div>
                <div class="row">
                <div class="col-md-12 dateAndPlace">
                    <input type="text" class="date"  placeholder="07/2019-Present"> <input type="text"  class="placeRight" placeholder="Skopje, Macedonia">
                </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                <span style="color: #468f99;">Achievements/Tasks</span>
                <ul style="padding: 0; margin-left: 4%;" class="circle circleFirstOne">
                    <li >  <textarea   placeholder="Add Achievements/Tasks" rows="1" class="textArea" style="width:100%"></textarea></li>
                    <ul class="wrapperUlDynamically" ></ul>
                    <div style="margin-top: 4%; display:block;" class="addButtonDisplayDynamically">
                     <i class="fa fa-plus addButtonDynamically pull-right" style="color:#2fbdad; margin-bottom: 4%;" ></i>
                   </div>  
             </ul>
                </ul>
            </div>
                </div>
          </div>
                        
    `)

            $("input").css("border-bottom", "1.5px solid #2fbdad")
            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();
            let removeFieldWorkDynamically = $(".removeFieldWorkDynamically")
            removeFieldWorkDynamically.css("border", "none")
            $(removeFieldWorkDynamically).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })

            var addButtonDisplayDynamically = $(".addButtonDisplayDynamically")
            var addButtonDynamically = $(".addButtonDynamically");
            addButtonDisplayDynamically.css("display", "block")
            var wrapperUlDynamically = $(".wrapperUlDynamically");
            wrapperUlDynamically.css("padding", "0");
            var x = 1;

            $(addButtonDynamically).click(function (e) {
                e.preventDefault();
                $(wrapperUlDynamically).append(`
    <i class="fas fa-trash-alt remove_fieldLiDynamically" style="color:#2fbdad;"></i>
    <li>
    <textarea rows="1" placeholder="Add More Achievements/Tasks" class="textArea" name="" style="width:100%;"></textarea>
    </li>
                        
    `)
                $("textarea").css("border-bottom", "1px solid #2a343e")
                $("textarea").css("place")
                textAreaResize();
                let remove_fieldLiDynamically = $(".remove_fieldLiDynamically")
                remove_fieldLiDynamically.css("border", "none")
                remove_fieldLiDynamically.css("border", "none")
                $(remove_fieldLiDynamically).on("click", function (e) {
                    e.preventDefault(); $(this).next("li").remove(); x--;
                    e.preventDefault(); $(this).remove(); x--;
                });

            });

        })
        // Here ends the code for the job fields section




        // here begins the code fore dynamically adding skills inputs
        let skillDisplayNone = $(".skillDisplayNone");
        skillDisplayNone.css("display", "none");

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

        // Here ends the code for dynamically added skills inputs

        // here starts the code for dynamically added achievements section

        let achievementsDisplayNone = $(".achievementsDisplayNone");
        achievementsDisplayNone.css("display", "none");


        var addButtonAchievements = $(".addButtonAchievements")
        addButtonAchievements.css("display", "block")
        var addAchievements = $(".addAchievements");
        var achievements_fields_wrap = $(".achievements_fields_wrap");
        var x = 1;

        $(addAchievements).click(function (e) {
            e.preventDefault();

            $(achievements_fields_wrap).append(`
            <div class="col-md-12 achievementPadding"  style="padding-left:0;">
            <i class="fas fa-trash-alt remove_skills pull-right"></i>
                      <textarea  class="textareaPlaceholder achievementsDynamically "  style="width:100%; margin-top: 1%;" placeholder="Add More Achievements"></textarea>
                                </div>
                                
            `)

            $('.achievementsDynamically').each(function (i) {
                $(this).attr("id", "marketingAchievements" + i);
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


                //    console.log(this)
                //    console.log(window.sessionStorage)
            });


            textAreaResize();
            $(".achievementPadding").css({ "padding-lef": "0", "padding-right": "0" });
            $("textarea").css("border-bottom", "1.5px solid #468f99")
            let removeField = $(".remove_skills")
            removeField.css("border", "none")
            removeField.css("color", "#468f99")
            removeField.css("cursor", "pointer")
            $(removeField).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            })


        });
        //     $(window).on('load', function () {
        //         // $('#faculty').hide();
        //         // $('.achievementsDisplayNone').hide();
        //         // $('#upwork').hide();
        //         // $(sessionStorage).show();
        //         $(".achievementPadding").show();  
        //         // if($.session.get('achievementsDynamically') != undefined) {
        //         //     $('.achievementsDynamically').val($.session.get('achievementsDynamically')).change();
        //         // }


        // });


        // Here ends the code for achievements section


        // here starts the code for dynamycally added education section
        let educationDisplayNone = $(".educationDisplayNone");
        educationDisplayNone.css("display", "none");


        var education_fields_wrap = $(".education_fields_wrap");
        var x = 1;
        $(education_fields_wrap).append(`
        <div class="col-md-11">
        <i class="fas fa-trash-alt pull-right remove_fieldEducation" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
        <input type="text"  placeholder="Brainster Digital Marketing Academy" style="font-size: 16px; font-weight: bold;">
        </div>
    <div class="col-md-11 dateAndPlace" style="display: flex; justify-content: space-between; color: #468f99;">
        <input type="text"   placeholder="04/2019-09/2019">
    </div>
    <div class="col-md-12">
        <span style="color: #468f99;">Courses</span>
    </div>
    <div class="col-md-11" style="display: flex;">
        <ul style="padding: 0; margin-left: 4%; width:100%;" class="circle">
            <li> <input type="text" placeholder="Integrated Marketing Communication" style="width:100%;" ></li>
            <ul class="wrapperUlEducation"  style="padding:0;"></ul>
            <div style="margin-top: 4%; display:block;" class="addEducationDisplay">
             <i class="fa fa-plus addEducation pull-right" style="color:#2fbdad;" ></i>
           </div>  
     </ul>
           </ul>                    
           </div>                 
              `)
        $("input").css("border-bottom", "1.5px solid #468f99");
        textAreaResize();
        let remove_fieldEducation = $(".remove_fieldEducation");
        remove_fieldEducation.css("border", "none");
        remove_fieldEducation.css("cursor", "pointer");
        $(remove_fieldEducation).on("click", function (e) { //user click on remove text
            e.preventDefault(); $(this).parent().parent("div").remove(); x--;
        });

        var addEducationDisplay = $(".addEducationDisplay")
        var addEducation = $(".addEducation");
        addEducationDisplay.css("display", "block")
        var wrapperUlEducation = $(".wrapperUlEducation");
        var x = 1;

        $(addEducation).click(function (e) {
            e.preventDefault();
            $(wrapperUlEducation).append(`
            <i class="fas fa-trash-alt remove_fieldLiEducation" style="color:#2fbdad;"></i>
            <li>
            <textarea rows="1" placeholder="Add More Courses" class="textArea" name="" style="width:100%;"></textarea>
            </li>
            `)

            $("textarea").css("border-bottom", "1px solid #2a343e")
            textAreaResize();
            let remove_fieldLiEducation = $(".remove_fieldLiEducation")
            remove_fieldLiEducation.css("border", "none")
            $(remove_fieldLiEducation).on("click", function (e) {
                e.preventDefault(); $(this).next("li").remove(); x--;
                e.preventDefault(); $(this).remove(); x--;
            });
        });

        var addEducationButton = $(".addEducationButton");
        addEducationButton.css("display", "block");
        var addEducationGlyphicon = $(".addEducationGlyphicon");
        var education_wrapDynamically = $(".education_wrapDynamically");
        var x = 1;

        $(addEducationGlyphicon).click(function (e) {
            e.preventDefault();
            $(education_wrapDynamically).append(`
         <div class="col-md-11">
         <div class="col-md-12" style="padding-left:0;">
         <i class="fas fa-trash-alt pull-right remove_fieldEducationDynamically" style="color:#468f99; margin-bottom:2%; margin-top:5%;"></i>
         <input type="text" id="educationFirstMarketing" class="educationDynamically"  placeholder="Brainster Digital Marketing Academy" style="font-size: 16px; font-weight: bold;">
         </div>
    <div class="col-md-12 dateAndPlace" style="display: flex; justify-content: space-between; color: #468f99;padding-left:0;">
        <input type="text"   placeholder="04/2019-09/2019">
    </div>
    <div class="col-md-12" style="padding-left:0;">
        <span style="color: #468f99;">Courses</span>
    </div>
    <div class="col-md-12" style="display: flex;">
        <ul style="padding: 0; margin-left: 4%; width:100%;" class="circle">
            <li> <input type="text" placeholder="Integrated Marketing Communication" style="width:100%;" ></li>
            <ul class="wrapperUlEducationDynamically"  style="padding:0;"></ul>
            <div style="margin-top: 4%; display:block;" class="addEducationDisplayDynamically">
             <i class="fa fa-plus addEducationDynamically pull-right" style="color:#2fbdad;" ></i>
           </div>  
     </ul>
           </ul>   
           </div>                 
         `)

         $('.educationDynamically').each(function (i) {
            $(this).attr("id", "educationMarketing" + i);
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
            $("input").css("border-bottom", "1.5px solid #468f99");
            textAreaResize();
            let remove_fieldEducationDynamically = $(".remove_fieldEducationDynamically");
            remove_fieldEducationDynamically.css({ "border": "none", "cursor": "pointer" });
            $(remove_fieldEducationDynamically).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent().parent("div").remove(); x--;
            });

            var addEducationDisplayDynamically = $(".addEducationDisplayDynamically")
            var addEducationDynamically = $(".addEducationDynamically");
            addEducationDisplayDynamically.css("display", "block")
            var wrapperUlEducationDynamically = $(".wrapperUlEducationDynamically");
            var x = 1;

            $(addEducationDynamically).click(function (e) {
                e.preventDefault();
                $(wrapperUlEducationDynamically).append(`
            <i class="fas fa-trash-alt remove_fieldLiEducationDynamically" style="color:#2fbdad;"></i>
            <li>
            <textarea rows="1" placeholder="Add More Courses" class="textArea" name="" style="width:100%;"></textarea>
            </li>
            `)

                $("textarea").css("border-bottom", "1px solid #2a343e")
                textAreaResize();
                let remove_fieldLiEducationDynamically = $(".remove_fieldLiEducationDynamically")
                remove_fieldLiEducationDynamically.css("border", "none")
                $(remove_fieldLiEducationDynamically).on("click", function (e) {
                    e.preventDefault(); $(this).next("li").remove(); x--;
                    e.preventDefault(); $(this).remove(); x--;
                });

            });




        });
        // Here it ends for the education section    

        // Here is the code for dynamically added language section
        var addLanguageButton = $(".addLanguageButton")
        addLanguageButton.css("display", "block")
        var addLanguageGlyphicon = $(".addLanguageGlyphicon");
        var language_fields_wrap = $(".language_fields_wrap");
        var x = 1;

        $(addLanguageGlyphicon).click(function (e) {
            e.preventDefault;
            $(language_fields_wrap).append(`
          <div class="col-md-10 languageMargin">
          <i class="fas fa-trash-alt remove_language pull-right" style="color:#468f99;"></i>
          <input id="languageMarketing" class="languageDynamically" placeholder="Language"> <br>
          <input class="languageInput" placeholder="Full Professional Proficiency">
      </div>              
                              
          `)

          $('.languageDynamically').each(function (i) {
            $(this).attr("id", "languageMarketing" + i);
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
            $(".languageMargin").css({ "margin-top": "3%" });
            $("input").css("border-bottom", "1.5px solid #468f99");

            textAreaResize();
            let remove_language = $(".remove_language");
            remove_language.css("border", "none");
            remove_language.css("cursor", "pointer");
            $(remove_language).on("click", function (e) { //user click on remove text
                e.preventDefault(); $(this).parent("div").remove(); x--;
            });


        });

       // here it ends for the language section


        $(window).bind('beforeunload', function(){
            if(this){
                sessionStorage.clear();
            }
            return 'Are you sure you want to leave?';

          });

        $('#cv').on('keyup', function (e) {
            sessionStorage.setItem('marketing', $('#cv').html())
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
           <p class="mouseoverMarketing">Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s
           better to send a CV without a photo, than a photo that makes you seem unprofessional.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".motivationalAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing">Know your unique value proposition and communicate it effectively. You need a personal tagline that
           will help you stand out from everyone else. This line should be the first impression the hiring manager
           will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative
           and say why they should hire you to handle their content.</p>
      </div>
    `)

        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".jobAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing">Write your previous job experience and if you’re currently working, your current job titles. Explain your
           responsibilities and projects and list the tech stack and products/projects you worked on. If you were
           working in a team, let the recruiter know what your role was.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".jobAdviceList").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing">Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
           specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
           as ‘’Conversion, bounce rate and Google Analytics’’.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".dateAndPlace").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing"> Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
           hyphen ( - ). Leave your most recent experience first, and the oldest ones last.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".educationAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing  educationMouseover">List only the relevant studies and courses, like university degree or Digital Marketing
           Academy. Don’t write where you went to high school. Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and
           webinars that you used to teach yourself about digital marketing. Don’t include everything – just the
           education that is relevant and necessary for the position you are applying for.</p>
      </div>
    `)
            $(".educationMouseover").css("margin-top", "500px")
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".skillsAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing  educationMouseover">Make sure to list the skills you can shine in from day one. Showcase all the tools and technologies you know how to use. Everything that’s useful to a marketer:
           from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
    $(".infoAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing  educationMouseover">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
           professional email address, preferably on Gmail. Your city of living is an information that interests your
           potential employers. Don’t leave your home address.</p>
      </div>
    `)
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".languaceAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing  languageMouseover">All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
           expressions such as “fluent in”, “speaking level of”, “native language” and similar.</p>
      </div>
    `)
            $(".languageMouseover").css("margin-top", "450px")
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
    $(".achievementsAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing  achievementsMouseover">Highlight the key achievements you have presented on your CV so the hiring manager can catch
           them very quickly.</p>
      </div>
    `)
            $(".achievementsMouseover").css("margin-top", "250px")
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".linkedinAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketing mouseoverMarketingLinkedin"> Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that
           you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.
           Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
           inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
           your job title, which technologies and tools did you use etc. Under education, list all the formal and non-formal education you have, with focus on the education
           that is relevant to your current title. List all the modules and projects you have worked on. Make sure to list your major and
           bachelor/master/doctor thesis subject under the university education. Put in the skills you are most experienced in, so you can be endorsed from other people.</p>
      </div>
    `)
            $('.mouseoverMarketingLinkedin').css({ "text-align": "justify" })
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })

    $(".laikaAdvice").on({
        mouseover: function () {
            $("#defaultText").hide();
            $("#rectangle").html(`
      <div class="col-md-12">
           <p class="mouseoverMarketingLaika mouseoverMarketing ">Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
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
            $('.mouseoverMarketingLaika').css({
                "text-align": "justify",
            })
        }, mouseleave: function () {
            $(".mouseoverMarketing").hide();
            $("#rectangle").html(`<p class="defaultText">Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like.</p>`);
        }
    })
});

