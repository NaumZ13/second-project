<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>The Ultimate CV</title>
</head>
<body>
    
<div id="firstBackground">
<div class="container-fluid firstPage">
    <div class="row" id="display-first">
        <div class="col-md-7 jumbotron-margin no-padding" >
            <div>
                <h1 id="first-heading">The Ultimate <br> CV &amp; Portfolio Check - List</h1>
                <p class="first-paragraph">Are you a Web Developer, Data Scientist, Digital Marketer or a Designer? 
                  <br> Have your CV and portfolio in check and create a 5-star represenatation <br> of your skills with
                this guide. </p>
                <button class="btn"  id="step-inside"> Step Inside </button>
              </div>
        </div>
        <div class="col-md-5 no-padding">
            <img src="img/Backgroundforfirstpage.png"  class="img-responsive" >
        </div>
    </div>
  
     <footer>
         <p id="footer-paragraph" class="text-center">Created with &lt;3 by the <a href="https://brainster.co/" target="_blank">Brainster Coding Academy</a> students and <a href="https://www.wearelaika.com/" target="_blank">wearelaika.com</a> </p>
     </footer>
</div>
</div>











   <script src="js/jquery-3.3.1.min.js"></script>
   <script>
   $(document).ready(function(){
    $('#step-inside').on('click',function(){
        window.location.href = 'second.php'
    })
   
})
   
   
   
   </script>
</body>
</html>