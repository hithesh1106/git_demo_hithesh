function toggle(i)
    {
        var cell_id=i.replace(/but_/g,"");
        var name_element_id="name_"+cell_id;
        var name_element=document.getElementById(name_element_id);
        var name_element_style=window.getComputedStyle(name_element);
        var name_element_visibility=name_element_style.visibility;
        var name='';
        switch (cell_id)
            {
                case "co1":name="Pramod";break;
                case "22001":name="Abhishek";break;
                case "22015":name="Abhishek";break;
                case "22028":name="Nandini";break;
                case "co2":name="Anvitha";break;
                case "23701":name="Nishanth";break;
                case "22056":name="Vignesh";break;
                case "22034":name="Prajwal.B.J";break;
                case "22018":name="Manvith";break;
                case "22048":name="Supreetha";break;
                case "22054":name="Varshitha";break;
                case "22042": name="Shashwath";break;
                case "22017":name="Jayaprasad";break;
                case "22022":name="Kavyashree";break;
                case "22060":name="virajith";break;
                case "22047":name="sumukha s";break;
                case "22024":name="Likhith Raj B";break;
                case "22005":name="Amshik";break;
                case "22013":name="Gowtham";break;
                case "22019":name="nishanth";break;
                case "22020":name="Karthik";break;
                default:name="";
            }
        if (name_element_visibility==="hidden")
            {
                document.getElementById(i).style.background="green";
                document.getElementById(name_element_id).style.visibility="visible";
                document.getElementById(name_element_id).innerHTML=name;
            }
        else
            {
                document.getElementById(i).style.background="red";
                document.getElementById(name_element_id).style.visibility="hidden";
                document.getElementById(name_element_id).innerHTML="";
            }
    }

