class AppController {
    constructor() {
      this.insurances = [];
  
      const form = document.getElementById('newInsuranceForm');
      form.addEventListener('submit', this.addInsurance.bind(this));
    }
  
    addInsurance(event) {
      event.preventDefault();
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = parseInt(document.getElementById('age').value);
      const phone = document.getElementById('phone').value;
  
      const insurance = new Insurance(firstName, lastName, age, phone);
      this.insurances.push(insurance);
  
      this.renderInsuranceList();
      this.resetForm();
    }
  
    renderInsuranceList() {
      const list = document.getElementById('insuranceList');
      list.innerHTML = '';
  
      this.insurances.forEach((insurance) => {
        const listItem = document.createElement('li');
        listItem.textContent = insurance.toString();
        list.appendChild(listItem);
      });
    }
  
    resetForm() {
      const form = document.getElementById('newInsuranceForm');
      form.reset();
    }
  }
  
  const appController = new AppController();
  