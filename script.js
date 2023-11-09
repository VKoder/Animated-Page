Shery.imageEffect("#back",{style: 5,debug: true,gooey: true,});
    



var elems = document.querySelectorAll(".elem");
    elems.forEach(function(elems){ 
        var h1s = elems.querySelectorAll("h1");
        var index = 0;
        var anim = false;
        document.querySelector("#main")
        .addEventListener("click", function(){
            if (!anim) {
                anim = true;
                gsap.to(h1s[index],{
                    top : "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function(){
                        gsap.set(this._targets[0], {top : "100%"});
                        anim = false;
                    }
                });
    
                index === h1s.length - 1 ? (index=0) : index++;
                gsap.to(h1s[index],{
                    top : "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
        })
    });

