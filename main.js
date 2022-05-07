var images = ["R.jpg","OIP.jpg", "Mommy.jpg" , "sister-7.jpg", "Myself.png"];
var names = ["Family Book","Siva Subramanian", "Keerthana Siva Subramanian", "Ramya Siva Subramanian", "Kani rukshana"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
   
    var updatedImage = ["OIP.jpg", "Mommy.jpg" , "sister-7.jpg", "Myself.png"];
    
    var updatedName = ["Family Book","Siva Subramanian", "Keerthana Siva Subramanian", "Ramya Siva Subramanian", "Kani rukshana"] ;
 
    document.getElementById("family_member_image").src = updatedImage[i];
    document.getElementById("family_member_name").innerHTML = updatedName[i];
}
