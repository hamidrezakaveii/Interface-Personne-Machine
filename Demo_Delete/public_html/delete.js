/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


      document.getElementsByTagName("button")[0].addEventListener("click", function () {
                for (var i = 0; i < 9; i++) {
                    var elem = document.getElementsByTagName("p")[i];
                    elem.style.display = "block";
                }
            });

            for (var i = 0; i < 9; i++) {
                document.getElementsByTagName("p")[i].addEventListener("click", function () {
                    var elem = this;
                    //elem.parentNode.removeChild(elem);
                    elem.style.display = "none";
                    //return false;
                    //alert("test");
                }
                );
            }
