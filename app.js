window.calculateBMI = function calculateBMI() {
    let heightInputFeet = document.querySelector('#heightInputFeet').value;
    let heightInputInch = document.querySelector('#heightInputInch').value;

    let weightInputKg = document.querySelector('#weightInputKg').value;

    heightInputFeet = parseInt(heightInputFeet);
    heightInputInch = parseInt(heightInputInch);

    heightInputInch += heightInputFeet * 12;

    let heightInMeter = (heightInputInch * 2.54) / 100;

    let heightInMeterSq = heightInMeter * heightInMeter;

    let bodyMassIndex = weightInputKg / heightInMeterSq;

    let idealWeight = 22 * heightInMeterSq;

    let weightToLoss = (weightInputKg - idealWeight).toFixed(2);
    let weightToGain = (idealWeight - weightInputKg).toFixed(2);

    let suggestion = 'You are ';

    if (bodyMassIndex > 30) {
        suggestion += `Obses. you need to loss ${weightToLoss}kg`;

    } else if (bodyMassIndex > 25) {
        suggestion += `Overweight. you need to loss ${weightToLoss}kg`;

    } else if (bodyMassIndex > 18.5) {

        if (bodyMassIndex > 22) {
            suggestion += `Normal. but optionally You  may loss ${weightToLoss} kg to become ideally fit`;
        } else if (parseInt(bodyMassIndex) === 22) {
            suggestion += `Perfectly fit`;
        } else {
            suggestion += `Normal. You are healthy but optionally you may gain ${weightToGain}kg to become ideally fit`;
        }
    } else {
        suggestion += `Underweight. you are supposed to gain ${weightToGain}kg to become normal`;
    }


    document.querySelector('#title').innerHTML = `Ideal weight: ${idealWeight.toFixed(2)}kg`;
    document.querySelector('#suggestion').innerHTML = suggestion;

};

