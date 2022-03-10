students=[];
function submit()
{
display_students=[];
for(i=1;i<=4;i++)
{
    name1=document.getElementById("name_of_the_student_"+i).value;
students.push(name1);
}

for(j=0;j<students.length;j++)
{
    display_students.push("<h4>NAME- "+ students[j] + "</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_students;

remove=display_students.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block"
}

function sorting()
{
    students.sort();
    sort_students=[];
    for(j=0;j<students.length;j++)
{
    sort_students.push("<h4>NAME- "+ students[j] + "</h4>");
}

remove=sort_students.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
}
function update()
{
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+students+"</h1>"
}