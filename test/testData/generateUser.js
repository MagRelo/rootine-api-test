const faker = require('faker');

export function generateUser({
  partnerCode,
  partnerEmail,
  includeDNA = true,
  includeBlood = true,
  includeQuestionnaire = true,
}) {
  let userObject = {
    partner_code: partnerCode,
    email: partnerEmail,
  };

  if (includeDNA) {
    userObject.dna_data = { rs1333049: 'A/T', rs1800562: 'A/T' };
  }

  if (includeBlood) {
    userObject.blood_data = {
      Calcium: 15.5,
      Copper: 32.15,
      Folicacid: 1,
      Iron: 27.5,
      Magnesium: 1,
      Manganese: 3,
      Q10: 300,
      Selenium: 40,
      VitA: 30,
      VitB12: 70,
      VitB2: 3,
      VitB6: 3,
      VitC: 1,
      VitD3: 11,
      VitE: 3,
      Zink: 36,
    };
  }

  if (includeQuestionnaire) {
    userObject.questionnaire = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthday: '1987-12-25',
      height: 175,
      weight: 80,
      Nutrition_Type: 'normal',
      Dairy_consumption: 60,
      Fruit_veg_ingestion: 60,
      Gluten_Free: 10,
      Fish_Consumption: 10,
      Smoking: 10,
      Gender: 'male',
      Pregnant_or_Breastfeeding: 10,
      Aunt_Flow_Health: 45,
      Energy_level: 40,
      Stress_level: 40,
      Mood_Level: 60,
      Free_time_exercise: 40,
      Exercise_Amount_at_work: 10,
      Sun_Exposure: 40,
      marital_status: 30,
      parental_status: 30,
    };
  }

  return userObject;
}

// export const readmeExample = {
//   partner_code: 'AB1234',
//   email: "Please enter partner's valid email address",
//   questionnaire: {
//     email: "Please enter user's valid email address",
//     firstname: 'Alex',
//     lastname: 'Jones',
//     birthday: '1987-12-25',
//     height: 175,
//     weight: 80,
//     Nutrition_Type: 'normal',
//     Dairy_consumption: 60,
//     Fruit_veg_ingestion: 60,
//     Gluten_Free: 10,
//     Fish_Consumption: 10,
//     Smoking: 10,
//     Gender: 'male',
//     Pregnant_or_Breastfeeding: 10,
//     Aunt_Flow_Health: 45,
//     Energy_level: 40,
//     Stress_level: 40,
//     Mood_Level: 60,
//     Free_time_exercise: 40,
//     Exercise_Amount_at_work: 10,
//     Sun_Exposure: 40,
//     marital_status: 30,
//     parental_status: 30,
//     password: 'testPassword!Q@W#E$R',
//   },
//   dna_data: { rs1333049: 'A/T', rs1800562: 'A/T' },
//   blood_data: {
//     Calcium: 15.5,
//     Copper: 32.15,
//     Folicacid: 1,
//     Iron: 27.5,
//     Magnesium: 1,
//     Manganese: 3,
//     Q10: 300,
//     Selenium: 40,
//     VitA: 30,
//     VitB12: 70,
//     VitB2: 3,
//     VitB6: 3,
//     VitC: 1,
//     VitD3: 11,
//     VitE: 3,
//     Zink: 36,
//   },
// };
