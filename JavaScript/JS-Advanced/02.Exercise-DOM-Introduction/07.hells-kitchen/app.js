function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
  
   function onClick() {

      let textArr = JSON.parse(document.querySelector('#inputs textarea').value);

      let restaurantObj = {};
      
      let totalSalary = 0;
      let bestAvgSalary = 0;
      let bestName = '';
     

      for (const line of textArr) {
         let [restaurantName, args] = line.split(' - ');
      
         let params = args.split(', ');

         if (!restaurantObj[restaurantName]) {
            restaurantObj[restaurantName] = {};
         }
         for (let info of params) {
            let [worker, salary] = info.split(' ');
            restaurantObj[restaurantName][worker] = Number(salary);
         }
       

      }
      let entries = Object.entries(restaurantObj);
      
      for (let line of entries) {
         let resName = line[0];
         let values = Object.values(line[1]);    
         let avgSalary = 0;
         
         for (const salary of values) {
            totalSalary += salary;
            
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary >= bestAvgSalary){
            bestAvgSalary = avgSalary;
            bestName = resName;
            totalSalary = 0;

         }
         
      
      }

      let sorted = Object.entries(restaurantObj[bestName])
      .sort((a,b) => b[1] - a[1]);
      let output = '';
      document.querySelector('#bestRestaurant p').textContent =`Name: ${bestName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${sorted[0][1].toFixed(2)}`
      sorted.forEach(worker =>{
         output += `Name: ${worker[0]} With Salary: ${worker[1]} `
      })
      
      document.querySelector('#workers p').textContent = output;
      
   }

  
}