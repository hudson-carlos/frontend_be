import { erro, employees } from '../types';

const url: string = "http://localhost:3000/employees"

export default async function getApi():Promise<employees[] | erro[]>{
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return [{ erro: "erro na requisição"}]
  }
}
