import { FormControl } from "@angular/forms";

export const nombreApellidoPattern = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

export const noPuedeSerShiroe = (control: FormControl) => {
  const valor: string = control.value?.trim().toLowerCase();
  if (valor === 'shiroe') {
    return {
      noShiroe: true,
    };
  }
  return null;
}
