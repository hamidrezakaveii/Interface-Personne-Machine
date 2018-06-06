/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


            var press = 0;
            function f() {

                //enregistrer les liens dans un tabLink
                var tabLink = document.getElementsByTagName("a");


                //verifier les liens
                if (press == 0) {
                    for (var i = 0; i < tabLink.length; i++) {
                        tabLink[i].onclick = function () {
                            press = 2;
                            return(false);
                        }
                    }
                }

                if (press == 2) {
                    for (var i = 0; i < tabLink.length; i++) {
                        tabLink[i].onclick = function () {
                            press = 0;
                            return(true);
                        }
                    }
                }

            }