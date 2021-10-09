var name_of_student_array=[];
function submit(){
var display_student_arrays=[];
for(j=1; j<=4; j++){
var name_of_student=document.getElementById("name_of_the_student_"+j).value; 
console.log(name_of_student);
name_of_student_array.push(name_of_student); 
}
console.log(name_of_student_array);
var length_of_array=name_of_student_array.length;
console.log(length_of_array);
for(f=0; f<4; f++){
display_student_arrays.push("<h4>Name - "+name_of_student_array[f]+"</h4>"); 
console.log(display_student_arrays);   
}
console.log(display_student_arrays);
document.getElementById("display_name_with_commas").innerHTML=display_student_arrays;
var remove_commas=display_student_arrays.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_of_student_array.sort();
console.log(name_of_student_array);
var display_student_array_sorting=[];
var length_of_the_name_of_student_array=name_of_student_array.length;
console.log(length_of_the_name_of_student_array);
for(g=0; g<length_of_the_name_of_student_array; g++){
display_student_array_sorting.push("<h4>Name - "+name_of_student_array[g]+"</h4>");
console.log(display_student_array_sorting);    
}
var remove_commas=display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;    
}
var GuestName=document.getElementById("name1").value;
// use the push function as - names_of_people.push(GuestName);
document.getElementById(" ").style.display="block";
// display the name in the id= sort_button
names_of_people
// add the sort function
// .the sort function is .sort();