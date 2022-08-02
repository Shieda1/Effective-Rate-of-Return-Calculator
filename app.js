// https://calculator.swiftutors.com/effective-rate-of-return-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const effectiveRateofReturnRadio = document.getElementById('effectiveRateofReturnRadio');
const annualInterestRateRadio = document.getElementById('annualInterestRateRadio');
const numberofCompoundingPeriodsRadio = document.getElementById('numberofCompoundingPeriodsRadio');

let effectiveRateofReturn;
let annualInterestRate = v1;
let numberofCompoundingPeriods = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

effectiveRateofReturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Interest Rate (%)';
  variable2.textContent = 'Number of Compounding Periods';
  annualInterestRate = v1;
  numberofCompoundingPeriods = v2;
  result.textContent = '';
});

annualInterestRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective Rate of Return';
  variable2.textContent = 'Number of Compounding Periods';
  effectiveRateofReturn = v1;
  numberofCompoundingPeriods = v2;
  result.textContent = '';
});

numberofCompoundingPeriodsRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective Rate of Return';
  variable2.textContent = 'Annual Interest Rate (%)';
  effectiveRateofReturn = v1;
  annualInterestRate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(effectiveRateofReturnRadio.checked)
    result.textContent = `Effective Rate of Return = ${computeEffectiveRateofReturn().toFixed(2)}`;

  else if(annualInterestRateRadio.checked)
    result.textContent = `Annual Interest Rate = ${computeAnnualInterestRate().toFixed(2)} %`;

  else if(numberofCompoundingPeriodsRadio.checked)
    result.textContent = `Number of Compounding Periods = ${computeNumberofCompoundingPeriods().toFixed(2)}`;
})

// calculation

function computeEffectiveRateofReturn() {
  return Math.pow(1 + ((Number(annualInterestRate.value)/100) / Number(numberofCompoundingPeriods.value)), Number(numberofCompoundingPeriods.value)) - 1;
}

function computeAnnualInterestRate() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeNumberofCompoundingPeriods() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}