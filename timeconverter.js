let timeContainer = document.getElementById("timeContainer");
timeContainer.style.backgroundImage =  "url('https://assets.ccbp.in/frontend/dynamic-webapps/time-converter-bg.png')";
timeContainer.style.height = "vh-100";
timeContainer.classList.add("pt-5","vh-100")

let responsiveContainer = document.createElement("div");
responsiveContainer.classList.add("container");
timeContainer.appendChild(responsiveContainer);

let rowContainer = document.createElement("div");
rowContainer.classList.add("row");
responsiveContainer.appendChild(rowContainer);

let colContainer = document.createElement("div");
colContainer.classList.add("col-12");
rowContainer.appendChild(colContainer);

let headingEl = document.createElement("h1");
headingEl.textContent = "Time Converter";
headingEl.style.color = "#ffffff";
headingEl.style.fontSize = "42px";
headingEl.style.fontFamily = "Open Sans";
headingEl.style.fontWeight = "600";
colContainer.appendChild(headingEl);

let timePara = document.createElement("p");
timePara.textContent = "Enter hours and minutes Values to convert into seconds";
timePara.style.color = "#f5f7fa";
timePara.style.fontSize = "17px";
timePara.style.fontWeight = "600";
colContainer.appendChild(timePara);

let lableHoursContainer1 = document.createElement("div");
colContainer.appendChild(lableHoursContainer1);

let labelHourEl = document.createElement("label");
labelHourEl.textContent = "Hours*";
labelHourEl.for = "inputHour";
labelHourEl.style.color = "#f5f7fa";
labelHourEl.style.fontFamily = "Roboto";
labelHourEl.fontWeight = "600";
labelHourEl.fontSize = "13px";
lableHoursContainer1.appendChild(labelHourEl);


let hourInput = document.createElement("input");
hourInput.classList.add("form-control")
hourInput.id = "inputHour";
hourInput.type = "text";
hourInput.placeholder = "Enter a number";
colContainer.appendChild(hourInput);

let lableMinutesContainer1 = document.createElement("div");
lableMinutesContainer1.classList.add("mt-3")
colContainer.appendChild(lableMinutesContainer1);

let labelMinutesEl = document.createElement("label");
labelMinutesEl.textContent = "Minutes*";
labelMinutesEl.for = "inputMinutes";
labelMinutesEl.style.color = "#f5f7fa";
labelMinutesEl.style.fontFamily = "Roboto";
labelMinutesEl.fontWeight = "600";
labelMinutesEl.fontSize = "13px";
lableMinutesContainer1.appendChild(labelMinutesEl);


let minutesInput = document.createElement("input");
minutesInput.classList.add("form-control","mb-3")
minutesInput.id = "inputMinutes";
minutesInput.type = "text";
minutesInput.placeholder = "Enter a number";
colContainer.appendChild(minutesInput);

let convertBtn = document.createElement("button");
convertBtn.textContent = "Convert to Seconds";
convertBtn.style.backgroundColor =  "#f5f7fa";
convertBtn.style.padding = "7px";
convertBtn.style.fontSize = "13px";
convertBtn.style.fontWeight = "500";
convertBtn.style.borderWidth = "0px";
convertBtn.style.borderRadius = "3px";
colContainer.appendChild(convertBtn);

let errorPara = document.createElement("p");
errorPara.classList.add("mt-2","mb-5");
errorPara.style.color =  "#f5f7fa";
errorPara.style.fontSize = "10px";
colContainer.appendChild(errorPara);

let resultPara = document.createElement("p");
colContainer.appendChild(resultPara);

convertBtn.onclick = ()=>{
    if ((minutesInput.value !== "") && (hourInput.value !== "")){
        errorPara.textContent = "";
        let hoursInSeconds = parseInt(hourInput.value)*3600;
        let minutesInSeconds = parseInt(minutesInput.value)*60;
        resultPara.textContent = hoursInSeconds + minutesInSeconds + "s";
        resultPara.style.backgroundColor = "transparent";
        resultPara.style.textAlign = "center";
        resultPara.style.border = "1px solid #ffffff";
        resultPara.style.color = "#ffffff";
        resultPara.style.fontSize = "24px";
        resultPara.style.fontWeight = "500";
        resultPara.style.borderRadius = "10px";
        resultPara.style.maxWidth = "300px";
        resultPara.style.overflow = "auto";
        resultPara.style.height = "50px";
        resultPara.style.paddingTop = "5px"
        hourInput.value = "";
        minutesInput.value = "";
    }else if (hourInput.value === ""){
        resultPara.classList.add("d-none")
        errorPara.textContent = "please enter a valid number of hours";
    }else{
        resultPara.classList.add("d-none")
        errorPara.textContent = "please enter a valid number of minutes";
    }
}
