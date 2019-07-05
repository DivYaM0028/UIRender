var dashboard={};
const xhr= new XMLHttpRequest();
//xhr.open("GET","http://127.0.0.1:3030/",true);
xhr.open("GET","dashboard.json",true);
xhr.onload=function()
{
     dashboard=JSON.parse(this.responseText);
     //d_board();
     //console.log(dashboard.Choose_Institute.length);
     //console.log(dashboard);
}
xhr.send();
d_board;
function d_board(){
    document.getElementById("Thesis_Annotated").innerHTML = `<span><b>${dashboard.Thesis_Annotated}</b></span><br>Thesis Annotated`
    document.getElementById("Research_Article_Found").innerHTML = `<span><b>${dashboard.Research_Article_Found}</b></span><br>Research Article Found<br>(Manually found R.Articles: 8)`
    document.getElementById("Reuse_Recipe_Docs").innerHTML = `<span><b>${dashboard.Reuse_Recipe_Docs	}</b></span><br>Reuse Recipe Docs`
    document.getElementById("Figures_and_Tables_From_Research_Article").innerHTML =`<span>${dashboard.Figures_and_Tables_From_Research_Article}%</span><br>Figures and Tables<br> From Research Article`
    document.getElementById("Figures_and_Tables_From_Thesis").innerHTML = `<span >${dashboard.Figures_and_Tables_From_Thesis}%</span><br>Figures and Tables<br>From Thesis`
    document.getElementById("Method_Matching").innerHTML = `<span >${dashboard.Method_Matching}%</span><br>Method Matching`
    //console.log(dashboard.Choose_Error.length);
    document.getElementById("Choose_Error").innerHTML = 
    `<ul id="dropdown" class="dropdown-content ">
                  ${Array(dashboard.Choose_Error.length).fill().map((item, i) => `
                      <li><a href="#" style="color: black">${dashboard.Choose_Error[i]}</a></li>
                      `).join('')}
        </ul>
    <a class = "btn dropdown-button black" href = "#" data-activates = "dropdown">-Choose Errors-
         <i class = "mdi-navigation-arrow-drop-down right "></i></a>`
    document.getElementById("Choose_Institute").innerHTML =`<ul id="dropdown1" class="dropdown-content white">
          ${Array(dashboard.Choose_Institute.length).fill().map((item, i) => `
              <li><a href="#" style="color: black">${dashboard.Choose_Institute[i]}</a></li>
                `).join('')}
          </ul>
    <a class = "btn dropdown-button black" href = "#" data-activates = "dropdown1">-Choose Institue-
         <i class = "mdi-navigation-arrow-drop-down right"></i></a>`
    document.getElementById("Thesis_Data").innerHTML =`<table class = "responsive-table" style="text-align:center ; border: 2.5px solid black ; ">
                    <thead>
                         <tr>
                                <td><b>Thesis Title</b></td>
                                <td><b>Institue</b></td>
                                <td><b>Research Articles</b></td>
                                <td><b>Reuse Recipe Doc</b></td>
                                <td><b>Errors</b></td>
                         </tr>
                    </thead>
                    <tbody>
            ${Array(dashboard.Thesis_Data.length).fill().map((item, i) => `
              <tr>
                 <td>${dashboard.Thesis_Data[i].Thesis_Title}</td>
                 <td>${dashboard.Thesis_Data[i].Institute}</td>
                 <td>
                 ${Array(dashboard.Thesis_Data[i].Research_Article.length).fill().map((item, j) => `
                     ${dashboard.Thesis_Data[i].Research_Article[j].DOI} : ${dashboard.Thesis_Data[i].Research_Article[j].DOI_Title}
                     <br>
                     `).join('')}
                </td>
                 <td>
                 ${Array(dashboard.Thesis_Data[i].Reuse_Recipe_Doc.length).fill().map((item, k) => `
                 <a>${dashboard.Thesis_Data[i].Reuse_Recipe_Doc[k].URL}</a> : ${dashboard.Thesis_Data[i].Reuse_Recipe_Doc[k].URL_Title}
                 <br>
                  `).join('')}
                 </td>
                 <td style="color: red">${dashboard.Thesis_Data[i].Errors}</td>
              </tr>
                  `).join('')}
                     </tbody>
                </table>`
        }