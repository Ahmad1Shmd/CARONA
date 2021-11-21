fetch('https://api.covid19api.com/summary').then((data)=>{return data.json()}).then((data)=>{display(data)})
function display(data){
    console.log(data)
document.write("<Link rel='StyleSheet' src=css/bootstrap.css")
document.write("<Link rel='StyleSheet' src=css/style.css")

document.write("<!DOCTYPE html>")
document.write("<container>")
document.write("<h1>Corona Virus CCases: " + data.global.TotalConfirmed + "</h1>")
document.write("<h1>Corona deathes: " + data.global.TotalDeaths + "</h1>")

document.write("<table class='table-hover'>")

document.write("<th>Country</th>")
document.write("<th>Total cases</th>")
document.write("<th>New Cases</th>")
document.write("<th>Total Deaeths/th>")
document.write("<th>New Deaths</th>")

for(i=0; i<data.Counries.Length; i++) {
    document.write("<tr>")
    document.write("<td>" + data.Counries[i].Country + "</td>")
    document.write("<td>" + data.Counries[i].TotalConfirmed + "</td>")
    document.write("<td>" + data.Counries[i].NewConfirmed + "</td>")
    document.write("<td>" + data.Counries[i].TotalDeaths + "</td>")
    document.write("<td class='bg-danger>" + data.Counries[i].NewDeaths + "</td>")

    document.write("</tr>")
}

document.write("</table>")
document.write("</container>")
}
