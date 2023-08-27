//quiz arrays
let scoreOf5=[]
let scoreOf4=[]
let scoreOf3=[]
let scoreOf2=[]
let scoreOf1=[]


//Generates current year and adds it to footer
let year = document.getElementById("year")

const date = new Date();
year.textContent = date.getFullYear();

//Search function

function searchFunction(){
alert("I'm sorry but our search function is currently not working")
}


//Calculator function

function calculateExtra(calculatorForm){
    const income = Number(calculatorForm.income.value);
    if (isNaN(income) || income < 1) { alert("ERROR: Income must be a number greater than 0");  }
    const rent = Number(calculatorForm.rent.value);
    if (isNaN(rent)) { alert("ERROR: Rent must be a number"); }
    const energy = Number(calculatorForm.energy.value);
    if (isNaN(energy)) { alert("ERROR: Energy must be a number"); }
    const water = Number(calculatorForm.water.value);
    if (isNaN(water)) { alert("ERROR: Water must be a number"); }
    const tax = Number(calculatorForm.tax.value);
    if (isNaN(tax)) { alert("ERROR: Council tax must be a number"); }
    const food = Number(calculatorForm.food.value);
    if (isNaN(food)) { alert("ERROR: Food must be a number"); }
    const phone = Number(calculatorForm.phone.value);
    if (isNaN(phone)) { alert("ERROR: Phone/broadband must be a number"); }
    const fuel = Number(calculatorForm.fuel.value);
    if (isNaN(fuel)) { alert("ERROR: Fuel must be a number"); }
    const insurance = Number(calculatorForm.insurance.value);
    if (isNaN(insurance)) { alert("ERROR: Car insurance must be a number"); }
    const tvLic = Number(calculatorForm.tvLic.value);
    if (isNaN(tvLic)) { alert("ERROR: Tv License must be a number"); }
    const tvSub = Number(calculatorForm.tvSub.value);
    if (isNaN(tvSub)) { alert("ERROR: Tv subscription must be a number"); }
    const other = Number(calculatorForm.other.value);
    if (isNaN(other)) { alert("ERROR: Other must be a number"); }
     

    const totalBills = rent+energy+water+tax+food+phone+fuel+insurance+tvLic+tvSub+other;
    const extra = income-totalBills;

    console.log(typeof(extra));

    document.getElementById("extra").innerHTML = extra;

    if(extra <=0){
        document.getElementById("resultsInfo").innerHTML="<p class='fs-4 rounded border border-dark'>It's unfortunate that your financial situation is at this point, everyone deserves some fun money to treat themselves and their loved ones.Take a look at our <a class='text-success link-underline-success'href='benefits.html'>benefits</a> section to see if there are any benefits you may be entitled to. Also check out our <a class='text-success link-underline-success' href='money.html'>make money</a> section for ideas on how to boost your income. Please also reach out to some of the <a class='text-success link-underline-success' href='charities.html'>charities</a> to see if they can assist you.</p>";
    }

    else if(extra <=100){
        document.getElementById("resultsInfo").innerHTML="<p class='fs-4 rounded border border-dark'>It's great that you can pay all of your bills and still have a little left over, even if it's not much. We would advise you to take a look at our <a class='text-success link-underline-success' href='benefits.html'>benefits</a> section to see if there are any benefits you may be entitled to. Also check out our <a class='text-success link-underline-success' href='money.html'>make money</a> section for ideas on how to boost your income.</p>"
    }

    else{
        document.getElementById("resultsInfo").innerHTML=" <p class='fs-4 rounded border border-dark'>It's great that you can pay all of your bills. Check out our <a class='text-success link-underline-success' href='money.html'>make money</a> section for ideas on how to boost your income.</p>"
    }
}

//Charities word flippers

