function calculateDowry() {
  const education = parseFloat(document.getElementById('education').value);
  const wealth = parseFloat(document.getElementById('wealth').value);
  const caste = parseInt(document.getElementById('caste').value);

  const ageRadios = document.querySelectorAll('input[name="age"]');
  let age = 1;
  for (let radio of ageRadios) {
    if (radio.checked) {
      age = parseFloat(radio.value);
      break;
    }
  }

  const skills = document.querySelectorAll('.skills:checked');
  if (skills.length === 0) {
    document.getElementById('result').style.color = 'red';
    document.getElementById('result').textContent = 'Please select at least one skill.';
    return;
  }

  let skillBonus = 0;
  skills.forEach(skill => {
    skillBonus += parseInt(skill.value);
  });

  const reputations = document.querySelectorAll('.reputation:checked');
  let reputationFactor = 1;
  reputations.forEach(rep => {
    reputationFactor *= parseFloat(rep.value);
  });

  const repFix = document.querySelectorAll('.reputationFix:checked');
  let reputationPenalty = 0;
  repFix.forEach(el => {
    reputationPenalty += parseInt(el.value);
  });

  let basePrice = 100;
  let finalPrice = basePrice * education * wealth * age;
  finalPrice = finalPrice * reputationFactor + caste + skillBonus + reputationPenalty;

  document.getElementById('result').style.color = '#2e7d32';
  document.getElementById('result').textContent = `Final calculated price: $${finalPrice.toFixed(2)}`;
}