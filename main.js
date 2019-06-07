const dashboard = [
 {
	"Thesis_Annotated": "360",
	"Research_Article_Found": "96",
	"Reuse_Recipe_Docs": "104",
	"Figures_and_Tables_From_Research_Article": "27",
	"Figures_and_Tables_From_Thesis": "15",
	"Method_Matching": "19",
	"Choose_Error": ["Research Article : Method Titles ", "Research Article: Figure" , "Thesis:Figure and Tables" , "Research Article: Figure"],
	"Choose_Institute":["Institute 1", "Institute 2", "Institute 3", "Institute 4", "Institute 5", "Institute 6", "Institute 7"],
	"Thesis_Data":[{
		"Thesis_Title": "Thesis Titile1",
		"Institute": "Institute1",
		"Research_Article": [{
				"DOI": "Article Title1"
					}, {
				"DOI": "Article Title2"
					}],
				"Reuse_Recipe_Doc": [{
					"URL": "Created Date"
				}, {
					"URL": "Created Date"
														}],
		"Errors": "Error with title, Figure and tables mismatching"
												}]
	}
];
document.getElementById("Thesis_Annotated").innerHTML = `<span><b>${dashboard[0].Thesis_Annotated}</b></span><br>Thesis Annotated`
document.getElementById("Research_Article_Found").innerHTML = `<span><b>${dashboard[0].Research_Article_Found}</b></span><br>Research Article Found<br>(Manually found R.Articles: 8)`
document.getElementById("Reuse_Recipe_Docs").innerHTML = `<span><b>${dashboard[0].Reuse_Recipe_Docs	}</b></span><br>Reuse Recipe Docs`
document.getElementById("Figures_and_Tables_From_Research_Article").innerHTML =`<span>${dashboard[0].Figures_and_Tables_From_Research_Article}%</span><br>Figures and Tables<br> From Research Article`
document.getElementById("Figures_and_Tables_From_Thesis").innerHTML = `<span >${dashboard[0].Figures_and_Tables_From_Thesis}%</span><br>Figures and Tables<br>From Thesis`
document.getElementById("Method_Matching").innerHTML = `<span >${dashboard[0].Method_Matching}%</span><br>Method Matching`
document.getElementById("Choose_Error").innerHTML = `<ul id="dropdown" class="dropdown-content ">
		<li><a href="#" style="color: black">${dashboard[0].Choose_Error[0]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Error[1]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Error[2]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Error[3]}</a></li>
		</ul>
<a class = "btn dropdown-button black" href = "#" data-activates = "dropdown">-Choose Errors-
	 <i class = "mdi-navigation-arrow-drop-down right "></i></a>`
document.getElementById("Choose_Institute").innerHTML =`<ul id="dropdown1" class="dropdown-content white">
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[0]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[1]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[2]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[3]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[4]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[5]}</a></li>
		<li><a href="#" style="color: black">${dashboard[0].Choose_Institute[6]}</a></li>
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
					 <tr>
							<td>${dashboard[0].Thesis_Data[0].Thesis_Title}</td>
							<td>${dashboard[0].Thesis_Data[0].Institute}</td>
							<td>
									${dashboard[0].Thesis_Data[0].Research_Article[0]} : ${dashboard[0].Thesis_Data[0].Research_Article[0].DOI}
							<br>
									${dashboard[0].Thesis_Data[0].Research_Article[1]} : ${dashboard[0].Thesis_Data[0].Research_Article[1].DOI}
							</td>
							<td>
							${dashboard[0].Thesis_Data[0].Reuse_Recipe_Doc[0]} : ${dashboard[0].Thesis_Data[0].Reuse_Recipe_Doc[0].URL}
							<br>
							${dashboard[0].Thesis_Data[0].Reuse_Recipe_Doc[1]} : ${dashboard[0].Thesis_Data[0].Reuse_Recipe_Doc[1].URL}
							<td style="color: red">${dashboard[0].Thesis_Data[0].Errors}</td>
					 </tr>
					 <tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
					 </tr>
				 </tbody>
			</table>`