function flipWording(name){
    if(name == "housing"){
        document.getElementById("housingCharity").innerHTML="<div class='p-5 border border-dark rounded'><a class='text-success link-underline-success' href='https://shelter.org.uk/' target='blank'><p class='fs-3 heart-title'>Shelter</p></a><p>Home is a human right. It's our foundation and it's where we thrive. Yet, every day millions of people are being devastated by the housing emergency. We exist to defend the right to a safe home. Because home is everything.</p></div>";
    }
    else if(name =="food"){
        document.getElementById("foodCharity").innerHTML="<div class='p-5 border border-dark rounded'><a class='text-success link-underline-success' href='https://www.trusselltrust.org/' target='blank'><p class='fs-3 heart-title'>Trussel Trust</p></a><p>We support a nationwide network of food banks and together we provide emergency food and support to people facing hardship, and campaign for change to end the need for food banks in the UK.</p></div>";
    }
    else if(name =="energy"){
        document.getElementById("energyCharity").innerHTML="<div class='p-5 border border-dark rounded'><a class='text-success link-underline-success' href='https://www.nea.org.uk/' target='blank'><p class='fs-3 heart-title'>National Energy Action</p></a><p>We are National Energy Action (NEA) - the national fuel poverty charity, working to ensure that everyone in England, Wales and Northern Ireland is warm and safe at home.</p></div>";
    }
    else if(name =="debt"){
        document.getElementById("debtCharity").innerHTML="<div class='p-5 border border-dark rounded'><a class='text-success link-underline-success' href='https://www.debtadvicefoundation.org/' target='blank'><p class='fs-3 heart-title'>Debt Advice Foundation</p></a><p>Debt Advice Foundation is a registered national debt advice and education charity offering free, confidential support and advice to anyone worried about loans, credit and debt.</p></div>";
    }
    else{
        document.getElementById("generalCharity").innerHTML="<div class='p-5 border border-dark rounded'><a class='text-success link-underline-success' href='https://www.citizensadvice.org.uk/' target='blank'><p class='fs-3 heart-title'>Citizens Advice</p></a><p>We give people the knowledge and confidence they need to find their way forward - whoever they are, and whatever their problem. Our national charity and network of local charities offer confidential advice online, over the phone, and in person, for free.</p></div>";
    }
}




function flipWordingBack(name){
    if(name =="housing"){
        document.getElementById("housingCharity").innerHTML="<p class='display-4 p-5 border border-dark rounded'>Housing</p>"
    }
    else if(name =="food"){
        document.getElementById("foodCharity").innerHTML="<p class='display-4 p-5 border border-dark rounded'>Food</p>";
    }
    else if(name =="energy"){
        document.getElementById("energyCharity").innerHTML="<p class='display-4 p-5 border border-dark rounded'>Energy</p>";
    }
    else if(name =="debt"){
        document.getElementById("debtCharity").innerHTML="<p class='display-4 p-5 border border-dark rounded'>Debt</p>";
    }
    else{
        document.getElementById("generalCharity").innerHTML="<p class='display-4 p-5 border border-dark rounded'>General</p>";
    }
}

//event listeners for charities
document.getElementById("housingCharity").addEventListener("mouseover", function(){ flipWording('housing'); });
document.getElementById("housingCharity").addEventListener("mouseout", function(){ flipWordingBack('housing'); });
document.getElementById("foodCharity").addEventListener("mouseover", function(){ flipWording('food'); });
document.getElementById("foodCharity").addEventListener("mouseout", function(){ flipWordingBack('food'); });
document.getElementById("energyCharity").addEventListener("mouseover", function(){ flipWording('energy'); });
document.getElementById("energyCharity").addEventListener("mouseout", function(){ flipWordingBack('energy'); });
document.getElementById("debtCharity").addEventListener("mouseover", function(){ flipWording('debt'); });
document.getElementById("debtCharity").addEventListener("mouseout", function(){ flipWordingBack('debt'); });
document.getElementById("generalCharity").addEventListener("mouseover", function(){ flipWording('other'); });
document.getElementById("generalCharity").addEventListener("mouseout", function(){ flipWordingBack('other'); });

//quiz functions

