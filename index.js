const ulEl=document.getElementById("ul-el")
const SAVEbUTTON=document.getElementById("save-btn")
const TabButton=document.getElementById("tabs-btn")
const DelButton=document.getElementById("del-btn")
const inputEl=document.getElementById("input-el")
const LeadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
let myLeads=[]
let listElement=""
console.log(listElement)
if(LeadsFromLocalStorage){
    myLeads=LeadsFromLocalStorage
    render(myLeads)
}
// I'll get the value which user type in the input field and push it to the Myleads Array in SaveButton event listner

SAVEbUTTON.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    render(myLeads)
})
function render(leads){
    listElement=""
    for(let i=0;i<leads.length;i++){
        listElement+=`<li>
                          <a href=${leads[i]}>${leads[i]}</a>
                      </li>`
    }
    ulEl.innerHTML=listElement

}
DelButton.addEventListener("click",function(){
    myLeads=[]
    localStorage.clear()
    render(myLeads)
})
TabButton.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        render(myLeads)
    })
})
