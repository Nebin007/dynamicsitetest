class frontpart{
    constructor(){
        this.url = 'https://revpandatest.000webhostapp.com/backend/functionality.php'; // The url of site which is hosting
        this.query = '';
        this.ta = [];
        this.tb = [];
        this.tc = [];
        this.bstr = [];
    }
    savevalues(a,b,c)
    {
        var theUrl;
        this.query = '?a='+a+'&b='+b+'&c='+c;
        theUrl = this.url+this.query;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); 
        xmlHttp.send( null );
        console.log(xmlHttp.responseText);

    }
    readtables(){
        this.ta = [];
        this.tb = [];
        this.tc = [];
        this.bstr = [];
        var theUrl;
        var tabla;
        var tablb;
        var tablc;
        var resp = [];
        var vals = ["a","b","c"];
        for(let i = 0; i < vals.length; i++){
            this.query = '?read='+vals[i];
            theUrl = this.url+this.query;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false ); 
            xmlHttp.send( null );
            resp.push(xmlHttp.responseText);
        } 
        tabla = JSON.parse(resp[0])
        tablb = JSON.parse(resp[1])
        tablc = JSON.parse(resp[2])
        for(var key in tabla)
        {
            this.ta.push(tabla[key]['A'])
        }
        for(var key in tablb)
        {
            this.bstr.push(tablb[key]['B'])
        }
        for(var key in tablc)
        {
            this.tc.push(tablc[key]['C'])
        }
        this.tb = this.bstr.map(Number);
    }

    seeA(){
        this.readtables();
        var tablestruct = `
            <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">DATA</th>
            </tr>
            <tbody>
        `;
        for(let i = 0; i < this.ta.length ; i++)
        {
            tablestruct = tablestruct+'<tr><th scope="row">'+String(i+1)+'</th>';
            tablestruct = tablestruct+'<td>'+this.ta[i]+'</td>'+"\n";
            tablestruct = tablestruct+"</tr>"
        }
        tablestruct = tablestruct+'</tbody>';
        return tablestruct;
    }
    seeABC(){
        this.readtables();
        let tablestruct = `
                <table class="table">
              <thead>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">DATAS OF A</th>
                  <th scope="col">DATAS OF B</th>
                  <th scope="col">DATAS OF C</th>
                </tr>
                <tbody>
                `;
        for(let i = 0; i < this.ta.length ; i++)
        {
            tablestruct = tablestruct+'<tr><th scope="row">'+String(i+1)+'</th>';
            tablestruct = tablestruct+'<td>'+this.ta[i]+'</td>'+"\n";
            tablestruct = tablestruct+'<td>'+String(this.tb[i])+'</td>'+"\n";
            tablestruct = tablestruct+'<td>'+this.tc[i]+'</td>'+"\n";
            tablestruct = tablestruct+"</tr>"
        }
        tablestruct = tablestruct+'</tbody>';
        return tablestruct;
    }
    seeCB(){
        this.readtables();
        let tablestruct = `
            <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">DATAS OF C</th>
            <th scope="col">DATAS OF B</th>
            </tr>
            <tbody>
        `;
        for(let i = 0; i < this.tc.length ; i++)
        {
            tablestruct = tablestruct+'<tr><th scope="row">'+String(i+1)+'</th>';
            tablestruct = tablestruct+'<td>'+this.tc[i]+'</td>'+"\n";
            tablestruct = tablestruct+'<td>'+String(this.tb[i])+'</td>'+"\n";
            tablestruct = tablestruct+"</tr>"
        }
        tablestruct = tablestruct+'</tbody>';
        return tablestruct;
    }
    seeBasc(){
        this.readtables();
        this.tb.sort(function(a, b){return a - b});
        let tablestruct = `
                <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">data in ascending order</th>
                </tr>
                <tbody>
            `;
            for(let i = 0; i < this.tb.length ; i++)
            {
                tablestruct = tablestruct+'<tr><th scope="row">'+String(i+1)+'</th>';
                tablestruct = tablestruct+'<td>'+this.tb[i]+'</td>'+"\n";
                tablestruct = tablestruct+"</tr>";
            }
            tablestruct = tablestruct+'</tbody>';
            return tablestruct;
    }
    seeBdesc(){
        this.readtables();
        this.tb.sort(function(a, b){return b - a});
        let tablestruct = `
                <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">data in descending order</th>
                </tr>
                <tbody>
            `;
            for(let i = 0; i < this.tb.length ; i++)
            {
                tablestruct = tablestruct+'<tr><th scope="row">'+String(i+1)+'</th>';
                tablestruct = tablestruct+'<td>'+this.tb[i]+'</td>'+"\n";
                tablestruct = tablestruct+"</tr>";
            }
            tablestruct = tablestruct+'</tbody>';
            return tablestruct;
    }


}

fr = new frontpart();
function save(){
    a = document.getElementById('InputA').value;
    b = document.getElementById('InputB').value;
    c = document.getElementById('InputC').value;
    fr.savevalues(a,b,c);
    document.getElementById('InputA').value="";
    document.getElementById('InputB').value="";
    document.getElementById('InputC').value="";
}

function btn1(){
    document.getElementById("tableinfo").innerHTML = fr.seeA();
}
function btn2(){
    document.getElementById("tableinfo").innerHTML = fr.seeABC();
}
function btn3(){
    document.getElementById("tableinfo").innerHTML = fr.seeCB();
}
function btn4(){
    document.getElementById("tableinfo").innerHTML = fr.seeBasc();
}
function btn5(){
    document.getElementById("tableinfo").innerHTML = fr.seeBdesc();
}
