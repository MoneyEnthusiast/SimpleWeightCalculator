
var weightCount = {
    45: 0,
    35: 0,
    25: 0,
    10: 0,
    5: 0,
    2.5: 0
}

document.addEventListener("DOMContentLoaded", () => {


    let defaultWeights = [45, 35, 25, 10, 5, 2.5];


    function createWeightWrapper(weight) {
        let weightWrapper = document.createElement("div");
        weightWrapper.id = weight;
        let weightAmount = document.createElement("div");
        weightWrapper.appendChild(weightAmount);
        weightAmount.innerHTML = weight;
        let countWrapper = document.createElement("div");

        weightWrapper.appendChild(createMinusButton(weight));

        weightWrapper.appendChild(countWrapper);
        let count = document.createElement("div");
        count.innerHTML = weightCount[weight];
        count.id = `${weight}-count`;
        countWrapper.appendChild(count);

        weightWrapper.style.display = "flex";
        weightWrapper.style.width = "75px";
        weightWrapper.style.justifyContent = "space-between";
        weightWrapper.appendChild(createPlusButton(weight));

        return weightWrapper;
    }

    let totalWeight = 45;

    function createPlusButton(weight) {
        let b = document.createElement("button");
        b.innerHTML = "+";
        b.id = `${weight}-button`;
        b.addEventListener("click", () => {
            weightCount[weight] += 1;
            let c = document.getElementById(`${weight}-count`);
            let cNum = parseInt(c.innerHTML);
            cNum += 1;
            c.innerHTML = cNum;
            calculateTotalWeight();
        });
        return b;
    }

    function createMinusButton(weight) {
        let b = document.createElement("button");
        b.innerHTML = "-";
        b.id = `${weight}-button`;
        b.addEventListener("click", () => {
            let c = document.getElementById(`${weight}-count`);
            let cNum = parseInt(c.innerHTML);
            if (cNum > 0) {
                cNum -= 1;
                c.innerHTML = cNum;
                weightCount[weight] -= 1;
            }
            calculateTotalWeight();
        });
        return b;
    }
    

    let main = document.getElementById("main");
    for (let i = 0; i < defaultWeights.length; i++) {
        main.appendChild(createWeightWrapper(defaultWeights[i]));
    }

    let total = document.createElement("h1");
    total.innerHTML = "Total: 45";
    main.appendChild(total);


    function calculateTotalWeight() {
        totalWeight = 45;
        for (weight in weightCount) {
            if (weight == "2.5") {
                totalWeight += (2.5 * 2 * weightCount[weight]);
            } else {
                totalWeight += (parseInt(weight) * 2 * weightCount[weight]);
            }
        }

        total.innerHTML = `Total: ${totalWeight}`;
    }



})