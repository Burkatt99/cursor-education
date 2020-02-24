const ukraine = { 
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476,
};
const latvia = { 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 };
  const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 };

    function getMyTaxes(salary){
      const sumaWithTax = this.tax * salary;
      return sumaWithTax;
    }
     document.writeln(`<p>Result function #1:</p>`);
    document.writeln(`<p>In your country you need to pay tax for your salary: ${getMyTaxes.call(ukraine,12000)}.</p>`);

    function getMiddleTaxes(country){
      const middleTax = this.tax * this.middleSalary;
      return middleTax;
    }
    document.writeln(`<p>Result function #2:</p>`);
    document.writeln(`<p>In your country tax for middle salary: ${getMiddleTaxes.call(latvia)}.</p>`);

    function getTotalTaxes(country){
      const allTax = this.tax * this.middleSalary * this.vacancies;
      return allTax;
    }
    document.writeln(`<p>Result function #3:</p>`);
    document.writeln(`<p>In your country tax for middle salary: ${getTotalTaxes.call(litva)}.</p>`);
    function getMySalary(country){
      const mySalary = {};
      const min = 1500;
      const max = 2000;
      let salary = Math.floor(Math.random() * (max - min + 1) + min);
      const taxes = Math.floor(getMyTaxes.call(this,salary));
      const profit = Math.floor(salary - taxes);
      return{
        salary,
        taxes,
        profit
      }
    }
    document.writeln(`<p>Result function #4:</p>`);
     document.writeln(`<p>In console!</p>`);
    setInterval(() => console.log(getMySalary.call(ukraine)), 10000);