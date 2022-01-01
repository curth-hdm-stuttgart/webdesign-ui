//  Beim Laden des Dokuments
$(document).ready(function(){

    // Registriere Handler
    $("#AppendButton").click(function(){

        //  Füge Eintrag hinzu...
      $("ul").append( "<li>Weiterer Eintrag</li>" );
    });
  });