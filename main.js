
  Webcam.attach( '#camera' ); 

  camera = document.getElementById("camera");

  Webcam.set({
    width:350 ,
    height:300 ,

    image_format:"png", png_quality:90
  });

  function takeSnapshot()
  {
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'
    });
  }

  console.log('ml5 version' , ml5.version);

  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S9YgFf8bl/model.json" , modelLoaded);

  function modelLoaded ()

  {
    console.log("modelo carregado");
  }
         
  function check() 
  {
    img = doocument.getElementById("selfie_image");

    classifier.classify(img, gotResult);
  }

  function gotResult(error , results)
    {
   if (error)
   {
    console.log(error);
   }
   else
   {
    console.log(results);
   }
  }