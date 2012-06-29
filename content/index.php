<?php   
      
       session_start(); // utilisation activée des variables de session
      
       //lien avec un autre php pour, en l'occurence, la BDD        
             
       // Création d'un tableau de variable pour gérer les titres de pages
       
       $tab_titre=array("RNLI-outdoor"=>"RNLI outdoor", 
                        "FP-digital"=>"Forsyth & Partners digital",
                        "FP-print"=>"Forsyth & Partners print",
                        "vodafone-tv"=>"Vodafone In-store TV",
                        "JTI-activ"=>"JTI Winston Experiential Brand Activation",
                        "JTI-contru"=>"JTI Winston Experiential Brand Construction", 
                        "LSE-print"=>"LSE Techmark Print",
                        "invista-digital"=>"Invista Lycra Digital",
                        "inmarsat-digital"=>"Inmarsat digital",
                        "TRC-digital"=>"Thames River Capital Digital", 
                        "TRC-game"=>"Thames River Capital Game", 
                        "TRC-DM"=>"Thames River Capital Direct Mailing",
                        "smirnoff-radio"=>"Smirnoff Radio",
                        "TFL-exp"=>"TFL Experiential",
                        "TFL-digital"=>"TFL Digital",
                        "d2k-Cross-track"=>"Dress2Kill Outdoor",
                        "G3-G3eu"=>"G3 G3.eu Website",
                        "G3-proven"=>"G3 Provenlegal.eu Website",
                        "G3-C5"=>"G3 C5capital.co.uk Website",
                        "bayer-digital"=>"",
                        "bayer-print"=>"",
                        "AXA-digital"=>"",
                        "share-digital"=>"",
                        "share-print"=>"",
                        "share-outdoor"=>"",
                        "share-DM"=>"",
                        "NR-96sheet"=>"",
                        "NR-TV"=>"",
                        "TNT-print"=>"TNT Post Print",
                        "TNT-digital"=>"TNT Post Digital",
                        "cityindex-digital"=>"",
                        "cityindex-print"=>"",
                        "cityindex-transport"=>"",
                        "cityindex-DM"=>"",
                        "wiltonroyale"=>"",
                        "volvoCE"=>"",
                        "sunpat"=>"",
                        "futuretalent"=>"",
                        "angus"=>"",
                        "colmans"=>"",
                        "BTglobal"=>"",
                        "yakult"=>"",
                        "MGinvest"=>"",
                        "lovefilm"=>"",
                        "saga"=>"",
                        "skandia"=>"",
                        "speedo"=>"",
                        "tombola"=>"",
                        "paperclip"=>"",
                        "maclaren"=>"",
                        "cv"=>"",
                        "awards"=>"",
                        "expertise"=>"");
                    
       $showcase=array("RNLI-outdoor","FP-print","FP-digital","vodafone-tv", "JTI-activ", "JTI-contru","LSE-print","invista-digital", "
            inmarsat-digital", "TRC-digital", "TRC-game", "TRC-DM", "smirnoff-radio","TFL-exp","TFL-digital", "d2k-Cross-track",
            "G3-G3eu","G3-proven","G3-C5","bayer-digital","bayer-print","AXA-digital","share-digital","share-print","share-outdoor",
            "share-DM","NR-96sheet","NR-TV","TNT-print","TNT-digital","cityindex-digital","cityindex-print","cityindex-transport","cityindex-DM");
       $archive=array("wiltonroyale","volvoCE","sunpat","futuretalent","angus","colmans","BTglobal","yakult","MGinvest","lovefilm","saga","skandia",
            "speedo","tombola","paperclip","maclaren");
       $about=array("cv","awards","expertise");
       
       if(isset($_GET['p']) && !preg_match("/\//i", $_GET['p']))
       {                                      
       $content=$_GET['p'] . ".html"; 
       $title=$tab_titre[$_GET['p']];
       }
       else{
       $content="landing.html";
       $title="Freelance Art Director based in London";
       }
       

       if(!isset($_GET['p']))
       {
       $GET['p']="landing";
       $title="Freelance Art Director based in London";
       }
      
      // FIN DE LA REDIRECTION GÉNÉRALE POUR LES PAGES
      
     
       include("index.html"); 
?> 
