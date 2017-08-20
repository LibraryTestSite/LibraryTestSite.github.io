//https://usfsp.libapps.com/libguides/admin_c.php?g=711411
                    function loadRSS34752548(url){
                        var script = document.createElement("script")
                        script.type = "text/javascript";
                        if (script.readyState){  //IE
                            script.onreadystatechange = function(){
                                if (script.readyState == "loaded" ||
                                        script.readyState == "complete"){
                                    script.onreadystatechange = null;
                                }
                            };
                        }
                        script.src = url;
                        script.onload = function() { try { springSpace.UI.initPopOvers(); } catch(e) {}}; // Re-init popovers since they can load after page load.
                        document.body.appendChild(script);
                    };
                
