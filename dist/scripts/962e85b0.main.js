function removeTopping(a,b){console.log("I hate "+a.toppings[b])}function countStudents(){console.log("There are "+academy.students.length+"  students in the Iron Yard Academy")}function spaceAvailable(){return academy.spaces>academy.students.length?(console.log("The Iron Yard Academy has openings."),!0):(console.log("The Iron Academy has no open Spots."),!1)}function addStudent(a){return academy.spaces>academy.students.length?(academy.students.push(a),!0):(console.log("The Iron Academy has no open Spots."),!1)}function addPockets(a){console.log(backpack.pockets+a+" is way to many pockets!")}$(".button-one").click(function(){console.log("the button clicked"),$(this).addClass("active")}),$(".button-two").click(function(){console.log("Fade Away!"),$(this).fadeOut(2e3)}),$(".button-three").click(function(){$(this).addClass("grow")}),$(".four").hover(function(){console.log("We be fading"),$(this).fadeTo(300,.33)}),$(".click-here").click(function(){$(".box:hidden:first").fadeIn(3e3)}),$(".disappear").hover(function(){$(".six").slideUp(3e3)}),$(".seven").delegate("p","click",function(){$(this).after("<p>HEY NOW</p>")}),$(".eight").mouseleave(function(){$(this).removeClass("leave")}),$(".nine").hover(function(){$(this).fadeOut(1e3)}),$(".ten-eleven").click(function(){$(this).append("<span style='color:red;'>I AM TIRED</span>")}),$(".twelve").dblclick(function(){$(this).fadeTo(300,.33)}),$(".thirteen-fourteen").blur(function(){$(this).css("background-color","gray")}),$(".thirteen-fourteen").focus(function(){$(this).css("background-color","yellow")}),$("td").click(function(){$(this).toggleClass("data-toggle")}),$(".button-trigger").click(function(){$(".input-trigger").trigger("focus")}),$(".seventeen").hover(function(){$(this).addClass("get-big")}),$(".eighteen").hover(function(){$(this).addClass("eighteen-grow")}),$(".nineteen").hover(function(){$(this).slideUp()}),$(".twenty").hover(function(){$(this).addClass("widen")}),$(".run").click(function(){$(".twenty-one").addClass("bigger")}),$(".twenty-two").mouseover(function(){$(".input-field").focus()}),$(".twenty-three").click(function(){$(".example").toggleClass("border-all")}),$(".twenty-four").click(function(){$(this).toggleClass(".toggle-class")}),$(".twenty-five").hover(function(){$(this).toggleClass("arrow")}),$(".twenty-six").hover(function(){$(this).addClass("super-border")});var hotdog={bun:["wheat","white","potato"],meat:["pork","beef","chicken","slurry"],toppings:["relish","mustard","sauerkraut","ketchup"]},sandwich={bun:["wheat","white","potato"],meat:["pork","beef","chicken","slurry"],toppings:["relish","ketchip","sauerkraut","ketchup"]},academy={teachers:["Joe","Mason"],spaces:20,students:["Joshua","Austin","Shane","Daniel","Katy","Jeremy","Jennifer","Edwin","Katherine","Matt","Todd","Tyler","Jacob","Elizabeth"],cool:!0},backpack={straps:2,pockets:7,color:"red",brand:["Nike","Adidas","Jansport"]};