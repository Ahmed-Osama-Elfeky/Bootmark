
var webSiteName = document.getElementById('webSiteName');
var webSiteURL = document.getElementById('webSiteURL');

var webSites = [];


if(localStorage.getItem('webSites')){
  webSites=JSON.parse(localStorage.getItem('webSites'))
    display()
    
   

}




function addSite() {


    var content = {
        name: webSiteName.value,
        url: webSiteURL.value,

    }

    webSites.push(content);
    localStorage.setItem('webSites', JSON.stringify(webSites));
    clearInputs();
    display();
    


}


function display(){

  // var userURL = bookmarks[indexOfWebsite].siteURL;
  // var httpsRegex = /^https?:\/\//g;
  // if (httpsRegex.test(userURL)) {
  //   validURL = userURL;
  //   fixedURL = validURL
  //     .split("")
  //     .splice(validURL.match(httpsRegex)[0].length)
  //     .join("");
  // } else {
  //   var fixedURL = userURL;
  //   validURL = `https://${userURL}`;
  //   alert('Please Enter The correct URL https://')
  // }




    
    var outPut=``;
    for( var i=0 ; i < webSites.length; i++){
     outPut +=
     `
        
       <tr>
                <td>${i + 1}</td>
                <td>${webSites[i].name}</td>              
                <td>
                  <button onclick="visitSite(${i})" class="btn btn-visit" data-index="${i}">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button onclick="deleteSite(${i})" class="btn btn-delete pe-2" data-index="${i}">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>
        
        
        
        
        `



      

    }
    
    document.getElementById('tableContent').innerHTML=outPut;

}


function deleteSite(index){
    webSites.splice(index,1)
    localStorage.setItem('webSites',JSON.stringify(webSites));

    display();
    


 }

 function visitSite(index){

    window.open(webSites[index].url, '_blank');

 }

 function clearInputs(){

    webSiteName.value=null;
    webSiteURL.value=null

 }

