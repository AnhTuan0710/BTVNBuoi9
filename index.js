function bai11() {
    let chuoi= document.getElementById('chuoiB11').value;
    let n = chuoi.length;
    let dem =0;
       for(let i =0; i<n; i++)
         {
           if(chuoi[i] == " ")
            {
               dem++;
            }
         }
  document.getElementById('kqua11').value = dem;
}
function bai12() {
    let chuoi = document.getElementById('chuoiB12').value;
    chuoi = chuoi.split(" ").join("");
    document.getElementById('kqua12').value = chuoi;
}
function bai13() {
    let chuoi1 = document.getElementById('chuoiB13').value;
    let chuoi2 = chuoi1.split('').reverse().join(''); 
    document.getElementById('kqua13').value = chuoi2;
}
function bai14() {
    let chuoi1 = document.getElementById('chuoiB141').value;
    let chuoi2 = document.getElementById('chuoiB142').value;
    chuoi1= chuoi1.split(' ');
    chuoi2= chuoi2.split(' ');
    let vitri;
    for(let i=0;i<chuoi1.length; i++)
    {
        if(chuoi1[i]==chuoi2[0])
        {
            vitri=i;
        }
    }
    if(vitri > 0)
    {
       document.getElementById('kqua14').value = vitri+ 1;
    }
    else{
       document.getElementById('kqua14').value = "Chuoi s2 khong co trong chuoi s1";
    }
}
function bai15() {
    let chuoi1 = document.getElementById('chuoiB15').value;
    chuoi1= chuoi1.toLowerCase();
    chuoi1= chuoi1.split("");
    for (let i = 0; i < chuoi1.length; i++) {
            if(chuoi1[i]==" ")
            {
                chuoi1[i+1]=chuoi1[i+1].toUpperCase();
            }
            if(i==0)
            {
                chuoi1[0]=chuoi1[0].toUpperCase();
            }
    }
    chuoi1= chuoi1.join("");
    document.getElementById('kqua15').value = chuoi1;
}
function bai16() {
    let chuoi = document.getElementById('chuoiB16').value;
    chuoi = chuoi.split("");
    let n = chuoi.length;
    let chuoi2="";
    for(let i=n-1 ; i>=0; i--)
    {
        if(chuoi[i]== "/")
        {
            chuoi2 += chuoi.slice(i+1, n).join("");
            break;
        }
    }
    document.getElementById('kqua16').value = chuoi2;
}
function bai17() {
    let soa= parseInt(document.getElementById('so1').value);
    let sob= parseInt(document.getElementById('so2').value);
    let soc= parseInt(document.getElementById('so3').value);

    if(soa>=sob&& soa>=soc)
    {
        document.getElementById('kqua17').value='Số lớn nhất là: '+ soa;
    }
    else if(sob>=soa&& sob>=soc)
    {
        document.getElementById('kqua17').value='Số lớn nhất là: '+ sob;
    }
    else if(soc>=soa&& soc>=sob)
    {
        document.getElementById('kqua17').value='Số lớn nhất là: '+ soc;
    }
}