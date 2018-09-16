function changeHS() {
  document.getElementById("backgroundtext1").innerHTML = "High School | 2014";
  document.getElementById("backgroundtext2").innerHTML = "Infant Jesus Academy - Marikina";
  document.getElementById("backgroundtextcontent").innerHTML = "> Digital Explorers (Computer Club) President <br> > Student Leader <br> > C.A.T Officer with the position of Core Commander <br> > Taekwondo Team Captain";
  $("#aboutParallax").css("background-image", "url(assets/bg/bg-highschool.png");
}

function changeColl() {
  document.getElementById("backgroundtext1").innerHTML = "College | 2018";
  document.getElementById("backgroundtext2").innerHTML = " Polytechnic University of the Philippines";
  document.getElementById("backgroundtextcontent").innerHTML = "> Technolympics Champion for E-Poster Contest (2016 and 2017) <br> > Technolympics Champion for Video Editing Contest (2016) <br> > Project Manager on Capstone Project <br> > Creative Media Artist Society official content editor";
  $("#aboutParallax").css("background-image", "url(assets/bg/bg-college.png");
}

function changeInt() {
  document.getElementById("backgroundtext1").innerHTML = "Internship | 2018";
  document.getElementById("backgroundtext2").innerHTML = " Galileo Software Services Inc.";
  document.getElementById("backgroundtextcontent").innerHTML = "> Graphics Design Intern <br> > Does Web Design as a side task <br> > Responsible for creating marketing materials, presentations, logos, ads and designs for web, mobile and marketing use <br> > Internship lasted through November 2017 to April 2018";
  $("#aboutParallax").css("background-image", "url(assets/bg/bg-gssi.png");
}

var sectionHeight = $(document).height() / 12;
var sectionHalfHeight = sectionHeight / 2;

var AboutScroll = sectionHalfHeight;
var BackgroundScroll = sectionHeight + sectionHalfHeight;
var SkillsScroll = sectionHeight * 2 + sectionHalfHeight;
var FreelanceScroll = sectionHeight * 3 + sectionHalfHeight;
var GameDevScroll = sectionHeight * 4 + sectionHalfHeight;
var FunScroll = sectionHeight * 5 + sectionHalfHeight;
var LogoDesignScroll = sectionHeight * 6 + sectionHalfHeight;
var PhotogScroll = sectionHeight * 7 + sectionHalfHeight;
var SchoolScroll = sectionHeight * 8 + sectionHalfHeight;
var SocialMediaScroll = sectionHeight * 9 + sectionHalfHeight;
var NetworkScroll = sectionHeight * 10 + sectionHalfHeight;

var scrollTop = $(this).scrollTop();

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if (scrollTop + $(this).height() == sectionHeight) {
  $(".sidebar-experimental").stop().animate({
    opacity: "0"
  });
}
else if ((scrollTop  + $(this).height() > sectionHeight) && (scrollTop <= sectionHeight)) {
  $(".sidebar-experimental").stop().animate({
    opacity: "1"
  });
  $("#starttext").css("color","black").css("background-color","white").css("cursor","default");
  $("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
  $("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
  $(".line--top").css("background-color","white");
  $(".line--end").css("background-color","white");
}
else if ((scrollTop > AboutScroll) && (scrollTop < BackgroundScroll)) {
$("#starttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","black").css("cursor","default");
$("#mybackgroundtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","black").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","black");
$(".line--end").css("background-color","black");
}
else if ((scrollTop > BackgroundScroll) && (scrollTop < SkillsScroll)) {
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","black").css("background-color","white").css("cursor","default");
$("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > SkillsScroll) && (scrollTop < FreelanceScroll)) {
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","black").css("background-color","white").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > FreelanceScroll) && (scrollTop < GameDevScroll )) {
$("#starttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","black").css("cursor","default");
$("#gamestext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","black").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","black");
$(".line--end").css("background-color","black");
}
else if ((scrollTop > GameDevScroll) && (scrollTop < FunScroll)) {
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","black").css("background-color","white").css("cursor","default");
$("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > FunScroll) && (scrollTop < LogoDesignScroll)) {
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","black").css("background-color","white").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > LogoDesignScroll) && (scrollTop < PhotogScroll)) {
$("#starttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","black").css("cursor","default");
$("#photographytext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","black").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","black");
$(".line--end").css("background-color","black");
}
else if ((scrollTop > PhotogScroll) && (scrollTop < SchoolScroll)){
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","black").css("background-color","white").css("cursor","default");
$("#schooltext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > SchoolScroll) && (scrollTop < SocialMediaScroll)){
$("#starttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","black").css("background-color","white").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","white").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","white");
$(".line--end").css("background-color","white");
}
else if ((scrollTop > SocialMediaScroll) && (scrollTop < NetworkScroll)){
$("#starttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","black").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","white").css("background-color","black").css("cursor","default");
$("#networktext").css("color","black").css("background-color","transparent").css("cursor","default");
$(".line--top").css("background-color","black");
$(".line--end").css("background-color","black");
}
else if (scrollTop >= NetworkScroll){
$("#starttext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#abouttext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#mybackgroundtext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#skillstext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#freelancetext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#gamestext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#funtext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#logo-designtext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#photographytext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#schooltext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#social-mediatext").css("color","#ffaa00").css("background-color","transparent").css("cursor","default");
$("#networktext").css("color","black").css("background-color","#ffaa00").css("cursor","default");
$(".line--top").css("background-color","#ffaa00");
$(".line--end").css("background-color","#ffaa00");
}
});
