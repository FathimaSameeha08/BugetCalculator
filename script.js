function logout() {
    localStorage.clear()
    window.location='./index.html' 
}

function submit(){
    spass=s_pass.value
    suname=s_uname.value
    sname=s_name.value

    const sdetails={
        spass,sname,suname,savings:0
    }
    if(suname in localStorage){
        uniquser.innerHTML='<p>This username already exist. Please enter a different username</p>'
    }
    else{
        localStorage.setItem(suname,JSON.stringify(sdetails))
        alert("reg successful")
        window.location='./index.html'
    }
}

function login(){
    luname=l_uname.value
    lpass=l_pass.value
    
    if(luname in localStorage){
        sdetails=JSON.parse(localStorage.getItem(luname))
        if(lpass==sdetails.spass){
            localStorage.setItem('loginid',luname)
            window.location='./home.html'
        }
        else{
            pass.innerHTML='<p class="text-danger">Incorrect Password</p>'
            
        }
    }
    else{
        alert("Please Sign up")
    }
}

var wname=localStorage.getItem('loginid')
welcome.innerHTML=`Welcome ${wname}!`


function add(){
    var amt=document.getElementById('add_amt').value 
    var des=document.getElementById('add_des').value
    var user=localStorage.getItem('loginid')

    if(user){
        if(amt.length!=0 && des.length!=0){
            details=JSON.parse(localStorage.getItem(user))
            details.savings+=(+amt);
            localStorage.setItem(user,JSON.stringify(details))
            
    
            var data=''
            data=`<div>	&#8377;${details.savings}</div>`
            show.innerHTML=data
    
            var tbdata=`<tr><td>${des}</td>
            <td>${amt}</td>
            <td>${details.savings}</td> </tr>`
            incresult.innerHTML+=tbdata
            incfeild.innerHTML=''
    
        }
        else{
            incfeild.innerHTML='Enter both feilds'
        }
        

    }
    document.getElementById('add_amt').value=''
    document.getElementById('add_des').value=''
}

function exp(){
    var amt=document.getElementById('exp_amt').value 
    var des=document.getElementById('exp_des').value   
    var user=localStorage.getItem('loginid')

    if(user){
        details=JSON.parse(localStorage.getItem(user))
        if(details.savings>=amt){
            if(amt.length!=0 && des.length!=0){
                details.savings-=(+amt);
                localStorage.setItem(user,JSON.stringify(details))
        
                var data=''
                data=`<div>	&#8377;${details.savings}</div>`
                show.innerHTML=data
        
                var tbdata=`<tr><td>${des}</td>
                <td>${amt}</td>
                <td>${details.savings}</td> </tr>`
                expresult.innerHTML+=tbdata
                exceed.innerHTML=''
            }
            else{
                exceed.innerHTML='Enter both feilds'
            }

        }
        else{
            exceed.innerHTML='Amount exceeds the balance!'
   
            
        }
        if(details.savings<10) {
            dang.innerHTML='<p>Control your expense... </p>'
        }      


    }
    
    document.getElementById('exp_amt').value=''
    document.getElementById('exp_des').value=''
}

details=localStorage.getItem('loginid')
console.log(details);
var data=''
data=`<div>${sav.savings}</div>`
show.innerHTML=data