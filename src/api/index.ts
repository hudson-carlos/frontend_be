import { erro, employees } from '../types';

const url: string = "http://localhost:3000/employees"

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = (date.getDate() + 1).toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatPhoneNumber(phoneNumber: string): string {
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const firstPart = phoneNumber.slice(4, 9);
  const secondPart = phoneNumber.slice(9, 13);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}

function formatData(data: employees[]):employees[] {
  data.forEach(({phone, admission_date}, index) => {
    data[index].phone = formatPhoneNumber(phone);
    data[index].admission_date = formatDate(admission_date);
  });

  return data
}

export default async function getApi():Promise<employees[] | erro[]> {
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return formatData(data);
    
  } catch (error) {
    return [{ erro: "erro na requisição"}]
  }
}
