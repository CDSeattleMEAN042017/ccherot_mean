(function (global){

    console.log("$Dojo has been called")

    this.ready = function (callBack)
    {
        setTimeout(function () 
        {  
        if (isDocumentReady()) 
        {
            console.log("$DojoQuery is waiting...")
            callBack()
            clearTimeout
        }
    }, 100)}


    function isDocumentReady(){
        console.log("document.readyState is " + document.readyState)
        return document.readyState == "complete"
    }

    this.processElement = function (id)
    {
        console.log("DojoQuery.js: processElement called for " + id)
        elt = global.document.getElementById(id)
        console.log("DojoQuery.js: " + elt + " is a " + typeof(elt))
        if (typeof(elt) == "object") //DOMobject")
        {
            //Here we add a click method to the element that the 
            //consumer of this library can pass a callback to.
            //Then we addEventListener and use that callback 
            //We add methods for click, mousehover, and mouseout 
            elt.click = function (callBack){
                elt.addEventListener("click", callBack)
            }
            
            elt.hover = function (callBack){
                console.log("inside hover function")
                elt.addEventListener("mouseover", callBack)
            }

            elt.endHover = function (callBack){
                elt.addEventListener("mouseout", callBack)
            }

            return elt
        }
        return null
    }

    global.$Dojo = this.processElement

})(window)

//Just like with JQuery, we need to wait until the document has loaded
//Will need to borrow some better code from JQuery to do this.
//We'll need to check for document.readyState before allowing any of this 
//code to execute

$Dojo.ready(function ())
{
    function initElements()
    {
        $Dojo("dojoButton").click(function () { console.log("The button was clicked") })
        $Dojo("dojoButton").hover(function () { console.log("The button was hovered over") })
        $Dojo("dojoButton").endHover(function () { console.log("Hover out!") })

    }
}

