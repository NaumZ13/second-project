<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
     <link rel="stylesheet" href="style/style.css">
    <title>The Ultimate CV</title>
</head>
<body>

<div class="container-fluid" id="cards">
  
    <div class="row">
        <div class="col-md-12 col-md-offset-1">
            <h1 class="category-heading">Choose your category </h1>
        </div>
    </div>
    <div class="row margin-bottom"> 
             <div class="col-xs-6 col-md-2">
              <div class="thumbnail">
                  <div class="caption">
                        <h3 class="text-center">Web Development</h3>
                  </div>
                  <div class="text-right">
                    <button id="development" class="btn">Choose</button>
                  </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-2">
                    <div class="thumbnail">
                        <div class="caption">
                              <h3 class="text-center">Data Science</h3>
                        </div>
                        <div class="text-right">
                          <button id="data-science" class="btn">Choose</button>
                        </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-2">
                        <div class="thumbnail">
                            <div class="caption">
                                  <h3 class="text-center">Digital Marketing</h3>
                            </div>
                            <div class="text-right">
                              <button id="marketing" class="btn">Choose</button>
                            </div>
                        </div>
                      </div>
                      <div class="col-xs-6 col-md-2">
                            <div class="thumbnail">
                                <div class="caption">
                                      <h3 class="text-center">Design</h3>
                                </div>
                                <div class="text-right">
                                  <button class="btn" id="btnDesign" >Choose</button>
                                </div>
                            </div>
                          </div> 
           </div>
    </div>
    <footer>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 text-right visit-brainsterDiv">
      <p class="footerParagraph">Do you want to learn hands-on digital skills?</p>  <button id="visitBrainster" target="_blank" class="btn">Visit Brainster</button> 
     </div>
    <div class="col-md-6 text-right visit-laikaDiv">
        <p  class="footerParagraph">Do you want to recieve job offers by IT Companies?  </p>  <button id="visitLaika"  class="btn">Visit Laika</button>
    </div>
  </div>
</div>
</footer>






    
   <script src="js/jquery-3.3.1.min.js"></script>
   <script>
    $("#development").on("click",function(e){
      e.preventDefault()
      location.href = "development.php"
    })
 
    $("#data-science").on("click",function(e){
      e.preventDefault();
      location.href = "data-science.php"
    })

    $("#marketing").on("click",function(e){
      e.preventDefault()
      location.href = "marketing.php"
    })

    $("#btnDesign").on("click",function(e){
      e.preventDefault();
      location.href = "design.php"
    })

    $("#visitBrainster").on("click",function(e){
      e.preventDefault();
      location.href = "https://brainster.co/"
    })

    $("#visitLaika").on("click",function(e){
      e.preventDefault();
      location.href = "https://www.wearelaika.com/"
    })
</script>

   
</body>
</html>