!function(){(bodyLangCode||"en-us").toLowerCase(),(bodyCountryCode||"default").toLowerCase();var e,o=new Date;o.setFullYear(o.getFullYear()+10),console.log(window.location.href),document.cookie.indexOf("lang=")>=0?(e=document.cookie.indexOf("lang="),langck=document.cookie.indexOf("lang="),e=document.cookie.substring(e+5,e+7),$("#langslct option").removeAttr("selected").filter("[value="+document.cookie.substring(langck+5)+"]").attr("selected",!0),e='[lang="'+e+'"]'):($("#langslct option").removeAttr("selected").filter("[value="+bodyLangCode+"]").attr("selected",!0),document.cookie="lang="+bodyLangCode+"; expires="+o.toUTCString()+"; path=/"),$("#langslct").on("change",(function(){"ms-MY"===$(this).val()?document.cookie="lang=ms-MY; expires="+o.toUTCString()+"; path=/":document.cookie="lang=en-US; expires="+o.toUTCString()+";path=/"}))}();