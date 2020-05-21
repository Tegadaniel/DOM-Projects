//checking for submit
document.getElementById('bmi-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';

    //show Loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});
//clearing the form
// const clearForm = document.getElementById('clear-btn');

// clearForm.addEventListener('click', clearAll);

// function clearAll(){
//   calculateResults.innerHTML = '';
// }
//creating resuts



function clearAll(){
  document.getElementById('bmi-form').reset();
  }

function calculateResults(){
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const result = document.getElementById('bmi-result');


  const clearForm = document.getElementById('clear-btn');

  clearForm.addEventListener('click', clearAll);


  const calWeight =(weight.value);
  const calHeight = (height.value) / 100;


  // Compute BMI
  const x = Math.pow(calHeight, 2);
  const BMI = calWeight/x;

  if(isFinite(BMI)){
    result.value = BMI.toFixed(2);
      //show results
      document.getElementById('results').style.display = 'block';

      //Hide Loader
      document.getElementById('loading').style.display = 'none';
  }else{
    displayError('Please enter numbers');
  }


}

//create displayError
function displayError(error){
     //Hide results
     document.getElementById('results').style.display = 'none';

     //Hide Loader
     document.getElementById('loading').style.display = 'none';

  //creating Div
  const errorDiv = document.createElement('div'); 

  //Get Parent element and where you want your error to show
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Adding class to your Div
  errorDiv.className = 'alert alert-danger';

  //Create textnode and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Inserting above the heading
  card.insertBefore(errorDiv, heading);

  // Clear your error
  setTimeout(clearError, 2000)
}

function clearError(){
  document.querySelector('.alert').remove();
}