function answerQuestion(question,answer,now,next){
    if(answer =='stronglyAgree'){
        scoreOf5.push(question);
    }
    else if(answer == 'agree'){
        scoreOf4.push(question);
    }
    else if(answer == 'neutral'){
        scoreOf3.push(question);
    }
    else if(answer == 'disagree'){
        scoreOf2.push(question);
    }
    else{
        scoreOf1.push(question);
    }
    document.getElementById(now).style.display = 'none';
    document.getElementById(next).style.display = 'inline';
    
}

function quizResults(){
    if(scoreOf5.length >=1){
        counter =0;
        while (counter <scoreOf5.length){
            if(scoreOf5[counter] == 'handsOn'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult1').style.display='block';
                counter++;
            }
            else if(scoreOf5[counter] == 'observe'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult2').style.display='block';
                counter++;
            }
            else if(scoreOf5[counter] == 'creative'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult3').style.display='block';
                counter++;
            }
            else if(scoreOf5[counter] == 'teach'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult4').style.display='block';
                counter++;
            }
            else if(scoreOf5[counter] == 'manage'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult5').style.display='block';
                counter++;
            }
            else{
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult6').style.display='block';
                counter++;
            }
        }
        document.getElementById("retake").style.display='inline';
    }
    else if(scoreOf4.length >=1){
        counter =0;
        while (counter <scoreOf4.length){
            if(scoreOf5[counter] == 'handsOn'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult1').style.display='block';
                counter++;
            }
            else if(scoreOf4[counter] == 'observe'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult2').style.display='block';
                counter++;
            }
            else if(scoreOf4[counter] == 'creative'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult3').style.display='block';
                counter++;
            }
            else if(scoreOf4[counter] == 'teach'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult4').style.display='block';
                counter++;
            }
            else if(scoreOf4[counter] == 'manage'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult5').style.display='block';
                counter++;
            }
            else{
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult6').style.display='block';
                counter++;
            }
        }
        document.getElementById("retake").style.display='inline';
    }
    else if(scoreOf3.length >=1){
        counter =0;
        while (counter <scoreOf3.length){
            if(scoreOf5[counter] == 'handsOn'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult1').style.display='block';
                counter++;
            }
            else if(scoreOf3[counter] == 'observe'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult2').style.display='block';
                counter++;
            }
            else if(scoreOf3[counter] == 'creative'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult3').style.display='block';
                counter++;
            }
            else if(scoreOf3[counter] == 'teach'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult4').style.display='block';
                counter++;
            }
            else if(scoreOf3[counter] == 'manage'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult5').style.display='block';
                counter++;
            }
            else{
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult6').style.display='block';
                counter++;
            }
        }
        document.getElementById("retake").style.display='inline';
    }
    else if(scoreOf2.length >=1){
        counter =0;
        while (counter <scoreOf2.length){
            if(scoreOf5[counter] == 'handsOn'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult1').style.display='block';
                counter++;
            }
            else if(scoreOf2[counter] == 'observe'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult2').style.display='block';
                counter++;
            }
            else if(scoreOf2[counter] == 'creative'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult3').style.display='block';
                counter++;
            }
            else if(scoreOf2[counter] == 'teach'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult4').style.display='block';
                counter++;
            }
            else if(scoreOf2[counter] == 'manage'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult5').style.display='block';
                counter++;
            }
            else{
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult6').style.display='block';
                counter++;
            }
        }
        document.getElementById("retake").style.display='inline';
    }
    else{
        counter =0;
        while (counter <scoreOf1.length){
            if(scoreOf5[counter] == 'handsOn'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult1').style.display='block';
                counter++;
            }
            else if(scoreOf1[counter] == 'observe'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult2').style.display='block';
                counter++;
            }
            else if(scoreOf1[counter] == 'creative'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult3').style.display='block';
                counter++;
            }
            else if(scoreOf1[counter] == 'teach'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult4').style.display='block';
                counter++;
            }
            else if(scoreOf1[counter] == 'manage'){
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult5').style.display='block';
                counter++;
            }
            else{
                document.getElementById('seeResult').style.display='none';
                document.getElementById('quizResult6').style.display='block';
                counter++;
            }
        }
        document.getElementById("retake").style.display='inline';
    }
}




